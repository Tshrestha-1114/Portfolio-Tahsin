# Portfolio — Engineer's Studio

A modern, production-quality personal portfolio built with Next.js, Framer Motion, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## All Content Lives in One File

Edit `data/portfolio.ts` to update:
- Personal info, bio, email, links
- Education, skills, experience, projects
- Extracurriculars, artwork

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Nav + Footer
│   ├── page.tsx            # Home (all sections)
│   ├── art/page.tsx        # Art gallery
│   └── globals.css         # Design tokens
├── components/
│   ├── layout/             # Nav, Footer
│   └── sections/           # Hero, About, Experience, Projects, Skills, etc.
├── data/
│   └── portfolio.ts        # ALL editable content here
└── public/
    ├── images/profile.jpg  # Your photo
    ├── art/                # Art images
    └── resume.pdf          # Resume
```

## Replace Your Photo

Drop `profile.jpg` in `public/images/` — done.

## Add a Project

In `data/portfolio.ts`, add to the `projects` array. Fields: slug, title, tagline, category, problem, solution, tech, impact, github, demo, featured.

## Add Artwork

1. Drop image in `public/art/`
2. Add entry to `artworks` array in `data/portfolio.ts`

## Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com
3. Click Deploy

## Design Tokens

Edit CSS variables in `app/globals.css`:
- `--accent` — brand color (default: burnt orange)
- `--ink` — text color
- `--paper` — background
- `--font-display`, `--font-body`, `--font-mono`
