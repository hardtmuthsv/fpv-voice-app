import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const FILTER = "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05:stop_periods=1:stop_threshold=-45dB:stop_silence=0.08";

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--dir") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("Missing value for --dir");
      }
      args.dir = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!args.dir) throw new Error("Missing required argument: --dir");
  return args;
}

function run(command, args) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      resolve({ ok: false, error });
    });

    child.on("close", (code) => {
      resolve({ ok: code === 0, code, stderr });
    });
  });
}

async function assertFfmpeg() {
  const result = await run("ffmpeg", ["-version"]);

  if (!result.ok) {
    console.error("ffmpeg is required.");
    console.error("brew install ffmpeg");
    process.exitCode = 1;
    return false;
  }

  return true;
}

async function trimFile(filePath) {
  const dir = path.dirname(filePath);
  const parsed = path.parse(filePath);
  const tempPath = path.join(dir, `${parsed.name}.trim-${process.pid}.mp3`);

  try {
    await fs.rm(tempPath, { force: true });

    const result = await run("ffmpeg", [
      "-y",
      "-i",
      filePath,
      "-af",
      FILTER,
      "-codec:a",
      "libmp3lame",
      "-q:a",
      "2",
      tempPath,
    ]);

    if (!result.ok) {
      await fs.rm(tempPath, { force: true });
      return { ok: false, message: result.stderr.trim() || `ffmpeg exited with code ${result.code}` };
    }

    await fs.rename(tempPath, filePath);
    return { ok: true };
  } catch (error) {
    await fs.rm(tempPath, { force: true });
    return { ok: false, message: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const targetDir = path.resolve(args.dir);

  let processed = 0;
  let trimmed = 0;
  let skipped = 0;
  let errors = 0;

  if (!await assertFfmpeg()) return;

  const entries = await fs.readdir(targetDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.toLowerCase().endsWith(".mp3"))
    .sort();

  for (const name of files) {
    if (name.includes(".trim-")) {
      skipped += 1;
      continue;
    }

    processed += 1;
    const filePath = path.join(targetDir, name);
    const result = await trimFile(filePath);

    if (result.ok) {
      trimmed += 1;
      console.log(`Trimmed ${filePath}`);
    } else {
      errors += 1;
      console.error(`Error trimming ${filePath}: ${result.message}`);
    }
  }

  console.log(`Processed: ${processed}`);
  console.log(`Trimmed: ${trimmed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);

  if (errors > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  console.log("Processed: 0");
  console.log("Trimmed: 0");
  console.log("Skipped: 0");
  console.log("Errors: 1");
  process.exitCode = 1;
});
