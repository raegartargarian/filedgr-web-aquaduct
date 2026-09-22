# Luxury Asset Fractional Ownership Template

This is the **Luxury Asset Fractional Ownership Template** for Filedgr.

Templates define the structure and behavior of digital twins in Filedgr.

## Development

Vite + React + TypeScript. Shared Filedgr machinery (template API client,
Web3Auth v10 session, zip extraction, formatting) comes from the private
[`@filedgr/web-core`](https://github.com/Filedgr/filedgr-web-core) package.

### Setup

`@filedgr/*` packages are served from GitHub Packages (see `.npmrc`), so
installs need a token with `read:packages` in `NODE_AUTH_TOKEN`:

```bash
gh auth refresh -s read:packages      # once
export NODE_AUTH_TOKEN=$(gh auth token)
npm install
cp .env.example .env                  # then fill in the values
npm run dev
```

Requires Node 20.19+.

### Environment variables

Read at build time by Vite (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `VITE_POLYGON_SCANNER` | Polygon explorer base URL for vault/tx links |
| `VITE_XRP_SCANNER` | XRPL explorer base URL for vault/tx links |
| `VITE_ETHEREUM_SCANNER` | Ethereum explorer base URL for vault/tx links |

The environment itself (template API, Web3Auth network and client id, IPFS
gateways) is selected by `env` in `src/json/ledger.json`
(`DEVELOPMENT` / `TESTNET` / `MAINNET`).

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |
| `npm test` | Unit tests (Vitest) |
| `npm run format` | Prettier |

### CI and deploy

- `.github/workflows/pr-iso-compliance.yml` runs the unit tests on every pull
  request (`iso-compliance` status check); it authenticates the package install
  with the `PACKAGES_GHCR_TOKEN` secret.
- Deploys run on Netlify (`netlify.toml`: `npm run build`, publish `dist`, SPA
  fallback). Set `NODE_AUTH_TOKEN` and the `VITE_*` variables in the Netlify
  site environment.

## Template Types

**Luxury Asset Templates**
* Pre-built React templates for high-value collectible fractional ownership
* Premium UI design with luxury aesthetics
* Interactive 360-degree asset viewing
* Investment-focused fractional purchase system
* Professional documentation viewer with authentication
* Web3Auth integration for secure transactions
* Blockchain verification and transparency

## Using Luxury Asset Fractional Ownership Template:

1. Use https://github.com/Filedgr/filedgr-images-template-checker to create zip file of the template

2. Upload the zip file as template in Filedgr web app (http://app.filedgr.network/)

3. Create streams for your asset documentation (e.g., `certificates`, `appraisals`, `insurance`, `provenance`)

4. **For Asset Documentation:**
   - Upload PDF files containing certificates, appraisal reports, insurance docs, origin documentation
   - Mint as ZIP file for secure blockchain storage
   - Create data attachments on respective streams