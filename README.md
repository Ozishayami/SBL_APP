# NBA-SBL App

A dedicated single-organization NBA Section on Business Law digital events experience.

## Current state
**Phase 0 prototype:** responsive Next.js event catalogue and individual event details with clearly marked **placeholder** content. This is not yet a functioning registration, live audio, or check-in system.

## Vercel (recommended for testing)
1. Import `Ozishayami/SBL_APP` into Vercel using **Add New → Project**.
2. Select **Next.js** framework preset; set **Root Directory** to repository root (`./`).
3. Test the `feat/vercel-foundation` branch from the Vercel preview deployment or its pull request.
4. Use defaults: `npm install`, `npm run build`. No environment variables are required for this prototype.
5. Merge to `main` only after reviewing the preview.

## Local setup
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Architecture
- `app/`: Next.js App Router pages and CSS
- `lib/events.ts`: temporary strongly typed sample event catalogue
- `docs/ROADMAP.md`: backend and mobile development plan
- `.env.example`: placeholders for future backend settings

The web-first starter allows immediate Vercel preview testing. A dedicated Expo mobile application and Supabase backend will be added in later work packages.

**Disclaimer:** Independent product prototype, not an official NBA-SBL service.
