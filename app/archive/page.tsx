"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const archiveSections = [
  {
    title: "Initiatives & Projects",
    description:
      "Projects explored, developed, completed, or carried forward.",
  },
  {
    title: "Community Stories",
    description:
      "Experiences, milestones, and stories preserved by the community.",
  },
  {
    title: "Ideas & Innovation",
    description:
      "Ideas submitted, discussed, tested, developed, or preserved for the future.",
  },
  {
    title: "Tools & Resources",
    description:
      "Useful tools, guides, references, and practical community resources.",
  },
  {
    title: "Research & Knowledge",
    description:
      "Research, observations, lessons, and information worth preserving.",
  },
  {
    title: "Places & People",
    description:
      "People, communities, and places connected to the GoldTrack journey.",
  },
  {
    title: "Reports & Documents",
    description:
      "Reports, records, supporting documents, and important archive material.",
  },
  {
    title: "Lessons & Insights",
    description:
      "What worked, what failed, what changed, and what future members can learn.",
  },
];

export default function ArchivePage() {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return archiveSections;

    return archiveSections.filter((section) => {
      return (
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <main className="page">
      <header className="topBar">
        <div>
          <div className="brand">GoldTrack Rewards</div>
          <div className="tagline">
            Real Rewards for a Brighter Tomorrow
          </div>
        </div>

        <Link href="/transparency" className="returnLink">
          Return to Transparency Archive
        </Link>
      </header>

      <section className="hero">
        <div className="eyebrow">THE ARCHIVE</div>

        <h1>
          Explore the knowledge
          <br />
          we preserve together.
        </h1>

        <p>
          Search records, ideas, lessons, stories, projects, resources,
          and knowledge preserved for the people who follow.
        </p>
      </section>

      <section className="archivePanel">
        <div className="searchHeader">
          <div>
            <h2>Browse Archive</h2>
            <p>
              Knowledge becomes more valuable when it remains accessible.
            </p>
          </div>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search the archive..."
            aria-label="Search the archive"
          />
        </div>

        <div className="grid">
          {filteredSections.map((section) => (
            <button
              key={section.title}
              type="button"
              className="archiveCard"
            >
              <span className="cardTitle">{section.title}</span>

              <span className="cardDescription">
                {section.description}
              </span>

              <span className="exploreText">Explore →</span>
            </button>
          ))}
        </div>

        {filteredSections.length === 0 && (
          <div className="emptyState">
            No archive sections matched your search.
          </div>
        )}
      </section>

      <section className="closing">
        <div className="closingRule" />

        <p>
          Preserve what matters. Learn from what came before.
          Leave something useful for those who come next.
        </p>

        <Link href="/transparency" className="bottomReturn">
          ← Return to Transparency Archive
        </Link>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 0 32px 70px;
          color: #f4ecd7;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(167, 125, 45, 0.18),
              transparent 34%
            ),
            linear-gradient(
              180deg,
              #07121b 0%,
              #091821 48%,
              #061018 100%
            );
        }

        .topBar {
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: 28px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          border-bottom: 1px solid rgba(216, 177, 91, 0.32);
        }

        .brand {
          color: #d8b15b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .tagline {
          margin-top: 4px;
          color: rgba(244, 236, 215, 0.68);
          font-size: 12px;
          letter-spacing: 0.04em;
        }

        .returnLink,
        .bottomReturn {
          color: #e4c477;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.035em;
        }

        .returnLink:hover,
        .bottomReturn:hover {
          color: #fff1bd;
        }

        .hero {
          width: min(1000px, 100%);
          margin: 0 auto;
          padding: 96px 0 82px;
          text-align: center;
        }

        .eyebrow {
          margin-bottom: 20px;
          color: #d8b15b;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.28em;
        }

        h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.03;
          font-weight: 600;
          color: #f7f0dc;
        }

        .hero p {
          max-width: 690px;
          margin: 28px auto 0;
          color: rgba(244, 236, 215, 0.75);
          font-size: 18px;
          line-height: 1.7;
        }

        .archivePanel {
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: 34px;
          border: 1px solid rgba(216, 177, 91, 0.3);
          border-radius: 22px;
          background: rgba(7, 18, 27, 0.72);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
        }

        .searchHeader {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 30px;
        }

        h2 {
          margin: 0;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          font-weight: 600;
        }

        .searchHeader p {
          margin: 8px 0 0;
          color: rgba(244, 236, 215, 0.62);
          font-size: 14px;
        }

        input {
          width: min(340px, 100%);
          padding: 14px 16px;
          border: 1px solid rgba(216, 177, 91, 0.45);
          border-radius: 10px;
          outline: none;
          color: #f7f0dc;
          background: #0b1a25;
          font-size: 15px;
        }

        input:focus {
          border-color: #d8b15b;
          box-shadow: 0 0 0 3px rgba(216, 177, 91, 0.12);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .archiveCard {
          min-height: 190px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          border: 1px solid rgba(216, 177, 91, 0.23);
          border-radius: 16px;
          color: inherit;
          background:
            linear-gradient(
              145deg,
              rgba(19, 43, 52, 0.92),
              rgba(9, 25, 34, 0.94)
            );
          cursor: pointer;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .archiveCard:hover {
          transform: translateY(-3px);
          border-color: rgba(216, 177, 91, 0.68);
          background:
            linear-gradient(
              145deg,
              rgba(24, 53, 62, 0.98),
              rgba(11, 29, 39, 0.98)
            );
        }

        .cardTitle {
          color: #e4c477;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 700;
        }

        .cardDescription {
          margin-top: 14px;
          color: rgba(244, 236, 215, 0.71);
          font-size: 15px;
          line-height: 1.55;
        }

        .exploreText {
          margin-top: auto;
          padding-top: 24px;
          color: #f1d794;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .emptyState {
          padding: 50px 20px 30px;
          text-align: center;
          color: rgba(244, 236, 215, 0.65);
        }

        .closing {
          width: min(900px, 100%);
          margin: 70px auto 0;
          text-align: center;
        }

        .closingRule {
          width: 90px;
          height: 1px;
          margin: 0 auto 28px;
          background: #d8b15b;
        }

        .closing p {
          margin: 0 auto 26px;
          color: rgba(244, 236, 215, 0.72);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          line-height: 1.7;
        }

        @media (max-width: 760px) {
          .page {
            padding: 0 18px 50px;
          }

          .topBar {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero {
            padding: 68px 0 58px;
          }

          .archivePanel {
            padding: 22px;
          }

          .searchHeader {
            align-items: stretch;
            flex-direction: column;
          }

          input {
            width: 100%;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .archiveCard {
            transition: none;
          }

          .archiveCard:hover {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}