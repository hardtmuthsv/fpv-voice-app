import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";

const outputPath = path.resolve("audio/uk-UA/test.mp3");
const openai = new OpenAI();

const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "onyx",
  input: "Yaw ліворуч сильно.",
  instructions:
    "Speak as a clear male FPV instructor. Use a short, firm command tone. Pronounce the English FPV term Yaw exactly in English and the Ukrainian words naturally.",
  response_format: "mp3",
});

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, Buffer.from(await mp3.arrayBuffer()));

console.log(`Saved ${outputPath}`);
