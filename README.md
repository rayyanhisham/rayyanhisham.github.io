# Rayyan Hisham — Portfolio

This repository contains the portfolio website for Rayyan Hisham. The site showcases projects, contact information, and an embedded resume (PDF) for easy viewing and download.

## Local development

Prerequisites: Node.js and npm (or bun/pnpm). Recommended: use nvm to manage Node versions.

Quick start:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser (Vite default) to view the site.

## Resume

The resume PDF is available at `/Rayyan_Hisham_Resume_auto.pdf` and is embedded on the `/resume` page. Use the View or Download buttons on the resume page.

## Edit content

- Homepage: `src/pages/Index.tsx`
- Resume page: `src/pages/Resume.tsx`
- Projects data: `src/data/projects.ts`
- Navbar: `src/components/Navbar.tsx`

## Deploy

Build for production:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to your preferred static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Contact

If you need help editing the site or want changes, open an issue or edit files and submit a PR.
