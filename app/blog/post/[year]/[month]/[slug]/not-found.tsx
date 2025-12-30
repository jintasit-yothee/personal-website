import Link from "next/link";
import styles from "./post.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
        <h2 style={{ marginBottom: "2rem" }}>Blog Post Not Found</h2>
        <p style={{ marginBottom: "2rem", opacity: 0.7 }}>
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/blog" className={styles.backLink}>
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
