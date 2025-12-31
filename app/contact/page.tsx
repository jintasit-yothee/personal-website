import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact - Jintasit Yothee",
  description: "Get in touch with Jintasit Yothee",
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>

        <h1>Get in Touch</h1>
        <p className={styles.subtitle}>
          Feel free to reach out through any of these channels
        </p>

        <div className={styles.contactMethods}>
          <a
            href="mailto:jintasit.yot@gmail.com"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <h3>Email</h3>
              <p>jintasit.yot@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/jintasit-yothee/"
            target="_blank"
            rel="noopener noreferrer me"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
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
            </div>
            <div className={styles.contactInfo}>
              <h3>LinkedIn</h3>
              <p>jintasit-yothee</p>
            </div>
          </a>

          <a
            href="https://x.com/jyo_no6"
            target="_blank"
            rel="noopener noreferrer me"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
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
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <h3>X (Twitter)</h3>
              <p>@jyo_no6</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/jintasit13/"
            target="_blank"
            rel="noopener noreferrer me"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <h3>Instagram</h3>
              <p>@jintasit13</p>
            </div>
          </a>

          <a
            href="https://github.com/jintasit-yothee"
            target="_blank"
            rel="noopener noreferrer me"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
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
            </div>
            <div className={styles.contactInfo}>
              <h3>GitHub</h3>
              <p>jintasit-yothee</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
