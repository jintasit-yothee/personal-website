import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, generatePostParams } from "@/lib/blog";
import styles from "./post.module.css";

interface PostPageProps {
  params: Promise<{
    year: string;
    month: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = await generatePostParams();
  return params;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { year, month, slug } = await params;
  const post = await getPostBySlug(year, month, slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title}`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, slug } = await params;
  const post = await getPostBySlug(year, month, slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{post.date}</p>
      </header>

      {post.image && (
        <div className={styles.featuredImage}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      )}

      <main className={styles.content}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </main>
    </div>
  );
}
