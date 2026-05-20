# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build static export to out/
npm run lint     # Run ESLint
```

The site outputs a static export (`output: 'export'` in next.config.js), so there is no `npm run start` for the production build — deploy the `out/` folder directly.

## Architecture

This is a Next.js 14 App Router personal portfolio/CV website with static export. All site content lives in two data files — the pages and components just render that data.

**Data layer (edit these to update site content):**
- `data/profile.ts` — all website content: bio, projects, publications, news, education, experience, skills, links. The `CV` interface extends `Profile` with education/experience/skills fields.
- `data/blogPosts.ts` — blog post metadata (id, title, date, excerpt, tags, readTime).

**Pages:**
- `app/page.tsx` — homepage with hero, research interests, projects, publications, news, and blog preview sections
- `app/cv/page.tsx` — CV page rendering the extended `CV` interface fields
- `app/blog/page.tsx` — blog index listing all posts from `blogPosts`
- `app/blog/[slug]/` — individual blog posts are MDX files (e.g., `app/blog/autograd/page.mdx`) with a shared `layout.tsx`

**Blog post authoring:**
Blog posts are MDX files at `app/blog/<slug>/page.mdx` with a `layout.tsx` sibling for the post shell. The MDX pipeline supports LaTeX math via `remark-math` + `rehype-katex` (KaTeX CSS is imported globally in `app/layout.tsx`). To add a new post: create `app/blog/<slug>/page.mdx`, add its layout, and add metadata to `data/blogPosts.ts`.

**Styling:**
Tailwind CSS with DaisyUI plugin. The `data-theme="light"` attribute is used on specific elements to force DaisyUI's light theme regardless of system preference (see the News section in `app/page.tsx`).

**Static assets:**
- `public/profile.jpg` — profile photo
- `public/cv.pdf` — downloadable CV PDF
- The `links.cv` field in `data/profile.ts` points to `/cv.pdf`
