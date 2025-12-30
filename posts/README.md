# Blog Posts

This directory contains all blog posts for the website. Blog posts are organized by year and month, with markdown files prefixed by the day of publication.

## Directory Structure

Posts are organized as: `posts/YYYY/MM/DD-post-slug.md`

Example:
```
posts/
├── 2025/
│   ├── 12/
│   │   ├── 25-i-still-use-windows.md
│   │   └── 20-welcome-to-my-blog.md
│   └── 01/
│       └── 15-another-post.md
└── README.md
```

## How to Add a New Blog Post

1. **Determine the date** for your post (YYYY-MM-DD)
2. **Create the year/month directory** if it doesn't exist:
   ```bash
   mkdir -p posts/2025/12
   ```
3. **Create your markdown file** with the format `DD-post-slug.md`:
   ```bash
   # Example: For December 30, 2025
   posts/2025/12/30-my-new-post.md
   ```
4. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: "My New Post Title"
   date: "2025-12-30"
   excerpt: "A brief description of the post."
   image: "/images/2025/12/my-new-post.png"
   tags: ["tech", "lifestyle"]
   ---

   # My New Post Title

   Your content here...
   ```

## URL Structure

Posts are automatically available at:
```
/blog/post/<year>/<month>/<slug>
```

The filename prefix (day) and directory structure do NOT appear in the URL.

**Examples:**
- File: `posts/2025/12/25-i-still-use-windows.md`
  - URL: `/blog/post/2025/12/i-still-use-windows`

- File: `posts/2025/01/15-my-amazing-post.md`
  - URL: `/blog/post/2025/01/my-amazing-post`

## Frontmatter Fields

- **title** (required): The title of your blog post
- **date** (required): Publication date in YYYY-MM-DD format
- **excerpt** (optional): Short description shown on blog listing page
- **image** (optional): Path to thumbnail/featured image
  - For post-specific images: `/images/YYYY/MM/image-name.png`
  - Example: `/images/2025/12/my-post.png`
  - Or use an external URL: `https://example.com/image.jpg`
- **tags** (optional): Array of tags for categorizing your post
  - Common tags: `tech`, `lifestyle`, etc.
  - Format: `tags: ["tech", "lifestyle"]`
  - Tags enable filtering on the blog page

## Image Organization

Images are organized to match the blog post structure:

```
public/images/
├── 2025/
│   └── 12/
│       ├── my-post.png
│       └── another-post.png
├── icons/
│   ├── icon-github.png
│   └── icon-linkedin.png
└── profile.jpg
```

**To add an image for your post:**
1. Place the image in `public/images/YYYY/MM/` matching your post's date
2. Reference it in frontmatter: `image: "/images/2025/12/image-name.png"`

## Tags and Filtering

Tags help categorize your posts and enable filtering on the blog page:

**Current tags:**
- `tech` - Technology, programming, software development
- `lifestyle` - Personal experiences, opinions, lifestyle choices

**Adding new tags:**
- Simply add them to your post's frontmatter: `tags: ["tech", "your-new-tag"]`
- Tags are automatically collected and displayed in the filter UI
- Use lowercase for consistency
- Keep tag names short and descriptive

## Supported Markdown Features

- Headings (H1-H6)
- Paragraphs
- Lists (ordered and unordered)
- Links
- Images
- Code blocks with syntax highlighting
- Blockquotes
- Tables (via GitHub Flavored Markdown)

## Tips

- Use descriptive slugs (they become part of the URL)
- Always include a date in the frontmatter that matches the directory structure
- Add an excerpt for better SEO and user experience
- Add relevant tags to help readers find related content
- Store post images in the matching year/month directory structure
- Prefix filename with the day (DD) for easy chronological sorting within a month
- Use proper heading hierarchy (H1 for title, H2 for sections, etc.)
