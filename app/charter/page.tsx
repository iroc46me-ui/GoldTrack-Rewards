export default function CharterPage() {
  const green = "#123b2f";
  const dark = "#26352e";
  const gold = "#9a6815";
  const brown = "#6d4818";
  const cream = "#f1cf73";
  const ivory = "#f7eed8";

  const nav = [
    ["About", "/about"],
    ["How It Works", "/how-it-works"],
    ["The Charter", "/charter"],
    ["Our Community", "/community"],
    ["Initiatives", "/initiatives"],
    ["Transparency", "/transparency"],
    ["News", "/news"],
  ];

  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        background: "#17130f",
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
        {/* =========================================================
            MASTER BACKGROUND
        ========================================================== */}
        <img
          src="/charter-image.png"
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

        {/* =========================================================
            SVG OVERLAY
            Uses exact same 1024 × 1536 coordinate system.
        ========================================================== */}
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
          {/* =======================================================
              HEADER
          ======================================================== */}

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
              fill={cream}
            >
              GoldTrack Rewards
            </text>

            <text
              x="109"
              y="67"
              fontFamily="Georgia, serif"
              fontSize="7"
              fontWeight="700"
              fill={ivory}
            >
              OUR COMMUNITY. OUR INITIATIVES. OUR LEGACY.
            </text>
          </a>

          {/* NAVIGATION */}

          {nav.map(([label, href], i) => (
            <a key={label} href={href} style={{ cursor: "pointer" }}>
              <text
                x={360 + i * 73}
                y="54"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="8.2"
                fontWeight="700"
                fill={label === "The Charter" ? cream : ivory}
              >
                {label}
              </text>

              {label === "The Charter" && (
                <line
                  x1={332 + i * 73}
                  y1="61"
                  x2={388 + i * 73}
                  y2="61"
                  stroke={gold}
                  strokeWidth="1.5"
                />
              )}
            </a>
          ))}

          <a href="/join" style={{ cursor: "pointer" }}>
            <rect
              x="858"
              y="29"
              width="137"
              height="42"
              rx="7"
              fill="#073f2e"
              stroke={gold}
              strokeWidth="2"
            />

            <text
              x="926.5"
              y="55"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="10"
              fontWeight="700"
              fill={cream}
            >
              Join / Be Counted
            </text>
          </a>

          {/* =======================================================
              HERO LEFT
          ======================================================== */}

          <text
            x="58"
            y="130"
            fontFamily="Georgia, serif"
            fontSize="50"
            fontWeight="700"
            fill={cream}
            stroke="#3a230e"
            strokeWidth=".45"
          >
            The Charter
          </text>

          <text
            x="60"
            y="165"
            fontFamily="Georgia, serif"
            fontSize="19"
            fontWeight="700"
            fill={ivory}
          >
            The mission is the mission.
          </text>

          <TextBlock
            x={60}
            y={198}
            lines={[
              "The Charter preserves why GoldTrack Rewards exists,",
              "what it stands for, and what future generations",
              "are asked to protect.",
            ]}
            fontSize={11}
            fill={ivory}
          />

          {/* HERO BUTTONS */}

          <Button
            x={60}
            y={256}
            width={122}
            label="Read The Charter"
            href="#charter-content"
            gold={gold}
            cream={cream}
          />

          <Button
            x={194}
            y={256}
            width={150}
            label="Download Charter PDF"
            href="/documents/gtr-charter.pdf"
            gold={gold}
            cream={cream}
          />

          
          {/* PARCHMENT HANDWRITING */}
<g
  transform="translate(805 400) rotate(-7)"
  style={{ pointerEvents: "none" }}
>
  <text
    x="0"
    y="0"
    fill="#24170d"
    fontFamily="'Brush Script MT', 'Segoe Script', cursive"
    fontSize="17"
    fontWeight="500"
    fontStyle="italic"
    textAnchor="middle"
  >
    <tspan x="0" dy="0">
      Working together today,
    </tspan>

    <tspan x="0" dy="28">
      for our future tomorrow.
    </tspan>
  </text>

  <path
  d="M -70 40 C -28 49, 28 48, 70 37"
  fill="none"
  stroke="#24170d"
  strokeWidth="1.4"
  strokeLinecap="round"
  opacity="0.8"
/>
</g>

          {/* =======================================================
              PARCHMENT LABEL
          ======================================================== */}

          <text
            x="800"
            y="175"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="18"
            fontWeight="700"
            fill={brown}
          >
            THE CHARTER
          </text>

          <TextBlock
            x={800}
            y={203}
            anchor="middle"
            lines={[
              "A shared promise.",
              "A living record.",
              "A guide for what endures.",
            ]}
            fontSize={10}
            fill={brown}
          />

          {/* =======================================================
              CENTRAL CHARTER CONTENT PANEL
          ======================================================== */}

          <g id="charter-content">
            <rect
              x="74"
              y="690"
              width="876"
              height="436"
              rx="16"
              fill="#08241c"
              fillOpacity=".78"
              stroke="#c79a3b"
              strokeWidth="1.5"
            />

            <text
              x="512"
              y="716"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="15"
              fontWeight="700"
              letterSpacing="3"
              fill={cream}
            >
              THE GOLDTRACK REWARDS CHARTER
            </text>

            <text
              x="512"
              y="752"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="30"
              fontWeight="700"
              fill={cream}
            >
              What We Promise To Preserve
            </text>

            {/* COLUMN 1 */}

            <CharterItem
              x={115}
              y={810}
              number="1."
              title="Declaration"
              lines={[
                "GoldTrack Rewards was created from the belief",
                "that people can work together to address",
                "meaningful challenges, share knowledge,",
                "create opportunities, and strengthen communities.",
              ]}
              cream={cream}
              ivory={ivory}
            />

            <CharterItem
              x={115}
              y={926}
              number="3."
              title="Vision"
              lines={[
                "A worldwide community connected by shared",
                "purpose, strengthened through participation,",
                "stewardship, transparency, and the belief",
                "that what we build should remain useful.",
              ]}
              cream={cream}
              ivory={ivory}
            />

            <CharterItem
              x={115}
              y={1042}
              number="5."
              title="Participation"
              lines={[
                "There is no wrong way to participate.",
                "People may learn, share ideas, build, mentor,",
                "organize, preserve, support, or simply",
                "remain informed and connected.",
              ]}
              cream={cream}
              ivory={ivory}
            />

            {/* COLUMN 2 */}

            <CharterItem
              x={560}
              y={810}
              number="2."
              title="Purpose"
              lines={[
                "We exist to help people work together more",
                "effectively through participation, transparency,",
                "shared knowledge, meaningful contribution,",
                "and responsible stewardship.",
              ]}
              cream={cream}
              ivory={ivory}
            />

            <CharterItem
              x={560}
              y={926}
              number="4."
              title="Stewardship"
              lines={[
                "Stewardship means protecting what is valuable,",
                "improving what can be better, preserving what",
                "is learned, and passing useful knowledge",
                "forward to those who follow.",
              ]}
              cream={cream}
              ivory={ivory}
            />

            <CharterItem
              x={560}
              y={1042}
              number="6."
              title="Legacy"
              lines={[
                "Future generations are not expected merely",
                "to copy what came before. They are invited",
                "to learn from it, improve it, and build upon",
                "what they inherit.",
              ]}
              cream={cream}
              ivory={ivory}
            />
          </g>

          {/* =======================================================
              TIME MESSAGE
          ======================================================== */}

          <text
            x="512"
            y="1197"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="30"
            fontWeight="700"
            fill={cream}
            stroke="#2c1c0e"
            strokeWidth=".45"
          >
            The Test of All Things Is Time
          </text>

          <TextBlock
            x={512}
            y={1228}
            anchor="middle"
            lines={[
              "Some ideas survive because they are exciting.",
              "Others survive because they are useful.",
              "What we build today should remain valuable tomorrow.",
            ]}
            fontSize={11}
            fill={ivory}
          />

          {/* =======================================================
              OUR PROMISE PANEL
          ======================================================== */}

          <rect
            x="126"
            y="1277"
            width="772"
            height="150"
            rx="16"
            fill="#08241c"
            fillOpacity=".78"
            stroke="#c79a3b"
            strokeWidth="1.4"
          />

          <text
            x="512"
            y="1314"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="26"
            fontWeight="700"
            fill={cream}
          >
            Our Promise
          </text>

          <PromiseLine
            x={165}
            y={1344}
            text="We choose long-term sustainability over short-term excitement."
            cream={cream}
            ivory={ivory}
          />

          <PromiseLine
            x={165}
            y={1371}
            text="We preserve knowledge for those who follow."
            cream={cream}
            ivory={ivory}
          />

          <PromiseLine
            x={165}
            y={1398}
            text="We remain transparent, accountable, and worthy of trust."
            cream={cream}
            ivory={ivory}
          />

          <PromiseLine
            x={535}
            y={1344}
            text="We strengthen communities through participation."
            cream={cream}
            ivory={ivory}
          />

          <PromiseLine
            x={535}
            y={1371}
            text="We steward resources responsibly."
            cream={cream}
            ivory={ivory}
          />

          <PromiseLine
            x={535}
            y={1398}
            text="The mission remains larger than any one person."
            cream={cream}
            ivory={ivory}
          />

          {/* =======================================================
              FINAL CTA
          ======================================================== */}

          <text
            x="512"
            y="1463"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="26"
            fontWeight="700"
            fill={cream}
          >
            Together, We Build What Endures.
          </text>

          <text
            x="512"
            y="1488"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="10"
            fontWeight="600"
            fill={ivory}
          >
            Different places. Different stories. One shared mission.
          </text>

          <a href="/join" style={{ cursor: "pointer" }}>
            <rect
              x="385"
              y="1501"
              width="254"
              height="29"
              rx="7"
              fill="#c89636"
              stroke="#f0cd7a"
              strokeWidth="1.4"
            />

            <text
              x="512"
              y="1521"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="11"
              fontWeight="700"
              fill="#143025"
            >
              Join / Be Counted
            </text>
          </a>
        </svg>
      </div>
    </main>
  );
}

/* =========================================================
   HELPERS
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
          dy={i === 0 ? 0 : fontSize * 1.4}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

function Button({
  x,
  y,
  width,
  label,
  href,
  gold,
  cream,
}: {
  x: number;
  y: number;
  width: number;
  label: string;
  href: string;
  gold: string;
  cream: string;
}) {
  return (
    <a href={href} style={{ cursor: "pointer" }}>
      <rect
        x={x}
        y={y}
        width={width}
        height="35"
        rx="6"
        fill="#073f2e"
        fillOpacity=".92"
        stroke={gold}
        strokeWidth="1.7"
      />

      <text
        x={x + width / 2}
        y={y + 22}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="9.5"
        fontWeight="700"
        fill={cream}
      >
        {label}
      </text>
    </a>
  );
}

function CharterItem({
  x,
  y,
  number,
  title,
  lines,
  cream,
  ivory,
}: {
  x: number;
  y: number;
  number: string;
  title: string;
  lines: string[];
  cream: string;
  ivory: string;
}) {
  return (
    <g>
      <text
        x={x}
        y={y}
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill={cream}
      >
        {number} {title}
      </text>

      <TextBlock
        x={x}
        y={y + 26}
        lines={lines}
        fontSize={9.5}
        fill={ivory}
      />
    </g>
  );
}

function PromiseLine({
  x,
  y,
  text,
  cream,
  ivory,
}: {
  x: number;
  y: number;
  text: string;
  cream: string;
  ivory: string;
}) {
  return (
    <g>
      <text
        x={x}
        y={y}
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="700"
        fill={cream}
      >
        ◆
      </text>

      <text
        x={x + 22}
        y={y}
        fontFamily="Georgia, serif"
        fontSize="9"
        fontWeight="600"
        fill={ivory}
      >
        {text}
      </text>
    </g>
  );
}