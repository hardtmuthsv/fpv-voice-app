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
