# Green Centre Virtual Campus

A responsive online learning management foundation for Green Centre Institute of Natural Medicine.

## Development status

### Step 1 — Project foundation and website structure

Implemented:

- Next.js App Router, React, TypeScript and Tailwind CSS
- Public and responsive institutional navigation
- Home, About, Programmes, Registration, Contact, Privacy and Terms pages
- Student, lecturer and administrator login layouts
- Shared loading, error and not-found states
- Registration form structure and password validation
- Role and programme TypeScript types
- `.env.example` placeholders only

No Supabase, database, authentication or LiveKit integration is configured in Step 1.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```
