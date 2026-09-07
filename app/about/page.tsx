export default function AboutPage() {
  const green = "#123b2f";
  const dark = "#26352e";
  const gold = "#9a6815";
  const brown = "#6d4818";
  const cream = "#f1cf73";

  const nav = [
    ["About", "/about"],
    ["How It Works", "/how-it-works"],
    ["Our Community", "/community"],
    ["Initiatives", "/initiatives"],
    ["Transparency", "/transparency"],
    ["Ecosystem", "/ecosystem"],
    ["The Charter", "/charter"],
    ["News", "/news"],
  ];

  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        background: "#18140e",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1024px",
          aspectRatio: "1024 / 1536",
          margin: "0 auto",
        }}
      >
        {/* EXACT BACKGROUND */}
        <img
          src="/about-background.png"
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

        {/* =====================================================
            SVG OVERLAY
            Same coordinate system as the 1024 × 1536 image.
        ====================================================== */}

        <svg
          viewBox="0 0 1024 1536"
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          {/* ===================================================
              HEADER / LOGO
          ==================================================== */}

          <a href="/" style={{ cursor: "pointer" }}>
            <circle
              cx="70"
              cy="58"
              r="28"
              fill="#073b2d"
              stroke={gold}
              strokeWidth="2"
            />

            <text
              x="70"
              y="64"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="18"
              fontWeight="700"
              fill={cream}
            >
              GTR
            </text>

            <text
              x="108"
              y="51"
              fontFamily="Georgia, serif"
              fontSize="18"
              fontWeight="700"
              fill={gold}
            >
              GoldTrack Rewards
            </text>

            <text
              x="109"
              y="67"
              fontFamily="Georgia, serif"
              fontSize="7"
              fontWeight="700"
              fill={dark}
            >
              OUR COMMUNITY. OUR INITIATIVES. OUR LEGACY.
            </text>
          </a>

          {/* NAVIGATION */}

          {nav.map(([label, href], i) => (
            <a key={label} href={href} style={{ cursor: "pointer" }}>
              <text
                x={365 + i * 58}
                y="55"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="9"
                fontWeight="700"
                fill={label === "About" ? gold : dark}
              >
                {label}
              </text>
            </a>
          ))}

          <a href="/join" style={{ cursor: "pointer" }}>
            <rect
              x="868"
              y="34"
              width="124"
              height="39"
              rx="7"
              fill="#073f2e"
              stroke={gold}
              strokeWidth="2"
            />

            <text
              x="930"
              y="58"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="10"
              fontWeight="700"
              fill={cream}
            >
              Join / Be Counted
            </text>
          </a>

          {/* ===================================================
              HERO
          ==================================================== */}

          <text
            x="67"
            y="111"
            fontFamily="Georgia, serif"
            fontSize="12"
            fontWeight="700"
            letterSpacing="4"
            fill={brown}
          >
            ABOUT
          </text>

          <text
            x="67"
            y="161"
            fontFamily="Georgia, serif"
            fontSize="48"
            fontWeight="700"
            fill={green}
          >
            GoldTrack
          </text>

          <text
            x="67"
            y="206"
            fontFamily="Georgia, serif"
            fontSize="48"
            fontWeight="700"
            fill={green}
          >
            Rewards
          </text>

          <text
            x="68"
            y="231"
            fontFamily="Georgia, serif"
            fontSize="12"
            fontWeight="700"
            fill={brown}
          >
            OUR STORY. OUR PURPOSE. OUR PROMISE.
          </text>

          <TextBlock
            x={68}
            y={257}
            width={430}
            lines={[
              "GoldTrack Rewards is a community-driven ecosystem built around",
              "people, participation, knowledge, stewardship, meaningful ideas,",
              "and the belief that what we build today can serve those who follow.",
            ]}
            fontSize={11}
            fill={dark}
          />

          {/* ===================================================
              MISSION PLAQUE
          ==================================================== */}

          <text
            x="890"
            y="139"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="13"
            fontWeight="700"
            fill={brown}
          >
            OUR MISSION
          </text>

          <text
            x="890"
            y="158"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="13"
            fontWeight="700"
            fill={brown}
          >
            IS THE MISSION.
          </text>

          <line
            x1="858"
            y1="184"
            x2="922"
            y2="184"
            stroke={gold}
            strokeWidth="1"
          />

          <text
            x="890"
            y="222"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="13"
            fontWeight="700"
            fill={brown}
          >
            THE TOKEN
          </text>

          <text
            x="890"
            y="241"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="13"
            fontWeight="700"
            fill={brown}
          >
            IS THE TOOL.
          </text>

          <text
            x="635"
            y="430"
            fontFamily="Georgia, serif"
            fontSize="15"
            fontWeight="700"
            fontStyle="italic"
            fill={cream}
            stroke="#422c13"
            strokeWidth=".25"
          >
            “People. Purpose. A Brighter Tomorrow.”
          </text>

          {/* ===================================================
              OUR STORY
          ==================================================== */}

          <text
            x="512"
            y="507"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="28"
            fontWeight="700"
            fill={gold}
          >
            Our Story
          </text>

          <TextBlock
            x={512}
            y={531}
            width={600}
            anchor="middle"
            lines={[
              "We empower people to participate, share ideas, preserve knowledge, support initiatives,",
              "and help build something meaningful for future generations.",
            ]}
            fontSize={10}
            fill={dark}
          />

          {/* STORY COL 1 */}

          <text
            x="177"
            y="583"
            textAnchor="middle"
            fontSize="22"
            fill={gold}
          >
            ●●●
          </text>

          <SectionTitle x={177} y={610} text="Global Community" />

          <TextBlock
            x={177}
            y={629}
            anchor="middle"
            width={170}
            lines={[
              "People from many places,",
              "backgrounds, and experiences.",
            ]}
            fontSize={10}
            fill={dark}
          />

          {/* STORY COL 2 */}

          <text
            x="400"
            y="583"
            textAnchor="middle"
            fontSize="23"
            fill={gold}
          >
            ◆
          </text>

          <SectionTitle x={400} y={610} text="Purpose Driven" />

          <TextBlock
            x={400}
            y={629}
            anchor="middle"
            width={170}
            lines={[
              "Meaningful ideas become",
              "useful action.",
            ]}
            fontSize={10}
            fill={dark}
          />

          {/* STORY COL 3 */}

          <text
            x="625"
            y="582"
            textAnchor="middle"
            fontSize="27"
            fill={gold}
          >
            □
          </text>

          <SectionTitle x={625} y={610} text="Transparency" />

          <TextBlock
            x={625}
            y={629}
            anchor="middle"
            width={170}
            lines={[
              "We operate openly and",
              "preserve the record.",
            ]}
            fontSize={10}
            fill={dark}
          />

          {/* STORY COL 4 */}

          <text
            x="847"
            y="584"
            textAnchor="middle"
            fontSize="28"
            fill={gold}
          >
            ★
          </text>

          <SectionTitle x={847} y={610} text="Recognition" />

          <TextBlock
            x={847}
            y={629}
            anchor="middle"
            width={170}
            lines={[
              "Every meaningful",
              "contribution matters.",
            ]}
            fontSize={10}
            fill={dark}
          />

          {/* ===================================================
              WHY GOLDTRACK EXISTS
          ==================================================== */}

          <text
            x="67"
            y="760"
            fontFamily="Georgia, serif"
            fontSize="24"
            fontWeight="700"
            fill={gold}
          >
            Why GoldTrack Rewards Exists
          </text>

          <TextBlock
            x={68}
            y={792}
            width={390}
            lines={[
              "GoldTrack Rewards was created to encourage participation,",
              "preserve useful knowledge, recognize meaningful contributions,",
              "and support practical ideas that strengthen communities.",
            ]}
            fontSize={10}
            fill={dark}
          />

          <TextBlock
            x={68}
            y={853}
            width={395}
            lines={[
              "The mission remains the mission. The token is one tool",
              "that may support that mission.",
            ]}
            fontSize={10}
            fontWeight={700}
            fill={brown}
          />

          {/* SIX CELLS */}

          <MiniCell
            x={584}
            y={755}
            icon="▣"
            title="Knowledge Access"
            lines={["Helpful resources", "and learning."]}
          />

          <MiniCell
            x={739}
            y={755}
            icon="◉"
            title="Shared Ideas"
            lines={["Community ideas", "worth exploring."]}
          />

          <MiniCell
            x={893}
            y={755}
            icon="▤"
            title="Future Transparency"
            lines={["Open information", "and clear records."]}
          />

          <MiniCell
            x={584}
            y={842}
            icon="◆"
            title="Recognize Meaning"
            lines={["Contributions should", "matter."]}
          />

          <MiniCell
            x={739}
            y={842}
            icon="❧"
            title="Preserve Knowledge"
            lines={["Save what may help", "others."]}
          />

          <MiniCell
            x={893}
            y={842}
            icon="▲"
            title="Build A Legacy"
            lines={["Create something", "worth continuing."]}
          />

          {/* ===================================================
              GUIDING PRINCIPLES
          ==================================================== */}

          <text
            x="512"
            y="994"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="28"
            fontWeight="700"
            fill={gold}
          >
            Our Guiding Principles
          </text>

          {/* LEFT */}

          <Principle
            icon="♥"
            x={145}
            y={1049}
            title="Service"
            lines={[
              "We serve people and",
              "future generations.",
            ]}
          />

          <Principle
            icon="⚖"
            x={145}
            y={1132}
            title="Integrity"
            lines={[
              "We act with honesty,",
              "fairness, and transparency.",
            ]}
          />

          {/* CENTER */}

          <Principle
            icon="♣"
            x={460}
            y={1049}
            title="Stewardship"
            lines={[
              "We protect what matters and",
              "preserve what may help those",
              "who follow.",
            ]}
          />

          <Principle
            icon="●●●"
            x={460}
            y={1132}
            title="Community"
            lines={[
              "Participation is our strength.",
              "Every contribution has value.",
            ]}
          />

          {/* RIGHT */}

          <Principle
            icon="✥"
            x={768}
            y={1049}
            title="Legacy"
            lines={[
              "We build beyond today and",
              "preserve useful knowledge",
              "for tomorrow.",
            ]}
          />

          <Principle
            icon="◆"
            x={730}
            y={1132}
            title="Community Before Currency"
            lines={[
              "Our mission is not driven by money alone.",
              "Community remains at the heart",
              "of everything we build.",
            ]}
          />

          {/* ===================================================
              FOUNDER
          ==================================================== */}

          <text
            x="155"
            y="1286"
            fontFamily="Georgia, serif"
            fontSize="26"
            fontWeight="700"
            fill={gold}
          >
            Meet The Founder
          </text>

          <TextBlock
            x={105}
            y={1318}
            width={390}
            lines={[
              "GoldTrack Rewards began with the belief that people, knowledge,",
              "participation, stewardship, and future opportunities could be",
              "connected in one lasting ecosystem.",
            ]}
            fontSize={10}
            fill={dark}
          />

          <text
            x="15 I'm a little layer background text color boxes functioning buttons do it now in three step recess of one image so I can see it5"
            y="1389"
            fontFamily="Georgia, serif"
            fontSize="15"
            fontWeight="700"
            fontStyle="italic"
            fill={gold}
          >
            “Thank you for being here.”
          </text>

          {/* ===================================================
              JOIN PANEL
          ==================================================== */}

          <text
            x="767"
            y="1288"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="21"
            fontWeight="700"
            fill={gold}
          >
            Join · Be Counted · Participate
          </text>

          <TextBlock
            x={767}
            y={1323}
            anchor="middle"
            width={390}
            lines={[
              "Every participant brings something different.",
              "Your place in the mission begins simply by choosing to take part.",
            ]}
            fontSize={10}
            fill={dark}
          />

          <a href="/join" style={{ cursor: "pointer" }}>
            <rect
              x="656"
              y="1362"
              width="222"
              height="49"
              rx="8"
              fill="#073f2e"
              stroke={gold}
              strokeWidth="2"
            />

            <text
              x="767"
              y="1393"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="13"
              fontWeight="700"
              fill={cream}
            >
              Join Our Community →
            </text>
          </a>

          {/* RETURN HOME */}

          <a href="/" style={{ cursor: "pointer" }}>
            <text
              x="512"
              y="1472"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="9"
              fontWeight="600"
              fill={brown}
            >
              Return to GoldTrack Rewards
            </text>
          </a>
        </svg>
      </div>
    </main>
  );
}

/* =========================================================
   SVG HELPERS
========================================================= */

function TextBlock({
  x,
  y,
  lines,
  fontSize = 10,
  fill = "#26352e",
  fontWeight = 500,
  anchor = "start",
}: {
  x: number;
  y: number;
  width?: number;
  lines: string[];
  fontSize?: number;
  fill?: string;
  fontWeight?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill={fill}
    >
      {lines.map((line, i) => (
        <tspan
          key={i}
          x={x}
          dy={i === 0 ? 0 : fontSize * 1.35}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

function SectionTitle({
  x,
  y,
  text,
}: {
  x: number;
  y: number;
  text: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="13"
      fontWeight="700"
      fill="#8c5d16"
    >
      {text}
    </text>
  );
}

function MiniCell({
  x,
  y,
  icon,
  title,
  lines,
}: {
  x: number;
  y: number;
  icon: string;
  title: string;
  lines: string[];
}) {
  return (
    <g>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="700"
        fill="#9a6815"
      >
        {icon}
      </text>

      <text
        x={x}
        y={y + 26}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="10"
        fontWeight="700"
        fill="#875a15"
      >
        {title}
      </text>

      <TextBlock
        x={x}
        y={y + 43}
        anchor="middle"
        lines={lines}
        fontSize={8}
        fontWeight={500}
        fill="#26352e"
      />
    </g>
  );
}

function Principle({
  x,
  y,
  icon,
  title,
  lines,
}: {
  x: number;
  y: number;
  icon: string;
  title: string;
  lines: string[];
}) {
  return (
    <g>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="23"
        fontWeight="700"
        fill="#9a6815"
      >
        {icon}
      </text>

      <text
        x={x + 38}
        y={y - 3}
        fontFamily="Georgia, serif"
        fontSize="13"
        fontWeight="700"
        fill="#875a15"
      >
        {title}
      </text>

      <TextBlock
        x={x + 38}
        y={y + 17}
        lines={lines}
        fontSize={9}
        fontWeight={500}
        fill="#26352e" 
      />
    </g>
  );
} 