"use client";

import { useEffect, useRef } from "react";

interface CommentsProps {
  repo: string;
  issueTerm?: string;
  label?: string;
  theme?: string;
}

export default function Comments({
  repo,
  issueTerm = "pathname",
  label,
  theme = "github-light",
}: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", issueTerm);
    if (label) {
      script.setAttribute("label", label);
    }
    script.setAttribute("theme", theme);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (commentsRef.current) {
        commentsRef.current.innerHTML = "";
      }
    };
  }, [repo, issueTerm, label, theme]);

  return <div ref={commentsRef} />;
}
