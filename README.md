# fpv-voice-app

## Ukrainian spoken phrases

Edit only `phrases-uk.csv` when preparing Ukrainian spoken command text.

The `speechUk` column is the exact phrase that should be spoken for that button.

## OpenAI TTS audio generation

Generate MP3 files from a phrase CSV with:

```bash
node generate-audio.js --file phrases-uk-en-markup.csv --lang uk-UA
```

Add `--force` to overwrite existing MP3 files.

## Audio silence trimming

Trim leading and trailing silence from generated MP3 files with:

```bash
node trim-audio.js --dir audio/uk-UA
node trim-audio.js --dir audio/es-ES
node trim-audio.js --dir audio/en-US
```

If `ffmpeg` is missing, install it with:

```bash
brew install ffmpeg
```

## PWA offline cache

Regenerate the PWA asset list after adding or removing audio files:

```bash
node generate-pwa-assets.js
```

Test locally with:

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

Install on iPhone:

```text
Safari -> Share -> Add to Home Screen
```

Install on Android:

```text
Chrome -> menu -> Add to Home Screen / Install app
```
