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
          Full stack engineer with 12+ years building scalable web applications from startups to enterprise.
          I work across the entire stack—React frontends, Node.js/Python/Scala/Go backends, and cloud infrastructure on GCP.
        </p>

        <p>
          My focus is on building products that solve real problems at scale.
          Whether it&apos;s architecting systems that handle millions of users or designing data pipelines that drive business decisions,
          I believe the best solutions come from truly understanding the problem first.
          I&apos;m also passionate about mentoring engineers and sharing this problem-first mindset with teams.
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
