export default function InitiativesPage() {
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
    <main style={{ background: "#f8f1df", color: "#071827", fontFamily: "Georgia, serif" }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 32px", background: "#071827", color: "white"
      }}>
        <div>
          <div style={{ fontSize: "28px", color: "#d6a536", fontWeight: "bold" }}>GoldTrack Rewards</div>
          <div style={{ fontSize: "14px" }}>Our Community. Our Initiatives. Our Legacy.</div>
        </div>

        <div style={{ display: "flex", gap: "22px", alignItems: "center", flexWrap: "wrap" }}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} style={{
              color: label === "Initiatives" ? "#d6a536" : "white",
              textDecoration: "none",
              borderBottom: label === "Initiatives" ? "2px solid #d6a536" : "none",
              paddingBottom: "6px"
            }}>
              {label}
            </a>
          ))}
          <a href="/join" style={{
            background: "linear-gradient(180deg,#f2c85b,#b77b18)",
            color: "#071827", padding: "12px 18px", borderRadius: "10px",
            textDecoration: "none", fontWeight: "bold"
          }}>
            Join / Be Counted
          </a>
        </div>
      </nav>

      <section style={{
        minHeight: "430px",
        padding: "70px 40px",
        background:
          "linear-gradient(90deg, rgba(7,24,39,.92), rgba(7,24,39,.55), rgba(248,241,223,.1)), radial-gradient(circle at 75% 35%, #d6a536 0, transparent 22%), linear-gradient(135deg,#10253b,#d9b86b,#f8f1df)",
        color: "white"
      }}>
        <div style={{ maxWidth: "760px" }}>
          <h1 style={{ fontSize: "76px", margin: "0 0 10px", color: "#f2d28a" }}>
            Active Initiatives
          </h1>
          <h2 style={{ fontSize: "30px", margin: "0 0 24px" }}>
            Meaningful challenges require meaningful effort.
          </h2>
          <p style={{ fontSize: "21px", lineHeight: 1.5 }}>
            Together we explore, develop, test, refine, and steward initiatives that may benefit
            individuals, communities, and future generations.
          </p>

          <div style={{ display: "flex", gap: "16px", marginTop: "30px", flexWrap: "wrap" }}>
            <a href="#areas" style={buttonDark}>Explore Initiatives</a>
            <a href="/join" style={buttonGold}>Join / Be Counted</a>
            <a href="/community" style={buttonGreen}>Our Community</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "38px 28px", textAlign: "center" }}>
        <h2 style={sectionTitle}>The Life Cycle Of An Initiative</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "18px",
          maxWidth: "1150px",
          margin: "25px auto"
        }}>
          {["Idea", "Discussion", "Research", "Development", "Testing", "Active Initiative", "Stewardship"].map((item) => (
            <div key={item} style={circleCard}>
              <div style={circleIcon}>✦</div>
              <h3>{item}</h3>
              <p style={{ fontSize: "14px" }}>
                {item === "Idea" && "It begins with a need, spark, or observation."}
                {item === "Discussion" && "The community listens, asks, and shapes the idea."}
                {item === "Research" && "Information is gathered and carefully reviewed."}
                {item === "Development" && "A useful plan begins to take form."}
                {item === "Testing" && "Small steps are tried and improved."}
                {item === "Active Initiative" && "The effort becomes visible and useful."}
                {item === "Stewardship" && "Results are preserved, measured, and improved."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="areas" style={{ padding: "20px 32px 50px" }}>
        <h2 style={sectionTitle}>Current Areas Of Exploration</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "22px",
          maxWidth: "1200px",
          margin: "28px auto"
        }}>
          {[
            ["Healthcare Navigation", "Helping people locate assistance, programs, resources, and guidance more effectively."],
            ["Knowledge Preservation", "Building archives and resources future generations can learn from."],
            ["Community Participation", "Creating systems that help people contribute, share, and be counted."],
            ["Stewardship & Legacy", "Exploring resources that encourage long-term care, fairness, and responsibility."],
            ["Community Ideas", "Ideas submitted by participants for review, discussion, and possible action."]
          ].map(([title, text]) => (
            <div key={title} style={card}>
              <div style={imageBand}></div>
              <h3 style={{ fontSize: "26px", color: "#071827" }}>{title}</h3>
              <p style={{ lineHeight: 1.45 }}>{text}</p>
              <p><b>Status:</b> Exploration</p>
              <a href="/join" style={smallButton}>How You Can Help →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding: "55px 30px",
        background: "linear-gradient(135deg,#071827,#063d2c)",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "42px", color: "#f2d28a" }}>Every Piece Matters.</h2>
        <p style={{ fontSize: "22px", maxWidth: "850px", margin: "0 auto", lineHeight: 1.5 }}>
          Every contribution counts. Together, we create something enduring.
        </p>
      </section>

      <section style={{ padding: "34px", textAlign: "center" }}>
        <a href="/" style={buttonGold}>Return Home</a>
      </section>
    </main>
  );
}

const sectionTitle = {
  fontSize: "38px",
  color: "#071827",
  textAlign: "center" as const,
  margin: "0",
};

const card = {
  background: "linear-gradient(180deg,#fffdf4,#f2ead7)",
  border: "1px solid #d6bd7a",
  borderRadius: "16px",
  padding: "0 20px 24px",
  boxShadow: "0 8px 22px rgba(0,0,0,.14)",
  overflow: "hidden",
};

const imageBand = {
  height: "130px",
  margin: "0 -20px 18px",
  background: "linear-gradient(135deg,#071827,#0b5a3d,#d6a536,#f8f1df)",
};

const circleCard = {
  background: "#fff8e8",
  border: "1px solid #d6bd7a",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 6px 16px rgba(0,0,0,.12)",
};

const circleIcon = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "#063d2c",
  color: "#d6a536",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 12px",
  fontSize: "34px",
};

const buttonDark = {
  background: "#071827",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonGold = {
  background: "linear-gradient(180deg,#f2c85b,#b77b18)",
  color: "#071827",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonGreen = {
  background: "#0b5a3d",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const smallButton = {
  display: "inline-block",
  marginTop: "10px",
  color: "#071827",
  fontWeight: "bold",
  textDecoration: "none",
};
