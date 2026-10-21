# Flipped Out Creative

Approved static website for Wayne Cruickshank / Flipped Out Creative, Kettering.

## Vercel

Import this repository into a separate Vercel project named `flipped-out-creative`. Use Framework Preset **Other**, Root Directory **./**, Build Command **node build.mjs**, and Output Directory **public**. Dependency installation is skipped. The included `vercel.json` sets these values. No environment variables or database services are required.

The build command reassembles the exhibition video from transport-sized source pieces in `media/exhibition-loop/` and verifies its SHA-256 checksum. It preserves the exact original web video, including audio. All other website files are served directly from `public/`.

First check the generated Vercel URL. Domain attachment and DNS changes are separate steps after the deployment works. Preserve existing email DNS records when changing website records.

## Local preview and editing

Run `node build.mjs` once, then open `public/index.html`. Edit the HTML pages in `public/`; shared styles and navigation are in `public/assets/site.css` and `public/assets/site.js`. No package installation is needed.

The final modern logo artwork and favicon can be added before the domain switch. Existing Flight Deck and CakeRadar projects do not need changes.
