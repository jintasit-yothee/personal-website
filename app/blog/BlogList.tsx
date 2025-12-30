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

// Rainbow gradient that rotates based on day
const getRainbowGradient = (date: string): string => {
  const day = new Date(date).getDate();
  const rainbowColors = [
    "#FF6B6B", // Red
    "#FF8E53", // Orange
    "#FFB84D", // Yellow
    "#9AE67D", // Green
    "#6A9CFF", // Blue
    "#B07CE8", // Violet
  ];

  // Rotate starting position based on day (cycles through 6 colors)
  const startIndex = (day - 1) % 6;

  // Create a rotated array starting from the calculated position
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
    // Filter by tag
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag);

    // Filter by search query
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {allTags.length > 0 && (
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
      )}

      {filteredPosts.length === 0 ? (
        <p className={styles.noPosts}>
          {searchQuery || selectedTag
            ? `No posts found${searchQuery ? ` matching "${searchQuery}"` : ""}${selectedTag ? ` with tag "${selectedTag}"` : ""}.`
            : "No blog posts yet. Check back soon!"}
        </p>
      ) : (
        <div className={styles.postsList}>
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className={styles.postCard}
              style={{
                borderImage: `linear-gradient(90deg, ${getRainbowGradient(post.date)}) 1`,
              }}
            >
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
                    <p className={styles.excerpt}>{post.excerpt}</p>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
