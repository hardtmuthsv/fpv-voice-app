import fs from "node:fs/promises";
import path from "node:path";

const AUDIO_DIRS = [
  "audio/uk-UA",
  "audio/en-US",
  "audio/es-ES",
];

const ICON_DIR = "icons";
const BASE_ASSETS = [
  "./",
  "index.html",
  "commands.js",
  "manifest.webmanifest",
  "pwa-assets.js",
];

async function listFiles(dir, predicate) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.posix.join(dir, entry.name))
    .filter(predicate)
    .sort();
}

async function main() {
  const iconAssets = await listFiles(ICON_DIR, (file) => file.endsWith(".png"));
  const audioAssets = [];

  for (const dir of AUDIO_DIRS) {
    audioAssets.push(...await listFiles(dir, (file) => file.endsWith(".mp3")));
  }

  const assets = [
    ...BASE_ASSETS,
    ...iconAssets,
    ...audioAssets,
  ];

  const content = `self.PWA_ASSETS = ${JSON.stringify(assets, null, 2)};\n`;
  await fs.writeFile("pwa-assets.js", content);

  console.log(`Generated pwa-assets.js with ${assets.length} assets`);
  console.log(`Audio files: ${audioAssets.length}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
