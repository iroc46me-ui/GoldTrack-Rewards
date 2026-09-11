"use client";

import { useMemo, useState } from "react";
import ArchivePage from "../../components/gtr/ArchivePage";

const libraryItems = [
  "Initiatives & Projects",
  "Community Stories",
  "Ideas & Innovation",
  "Tools & Resources",
  "Research & Knowledge",
  "Places & People",
  "Reports & Documents",
  "Lessons & Insights",
];

export default function TransparencyPage() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return libraryItems;

    return libraryItems.filter((item) =>
      item.toLowerCase().includes(q)
    );
  }, [search]);

const scrollToMasterY = (masterY: number) => {
  const master = document.querySelector(
    ".archive-master"
  ) as SVGSVGElement | null;

  if (!master) return;

  const rect = master.getBoundingClientRect();

  const pageY =
    window.scrollY +
    rect.top +
    (masterY / 1536) * rect.height -
    70;

  window.scrollTo({
    top: pageY,
    behavior: "smooth",
  });
};
  
  return (
    <ArchivePage
  background="/transparency.png"
  ariaLabel="GoldTrack Rewards Transparency Archive"
>
      

        {/* =====================================================
            HEADER
        ===================================================== */}
        <g id="header">
          <text x="108" y="30" className="gold brand">
            GoldTrack Rewards
          </text>

          <text x="108" y="47" className="cream brandSub">
            Real Rewards for a Brighter Tomorrow
          </text>

          <g className="nav">
            <a href="/about">
              <text x="305" y="33">About</text>
            </a>

            <a href="/how-it-works">
              <text x="360" y="33">How It Works</text>
            </a>

            <a href="/community">
              <text x="442" y="33">Our Community</text>
            </a>

            <a href="/initiatives">
              <text x="535" y="33">Initiatives</text>
            </a>

            <a href="/transparency">
              <text x="605" y="33">Transparency</text>
            </a>

            <a href="/charter">
              <text x="685" y="33">The Charter</text>
            </a>

            <a href="/news">
              <text x="759" y="33">News</text>
            </a>
          </g>

          <a href="/join">
            <text
              x="927"
              y="34"
              textAnchor="middle"
              className="joinText"
            >
              Join / Be Counted
            </text>
          </a>
        </g>

        {/* =====================================================
            HERO
        ===================================================== */}
        <g id="hero">
          <text x="82" y="132" className="heroWhite">
            TRANSPARENCY
          </text>

          <text x="137" y="184" className="heroGold">
            ARCHIVE
          </text>

          <text x="91" y="218" className="heroCopy">
            <tspan x="91">Preserving knowledge, lessons, milestones,</tspan>
            <tspan x="91" dy="23">
              and initiatives for those who follow.
            </tspan>
          </text>

          <text
            x="927"
            y="106"
            textAnchor="middle"
            className="rightHero"
          >
            <tspan x="927">KNOWLEDGE</tspan>
            <tspan x="927" dy="25">TODAY</tspan>
            <tspan x="927" dy="25">A BRIGHTER</tspan>
            <tspan x="927" dy="25">TOMORROW</tspan>
          </text>
        </g>

        {/* =====================================================
            FOUR PRIMARY ARCHIVE ACTIONS
            Only these are primary functional archive buttons.
        ===================================================== */}
        <g id="primary-actions">
  {/* BROWSE ARCHIVE */}
  
    <a href="/archive">
    
    <rect
      x="33"
      y="270"
      width="232"
      height="63"
      rx="10"
      fill="transparent"
      pointerEvents="all"
    />

    <text
      x="149"
      y="315"
      textAnchor="middle"
      className="actionTitle"
    >
      Browse Archive
    </text>

    <text
      x="149"
      y="336"
      textAnchor="middle"
      className="actionSub"
    >
      Explore the records
    </text>
  </a>

  {/* INITIATIVE RECORDS */}
  <a href="/initiatives">
    <rect
      x="280"
      y="270"
      width="224"
      height="63"
      rx="10"
      fill="transparent"
      pointerEvents="all"
    />

    <text
      x="392"
      y="315"
      textAnchor="middle"
      className="actionTitle"
    >
      Initiative Records
    </text>

    <text
      x="392"
      y="336"
      textAnchor="middle"
      className="actionSub"
    >
      View initiatives
    </text>
  </a>

  {/* COMMUNITY HISTORY */}
  
    <a href="/community-history">
    
    <rect
      x="518"
      y="270"
      width="228"
      height="63"
      rx="10"
      fill="transparent"
      pointerEvents="all"
    />

    <text
      x="632"
      y="315"
      textAnchor="middle"
      className="actionTitle"
    >
      Community History
    </text>

    <text
      x="632"
      y="336"
      textAnchor="middle"
      className="actionSub"
    >
      Our shared journey
    </text>
  </a>

  {/* GOVERNANCE RECORDS */}
  
    <a href="/governance">
    
    <rect
      x="760"
      y="270"
      width="231"
      height="63"
      rx="10"
      fill="transparent"
      pointerEvents="all"
    />

    <text
      x="875"
      y="315"
      textAnchor="middle"
      className="actionTitle"
    >
      Governance Records
    </text>

    <text
      x="875"
      y="336"
      textAnchor="middle"
      className="actionSub"
    >
      Decisions &amp; stewardship
    </text>
  </a>
</g>
        {/* =====================================================
            WHY PRESERVE
        ===================================================== */}
        <g id="why-preserve">
          <text x="38" y="391" className="sectionTitle">
            WHY WE PRESERVE KNOWLEDGE
          </text>

          <text x="98" y="424" className="body">
            <tspan x="98">
              Knowledge is one of the few resources
            </tspan>
            <tspan x="98" dy="18">
              that grows when shared.
            </tspan>
          </text>

          <text x="98" y="476" className="body">
            <tspan x="98">
              Documentation helps future members
            </tspan>
            <tspan x="98" dy="18">
              understand what was tried, what worked,
            </tspan>
            <tspan x="98" dy="18">
              and what was learned.
            </tspan>
          </text>

          <text x="98" y="541" className="body">
            <tspan x="98">
              When a lesson is preserved, future
            </tspan>
            <tspan x="98" dy="18">
              generations do not have to begin again.
            </tspan>
          </text>
        </g>

        {/* =====================================================
            WHAT IS PRESERVED
            INFORMATIONAL — NOT SIX MORE BUTTONS
        ===================================================== */}
        <g id="preserved">
          <text
            x="512"
            y="611"
            textAnchor="middle"
            className="sectionTitle"
          >
            WHAT IS PRESERVED IN THE ARCHIVE?
          </text>

          <ArchiveCard
            x={107}
            title1="Community"
            title2="Milestones"
            lines={[
              "Important moments",
              "that shaped our",
              "community and its",
              "direction.",
            ]}
          />

          <ArchiveCard
            x={267}
            title1="Initiative"
            title2="Records"
            lines={[
              "Projects explored,",
              "developed, completed,",
              "or carried forward.",
            ]}
          />

          <ArchiveCard
            x={429}
            title1="Ideas"
            title2="Archive"
            lines={[
              "Ideas submitted by",
              "community members",
              "and how they",
              "developed.",
            ]}
          />

          <ArchiveCard
            x={590}
            title1="Resource"
            title2="Library"
            lines={[
              "Research, guides,",
              "references, and",
              "useful documents.",
            ]}
          />

          <g id="governance">
            <ArchiveCard
              x={753}
              title1="Governance"
              title2="Records"
              lines={[
                "Important decisions,",
                "policies, stewardship",
                "reports, and explanations.",
              ]}
            />
          </g>

          <ArchiveCard
            x={915}
            title1="Community"
            title2="Contributions"
            lines={[
              "Lessons, stories,",
              "knowledge, and",
              "experience shared",
              "by participants.",
            ]}
          />
        </g>

        {/* =====================================================
            LIFE OF KNOWLEDGE
        ===================================================== */}
        <g id="life">
          <text x="46" y="840" className="sectionTitle">
            THE LIFE OF KNOWLEDGE
          </text>

          {[
            ["Experience", 876],
            ["Observation", 905],
            ["Ideas", 934],
            ["Discussion", 963],
            ["Initiatives", 992],
            ["Results", 1021],
            ["Archive", 1050],
            ["Future Generations", 1079],
          ].map(([label, y]) => (
            <text
              key={label}
              x="93"
              y={Number(y)}
              className="lifeText"
            >
              {label}
            </text>
          ))}

          <text
            x="270"
            y="1038"
            textAnchor="middle"
            className="treeText"
          >
            <tspan x="270">Every idea today</tspan>
            <tspan x="270" dy="17">plants the possibilities</tspan>
            <tspan x="270" dy="17">of tomorrow.</tspan>
          </text>
        </g>

        {/* =====================================================
            LESSONS
        ===================================================== */}
        <g id="lessons" transform="translate(0 -18)">
          <text
            x="512"
            y="840"
            textAnchor="middle"
            className="sectionTitle"
          >
            LESSONS LEARNED
          </text>

          <text
            x="437"
            y="884"
            textAnchor="middle"
            className="lessonHeading"
          >
            SUCCESS
          </text>

          <text
            x="437"
            y="959"
            textAnchor="middle"
            className="lessonCopy"
          >
            <tspan x="437">We preserve</tspan>
            <tspan x="437" dy="18">what worked</tspan>
            <tspan x="437" dy="18">so others can</tspan>
            <tspan x="437" dy="18">build upon it.</tspan>
          </text>

          <text
            x="587"
            y="884"
            textAnchor="middle"
            className="lessonHeading"
          >
            FAILURE
          </text>

          <text
            x="587"
            y="959"
            textAnchor="middle"
            className="lessonCopy"
          >
            <tspan x="587">We preserve</tspan>
            <tspan x="587" dy="18">what failed</tspan>
            <tspan x="587" dy="18">so the same lesson</tspan>
            <tspan x="587" dy="18">does not have to</tspan>
            <tspan x="587" dy="18">be paid for twice.</tspan>
          </text>

          <text
            x="512"
            y="1057"
            textAnchor="middle"
            className="lessonBottom"
          >
            <tspan x="512">Real progress comes</tspan>
            <tspan x="512" dy="17">
              from both success and failure.
            </tspan>
            <tspan x="512" dy="17">
              Each lesson moves us forward.
            </tspan>
          </text>
        </g>

        {/* =====================================================
            REAL HTML SEARCH INSIDE SAME SVG COORDINATE SYSTEM
        ===================================================== */}
        <foreignObject
          id="library"
          x="684"
          y="824"
          width="318"
          height="260"
        >
          <div className="libraryPanel">
            <h2>COMMUNITY LIBRARY</h2>

            <p>
              Search topics, explore records, and follow
              <br />
              the development of our community.
            </p>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the archive..."
            />

            <div className="libraryGrid">
              {filteredItems.map((item) => (
                <button type="button" key={item}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </foreignObject>

        {/* =====================================================
            TIMELINE
        ===================================================== */}
        <g id="timeline" transform="translate(0 -18)">
          <text
            x="512"
            y="1122"
            textAnchor="middle"
            className="sectionTitle"
          >
            HISTORICAL TIMELINE
          </text>

          <TimelineItem
            x={94}
            title="The Foundation"
            lines={["Our community", "begins to take shape."]}
          />

          <TimelineItem
            x={220}
            title="Growth & Connection"
            lines={[
              "More members,",
              "more ideas, stronger",
              "collaboration.",
            ]}
          />

          <TimelineItem
            x={347}
            title="Expansion"
            lines={[
              "New initiatives,",
              "wider reach,",
              "greater impact.",
            ]}
          />

          <TimelineItem
            x={473}
            title="Impact & Reach"
            lines={[
              "Real-world progress",
              "and measurable",
              "results.",
            ]}
          />

          <TimelineItem
            x={600}
            title="Legacy Building"
            lines={[
              "A lasting foundation",
              "for future",
              "generations.",
            ]}
          />

          <TimelineItem
            x={727}
            title="The Future"
            lines={[
              "A stronger world",
              "through shared",
              "knowledge.",
            ]}
          />
        </g>

        {/* =====================================================
            TIME
        ===================================================== */}
        <g id="time" transform="translate(0 -14)">
          <text
            x="512"
            y="1262"
            textAnchor="middle"
            className="timeTitle"
          >
            “THE TEST OF ALL THINGS IS TIME.”
          </text>

          <text x="316" y="1332" textAnchor="middle" className="nightCopy">
            <tspan x="316">Some ideas survive</tspan>
            <tspan x="316" dy="18">because they are lasting.</tspan>
          </text>

          <text x="512" y="1332" textAnchor="middle" className="nightCopy">
            <tspan x="512">Others evolve</tspan>
            <tspan x="512" dy="18">because they are useful.</tspan>
          </text>

          <text x="705" y="1332" textAnchor="middle" className="nightCopy">
            <tspan x="705">The rest become lessons</tspan>
            <tspan x="705" dy="18">for those who follow.</tspan>
          </text>
        </g>

        {/* =====================================================
            COMMITMENT
        ===================================================== */}
        <g id="commitment">
          <text
            x="397"
            y="1410"
            textAnchor="middle"
            className="commitmentHeading"
          >
            OUR COMMITMENT TO FUTURE GENERATIONS
          </text>

          <FooterStatement
            x={107}
            lines={["We preserve knowledge", "for those who follow."]}
          />

          <FooterStatement
            x={282}
            lines={["We document lessons", "so others may learn."]}
          />

          <FooterStatement
            x={462}
            lines={[
              "We support ideas whose",
              "value may not yet be",
              "understood.",
            ]}
          />

          <FooterStatement
            x={640}
            lines={[
              "That is our commitment",
              "to future generations.",
            ]}
          />

          <text
            x="862"
            y="1433"
            textAnchor="middle"
            className="closingCopy"
          >
            <tspan x="862">Together, we build. Together,</tspan>
            <tspan x="862" dy="18">we learn. Together, we leave</tspan>
            <tspan x="862" dy="18">a legacy that lasts.</tspan>
          </text>

          <a
  href="#library"
  onClick={(event) => {
    event.preventDefault();
    scrollToMasterY(810);
  }}
  aria-label="Explore the Archive"
>
  <rect
    x="741"
    y="1448"
    width="243"
    height="62"
    rx="9"
    fill="transparent"
    pointerEvents="all"
  />
</a>
        </g>
      

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          padding: 12px 0 28px;
          background: #101010;
        }

        .archive-master {
          display: block;
          width: min(96vw, 1024px);
          height: auto;
          margin: 0 auto;
        }

        .archive-master text {
          font-family: Georgia, "Times New Roman", serif;
        }

        .archive-master a {
          cursor: pointer;
          text-decoration: none;
        }

        .gold {
          fill: #e2b044;
        }

        .cream {
          fill: #fff0cf;
        }

        .brand {
          font-size: 17px;
          font-weight: 700;
        }

        .brandSub {
          font-family: Arial, sans-serif !important;
          font-size: 9px;
          font-weight: 700;
        }

        .nav text {
          fill: #f7eccb;
          font-family: Arial, sans-serif !important;
          font-size: 9px;
          font-weight: 700;
        }

        .joinText {
          fill: #142238;
          font-size: 13px;
          font-weight: 800;
        }

        .heroWhite {
          fill: #fff1d2;
          font-size: 45px;
          font-weight: 800;
        }

        .heroGold {
          fill: #dfaa37;
          font-size: 50px;
          font-weight: 800;
        }

        .heroCopy {
          fill: #fff1d2;
          font-size: 18px;
          font-weight: 700;
        }

        .rightHero {
          fill: #dfae3c;
          font-size: 14px;
          font-weight: 700;
        }

        .actionTitle {
          fill: #fff1d0;
          font-size: 15px;
          font-weight: 800;
        }

        .actionSub {
          fill: #fff1d0;
          font-family: Arial, sans-serif !important;
          font-size: 10px;
          font-weight: 600;
        }

        .sectionTitle {
          fill: #102b49;
          font-size: 20px;
          font-weight: 800;
        }

        .body {
          fill: #192530;
          font-size: 14px;
          font-weight: 700;
        }

        .cardTitle {
          fill: #102b49;
          font-size: 15px;
          font-weight: 800;
        }

        .cardCopy {
          fill: #20282c;
          font-size: 11px;
        }

        .lifeText {
          fill: #18252d;
          font-size: 13px;
          font-weight: 700;
        }

        .treeText {
          fill: #fff1d0;
          font-size: 11px;
          font-weight: 700;
        }

        .lessonHeading {
          fill: #fff1d0;
          font-size: 14px;
        }

        .lessonCopy {
          fill: #fff1d0;
          font-size: 12px;
        }

        .lessonBottom {
          fill: #20262b;
          font-size: 12px;
          font-weight: 700;
        }

        .timelineTitle {
          fill: #182530;
          font-size: 11px;
          font-weight: 700;
        }

        .timelineCopy {
          fill: #20282d;
          font-size: 10px;
        }

        .timeTitle {
          fill: #e8b63d;
          font-size: 23px;
          font-weight: 800;
        }

        .nightCopy {
          fill: #fff1d0;
          font-size: 12px;
          font-weight: 700;
        }

        .commitmentHeading {
          fill: #fff1d0;
          font-size: 19px;
        }

        .footerStatement {
          fill: #fff1d0;
          font-size: 11px;
        }

        .closingCopy {
          fill: #fff1d0;
          font-size: 11px;
        }

        .explore {
  fill: #e8b63d;
  font-size: 14px;
  font-weight: 800;
}

.exploreSub {
  fill: #fff1d0;
  font-size: 10px;
  font-weight: 700;
}

        .libraryPanel {
          width: 100%;
          height: 100%;
          color: #132846;
          text-align: center;
          font-family: Georgia, "Times New Roman", serif;
        }

        .libraryPanel h2 {
          margin: 0 0 7px;
          font-size: 20px;
        }

        .libraryPanel p {
          margin: 0 0 8px;
          font-size: 11px;
          line-height: 1.25;
          color: #20282d;
        }

        .libraryPanel input {
          width: 94%;
          height: 31px;
          padding: 0 12px;
          border: 0;
          background: transparent;
          outline: none;
          color: #26332f;
          font-size: 11px;
        }

        .libraryGrid {
          width: 94%;
          margin: 8px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 10px;
        }

        .libraryGrid button {
          height: 26px;
          border: 0;
          background: transparent;
          color: #173250;
          font-family: Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .master a:hover text,
        .libraryGrid button:hover {
          filter: brightness(1.15);
        }
      `}</style>
    </ArchivePage>
  );
}

function ArchiveCard({
  x,
  title1,
  title2,
  lines,
}: {
  x: number;
  title1: string;
  title2: string;
  lines: string[];
}) {
  return (
    <g>
      <text
        x={x}
        y="703"
        textAnchor="middle"
        className="cardTitle"
      >
        <tspan x={x}>{title1}</tspan>
        <tspan x={x} dy="17">
          {title2}
        </tspan>
      </text>

      <text
        x={x}
        y="754"
        textAnchor="middle"
        className="cardCopy"
      >
        {lines.map((line, index) => (
          <tspan
            key={`${line}-${index}`}
            x={x}
            dy={index === 0 ? 0 : 15}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function TimelineItem({
  x,
  title,
  lines,
}: {
  x: number;
  title: string;
  lines: string[];
}) {
  return (
    <g>
      <text
        x={x}
        y="1172"
        textAnchor="middle"
        className="timelineTitle"
      >
        {title}
      </text>

      <text
        x={x}
        y="1200"
        textAnchor="middle"
        className="timelineCopy"
      >
        {lines.map((line, index) => (
          <tspan
            key={`${line}-${index}`}
            x={x}
            dy={index === 0 ? 0 : 14}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function FooterStatement({
  x,
  lines,
}: {
  x: number;
  lines: string[];
}) {
  return (
    <text
      x={x}
      y="1474"
      textAnchor="middle"
      className="footerStatement"
    >
      {lines.map((line, index) => (
        <tspan
          key={`${line}-${index}`}
          x={x}
          dy={index === 0 ? 0 : 15}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}