"use client";

import Link from "next/link";

const recordGroups = [
  {
    title: "Decisions & Resolutions",
    description:
      "Important decisions, formal resolutions, and actions that affect the direction or stewardship of GoldTrack Rewards.",
  },
  {
    title: "Policies & Standards",
    description:
      "Published policies, operating standards, participation guidelines, and stewardship expectations.",
  },
  {
    title: "Stewardship Reports",
    description:
      "Reports explaining how responsibilities, resources, initiatives, and community trust are being managed.",
  },
  {
    title: "Explanations & Rationale",
    description:
      "Plain-language explanations of significant decisions, including why a course of action was chosen.",
  },
  {
    title: "Amendments & Revisions",
    description:
      "Changes to important policies, governance documents, standards, or procedures preserved with their history.",
  },
  {
    title: "Supporting Records",
    description:
      "Documents, reports, references, and other materials that support the public governance record.",
  },
];

export default function GovernancePage() {
  return (
    <main className="page">
      <header className="topBar">
        <div>
          <div className="brand">GoldTrack Rewards</div>
          <div className="tagline">
            Real Rewards for a Brighter Tomorrow
          </div>
        </div>

        <Link
          href="/transparency"
          style={{
            color: "#e4c477",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Return to Transparency Archive
        </Link>
      </header>

      <section className="hero">
        <div className="eyebrow">GOVERNANCE RECORDS</div>

        <h1>
          Decisions should leave
          <br />
          a clear record behind.
        </h1>

        <p>
          Governance records preserve important decisions, policies,
          explanations, revisions, and stewardship reports so the community
          can understand not only what was decided, but why.
        </p>
      </section>

      <section className="principles">
        <div className="principle">
          <span>01</span>
          <div>
            <h2>Transparency</h2>
            <p>
              Important decisions should be documented in a way people can
              find, read, and understand.
            </p>
          </div>
        </div>

        <div className="principle">
          <span>02</span>
          <div>
            <h2>Accountability</h2>
            <p>
              A preserved record makes it possible to review decisions,
              responsibilities, outcomes, and changes over time.
            </p>
          </div>
        </div>

        <div className="principle">
          <span>03</span>
          <div>
            <h2>Continuity</h2>
            <p>
              Future stewards should not have to reconstruct the reasoning,
              policies, and lessons of those who came before them.
            </p>
          </div>
        </div>
      </section>

      <section className="ledger">
        <div className="ledgerHeader">
          <div>
            <div className="smallLabel">PUBLIC RECORD STRUCTURE</div>
            <h2>Governance Archive</h2>
          </div>

          <div className="status">
            <span className="statusDot" />
            Archive structure established
          </div>
        </div>

        <div className="recordGrid">
          {recordGroups.map((record, index) => (
            <article className="recordCard" key={record.title}>
              <div className="recordNumber">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{record.title}</h3>
              <p>{record.description}</p>

              <div className="recordState">
                Records will appear here as published.
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="smallLabel">HOW THE RECORD IS PRESERVED</div>

        <h2>A decision should be understandable years later.</h2>

        <div className="processRow">
          <div className="processItem">
            <strong>Document</strong>
            <span>
              Preserve the decision, policy, report, or action.
            </span>
          </div>

          <div className="arrow">→</div>

          <div className="processItem">
            <strong>Explain</strong>
            <span>
              Record the reasoning and relevant context.
            </span>
          </div>

          <div className="arrow">→</div>

          <div className="processItem">
            <strong>Preserve</strong>
            <span>
              Keep revisions and supporting records accessible.
            </span>
          </div>

          <div className="arrow">→</div>

          <div className="processItem">
            <strong>Learn</strong>
            <span>
              Allow future participants to understand what happened.
            </span>
          </div>
        </div>
      </section>

      <section className="commitment">
        <div className="goldLine" />

        <div className="smallLabel">OUR COMMITMENT</div>

        <h2>
          Transparency means preserving
          <br />
          the reasoning, not merely the result.
        </h2>

        <p>
          The governance archive is intended to grow as GoldTrack Rewards
          develops. Records should be added as real decisions and policies
          are created — not invented afterward to make the history appear
          more complete.
        </p>
      </section>

      <footer className="footer">
        <Link
          href="/transparency"
          style={{
            color: "#e4c477",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          ← Return to Transparency Archive
        </Link>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 0 32px 70px;
          color: #f1ead8;
          background:
            radial-gradient(
              circle at 50% 8%,
              rgba(170, 132, 56, 0.11),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #071119 0%,
              #091720 50%,
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
          border-bottom: 1px solid rgba(216, 177, 91, 0.28);
        }

        .brand {
          color: #d8b15b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          font-weight: 700;
        }

        .tagline {
          margin-top: 4px;
          color: rgba(241, 234, 216, 0.65);
          font-size: 12px;
        }

        .hero {
          width: min(980px, 100%);
          margin: 0 auto;
          padding: 100px 0 86px;
          text-align: center;
        }

        .eyebrow,
        .smallLabel {
          color: #d8b15b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.22em;
        }

        .eyebrow {
          margin-bottom: 22px;
        }

        h1 {
          margin: 0;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, 6vw, 72px);
          line-height: 1.04;
          font-weight: 600;
        }

        .hero p {
          max-width: 730px;
          margin: 28px auto 0;
          color: rgba(241, 234, 216, 0.72);
          font-size: 17px;
          line-height: 1.7;
        }

        .principles {
          width: min(1180px, 100%);
          margin: 0 auto 72px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(216, 177, 91, 0.24);
          border-bottom: 1px solid rgba(216, 177, 91, 0.24);
        }

        .principle {
          min-height: 190px;
          padding: 34px;
          display: flex;
          gap: 22px;
        }

        .principle + .principle {
          border-left: 1px solid rgba(216, 177, 91, 0.2);
        }

        .principle > span {
          color: rgba(216, 177, 91, 0.55);
          font-size: 12px;
          font-weight: 800;
        }

        .principle h2 {
          margin: 0;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
        }

        .principle p {
          margin: 13px 0 0;
          color: rgba(241, 234, 216, 0.67);
          font-size: 14px;
          line-height: 1.6;
        }

        .ledger {
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: 38px;
          border: 1px solid rgba(216, 177, 91, 0.28);
          background: rgba(6, 17, 25, 0.7);
        }

        .ledgerHeader {
          padding-bottom: 28px;
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          border-bottom: 1px solid rgba(216, 177, 91, 0.22);
        }

        .ledgerHeader h2 {
          margin: 9px 0 0;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 36px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(241, 234, 216, 0.63);
          font-size: 12px;
          letter-spacing: 0.04em;
        }

        .statusDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d8b15b;
          box-shadow: 0 0 0 4px rgba(216, 177, 91, 0.1);
        }

        .recordGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .recordCard {
          min-height: 245px;
          padding: 34px;
          border-bottom: 1px solid rgba(216, 177, 91, 0.18);
        }

        .recordCard:nth-child(odd) {
          border-right: 1px solid rgba(216, 177, 91, 0.18);
        }

        .recordNumber {
          margin-bottom: 20px;
          color: rgba(216, 177, 91, 0.5);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .recordCard h3 {
          margin: 0;
          color: #e4c477;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
        }

        .recordCard p {
          max-width: 470px;
          margin: 14px 0 0;
          color: rgba(241, 234, 216, 0.68);
          font-size: 14px;
          line-height: 1.65;
        }

        .recordState {
          margin-top: 28px;
          color: rgba(241, 234, 216, 0.43);
          font-size: 11px;
          font-style: italic;
        }

        .process {
          width: min(1080px, 100%);
          margin: 92px auto 0;
          text-align: center;
        }

        .process > h2 {
          max-width: 760px;
          margin: 16px auto 42px;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 600;
        }

        .processRow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 16px;
        }

        .processItem {
          min-height: 145px;
          padding: 25px 18px;
          border: 1px solid rgba(216, 177, 91, 0.2);
          background: rgba(12, 31, 40, 0.68);
        }

        .processItem strong {
          display: block;
          color: #e4c477;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
        }

        .processItem span {
          display: block;
          margin-top: 11px;
          color: rgba(241, 234, 216, 0.64);
          font-size: 13px;
          line-height: 1.55;
        }

        .arrow {
          color: rgba(216, 177, 91, 0.6);
          font-size: 20px;
        }

        .commitment {
          width: min(900px, 100%);
          margin: 100px auto 0;
          text-align: center;
        }

        .goldLine {
          width: 82px;
          height: 1px;
          margin: 0 auto 26px;
          background: #d8b15b;
        }

        .commitment h2 {
          margin: 18px 0 0;
          color: #f7f0dc;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.18;
          font-weight: 600;
        }

        .commitment p {
          max-width: 720px;
          margin: 24px auto 0;
          color: rgba(241, 234, 216, 0.67);
          font-size: 15px;
          line-height: 1.7;
        }

        .footer {
          width: min(900px, 100%);
          margin: 65px auto 0;
          padding-top: 34px;
          text-align: center;
          border-top: 1px solid rgba(216, 177, 91, 0.2);
        }

        @media (max-width: 800px) {
          .page {
            padding: 0 18px 55px;
          }

          .topBar {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero {
            padding: 70px 0 65px;
          }

          .principles {
            grid-template-columns: 1fr;
          }

          .principle + .principle {
            border-left: 0;
            border-top: 1px solid rgba(216, 177, 91, 0.2);
          }

          .ledger {
            padding: 22px;
          }

          .ledgerHeader {
            align-items: flex-start;
            flex-direction: column;
          }

          .recordGrid {
            grid-template-columns: 1fr;
          }

          .recordCard:nth-child(odd) {
            border-right: 0;
          }

          .processRow {
            grid-template-columns: 1fr;
          }

          .arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </main>
  );
}