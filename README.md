# Aamir El Amiri — Portfolio

Personal portfolio of **Aamir El Amiri**, Software Engineer · AI & Automation (Data & AI Engineer at Dashy, Casablanca).

Live: https://istifano.vercel.app

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero, about, education, experience, skills, how I work |
| `/works` | Selected projects (AI & LLM, Data & ML, Backend, Full-Stack) and UI/UX design work |
| `/presentations` | Technical presentations (SOLID, Axios, JavaScript Promises) |
| `/contact` | Contact form (EmailJS) |
| `/Favorites` | Personal interests |

## Stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Router · EmailJS

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

The contact form needs EmailJS keys in a `.env` file (not committed):

```
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```

## Updating content

- Projects: `src/components/works/Projects.jsx` (images in `public/projects/`)
- Experience / education / skills: `src/components/`
- CV: `public/Aamir_El_Amiri_CV_2026.pdf`
