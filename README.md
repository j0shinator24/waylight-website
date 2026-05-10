# Waylight Website

Next.js 16 (App Router) + Tailwind v4 + shadcn/ui. Deploys to Vercel or exports as a static site.

## Scripts

```bash
npm run dev           # dev server, localhost:3000
npm run build         # standard production build (server-rendered)
npm run start         # serve production build

npm run export        # STATIC EXPORT — produces out/ folder
npm run serve-export  # serve out/ on localhost:3001
```

## Static export workflow

`npm run export` sets `NEXT_STATIC_EXPORT=1` and runs `next build`. Output goes to `out/` as plain HTML/CSS/JS. Every route becomes its own `index.html` (`out/index.html`, `out/about/index.html`, etc.).

Static export trade-offs (gated by `NEXT_STATIC_EXPORT=1` in `next.config.ts`):
- No `redirects()` or `headers()` — security headers only apply in dev/server mode.
- Images use `unoptimized: true` (no on-demand resizing).
- No Server Actions. The contact form validates client-side only; wire a client-safe email service (Resend, Formspree) when needed.
- `trailingSlash: true` so URLs work on static hosts without server-side rewrites.

To refresh the export after edits: `npm run export` again.

## Preview the export locally

```bash
npm run serve-export   # localhost:3001
```

Or via the `waylight-export` config in `.claude/launch.json` (port 3002).

## Deploy

Standard Vercel deploy from git push — uses `next build`, keeps redirects/headers/Server Actions.
Static hosts (Netlify, GitHub Pages, S3): drop `out/` after `npm run export`.
