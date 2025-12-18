# PhD Portfolio Website - Setup Instructions

A clean, modern personal website built with Next.js, TypeScript, and Tailwind CSS for PhD students and research engineers.

## 📋 Directory Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── cv/
│       └── page.tsx       # CV page
├── components/            # React components
│   ├── Navigation.tsx     # Top navigation bar
│   └── CopyEmailButton.tsx # Email copy button
├── data/
│   └── profile.ts         # ⭐ EDIT THIS FILE - All your content
├── public/                # Static assets
│   ├── profile.jpg        # Your profile photo
│   └── cv.pdf            # Your CV PDF
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
└── next.config.js         # Next.js config

```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Your Content

**Edit `data/profile.ts`** - This file contains ALL your website content:

- Basic info (name, title, email, tagline)
- About section
- Research interests
- Projects
- Publications
- News/updates
- Education
- Experience
- Skills
- Social links

Look for placeholders like `[PUT NAME HERE]` and replace them with your information.

### 3. Add Your Assets

Replace these files in the `public/` folder:

- **`public/profile.jpg`** - Your profile photo (square, at least 400x400px)
- **`public/cv.pdf`** - Your CV as a PDF

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### 5. Build for Production

```bash
npm run build
```

This generates a static site in the `out/` folder.

### 6. Deploy

The site is configured for static export. You can deploy to:

- **GitHub Pages**: Push the `out/` folder to your gh-pages branch
- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect your repository
- Any static hosting service

## 📝 How to Update Content

### Adding a New Publication

Edit `data/profile.ts`, find the `publications` array, and add:

```typescript
{
  authors: "Your Name, Co-Author Name",
  title: "Your Paper Title",
  venue: "Conference Name (ACRONYM)",
  year: 2024,
  links: [
    { label: "Paper", url: "https://..." },
    { label: "Code", url: "https://github.com/..." },
    { label: "arXiv", url: "https://arxiv.org/..." },
  ],
}
```

### Adding a New Project

In `data/profile.ts`, add to the `projects` array:

```typescript
{
  title: "Project Name",
  description: "Brief description of what this project does...",
  links: [
    { label: "Paper", url: "#" },
    { label: "Code", url: "#" },
  ],
  tags: ["Machine Learning", "Python"],
}
```

### Adding News Items

In `data/profile.ts`, add to the `news` array:

```typescript
{
  date: "Jan 2025",
  text: "Your news update here",
}
```

### Updating Social Links

In `data/profile.ts`, update the `links` object:

```typescript
links: {
  cv: "/cv.pdf",
  googleScholar: "https://scholar.google.com/citations?user=...",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
}
```

## 🎨 Design Features

- **Mobile-first responsive design**
- **Clean academic aesthetic**
- **Fast loading** with static generation
- **Accessible** with semantic HTML and ARIA labels
- **SEO optimized** with proper meta tags
- **Smooth scrolling** navigation
- **Hover animations** for interactive elements

## 📱 Pages

1. **Homepage** (`/`) - Single-page layout with sections:
   - Hero with profile photo
   - About
   - Research Interests
   - Projects
   - Publications
   - News & Updates
   - Contact

2. **CV Page** (`/cv`) - Full curriculum vitae with:
   - Education
   - Experience
   - Publications
   - Projects
   - Skills
   - PDF download button

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 💡 Tips

- Keep descriptions concise (2-3 sentences)
- Use high-quality images (profile photo should be square)
- Update news section regularly to show activity
- Link to external profiles (Google Scholar, GitHub, etc.)
- Keep the CV PDF in sync with the CV page

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Edit `data/profile.ts` with your information
3. ✅ Replace `public/profile.jpg` with your photo
4. ✅ Replace `public/cv.pdf` with your CV
5. ✅ Run `npm run dev` to preview
6. ✅ Build and deploy: `npm run build`

## 📚 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Static Export** - No server needed

## 🐛 Troubleshooting

**Images not loading?**
- Ensure `profile.jpg` exists in `public/` folder
- Image should be at least 400x400px

**Links not working?**
- Check URLs in `data/profile.ts` are complete with `https://`
- CV PDF should be in `public/cv.pdf`

**Styles not applying?**
- Run `npm install` to ensure Tailwind is installed
- Clear `.next` folder: `rm -rf .next` and rebuild

## 📄 License

Feel free to use this template for your personal website!
