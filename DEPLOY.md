# Deploying to GitHub Pages (username.github.io)

This guide explains how to deploy your Next.js portfolio to GitHub Pages at `username.github.io`.

## ✅ Pre-configured Setup

Your site is already configured for GitHub Pages deployment with:
- ✅ Static export in `next.config.js` (`output: 'export'`)
- ✅ GitHub Actions workflow in `.github/workflows/deploy.yml`
- ✅ `.nojekyll` file to prevent Jekyll processing
- ✅ Image optimization disabled for static export

## 🚀 Deployment Steps

### 1. Customize Your Content

Before deploying, edit `data/profile.ts` and replace all placeholders:
```bash
# Look for and replace these:
[PUT NAME HERE]
[PUT TITLE HERE]
[PUT EMAIL HERE]
[PUT ABOUT HERE]
# ... and all other placeholders
```

### 2. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/mmahjoub5/mmahjoub5.github.io`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

### 3. Commit and Push Your Changes

```bash
# Stage all files
git add .

# Commit your changes
git commit -m "Deploy Next.js portfolio to GitHub Pages"

# Push to main branch
git push origin main
```

### 4. Automatic Deployment

Once you push to the `main` branch:
1. GitHub Actions will automatically trigger
2. The workflow will:
   - Install dependencies
   - Build your Next.js site
   - Deploy to GitHub Pages
3. Check the **Actions** tab in your repository to monitor progress

### 5. Access Your Site

After deployment completes (usually 2-3 minutes), your site will be live at:
```
https://mmahjoub5.github.io
```

## 🔄 Updating Your Site

To update your site after initial deployment:

1. **Edit your content** in `data/profile.ts`
2. **Test locally** (optional):
   ```bash
   npm run dev
   ```
3. **Commit and push**:
   ```bash
   git add data/profile.ts
   git commit -m "Update content"
   git push origin main
   ```
4. GitHub Actions will automatically rebuild and redeploy

## 📝 What Gets Deployed

The deployment process:
1. Runs `npm run build` which generates static HTML/CSS/JS in the `out/` folder
2. Uploads the `out/` folder to GitHub Pages
3. Your site becomes available at `mmahjoub5.github.io`

**Note:** The `out/` folder is in `.gitignore` - you never commit it. GitHub Actions builds it fresh each time.

## 🐛 Troubleshooting

### Site Not Loading / 404 Error

**Check GitHub Pages Settings:**
1. Go to Settings → Pages
2. Ensure Source is set to **GitHub Actions** (not "Deploy from a branch")

**Check GitHub Actions:**
1. Go to the **Actions** tab in your repository
2. Look for failed workflow runs (red X)
3. Click on the failed run to see error details

### Images Not Showing

**For local images:**
- Ensure they're in the `public/` folder
- Reference them as `/image.jpg` (not `./image.jpg`)

**Profile photo:**
```typescript
// In data/profile.ts, make sure the path is correct:
// Currently using: /profile.jpg (which maps to public/profile.jpg) ✅
```

### Build Fails

**Common issues:**
1. **Missing dependencies:** Run `npm install` locally first
2. **TypeScript errors:** Run `npm run build` locally to check for errors
3. **Node version:** GitHub Actions uses Node 20, ensure your code works with it

### Styles Not Loading

The site uses Tailwind CSS which is compiled during build. If styles don't load:
1. Clear your browser cache
2. Check the GitHub Actions build logs for CSS compilation errors
3. Ensure `tailwind.config.ts` and `postcss.config.js` are in the repository

## 📦 Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Build the site
npm run build

# The static site is in the 'out' folder
# You can:
# - Commit the out folder to a 'gh-pages' branch
# - Use GitHub Desktop to publish
# - Or deploy the 'out' folder to any static host
```

## 🎯 Branch Strategy

**Current setup:**
- **main branch** - Your source code
- GitHub Actions builds from `main` and deploys automatically
- No need for a separate `gh-pages` branch

**If you want to use the old method:**
1. Delete `.github/workflows/deploy.yml`
2. Build locally: `npm run build`
3. Deploy the `out/` folder to `gh-pages` branch
4. Set GitHub Pages source to "Deploy from a branch" → `gh-pages` → `/root`

## ✨ Benefits of This Setup

- ✅ **Automatic deployment** on every push to main
- ✅ **No manual build steps** - GitHub does it for you
- ✅ **Clean repository** - build artifacts not committed
- ✅ **Fast updates** - just edit, commit, push
- ✅ **Build logs** - see exactly what happened in Actions tab

## 🔗 Custom Domain (Optional)

To use a custom domain like `yourname.com`:

1. Add a `CNAME` file to the `public/` folder:
   ```bash
   echo "yourname.com" > public/CNAME
   ```

2. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `mmahjoub5.github.io`

3. In GitHub Settings → Pages, enter your custom domain

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

## 🎉 You're All Set!

Your portfolio is configured and ready to deploy. Just push to GitHub and it will go live automatically!

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

Then visit: **https://mmahjoub5.github.io**
