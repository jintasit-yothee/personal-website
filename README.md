# Personal Blog Website

A modern, responsive blog built with Next.js 15, featuring a clean design, tag-based filtering, and full-text search.

## Features

- **📝 Markdown Blog Posts** - Write posts in Markdown with frontmatter support
- **🏷️ Tag System** - Categorize posts with tags and filter by category
- **🔍 Search** - Real-time search by post title
- **📅 Date Organization** - Posts organized by year/month directory structure
- **🎨 Responsive Grid Layout** - 3-column grid on desktop, adapts to mobile
- **🖼️ Image Management** - Organized image structure matching post dates
- **✨ Smooth Animations** - Card hover effects with image zoom and transitions
- **🌈 Rainbow Borders** - Dynamic gradient borders based on post date
- **⚡ Static Generation** - Fast page loads with Next.js SSG
- **📱 Mobile Responsive** - Optimized for all screen sizes

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Markdown:** gray-matter, react-markdown
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── blog/              # Blog listing and post pages
│   ├── page.tsx           # Homepage
│   └── layout.tsx         # Root layout
├── lib/
│   └── blog.ts            # Blog post utilities
├── posts/
│   └── YYYY/MM/           # Blog posts organized by date
│       └── DD-slug.md
├── public/
│   └── images/
│       └── YYYY/MM/       # Images organized by date
└── README.md
```

## Writing Blog Posts

### Creating a New Post

1. Create a file in `posts/YYYY/MM/DD-post-slug.md`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-12-30"
excerpt: "A brief description"
image: "/images/2025/12/30-post-image.png"
tags: ["tech", "lifestyle"]
---

# Your Post Title

Your content here...
```

### Available Tags

- `tech` - Technology, programming, software development
- `lifestyle` - Personal experiences, opinions, lifestyle choices

Add new tags by simply including them in post frontmatter - they'll automatically appear in the filter UI.

### Images

- Place post images in `public/images/YYYY/MM/`
- **Naming Convention:** Image files should start with the same day number as the post
  - Post: `posts/2025/12/25-i-still-use-windows.md`
  - Image: `public/images/2025/12/25-i-still-use-windows.png`
- Reference in frontmatter: `image: "/images/2025/12/25-image-name.png"`
- Icons and global images go in `public/images/icons/` or `public/images/`

See [posts/README.md](./posts/README.md) for detailed documentation.

## Development

### Linting

```bash
pnpm lint
```

### Type Checking

```bash
pnpm build
```

## Features in Detail

### Tag Filtering
- Click tag buttons to filter posts by category
- Combine with search for refined results
- "All" button to clear filters

### Search
- Real-time search as you type
- Case-insensitive title matching
- Works alongside tag filtering

### Responsive Design
- **Desktop (>1024px):** 3-column grid
- **Tablet (768-1024px):** 2-column grid
- **Mobile (<768px):** Single column

## Deployment

### Cloudflare Pages (Recommended - Free)

This project is configured for Cloudflare Pages deployment with:
- ✅ Static export enabled
- ✅ Node version pinned
- ✅ Unlimited bandwidth on free tier

See **[CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)** for step-by-step setup guide.

**Quick Deploy:**
1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Use build command: `pnpm build`
4. Output directory: `out`

### Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Deploy using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is open source and available under the MIT License.
