# Cloudflare Pages Deployment Guide

## Quick Setup

### 1. Push to GitHub

Make sure your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Configure for Cloudflare Pages"
git push origin main
```

### 2. Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com
2. Navigate to **Pages** in the left sidebar
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Select **GitHub** and authorize Cloudflare
6. Choose your repository: `my-web-next`

### 3. Build Configuration

Use these settings when prompted:

**Framework preset:** Next.js (Static HTML Export)

**Build settings:**
- **Production branch:** `main`
- **Build command:** `pnpm build`
- **Build output directory:** `out`
- **Root directory:** (leave empty)

**Environment variables:**
- No additional variables needed (Node version detected from `.node-version`)

### 4. Deploy

Click **"Save and Deploy"**

Cloudflare will:
- Install dependencies with pnpm
- Build your site
- Deploy to global CDN
- Provide a URL like `https://my-web-next.pages.dev`

## What's Been Configured

✅ `.node-version` - Ensures Node.js 20 is used
✅ `.nvmrc` - Alternative Node version file
✅ `package.json` - Added engines field for version requirements
✅ `next.config.ts` - Already configured with `output: "export"`

## Auto-Deploy

Every time you push to `main`, Cloudflare will automatically:
1. Detect the changes
2. Build your site
3. Deploy the new version

## Preview Deployments

Pull requests automatically get preview deployments at:
`https://<commit-hash>.my-web-next.pages.dev`

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Cloudflare Pages
2. Click **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Follow the DNS configuration steps

## Troubleshooting

### Build Fails

Check the build log in Cloudflare Pages dashboard. Common issues:
- Missing dependencies (run `pnpm install` locally to verify)
- TypeScript errors (run `pnpm build` locally first)
- Image optimization issues (already handled with `unoptimized: true`)

### Site Not Updating

- Check the deployment status in Cloudflare dashboard
- Verify the commit was pushed to the correct branch
- Clear your browser cache

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Next.js Docs: https://nextjs.org/docs
