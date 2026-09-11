"use client";

import Link from "next/link";

const milestones = [
  {
    year: "Beginning",
    title: "The Idea Takes Shape",
    description:
      "GoldTrack Rewards begins with a simple belief: people working together can preserve knowledge, strengthen communities, and help build something worth continuing.",
  },
  {
    year: "Foundation",
    title: "Mission Before Mechanism",
    description:
      "The mission becomes the anchor. Technology, tools, rewards, and systems may evolve, but the purpose remains centered on people, participation, stewardship, and long-term value.",
  },
  {
    year: "Community",
    title: "Be Counted",
    description:
      "The community begins to take shape around participation rather than status. Every honest contribution matters, and every person has something of value to bring.",
  },
  {
    year: "Stewardship",
    title: "Knowledge Is Preserved",
    description:
      "Successes, failures, ideas, decisions, and lessons are documented so future participants do not have to begin again from nothing.",
  },
  {
    year: "Initiatives",
    title: "Ideas Become Action",
    description:
      "Community ideas can become initiatives, experiments, tools, partnerships, or records that help address real needs and create practical value.",
  },
  {
    year: "Future",
    title: "A Legacy Worth Continuing",
    description:
      "The long-term goal is not simply to build something for today, but to create something future generations may choose to continue because they recognize its value.",
  },
];

export default function CommunityHistoryPage() {
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
        <div className="eyebrow">COMMUNITY HISTORY</div>

        <h1>
          A journey built
          <br />
          one contribution at a time.
        </h1>

        <p>
          History is more than a list of dates. It is the record of ideas,
          people, decisions, lessons, setbacks, progress, and the moments
          that shape what comes next.
        </p>
      </section>

      <section className="journey">
        <div className="path" aria-hidden="true" />

        {milestones.map((milestone, index) => (
          <article
            key={milestone.title}
            className={`milestone ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="marker" aria-hidden="true" />

            <div className="card">
              <div className="year">{milestone.year}</div>
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="historyNote">
        <div className="rule" />

        <div className="noteLabel">THE RECORD CONTINUES</div>

        <h2>
          This history is designed to grow
          <br />
          as the community grows.
        </h2>

        <p>
          Future milestones, initiatives, decisions, lessons, and community
          stories can be added without replacing what came before. The goal
          is a living record that preserves the journey honestly.
        </p>
      </section>

      <section className="closing">
        <p>
          We preserve the path behind us so those who follow can understand
          how we arrived where we are.
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
          padding: 0 32px 80px;
          color: #f4ecd7;
          background:
            radial-gradient(
              circle at 50% 18%,
              rgba(181, 141, 62, 0.14),
              transparent 28%
            ),
            linear-gradient(
              180deg,
              #08131c 0%,
              #0a1921 44%,
              #09151c 72%,
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
          border-bottom: 1px solid rgba(216, 177, 91, 0.3);
        }

        .brand {
          color: #d8b15b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          font-weight: 700;
        }

        .tagline {
          margin-top: 4px;
          color: rgba(244, 236, 215, 0.66);
          font-size: 12px;
        }

        .returnLink,
        .bottomReturn {
          color: #e4c477;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .returnLink:hover,
        .bottomReturn:hover {
          color: #fff1bd;
        }

        .hero {
          width: min(970px, 100%);
          margin: 0 auto;
          padding: 96px 0 100px;
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
          font-size: clamp(44px, 6vw, 74px);
          line-height: 1.04;
          font-weight: 600;
          color: #f7f0dc;
        }

        .hero p {
          max-width: 720px;
          margin: 30px auto 0;
          color: rgba(244, 236, 215, 0.74);
          font-size: 18px;
          line-height: 1.7;
        }

        .journey {
          position: relative;
          width: min(1080px, 100%);
          margin: 0 auto;
          padding: 20px 0 40px;
        }

        .path {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background:
            linear-gradient(
              180deg,
              rgba(216, 177, 91, 0.12),
              rgba(216, 177, 91, 0.78) 18%,
              rgba(216, 177, 91, 0.78) 82%,
              rgba(216, 177, 91, 0.12)
            );
        }

        .milestone {
          position: relative;
          width: 50%;
          min-height: 260px;
          display: flex;
          align-items: center;
        }

        .milestone.left {
          padding-right: 62px;
          justify-content: flex-end;
        }

        .milestone.right {
          margin-left: 50%;
          padding-left: 62px;
          justify-content: flex-start;
        }

        .marker {
          position: absolute;
          top: 50%;
          width: 18px;
          height: 18px;
          border: 3px solid #d8b15b;
          border-radius: 50%;
          background: #091821;
          box-shadow: 0 0 0 7px rgba(216, 177, 91, 0.1);
        }

        .left .marker {
          right: -9px;
        }

        .right .marker {
          left: -9px;
        }

        .card {
          width: min(440px, 100%);
          padding: 30px;
          border: 1px solid rgba(216, 177, 91, 0.24);
          border-radius: 18px;
          background:
            linear-gradient(
              145deg,
              rgba(17, 40, 48, 0.96),
              rgba(9, 25, 34, 0.94)
            );
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.2);
        }

        .year {
          margin-bottom: 10px;
          color: #d8b15b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        h2 {
          margin: 0;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          line-height: 1.2;
          font-weight: 600;
        }

        .card p {
          margin: 15px 0 0;
          color: rgba(244, 236, 215, 0.7);
          font-size: 15px;
          line-height: 1.65;
        }

        .historyNote {
          width: min(900px, 100%);
          margin: 90px auto 0;
          padding: 58px 38px;
          text-align: center;
          border-top: 1px solid rgba(216, 177, 91, 0.22);
          border-bottom: 1px solid rgba(216, 177, 91, 0.22);
        }

        .rule {
          width: 88px;
          height: 1px;
          margin: 0 auto 26px;
          background: #d8b15b;
        }

        .noteLabel {
          margin-bottom: 17px;
          color: #d8b15b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.22em;
        }

        .historyNote h2 {
          font-size: clamp(30px, 4vw, 46px);
        }

        .historyNote p {
          max-width: 720px;
          margin: 22px auto 0;
          color: rgba(244, 236, 215, 0.69);
          font-size: 16px;
          line-height: 1.7;
        }

        .closing {
          width: min(860px, 100%);
          margin: 64px auto 0;
          text-align: center;
        }

        .closing p {
          margin: 0 auto 24px;
          color: rgba(244, 236, 215, 0.73);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          line-height: 1.65;
        }

        @media (max-width: 780px) {
          .page {
            padding: 0 18px 55px;
          }

          .topBar {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero {
            padding: 68px 0 72px;
          }

          .journey {
            padding-left: 28px;
          }

          .path {
            left: 8px;
            transform: none;
          }

          .milestone,
          .milestone.right {
            width: 100%;
            min-height: auto;
            margin-left: 0;
            padding: 0 0 28px 38px;
            justify-content: flex-start;
          }

          .milestone.left {
            padding: 0 0 28px 38px;
            justify-content: flex-start;
          }

          .left .marker,
          .right .marker {
            left: -29px;
            right: auto;
            top: 40px;
          }

          .card {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}