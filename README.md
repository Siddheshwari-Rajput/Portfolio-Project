# Siddheshwari Rajput: Portfolio

React + Vite + plain CSS. No backend, no API keys, no secrets.

## Run locally

```bash
npm install
npm run dev        # opens at http://localhost:5173
```

Other commands: `npm run build` (creates `dist/`) and `npm run preview` (serves the build).
Requires Node.js 18 or newer.

## Edit your content

Everything lives in **`src/data/content.js`**. No component edits needed.

| What | Where in content.js |
|---|---|
| Name, tagline, email, phone, links | `profile` |
| CodeChef rating (1324) | `codechef` |
| About text | `about` |
| Skills | `skillGroups` |
| Projects (tags, GitHub and demo links) | `projects` |
| Education, activities, certificates | `resume` |
| Closing quote | `vision` |

Anything written as `[like this]` is a placeholder and shows in yellow on the site.
A project link left as `''` shows a dashed "[GitHub link]" label instead of a button.
Colours and fonts: `src/styles/variables.css`.

Files in `public/`: `photo.jpg` (your photo), `Siddheshwari_CV.docx` (download button).
Replace them with new files of the same name, or change the names in `profile`.

## Before you publish

1. Replace `https://YOUR-SITE-URL/` in `index.html` (Open Graph tags) with your real URL.
2. Fill the placeholders in `content.js`: LinkedIn, CodeChef URL, project roles, tech used, links, certificates.
3. Check your resume file shows the right name (see notes).
4. Phone number is public on the site. Remove `phone` from `profile` and its line in `Contact.jsx` if you prefer.

## Deploy

**Netlify:** push to GitHub, then Add new site, Import from Git. Build command `npm run build`, publish directory `dist`.

**GitHub Pages:** `npm run build`, then publish the `dist` folder (for example with the `gh-pages` package or a GitHub Actions Pages workflow). `base: './'` is already set in `vite.config.js`.

## Structure

```
src/
  App.jsx            page order
  data/content.js    all text and links
  components/        Navbar, Hero, About, Skills, Projects, ProjectCard, SosDemo, Resume, Contact, Footer
  hooks/             useReveal (scroll fade), useTypewriter
  styles/            variables, base, layout, components
```

Accessibility: skip link, semantic landmarks, visible focus, keyboard-friendly menu,
and `prefers-reduced-motion` turns off all animation.
