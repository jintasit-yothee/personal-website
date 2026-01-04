import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, generatePostParams } from "@/lib/blog";
import Comments from "./Comments";
import ShareButtons from "./ShareButtons";
import styles from "./post.module.css";

interface PostPageProps {
  params: Promise<{
    year: string;
    month: string;
    slug: string;
  }>;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

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

  const url = `https://www.jintasit.com${post.url}`;

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title}`,
    authors: [{ name: 'Jintasit Yothee' }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title}`,
      url: url,
      siteName: 'Jintasit Yothee',
      images: post.image ? [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : [],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: ['Jintasit Yothee'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title}`,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, slug } = await params;
  const post = await getPostBySlug(year, month, slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.image ? `https://www.jintasit.com${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Jintasit Yothee',
      url: 'https://www.jintasit.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Jintasit Yothee',
      url: 'https://www.jintasit.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.jintasit.com${post.url}`,
    },
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{post.title}</h1>
          <Link href="/blog" className={styles.backLink}>
            &larr; Back to Blog
          </Link>
        </div>
        <p className={styles.date}>{formatDate(post.date)}</p>
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

      <ShareButtons url={post.url} title={post.title} />

      <div className={styles.comments}>
        <Comments repo="jintasit-yothee/personal-website" issueTerm="pathname" label="blog-comment" />
      </div>
    </div>
  );
}
