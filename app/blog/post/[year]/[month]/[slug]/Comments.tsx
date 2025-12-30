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
    const container = commentsRef.current;
    if (!container) return;

    container.innerHTML = "";

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

    container.appendChild(script);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [repo, issueTerm, label, theme]);

  return <div ref={commentsRef} />;
}
