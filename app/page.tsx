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
          <a href="https://github.com/jintasit-yothee" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/icon-github.png" alt="GitHub" width={32} height={32} />
          </a>
          <a href="https://www.linkedin.com/in/jintasit-yothee/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/icon-linkedin.png" alt="LinkedIn" width={32} height={32} />
          </a>
        </div>

        <p style={{ fontStyle: "italic", fontWeight: 500 }}>
          The Advanced Level is Mastery of The Basics
        </p>

        <p>
          I&apos;ve been building software for over 12+ years now, working across the full stack and diving into data engineering.
          I enjoy the variety—some days I&apos;m working on React frontends, other days I&apos;m writing Go or Kotlin APIs, and sometimes I&apos;m knee-deep in data pipelines with DBT and BigQuery.
        </p>

        <p>
          What keeps me interested is working on problems that actually matter.
          I&apos;ve spent time modernizing legacy systems, building data workflows that help teams make better decisions, and setting up infrastructure that just works.
          The tech stack changes, but the challenge of understanding what really needs to be built stays the same.
        </p>

        <p>
          I also enjoy mentoring other engineers.
          I think the best code comes from really understanding the problem you&apos;re solving, not jumping straight to the solution.
          That&apos;s what I try to share with the teams I work with.
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
