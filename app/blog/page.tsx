import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";
import styles from "./blog.module.css";
import { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog - Jintasit Yothee",
  description: "Thoughts, insights, and experiences from a full stack software engineer with 12+ years of experience",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const allTags = await getAllTags();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Blog</h1>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>
      </header>

      <main className={styles.main}>
        <BlogList posts={posts} allTags={allTags} />
      </main>
    </div>
  );
}
