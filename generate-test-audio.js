import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";

const outputDir = path.resolve("audio/uk-UA");
const phrase = "Yaw ліворуч сильно.";
const voice = "onyx";
const speeds = [
  { label: "100", value: 1.0 },
  { label: "110", value: 1.1 },
  { label: "120", value: 1.2 },
  { label: "130", value: 1.3 },
  { label: "140", value: 1.4 },
];

const openai = new OpenAI();

await fs.mkdir(outputDir, { recursive: true });

for (const speed of speeds) {
  const outputPath = path.join(outputDir, `test-speed-${speed.label}.mp3`);
  const mp3 = await openai.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice,
    input: phrase,
    instructions:
      "Speak as a calm, confident male military FPV flight instructor giving an immediate control command. Keep it short, firm, authoritative, and emotionless. Do not sound friendly or conversational. Pronounce the English FPV term Yaw exactly in English and the Ukrainian words naturally.",
    response_format: "mp3",
    speed: speed.value,
  });

  await fs.writeFile(outputPath, Buffer.from(await mp3.arrayBuffer()));
  console.log(`Saved ${outputPath}`);
}
