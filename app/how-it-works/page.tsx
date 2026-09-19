import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "People & Participation",
    text: "GoldTrack begins with people. Token ownership is not required to belong. People can participate through ideas, experience, knowledge, time, resources, professional assistance, or GTR.",
  },
  {
    number: "02",
    title: "Bring Forward a Community Idea",
    text: "Anyone can identify a need or opportunity and submit an idea. The proposal explains the problem, the community it would serve, who benefits, and what the applicant believes could be accomplished.",
  },
  {
    number: "03",
    title: "The Community-Benefit Test",
    text: "GoldTrack supports community advancement—not private-benefit requests disguised as community projects.",
    quote: "Who does this help beyond the people asking for help?",
  },
  {
    number: "04",
    title: "Develop What Has Potential",
    text: "Not every worthwhile idea arrives finished. A proposal with potential can be developed. An idea that does not yet provide sufficient community benefit can be shelved rather than discarded in case it can later become something worthwhile.",
  },
  {
    number: "05",
    title: "Verify Community Authority",
    text: "A good idea for a community is not automatically an idea approved by that community. Anyone may submit an idea, but before GoldTrack commits resources requiring community approval, the appropriate elected officials, authorized organizations, agencies, property owners, or responsible representatives must be identified and their authority and support independently verified.",
  },
  {
    number: "06",
    title: "Protect Community Assets",
    text: "GoldTrack verifies ownership, control, conflicts of interest, and the eventual disposition of significant assets before resources are committed.",
    quote:
      "GoldTrack resources intended for community benefit must not become private assets or private windfalls.",
  },
  {
    number: "07",
    title: "Due Diligence",
    text: "Authority, identity, ownership, budgets, conflicts, vendors, other funding, feasibility, and appropriate safeguards are examined before approval.",
    quote: "MISSION TEST — Should GoldTrack do this?\nINTEGRITY TEST — Can GoldTrack safely do this?",
  },
  {
    number: "08",
    title: "Determine What Help Is Actually Needed",
    text: "Not every worthwhile idea needs money. GoldTrack may provide counsel, expertise, connections, resources, funding, or a combination of them.",
    quote:
      "What does this initiative actually need to have a reasonable chance of succeeding?",
  },
  {
    number: "09",
    title: "GTR Provides Economic Capability",
    text: "GTR is designed to provide economic capability within the GoldTrack ecosystem. It can support participation, utility, approved initiatives, and the resources necessary for GoldTrack to do its work. Token participation remains voluntary. Its function is not.",
    quote: "The token is the tool that will support our mission.",
  },
  {
    number: "10",
    title: "An Idea Becomes an Initiative",
    text: "An approved proposal receives defined objectives, responsibilities, budgets, and measurable milestones. Resources can be released in controlled stages, and vendors can be paid directly where appropriate rather than simply transferring unrestricted funds.",
    quote: "Idea → Plan → Milestones → Action",
  },
  {
    number: "11",
    title: "Accomplish, Measure & Account",
    text: "What was accomplished? Who benefited? What was spent? Were the milestones achieved? What worked? What failed? What should change next time?",
    quote: "Success is demonstrated, not merely announced.",
  },
  {
    number: "12",
    title: "Recognize Participation & Achievement",
    text: "GoldTrack Rewards recognizes the people who helped. Participation, stewardship, expertise, initiative accomplishments, and qualifying GTR participation can carry recognition and achievement distinctions.",
    quote: "It is not simply what somebody owned. It is what people helped accomplish.",
  },
  {
    number: "13",
    title: "Transparency",
    text: "The community should be able to see what GoldTrack supported, why it was approved, what resources were committed, and what happened. Successes belong in that record. Failures do too.",
  },
  {
    number: "14",
    title: "Preserve the Knowledge",
    text: "The proposal, decisions, accomplishments, problems, and useful lessons enter GoldTrack's Living Archive. An unsuccessful experiment is not erased merely because it failed. Someone else may learn precisely what not to do.",
  },
  {
    number: "15",
    title: "Return What We Learned to the Community",
    text: "Every completed initiative leaves something behind: an accomplishment, a lesson, or both. That knowledge returns to the community, where it can inspire another person to recognize a possibility and bring forward the next idea.",
    quote: "“I have an idea.”",
  },
];

export default function HowItWorksPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 0%, #173e32 0%, #0b2a23 28%, #061b18 68%, #041411 100%)",
        color: "#f6f0df",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "24px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          borderBottom: "1px solid rgba(216,177,88,.24)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#e4c36e",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: ".04em",
          }}
        >
          GOLDTRACK REWARDS
        </Link>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: "18px",
            fontSize: "14px",
          }}
        >
          <Link href="/about" style={navLink}>
            About
          </Link>
          <Link href="/community" style={navLink}>
            Our Community
          </Link>
          <Link href="/initiatives" style={navLink}>
            Initiatives
          </Link>
          <Link href="/transparency" style={navLink}>
            Transparency
          </Link>
          <Link href="/charter" style={navLink}>
            The Charter
          </Link>
          <Link href="/join" style={joinNav}>
            Join / Be Counted
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "105px 28px 90px",
          textAlign: "center",
        }}
      >
        <div style={eyebrow}>HOW GOLDTRACK REWARDS WORKS</div>

        <h1
          style={{
            margin: "18px 0 24px",
            fontSize: "clamp(44px, 7vw, 78px)",
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: "-.025em",
          }}
        >
          From an idea
          <br />
          <span style={{ color: "#e2bd61" }}>to community advancement.</span>
        </h1>

        <p
          style={{
            maxWidth: "790px",
            margin: "0 auto",
            fontSize: "clamp(18px, 2.2vw, 23px)",
            lineHeight: 1.7,
            color: "#ddd5c1",
          }}
        >
          Ideas become participation. Participation creates opportunity. GTR
          provides the means to help move worthy community ideas forward. What
          we accomplish—and what we learn—returns to the community.
        </p>

        <div
          style={{
            margin: "42px auto 0",
            maxWidth: "700px",
            padding: "24px 28px",
            borderTop: "1px solid rgba(226,189,97,.45)",
            borderBottom: "1px solid rgba(226,189,97,.45)",
            color: "#f1d88d",
            fontSize: "clamp(21px, 3vw, 30px)",
            fontStyle: "italic",
          }}
        >
          The mission is the mission. The token is the tool.
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          background: "#eee5cf",
          color: "#17261f",
          padding: "68px 28px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ ...eyebrow, color: "#8b651d" }}>
            ONE CONTINUING CYCLE
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              margin: "16px 0 20px",
            }}
          >
            Good ideas should have a path forward.
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "19px",
              lineHeight: 1.8,
              color: "#445148",
            }}
          >
            GoldTrack provides a process for bringing forward community ideas,
            examining them carefully, protecting the community and its
            resources, determining what help is actually needed, and preserving
            what is learned for the people who come next.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "85px 28px 100px",
        }}
      >
        <div style={{ display: "grid", gap: "22px" }}>
          {steps.map((step) => (
            <article
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "90px minmax(0, 1fr)",
                gap: "24px",
                padding: "34px",
                border: "1px solid rgba(216,177,88,.28)",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,.055), rgba(255,255,255,.018))",
                boxShadow: "0 18px 50px rgba(0,0,0,.16)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid rgba(226,189,97,.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e2bd61",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {step.number}
              </div>

              <div>
                <h2
                  style={{
                    margin: "2px 0 12px",
                    color: "#f3dfaa",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    maxWidth: "880px",
                    color: "#d8d4c8",
                    fontSize: "17px",
                    lineHeight: 1.8,
                  }}
                >
                  {step.text}
                </p>

                {step.quote && (
                  <div
                    style={{
                      whiteSpace: "pre-line",
                      marginTop: "20px",
                      padding: "17px 20px",
                      borderLeft: "3px solid #d9b458",
                      background: "rgba(0,0,0,.15)",
                      color: "#f0d992",
                      fontSize: "18px",
                      lineHeight: 1.65,
                      fontStyle: "italic",
                    }}
                  >
                    {step.quote}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LOOP */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(238,229,207,.98), rgba(223,211,181,.98))",
          color: "#14231c",
          padding: "85px 28px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ ...eyebrow, color: "#8b651d" }}>
            THE GOLDTRACK LOOP
          </div>

          <h2
            style={{
              margin: "16px 0 34px",
              fontSize: "clamp(34px, 5vw, 54px)",
            }}
          >
            What we learn goes back to the people.
          </h2>

          <div
            style={{
              padding: "30px",
              border: "1px solid rgba(104,76,25,.32)",
              borderRadius: "16px",
              background: "rgba(255,255,255,.35)",
              fontSize: "17px",
              lineHeight: 2,
              fontWeight: 700,
              letterSpacing: ".025em",
            }}
          >
            PEOPLE → IDEA → COMMUNITY BENEFIT → AUTHORIZATION → PROTECTION →
            REVIEW → GTR &amp; RESOURCES → INITIATIVE → ACCOMPLISHMENT →
            RECOGNITION → TRANSPARENCY → ARCHIVE → KNOWLEDGE → PEOPLE
          </div>

          <p
            style={{
              margin: "30px 0 0",
              fontSize: "26px",
              fontStyle: "italic",
              color: "#76551c",
            }}
          >
            And the loop continues.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "95px 28px 110px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(34px, 5vw, 54px)",
            color: "#f4e5b9",
          }}
        >
          Every idea matters.
          <br />
          Every contribution counts.
        </h2>

        <p
          style={{
            maxWidth: "680px",
            margin: "22px auto 38px",
            color: "#d2cdbc",
            fontSize: "18px",
            lineHeight: 1.75,
          }}
        >
          Bring forward an idea. Help strengthen one. Participate in the
          community. What we accomplish together becomes part of what GoldTrack
          leaves behind.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <Link href="/join" style={primaryButton}>
            Join / Be Counted
          </Link>

          <Link href="/initiatives" style={secondaryButton}>
            Explore Initiatives
          </Link>

          <Link href="/ideas" style={secondaryButton}>
            Submit an Idea
          </Link>
        </div>

        <p
          style={{
            marginTop: "55px",
            color: "#a9a597",
            fontSize: "14px",
          }}
        >
          People first. Purpose driven. Knowledge preserved. Future focused.
        </p>
      </section>
    </main>
  );
}

const navLink = {
  color: "#ddd6c4",
  textDecoration: "none",
  padding: "9px 2px",
};

const joinNav = {
  color: "#10231d",
  textDecoration: "none",
  padding: "9px 15px",
  borderRadius: "8px",
  background: "linear-gradient(180deg,#efd77f,#c99c38)",
  fontWeight: 700,
};

const eyebrow = {
  color: "#d9b458",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: ".2em",
};

const primaryButton = {
  display: "inline-block",
  padding: "15px 24px",
  borderRadius: "9px",
  background: "linear-gradient(180deg,#efd77f,#c99c38)",
  color: "#10231d",
  textDecoration: "none",
  fontWeight: 700,
  boxShadow: "0 8px 25px rgba(0,0,0,.22)",
};

const secondaryButton = {
  display: "inline-block",
  padding: "14px 23px",
  borderRadius: "9px",
  border: "1px solid rgba(222,188,103,.65)",
  color: "#f1d991",
  textDecoration: "none",
  fontWeight: 700,
  background: "rgba(255,255,255,.025)",
};