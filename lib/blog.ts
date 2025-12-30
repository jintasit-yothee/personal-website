import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  content: string;
  url: string;
  year: string;
  month: string;
}

export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export async function getAllPosts(): Promise<Omit<BlogPost, "content">[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = getAllMarkdownFiles(postsDirectory);
    const posts = fileNames.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const date = new Date(data.date || Date.now());
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");

      const baseName = path.basename(fileName, ".md");
      const slug = baseName.replace(/^\d{1,2}-/, "");

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split("T")[0],
        excerpt: data.excerpt || "",
        image: data.image || "",
        tags: data.tags || [],
        url: `/blog/post/${year}/${month}/${slug}`,
        year,
        month,
      };
    });

    return posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

/**
 * Get a single post by year, month, and slug
 */
export async function getPostBySlug(
  year: string,
  month: string,
  slug: string
): Promise<BlogPost | null> {
  try {
    const yearMonthPath = path.join(postsDirectory, year, month);

    if (!fs.existsSync(yearMonthPath)) {
      return null;
    }

    const files = fs.readdirSync(yearMonthPath);
    const matchingFile = files.find((file) => {
      const baseName = path.basename(file, ".md");
      const fileSlug = baseName.replace(/^\d{1,2}-/, "");
      return fileSlug === slug && file.endsWith(".md");
    });

    if (!matchingFile) {
      return null;
    }

    const fullPath = path.join(yearMonthPath, matchingFile);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const date = new Date(data.date || Date.now());
    const postYear = date.getFullYear().toString();
    const postMonth = (date.getMonth() + 1).toString().padStart(2, "0");

    if (postYear !== year || postMonth !== month) {
      return null;
    }

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      image: data.image || "",
      tags: data.tags || [],
      content,
      url: `/blog/post/${year}/${month}/${slug}`,
      year: postYear,
      month: postMonth,
    };
  } catch (error) {
    console.error("Error getting post by slug:", error);
    return null;
  }
}

/**
 * Recursively get all markdown files from a directory
 */
function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subFiles = getAllMarkdownFiles(fullPath);
      files.push(...subFiles);
    } else if (item.endsWith(".md") && !item.toLowerCase().includes("readme")) {
      files.push(path.relative(postsDirectory, fullPath));
    }
  }

  return files;
}

/**
 * Generate static params for all posts
 */
export async function generatePostParams(): Promise<
  Array<{ year: string; month: string; slug: string }>
> {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    year: post.year,
    month: post.month,
    slug: post.slug,
  }));
}

/**
 * Get all unique tags from all posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}
