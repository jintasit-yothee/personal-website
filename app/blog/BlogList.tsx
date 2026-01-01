"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import type { BlogPost } from "@/lib/blog";

interface BlogListProps {
  posts: Omit<BlogPost, "content">[];
  allTags: string[];
}

const getRainbowGradient = (date: string): string => {
  const day = new Date(date).getDate();
  const rainbowColors = [
    "#FF6B6B",
    "#FF8E53",
    "#FFB84D",
    "#9AE67D",
    "#6A9CFF",
    "#B07CE8",
  ];

  const startIndex = (day - 1) % 6;

  const rotatedColors = [
    ...rainbowColors.slice(startIndex),
    ...rainbowColors.slice(0, startIndex),
  ];

  return rotatedColors.join(", ");
};

export default function BlogList({ posts, allTags }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag);

    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  const excerptLength = 140;

  return (
    <>
      {allTags.length > 0 && (
        <div className={styles.filterContainer}>
          <div className={styles.tagFilter}>
            <button
              className={`${styles.tagButton} ${!selectedTag ? styles.active : ""}`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.tagButton} ${selectedTag === tag ? styles.active : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <p className={styles.noPosts}>
          {searchQuery || selectedTag
            ? `No posts found${searchQuery ? ` matching "${searchQuery}"` : ""}${selectedTag ? ` with tag "${selectedTag}"` : ""}.`
            : "No blog posts yet. Check back soon!"}
        </p>
      ) : (
        <div className={styles.postsList}>
          {filteredPosts.map((post, index) => {
            const isLatest = index === 0;
            return (
              <article
                key={post.slug}
                className={`${styles.postCard} ${isLatest ? styles.latestPost : ''}`}
                style={{
                  ['--gradient-colors' as any]: getRainbowGradient(post.date),
                }}
              >
                {isLatest && (
                  <div className={styles.latestBadge}>Latest</div>
                )}
                <Link href={post.url} className={styles.postLink}>
                  {post.image && (
                    <div className={styles.thumbnail}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className={styles.postContent}>
                    <h2>{post.title}</h2>
                    <p className={styles.date}>{post.date}</p>
                    {post.tags && post.tags.length > 0 && (
                      <div className={styles.postTags}>
                        {post.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {post.excerpt && (
                      <p className={styles.excerpt}>
                        {post.excerpt.length > excerptLength
                          ? `${post.excerpt.substring(0, post.excerpt.lastIndexOf(' ', excerptLength))}...`
                          : post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}
