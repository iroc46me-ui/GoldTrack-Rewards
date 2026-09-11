"use client";

import type { ReactNode } from "react";

type ArchivePageProps = {
  background: string;
  children: ReactNode;
  ariaLabel?: string;
};

export default function ArchivePage({
  background,
  children,
  ariaLabel = "Archive page",
}: ArchivePageProps) {
  return (
    <main className="archive-page">
      <svg
        className="archive-master"
        viewBox="0 0 1024 1536"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={ariaLabel}
      >
        {/* ARTWORK AND LIVE CONTENT SHARE THIS EXACT COORDINATE SYSTEM */}
        <image
          href={background}
          x="0"
          y="0"
          width="1024"
          height="1536"
          preserveAspectRatio="none"
        />

        {children}
      </svg>

      <style jsx>{`
        .archive-page {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          background: #07121b;
          overflow-x: hidden;
        }

        .archive-master {
          display: block;
          width: 100%;
          max-width: 1024px;
          height: auto;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
}