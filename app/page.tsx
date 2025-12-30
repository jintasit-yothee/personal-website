import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const allPosts = await getAllPosts();
  const recentPosts = allPosts.slice(0, 10);
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1>Jintasit Yothee</h1>

        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        />

        <div style={{ display: "flex", gap: "16px" }}>
          <a href="https://github.com/jintasit-yothee" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/jintasit-yothee/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        <p style={{ fontStyle: "italic", fontWeight: 500 }}>
          The Advanced Level is Mastery of The Basics
        </p>

        <p>
          I&apos;ve been building software for over 12+ years now, working across the full stack and diving into data engineering. I enjoy the variety—some days I&apos;m working on React frontends, other days I&apos;m writing Go or Kotlin APIs, and sometimes I&apos;m knee-deep in data pipelines with DBT and BigQuery.
        </p>

        <p>
          What keeps me interested is working on problems that actually matter. I&apos;ve spent time modernizing legacy systems, building data workflows that help teams make better decisions, and setting up infrastructure that just works. The tech stack changes, but the challenge of understanding what really needs to be built stays the same.
        </p>

        <p>
          I also enjoy mentoring other engineers. I think the best code comes from really understanding the problem you&apos;re solving, not jumping straight to the solution. That&apos;s what I try to share with the teams I work with.
        </p>
      </div>

      <nav className={styles.nav}>
        <Link href="/blog">Blog</Link>
        <span>|</span>
        <a href="https://www.linkedin.com/in/jintasit-yothee/" target="_blank" rel="noopener noreferrer">Experience</a>
        <span>|</span>
        <Link href="/contact">Contact</Link>
      </nav>

      {recentPosts.length > 0 && (
        <section className={styles.highlights}>
          <h2>Highlights</h2>
          <div className={styles.postsList}>
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.url}
                className={styles.postItem}
              >
                <div className={styles.postDate}>{post.date}</div>
                <div className={styles.postTitle}>{post.title}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
