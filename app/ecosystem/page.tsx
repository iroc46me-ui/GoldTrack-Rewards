"use client";

import Link from "next/link";

const ecosystemFlow = [
  {
    title: "Community",
    text: "People bring experience, needs, questions, skills, and perspective.",
    href: "/community",
  },
  {
    title: "Ideas",
    text: "Possibilities are shared, discussed, challenged, and strengthened.",
    href: "#journey",
  },
  {
    title: "Initiatives",
    text: "Promising ideas can become structured efforts with real purpose.",
    href: "/initiatives",
  },
  {
    title: "Results",
    text: "What succeeds, what fails, and what is learned all have value.",
    href: "#journey",
  },
  {
    title: "Archives",
    text: "Knowledge is preserved so useful lessons are not lost.",
    href: "/archive",
  },
  {
    title: "Future Generations",
    text: "Preserved knowledge becomes a starting point for those who follow.",
    href: "#legacy",
  },
];

const contributionJourney = [
  {
    step: "01",
    title: "A Challenge Is Identified",
    text: "A person or community sees something worth improving.",
  },
  {
    step: "02",
    title: "An Idea Is Submitted",
    text: "Experience, creativity, and local knowledge enter the conversation.",
  },
  {
    step: "03",
    title: "The Community Discusses",
    text: "Ideas are questioned, refined, strengthened, or redirected.",
  },
  {
    step: "04",
    title: "Knowledge Is Added",
    text: "Research, experience, resources, and practical lessons are gathered.",
  },
  {
    step: "05",
    title: "An Initiative Can Form",
    text: "A worthwhile idea may become an organized effort with defined purpose.",
  },
  {
    step: "06",
    title: "Results Are Preserved",
    text: "Successes, failures, reasoning, and lessons become part of the record.",
  },
  {
    step: "07",
    title: "Knowledge Continues",
    text: "Others can learn from what came before instead of starting over.",
  },
];

export default function EcosystemPage() {
  return (
    <main className="ecosystem-page">
      {/* =========================================================
          SITE NAVIGATION
      ========================================================== */}
      <header className="site-header">
        <div className="nav-shell">
          <Link href="/" className="brand" aria-label="GoldTrack Rewards home">
            <span className="brand-name">GoldTrack Rewards</span>
            <span className="brand-tagline">
              Our Community. Our Initiatives. Our Legacy.
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/community">Our Community</Link>
            <Link href="/initiatives">Initiatives</Link>
            <Link href="/transparency">Transparency</Link>
            <Link href="/ecosystem" className="active">
              Ecosystem
            </Link>
            <Link href="/charter">The Charter</Link>
            <Link href="/news">News</Link>
          </nav>

          <Link href="/join" className="join-button">
            Join / Be Counted
          </Link>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="hero">
        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">THE GOLDTRACK REWARDS ECOSYSTEM</p>

            <h1>
              Everything has a place.
              <span>Everything has a purpose.</span>
            </h1>

            <p className="hero-intro">
              GoldTrack is designed as a living ecosystem where people, ideas,
              initiatives, knowledge, transparency, and stewardship strengthen
              one another over time.
            </p>

            <p className="hero-mission">
              The mission remains at the center. Everything else exists to
              serve it.
            </p>

            <div className="hero-actions">
              <a href="#connections" className="primary-button">
                Explore the Ecosystem
              </a>

              <Link href="/join" className="secondary-button">
                Join / Be Counted
              </Link>
            </div>
          </div>

          {/* Reserved storytelling image region.
              Later we can replace this artwork with a purpose-built image
              without moving the live text. */}
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-horizon" />

            <div className="community-core">
              <div className="core-ring core-ring-three" />
              <div className="core-ring core-ring-two" />
              <div className="core-ring core-ring-one" />
              <div className="core-center">
                <span>GTR</span>
                <small>MISSION</small>
              </div>
            </div>

            <div className="visual-label label-community">COMMUNITY</div>
            <div className="visual-label label-ideas">IDEAS</div>
            <div className="visual-label label-initiatives">INITIATIVES</div>
            <div className="visual-label label-knowledge">KNOWLEDGE</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW EVERYTHING CONNECTS
      ========================================================== */}
      <section className="section connections-section" id="connections">
        <div className="section-heading">
          <p className="eyebrow dark-eyebrow">HOW EVERYTHING CONNECTS</p>

          <h2>A cycle designed to strengthen itself.</h2>

          <p>
            The Ecosystem page is the map. The individual GoldTrack pages carry
            the deeper detail.
          </p>
        </div>

        <div className="connection-grid">
          {ecosystemFlow.map((item, index) => {
            const content = (
              <>
                <div className="node-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <span className="node-link">
                  {item.href.startsWith("/") ? "Explore" : "Learn more"} →
                </span>
              </>
            );

            return item.href.startsWith("/") ? (
              <Link href={item.href} className="connection-card" key={item.title}>
                {content}
              </Link>
            ) : (
              <a href={item.href} className="connection-card" key={item.title}>
                {content}
              </a>
            );
          })}
        </div>

        <div className="support-band">
          <div>
            <span className="support-icon">T</span>
            <strong>Transparency</strong>
            <p>People can see how work, decisions, and knowledge are handled.</p>
          </div>

          <div>
            <span className="support-icon">P</span>
            <strong>Participation</strong>
            <p>The system grows stronger when people have meaningful ways to contribute.</p>
          </div>

          <div>
            <span className="support-icon">S</span>
            <strong>Stewardship</strong>
            <p>Resources and knowledge are treated as responsibilities, not possessions.</p>
          </div>

          <div>
            <span className="support-icon">TR</span>
            <strong>Trust</strong>
            <p>Trust is earned through consistency, transparency, and time.</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY OF A CONTRIBUTION
      ========================================================== */}
      <section className="section journey-section" id="journey">
        <div className="section-heading light-heading">
          <p className="eyebrow">THE JOURNEY OF A CONTRIBUTION</p>

          <h2>An idea should have somewhere to go.</h2>

          <p>
            Participation becomes meaningful when people can understand what
            happens after they contribute.
          </p>
        </div>

        <div className="journey-line">
          {contributionJourney.map((item) => (
            <article className="journey-step" key={item.step}>
              <div className="journey-number">{item.step}</div>

              <div className="journey-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="journey-summary">
          A continuous cycle of learning, building, preserving, and improving.
        </p>
      </section>

      {/* =========================================================
          STORYTELLING / MOSAIC ZONE
      ========================================================== */}
      <section className="section story-section">
        <div className="section-heading">
          <p className="eyebrow dark-eyebrow">PEOPLE GIVE THE SYSTEM MEANING</p>

          <h2>The ecosystem is not the technology.</h2>

          <p>
            Technology can connect people and preserve information. The people,
            their experience, their ideas, and the work they choose to do are
            what give the system value.
          </p>
        </div>

        <div className="story-grid">
          <article className="story-panel story-large">
            <div className="story-art art-community">
              <div className="silhouette-group">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="story-copy">
              <p className="story-kicker">COMMUNITY</p>
              <h3>Different backgrounds. Different skills. One purpose.</h3>
              <p>
                Strong communities are built from people who do not all think,
                work, or live the same way.
              </p>
            </div>
          </article>

          <article className="story-panel">
            <div className="story-art art-ideas">
              <div className="idea-lines">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="story-copy">
              <p className="story-kicker">IDEAS</p>
              <h3>Knowledge becomes stronger when it is shared.</h3>
            </div>
          </article>

          <article className="story-panel">
            <div className="story-art art-work">
              <div className="work-symbol">◆</div>
            </div>

            <div className="story-copy">
              <p className="story-kicker">ACTION</p>
              <h3>Useful ideas deserve the opportunity to become useful work.</h3>
            </div>
          </article>

          <article className="story-panel story-wide" id="legacy">
            <div className="story-art art-legacy">
              <div className="mountain mountain-one" />
              <div className="mountain mountain-two" />
              <div className="sun" />
            </div>

            <div className="story-copy legacy-copy">
              <div>
                <p className="story-kicker">LEGACY</p>
                <h3>Leave the next generation more than a blank page.</h3>
              </div>

              <p>
                Preserve what worked. Preserve what failed. Preserve the
                reasoning. Then give others the freedom to build something
                better.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          MISSION CENTER
      ========================================================== */}
      <section className="mission-section">
        <div className="mission-orbit" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />

          <div className="mission-center">
            <small>THE CENTER</small>
            <strong>GTR</strong>
            <span>MISSION</span>
          </div>

          <span className="orbit-word word-community">People</span>
          <span className="orbit-word word-knowledge">Knowledge</span>
          <span className="orbit-word word-initiatives">Initiatives</span>
          <span className="orbit-word word-tools">Tools</span>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">THE MISSION REMAINS THE CENTER</p>

          <h2>
  Technology may change.
  <br />
  Systems may evolve.
  <br />
  The mission will never change.
</h2>

          <p>
            GoldTrack Rewards will embrace better tools as they become available, 
            strengthen its systems, and adopt new technologies while keeping the mission 
            firmly at the center of everything we do.
          </p>

          <p className="mission-quote">
            “The mission is the mission. The token is the tool.”
          </p>

          <div className="mission-links">
            <Link href="/about">Our Story →</Link>
            <Link href="/transparency">Transparency →</Link>
            <Link href="/charter">The Charter →</Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="final-section">
        <p className="eyebrow">OUR COMMUNITY. OUR INITIATIVES. OUR LEGACY.</p>

        <h2>Be part of the ecosystem.</h2>

        <p>
          You do not need to have every answer. Sometimes participation begins
          simply by showing up, being counted, and bringing what you know.
        </p>

        <Link href="/join" className="final-button">
          Join / Be Counted
        </Link>

        <Link href="/" className="home-link">
          Return Home
        </Link>
      </section>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #071722;
        }

        .ecosystem-page {
          --navy: #071b2a;
          --navy-deep: #04121c;
          --green: #0c5d45;
          --green-deep: #063c31;
          --cream: #f5eddc;
          --paper: #f4efe4;
          --gold: #d7a936;
          --gold-light: #f1ce72;
          --ink: #17232a;
          --muted: #68747a;

          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: Georgia, "Times New Roman", serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* ========================= HEADER ========================= */

        .site-header {
          position: relative;
          z-index: 20;
          background: var(--navy-deep);
          border-bottom: 1px solid rgba(215, 169, 54, 0.28);
        }

        .nav-shell {
          width: min(1500px, calc(100% - 48px));
          min-height: 106px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 32px;
        }

        .brand {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          color: var(--gold);
          font-size: clamp(24px, 2vw, 36px);
          font-weight: 700;
          line-height: 1;
        }

        .brand-tagline {
          margin-top: 7px;
          color: #fff;
          font-size: 13px;
        }

        .desktop-nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: clamp(18px, 2vw, 34px);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .desktop-nav a {
          padding: 10px 0;
          border-bottom: 2px solid transparent;
          transition:
            color 160ms ease,
            border-color 160ms ease;
        }

        .desktop-nav a:hover,
        .desktop-nav .active {
          color: var(--gold-light);
          border-color: var(--gold);
        }

        .join-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 12px;
          background: linear-gradient(180deg, #f1c960, #cf921d);
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        /* ========================= HERO ========================= */

        .hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 73% 32%,
              rgba(223, 180, 61, 0.34),
              transparent 28%
            ),
            linear-gradient(120deg, #061a29 0%, #0a3038 52%, #705a27 100%);
          color: #fff;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 170px;
          z-index: -1;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 0, 0, 0.27)
          );
        }

        .hero-light {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .hero-light-one {
          width: 440px;
          height: 440px;
          right: 10%;
          top: 5%;
          background: #dfb33b;
        }

        .hero-light-two {
          width: 300px;
          height: 300px;
          left: -100px;
          bottom: -100px;
          background: #0d7d65;
        }

        .hero-inner {
          width: min(1420px, calc(100% - 64px));
          min-height: 690px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 70px;
          padding: 85px 0;
        }

        .eyebrow {
          margin: 0 0 18px;
          color: var(--gold-light);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.17em;
        }

        .dark-eyebrow {
          color: #8b6818;
        }

        .hero h1 {
          max-width: 760px;
          margin: 0;
          font-size: clamp(56px, 6vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.035em;
          color: #f6d486;
        }

        .hero h1 span {
          display: block;
          margin-top: 12px;
          color: #fff;
          font-size: 0.62em;
          line-height: 1.06;
        }

        .hero-intro {
          max-width: 760px;
          margin: 34px 0 0;
          color: rgba(255, 255, 255, 0.93);
          font-size: 22px;
          line-height: 1.65;
        }

        .hero-mission {
          margin: 25px 0 0;
          color: var(--gold-light);
          font-size: 19px;
          font-style: italic;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 38px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 25px;
          border-radius: 9px;
          font-weight: 700;
          transition:
            transform 160ms ease,
            box-shadow 160ms ease;
        }

        .primary-button {
          background: linear-gradient(180deg, #ebc65e, #ca8b17);
          color: #13212a;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(5, 20, 29, 0.44);
          color: #fff;
          backdrop-filter: blur(10px);
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .hero-visual {
          position: relative;
          min-height: 500px;
          border: 1px solid rgba(247, 214, 129, 0.22);
          border-radius: 50% 50% 16% 16% / 52% 52% 14% 14%;
          overflow: hidden;
          background:
            linear-gradient(
              to top,
              rgba(2, 18, 24, 0.96) 0%,
              rgba(6, 55, 55, 0.5) 48%,
              rgba(232, 182, 64, 0.15) 100%
            );
          box-shadow:
            inset 0 0 70px rgba(225, 178, 57, 0.1),
            0 28px 65px rgba(0, 0, 0, 0.25);
        }

        .visual-horizon {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 90px;
          height: 150px;
          opacity: 0.6;
          background:
            linear-gradient(
              135deg,
              transparent 0 12%,
              rgba(30, 116, 87, 0.75) 13% 15%,
              transparent 16% 22%,
              rgba(34, 130, 96, 0.65) 23% 25%,
              transparent 26%
            ),
            linear-gradient(
              45deg,
              transparent 0 62%,
              rgba(209, 164, 58, 0.35) 63% 65%,
              transparent 66%
            );
        }

        .community-core {
          position: absolute;
          width: 300px;
          height: 300px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -46%);
        }

        .core-ring {
          position: absolute;
          border-radius: 50%;
          inset: 0;
          border: 1px solid rgba(237, 197, 91, 0.38);
        }

        .core-ring-two {
          inset: 34px;
        }

        .core-ring-one {
          inset: 70px;
        }

        .core-center {
          position: absolute;
          inset: 102px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: radial-gradient(circle, #d4a339, #8c6516);
          color: #071923;
          box-shadow: 0 0 55px rgba(226, 183, 70, 0.48);
        }

        .core-center span {
          font-size: 25px;
          font-weight: 800;
        }

        .core-center small {
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 0.12em;
          font-weight: 800;
        }

        .visual-label {
          position: absolute;
          padding: 9px 13px;
          border: 1px solid rgba(237, 196, 88, 0.26);
          border-radius: 999px;
          background: rgba(3, 20, 28, 0.68);
          color: #f5dfa3;
          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .label-community {
          left: 8%;
          top: 20%;
        }

        .label-ideas {
          right: 13%;
          top: 18%;
        }

        .label-initiatives {
          left: 9%;
          bottom: 18%;
        }

        .label-knowledge {
          right: 8%;
          bottom: 20%;
        }

        /* ========================= GENERAL ========================= */

        .section {
          padding: 105px 0;
        }

        .section-heading {
          width: min(850px, calc(100% - 48px));
          margin: 0 auto 58px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(38px, 4vw, 62px);
          line-height: 1.04;
          letter-spacing: -0.025em;
        }

        .section-heading > p:last-child {
          max-width: 760px;
          margin: 22px auto 0;
          color: #57656b;
          font-size: 19px;
          line-height: 1.7;
        }

        /* ========================= CONNECTIONS ========================= */

        .connections-section {
          background:
            linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)),
            radial-gradient(circle at 50% 0%, #ddc584 0, transparent 44%);
        }

        .connection-grid {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .connection-card {
          position: relative;
          min-height: 290px;
          padding: 30px;
          border: 1px solid #ded8c8;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 15px 35px rgba(20, 30, 35, 0.06);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .connection-card:hover {
          transform: translateY(-5px);
          border-color: #cba23d;
          box-shadow: 0 22px 45px rgba(20, 30, 35, 0.12);
        }

        .node-number {
          color: #c49a35;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .connection-card h3 {
          margin: 18px 0 11px;
          color: var(--navy);
          font-size: 28px;
        }

        .connection-card p {
          margin: 0;
          color: #607077;
          font-size: 16px;
          line-height: 1.65;
        }

        .node-link {
          position: absolute;
          left: 30px;
          bottom: 27px;
          color: #8c681d;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .support-band {
          width: min(1280px, calc(100% - 48px));
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          border: 1px solid rgba(215, 169, 54, 0.42);
          border-radius: 16px;
          background: var(--navy);
          color: #fff;
        }

        .support-band > div {
          min-height: 195px;
          padding: 28px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .support-band > div:last-child {
          border-right: 0;
        }

        .support-icon {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border: 1px solid rgba(239, 201, 102, 0.55);
          border-radius: 50%;
          color: var(--gold-light);
          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 900;
        }

        .support-band strong {
          display: block;
          color: var(--gold-light);
          font-size: 19px;
        }

        .support-band p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-family: Arial, sans-serif;
          font-size: 13px;
          line-height: 1.55;
        }

        /* ========================= JOURNEY ========================= */

        .journey-section {
          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(189, 145, 45, 0.2),
              transparent 30%
            ),
            var(--navy-deep);
          color: #fff;
        }

        .light-heading h2 {
          color: #fff;
        }

        .light-heading > p:last-child {
          color: rgba(255, 255, 255, 0.72);
        }

        .journey-line {
          position: relative;
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .journey-line::before {
          content: "";
          position: absolute;
          left: 31px;
          top: 28px;
          bottom: 28px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            #d5a836,
            rgba(213, 168, 54, 0.18)
          );
        }

        .journey-step {
          position: relative;
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 28px;
          padding: 0 0 42px;
        }

        .journey-number {
          position: relative;
          z-index: 2;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(232, 192, 85, 0.58);
          border-radius: 50%;
          background: var(--navy-deep);
          color: var(--gold-light);
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
        }

        .journey-copy {
          padding: 8px 0 0;
        }

        .journey-copy h3 {
          margin: 0;
          color: #fff;
          font-size: 26px;
        }

        .journey-copy p {
          max-width: 720px;
          margin: 9px 0 0;
          color: rgba(255, 255, 255, 0.67);
          font-size: 16px;
          line-height: 1.65;
        }

        .journey-summary {
          width: min(820px, calc(100% - 48px));
          margin: 24px auto 0;
          padding-top: 34px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--gold-light);
          text-align: center;
          font-size: 20px;
          font-style: italic;
        }

        /* ========================= STORY ========================= */

        .story-section {
          background: #eee8dc;
        }

        .story-grid {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 20px;
        }

        .story-panel {
          min-height: 390px;
          overflow: hidden;
          border: 1px solid #d6cfbf;
          border-radius: 19px;
          background: #fff;
          box-shadow: 0 18px 45px rgba(20, 30, 35, 0.08);
        }

        .story-large {
          grid-row: span 2;
        }

        .story-wide {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          min-height: 390px;
        }

        .story-art {
          position: relative;
          min-height: 245px;
          overflow: hidden;
        }

        .story-large .story-art {
          min-height: 580px;
        }

        .story-wide .story-art {
          min-height: 390px;
        }

        .art-community {
          background:
            radial-gradient(circle at 55% 30%, #ddbb68, transparent 20%),
            linear-gradient(150deg, #1b5860 0%, #0f333b 48%, #9a7735 100%);
        }

        .silhouette-group {
          position: absolute;
          inset: auto 12% 12%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 22px;
        }

        .silhouette-group span {
          position: relative;
          width: 52px;
          height: 125px;
          border-radius: 26px 26px 6px 6px;
          background: rgba(2, 15, 20, 0.75);
        }

        .silhouette-group span::before {
          content: "";
          position: absolute;
          width: 52px;
          height: 52px;
          left: 0;
          top: -34px;
          border-radius: 50%;
          background: inherit;
        }

        .silhouette-group span:nth-child(2),
        .silhouette-group span:nth-child(4) {
          height: 145px;
        }

        .silhouette-group span:nth-child(3) {
          height: 165px;
        }

        .art-ideas {
          background:
            radial-gradient(circle at 50% 50%, #e8c468 0 4%, transparent 5%),
            linear-gradient(135deg, #0b3440, #16705e);
        }

        .idea-lines {
          position: absolute;
          inset: 19%;
        }

        .idea-lines span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 115%;
          height: 1px;
          transform-origin: left center;
          background: rgba(239, 203, 105, 0.55);
        }

        .idea-lines span:nth-child(1) {
          transform: rotate(0deg);
        }

        .idea-lines span:nth-child(2) {
          transform: rotate(45deg);
        }

        .idea-lines span:nth-child(3) {
          transform: rotate(90deg);
        }

        .idea-lines span:nth-child(4) {
          transform: rotate(135deg);
        }

        .art-work {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #936e28, #162d35 70%);
        }

        .work-symbol {
          color: #f3cf78;
          font-size: 78px;
          text-shadow: 0 0 35px rgba(245, 207, 113, 0.42);
        }

        .art-legacy {
          background: linear-gradient(to bottom, #d9bd78, #8ab0a2 52%, #163e3a);
        }

        .sun {
          position: absolute;
          width: 80px;
          height: 80px;
          left: 20%;
          top: 17%;
          border-radius: 50%;
          background: #f3d98f;
          box-shadow: 0 0 50px rgba(243, 217, 143, 0.65);
        }

        .mountain {
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: -10%;
          height: 72%;
          clip-path: polygon(
            0 100%,
            15% 46%,
            27% 73%,
            43% 19%,
            56% 61%,
            70% 34%,
            100% 100%
          );
        }

        .mountain-one {
          background: #325e55;
          opacity: 0.9;
        }

        .mountain-two {
          bottom: -22%;
          background: #173c39;
        }
/* =========================================================
   ECOSYSTEM STORY MOSAIC — PRODUCTION ARTWORK
   One approved source image, four controlled crops.
   Live text remains separate.
========================================================= */

.story-art {
  background-image: url("/ecosystem-story-mosaic.png");
  background-repeat: no-repeat;
  background-size: 200% 200%;
}

/* Top-left quadrant: Community */
.art-community {
  background-position: 0% 0%;
}

/* Top-right quadrant: Ideas */
.art-ideas {
  background-position: 100% 0%;
}

/* Bottom-left quadrant: Action */
.art-work {
  background-position: 0% 100%;
}

/* Bottom-right quadrant: Legacy */
.art-legacy {
  background-position: 100% 100%;
}

/* Hide the temporary coded illustration pieces */
.story-art > * {
  display: none;
}s  
        .story-copy {
          padding: 27px 30px 32px;
        }

        .story-kicker {
          margin: 0 0 8px;
          color: #98701d;
          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .story-copy h3 {
          margin: 0;
          color: var(--navy);
          font-size: 27px;
          line-height: 1.15;
        }

        .story-copy > p:last-child {
          margin: 13px 0 0;
          color: #667176;
          font-size: 15px;
          line-height: 1.6;
        }

        .legacy-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 45px;
        }

        /* ========================= MISSION ========================= */

        .mission-section {
          padding: 115px max(32px, calc((100% - 1280px) / 2));
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 100px;
          background:
            radial-gradient(
              circle at 20% 50%,
              rgba(213, 168, 54, 0.17),
              transparent 32%
            ),
            var(--navy);
          color: #fff;
        }

        .mission-orbit {
          position: relative;
          width: min(500px, 100%);
          aspect-ratio: 1;
          margin: auto;
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(235, 197, 95, 0.35);
          border-radius: 50%;
        }

        .orbit-one {
          inset: 7%;
        }

        .orbit-two {
          inset: 20%;
        }

        .orbit-three {
          inset: 33%;
        }

        .mission-center {
          position: absolute;
          inset: 38%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(145deg, #d4a538, #8e6513);
          color: #071923;
          box-shadow: 0 0 45px rgba(215, 169, 54, 0.32);
        }

        .mission-center small,
        .mission-center span {
          font-family: Arial, sans-serif;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .mission-center strong {
          font-size: 30px;
        }

        .orbit-word {
          position: absolute;
          padding: 8px 11px;
          border: 1px solid rgba(239, 201, 101, 0.22);
          border-radius: 999px;
          background: rgba(3, 16, 24, 0.84);
          color: #f1d486;
          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 800;
        }

        .word-community {
          left: 0;
          top: 47%;
        }

        .word-knowledge {
          right: 1%;
          top: 47%;
        }

        .word-initiatives {
          left: 42%;
          top: 1%;
        }

        .word-tools {
          left: 45%;
          bottom: 1%;
        }

        .mission-copy h2 {
          max-width: 720px;
          margin: 0;
          color: #fff;
          font-size: clamp(42px, 4.6vw, 70px);
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .mission-copy > p:not(.eyebrow):not(.mission-quote) {
          max-width: 700px;
          margin: 27px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          line-height: 1.7;
        }

        .mission-quote {
          margin: 30px 0 0;
          color: var(--gold-light);
          font-size: 26px;
          font-style: italic;
        }

        .mission-links {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          margin-top: 34px;
          color: var(--gold-light);
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ========================= FINAL CTA ========================= */

        .final-section {
          padding: 115px 24px;
          background:
            radial-gradient(circle at center top, #f4df9f 0, transparent 33%),
            #eee7d6;
          text-align: center;
        }

        .final-section h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(46px, 5vw, 76px);
          letter-spacing: -0.03em;
        }

        .final-section > p:not(.eyebrow) {
          max-width: 720px;
          margin: 23px auto 0;
          color: #5c686d;
          font-size: 19px;
          line-height: 1.7;
        }

        .final-button {
          display: table;
          margin: 35px auto 0;
          padding: 16px 31px;
          border-radius: 10px;
          background: linear-gradient(180deg, #ecc75e, #c98b1c);
          color: #10222c;
          font-weight: 800;
          box-shadow: 0 13px 35px rgba(80, 57, 12, 0.17);
        }

        .home-link {
          display: table;
          margin: 24px auto 0;
          color: #70541a;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ========================= RESPONSIVE ========================= */

        @media (max-width: 1180px) {
          .desktop-nav {
            display: none;
          }

          .nav-shell {
            grid-template-columns: 1fr auto;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            padding-top: 70px;
          }

          .hero-copy {
            max-width: 900px;
          }

          .hero-visual {
            width: min(720px, 100%);
            margin: 0 auto;
          }

          .connection-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .support-band {
            grid-template-columns: repeat(2, 1fr);
          }

          .support-band > div:nth-child(2) {
            border-right: 0;
          }

          .support-band > div:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mission-section {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .mission-copy {
            text-align: center;
          }

          .mission-copy > p:not(.eyebrow):not(.mission-quote) {
            margin-left: auto;
            margin-right: auto;
          }

          .mission-links {
            justify-content: center;
          }
        }

        @media (max-width: 820px) {
          .nav-shell,
          .hero-inner,
          .connection-grid,
          .support-band,
          .journey-line,
          .story-grid {
            width: min(100% - 32px, 1280px);
          }

          .nav-shell {
            min-height: 90px;
          }

          .brand-name {
            font-size: 24px;
          }

          .brand-tagline {
            display: none;
          }

          .join-button {
            min-height: 43px;
            padding: 0 16px;
            font-size: 13px;
          }

          .hero-inner {
            gap: 45px;
            padding: 65px 0;
          }

          .hero h1 {
            font-size: clamp(48px, 14vw, 72px);
          }

          .hero-intro {
            font-size: 18px;
          }

          .hero-visual {
            min-height: 430px;
          }

          .connection-grid {
            grid-template-columns: 1fr;
          }

          .support-band {
            grid-template-columns: 1fr;
          }

          .support-band > div {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .support-band > div:last-child {
            border-bottom: 0;
          }

          .story-grid {
            grid-template-columns: 1fr;
          }

          .story-large {
            grid-row: auto;
          }

          .story-large .story-art {
            min-height: 390px;
          }

          .story-wide {
            grid-column: auto;
            grid-template-columns: 1fr;
          }

          .story-wide .story-art {
            min-height: 320px;
          }

          .legacy-copy {
            padding: 32px;
          }

          .mission-section {
            padding: 90px 24px;
          }

          .mission-orbit {
            max-width: 390px;
          }
        }

        @media (max-width: 520px) {
          .brand-name {
            font-size: 20px;
          }

          .join-button {
            padding: 0 12px;
          }

          .hero h1 {
            font-size: 46px;
          }

          .hero h1 span {
            font-size: 0.7em;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .hero-visual {
            min-height: 360px;
          }

          .community-core {
            transform: translate(-50%, -46%) scale(0.78);
          }

          .visual-label {
            font-size: 8px;
          }

          .section {
            padding: 78px 0;
          }

          .section-heading {
            width: min(100% - 32px, 850px);
            margin-bottom: 40px;
          }

          .section-heading h2 {
            font-size: 38px;
          }

          .connection-card {
            min-height: 270px;
          }

          .journey-step {
            grid-template-columns: 54px 1fr;
            gap: 18px;
          }

          .journey-line::before {
            left: 26px;
          }

          .journey-number {
            width: 54px;
            height: 54px;
          }

          .mission-copy h2 {
            font-size: 42px;
          }

          .mission-quote {
            font-size: 22px;
          }

          .orbit-word {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(html) {
            scroll-behavior: auto;
          }

          .connection-card,
          .primary-button,
          .secondary-button {
            transition: none;
          }
        }
      `}</style>
            <style jsx global>{`
        /* =========================================================
           ECOSYSTEM — NEXT LINK STYLE BRIDGE
           Keeps styles contained to this page.
        ========================================================== */

        .ecosystem-page .brand,
        .ecosystem-page .join-button,
        .ecosystem-page .secondary-button,
        .ecosystem-page .connection-card,
        .ecosystem-page .final-button,
        .ecosystem-page .home-link,
        .ecosystem-page .mission-links a,
        .ecosystem-page .desktop-nav a {
          text-decoration: none;
        }

        .ecosystem-page .brand {
          display: flex;
          flex-direction: column;
          color: inherit;
        }

        .ecosystem-page .join-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 12px;
          background: linear-gradient(180deg, #f1c960, #cf921d);
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .ecosystem-page .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 25px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 9px;
          background: rgba(5, 20, 29, 0.44);
          color: #fff;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        .ecosystem-page .desktop-nav a {
          padding: 10px 0;
          border-bottom: 2px solid transparent;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .ecosystem-page .desktop-nav a:hover,
        .ecosystem-page .desktop-nav a.active {
          color: #f1ce72;
          border-bottom-color: #d7a936;
        }

        .ecosystem-page .connection-card {
          position: relative;
          display: block;
          min-height: 290px;
          padding: 30px;
          border: 1px solid #ded8c8;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.8);
          color: inherit;
          box-shadow: 0 15px 35px rgba(20, 30, 35, 0.06);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .ecosystem-page .connection-card:hover {
          transform: translateY(-5px);
          border-color: #cba23d;
          box-shadow: 0 22px 45px rgba(20, 30, 35, 0.12);
        }

        .ecosystem-page .connection-card h3 {
          margin: 18px 0 11px;
          color: #071b2a;
          font-size: 28px;
        }

        .ecosystem-page .connection-card p {
          margin: 0;
          color: #607077;
          font-size: 16px;
          line-height: 1.65;
        }

        .ecosystem-page .final-button {
          display: table;
          margin: 35px auto 0;
          padding: 16px 31px;
          border-radius: 10px;
          background: linear-gradient(180deg, #ecc75e, #c98b1c);
          color: #10222c;
          font-weight: 800;
          box-shadow: 0 13px 35px rgba(80, 57, 12, 0.17);
        }

        .ecosystem-page .home-link {
          display: table;
          margin: 24px auto 0;
          color: #70541a;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ecosystem-page .mission-links a {
          color: #f1ce72;
        }
      `}</style>
    </main>
  );
}