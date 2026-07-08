import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";

const MODEL = "gpt-4o-mini-tts";
const VOICE = "onyx";
const SPEED = 1.4;

function parseArgs(argv) {
  const args = { force: false };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--force") {
      args.force = true;
      continue;
    }

    if (arg === "--file" || arg === "--lang") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}`);
      }
      args[arg.slice(2)] = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!args.file) throw new Error("Missing required argument: --file");
  if (!args.lang) throw new Error("Missing required argument: --lang");

  return args;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function rowsFromCsv(text) {
  const rows = parseCsv(text).filter((row) => row.some((field) => field.trim()));
  if (rows.length === 0) return [];

  const headers = rows[0].map((header) => header.trim());
  const idIndex = headers.indexOf("id");
  const speechTextIndex = headers.indexOf("speechText");

  if (idIndex === -1) throw new Error("CSV is missing required column: id");
  if (speechTextIndex === -1) throw new Error("CSV is missing required column: speechText");

  return rows.slice(1).map((row, index) => ({
    line: index + 2,
    id: (row[idIndex] || "").trim(),
    speechText: row[speechTextIndex] || "",
  }));
}

function protectedTerms(text) {
  return [...text.matchAll(/\[EN:([^\]]+)\]/g)].map((match) => match[1].trim()).filter(Boolean);
}

function spokenText(text) {
  return text.replace(/\[EN:([^\]]+)\]/g, "$1").trim();
}

function instructionsFor(lang, terms) {
  const termText = terms.length ? terms.join(", ") : "none";

  return [
    `Generate FPV flight-command audio for language ${lang}.`,
    "The CSV source uses [EN:...] markup for protected FPV terms.",
    "Do not speak the markup characters, the letters EN, brackets, or colons.",
    `Protected English terms in this command: ${termText}.`,
    "Pronounce protected terms exactly in English, including acronyms.",
    `Pronounce all surrounding words naturally in ${lang}.`,
    "Use a calm, confident male military instructor style.",
    "Keep the delivery short, authoritative, emotionless, and not conversational.",
  ].join(" ");
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const csvPath = path.resolve(args.file);
  const outputDir = path.resolve("audio", args.lang);
  const csvText = await fs.readFile(csvPath, "utf8");
  const rows = rowsFromCsv(csvText);

  let generated = 0;
  let skipped = 0;
  let errors = 0;
  const jobs = [];

  for (const row of rows) {
    if (!row.id) {
      console.error(`Line ${row.line}: missing id`);
      errors += 1;
      continue;
    }

    if (!/^[A-Za-z0-9_-]+$/.test(row.id)) {
      console.error(`Line ${row.line}: invalid id "${row.id}"`);
      errors += 1;
      continue;
    }

    const text = spokenText(row.speechText);
    if (!text) {
      skipped += 1;
      continue;
    }

    const outputPath = path.join(outputDir, `${row.id}.mp3`);
    if (!args.force && await exists(outputPath)) {
      skipped += 1;
      continue;
    }

    jobs.push({
      id: row.id,
      outputPath,
      text,
      terms: protectedTerms(row.speechText),
    });
  }

  if (jobs.length > 0 && !process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is not set.");
    errors += jobs.length;
    console.log(`Generated: ${generated}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Errors: ${errors}`);
    process.exitCode = 1;
    return;
  }

  await fs.mkdir(outputDir, { recursive: true });
  const openai = jobs.length ? new OpenAI() : null;

  for (const job of jobs) {
    try {
      const mp3 = await openai.audio.speech.create({
        model: MODEL,
        voice: VOICE,
        input: job.text,
        instructions: instructionsFor(args.lang, job.terms),
        response_format: "mp3",
        speed: SPEED,
      });

      await fs.writeFile(job.outputPath, Buffer.from(await mp3.arrayBuffer()));
      generated += 1;
      console.log(`Generated ${job.outputPath}`);
    } catch (error) {
      errors += 1;
      console.error(`Error generating ${job.id}: ${error.message}`);
    }
  }

  console.log(`Generated: ${generated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);

  if (errors > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  console.log("Generated: 0");
  console.log("Skipped: 0");
  console.log("Errors: 1");
  process.exitCode = 1;
});
