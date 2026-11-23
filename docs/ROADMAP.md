# NBA-SBL development roadmap

## Product scope
A dedicated NBA Section on Business Law platform (single organization, many events). Attendees retain a single account across conferences, workshops, webinars and other programmes.

## Phase 0 — Vercel-ready web foundation (this branch)
- Responsive Next.js event catalogue and event detail pages
- Placeholder event data labelled clearly as illustrative
- No authentication, payments, attendance collection, or streaming yet

## Phase 1 — Real event data and accounts
- Supabase project, database migrations and role-based access policies
- Email authentication; persistent profiles; optional LinkedIn URL
- Organizer event/session/speaker CRUD and attendee registration
- Explicit opt-in profile discoverability; consent controls

## Phase 2 — On-site experience
- Signed event registration QR, server-side verification and attendance ledger
- Agenda and session notifications
- File storage and controlled slide publication; synchronized current-slide events
- LiveKit audio rooms with access tokens issued only by server-side handlers

## Phase 3 — Engagement
- Moderated Q&A, quizzes, polls, leaderboards and session feedback
- Attendee directory and certificate eligibility rules

## Platform notes
- Use Vercel for Next.js web previews and admin interfaces.
- Native React Native/Expo app can be added later in apps/mobile and distributed through Expo / app stores, not hosted on Vercel.
- Never commit Supabase service-role keys, LiveKit secrets, or other credentials.
- Attendance controls and streaming authorization must be enforced server-side.
- This repository is a prototype; public NBA-SBL branding and event details require authorization.
