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

## Conference preview — no authentication

Visit `/conference` to test:
- Select sessions from the agenda.
- View associated presenter biography placeholders.
- Navigate sample presentation slides with Previous/Next.
- Play conference audio **after** a real stream is configured.

### Live audio on Vercel

In Vercel Project Settings → Environment Variables, add:

```text
NEXT_PUBLIC_CONFERENCE_AUDIO_URL=https://your-audio-provider.example/live.mp3
```

Redeploy the preview after adding the variable. The URL **must be public and browser-playable over HTTPS**, ideally a continuously served MP3 or AAC stream. HLS `.m3u8` playback depends on browser support and is not implemented universally in this starter. Vercel serves the web player; a dedicated streaming service or broadcast server supplies the live audio. The player does not originate a broadcast.

The stream URL is exposed in the browser. **Never place a private token, password, or broadcaster secret in it.** For private streams, introduce a server-side token issuing integration.

### Content and synchronization

Session and speaker demo records live in `lib/conference.ts`. Replace them with the official confirmed programme. Slides are rendered as a local illustrative deck and controlled independently on each device; they do **not** yet synchronize to a presenter. Production synchronization will require a shared live session state (e.g., Supabase Realtime) and an authorized presenter console.

No authentication, registration, check-in, quiz, or real conference audio ingest has been built yet.
