export default function TransparencyPage() {
  const nav = [
    ["About", "/about"],
    ["How It Works", "/how-it-works"],
    ["Our Community", "/community"],
    ["Initiatives", "/initiatives"],
    ["Transparency", "/transparency"],
    ["Ecosystem", "/"],
    ["The Charter", "/charter"],
    ["News", "/news"],
  ];

  return (
    <main style={{ background: "#f8f1df", color: "#071827", fontFamily: "Georgia, serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 32px", background: "#071827", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <GTR />
          <div>
            <div style={{ color: "#d6a536", fontSize: "26px", fontWeight: "bold" }}>GoldTrack Rewards</div>
            <div style={{ fontSize: "13px" }}>Our Community. Our Initiatives. Our Legacy.</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} style={{ color: label === "Transparency" ? "#d6a536" : "white", textDecoration: "none", borderBottom: label === "Transparency" ? "2px solid #d6a536" : "none" }}>
              {label}
            </a>
          ))}
          <a href="/join" style={goldButton}>Join / Be Counted</a>
        </div>
      </nav>

      <section style={{
        padding: "80px 40px",
        color: "white",
        background: "linear-gradient(135deg, rgba(7,24,39,.96), rgba(6,61,44,.82)), radial-gradient(circle at 75% 30%, #d6a536 0, transparent 26%)",
      }}>
        <h1 style={{ fontSize: "76px", margin: 0, color: "#f2d28a" }}>Transparency & Trust</h1>
        <p style={{ fontSize: "28px", maxWidth: "760px" }}>
          Trust is not demanded. It is earned through transparency, stewardship, consistency, and time.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#archive" style={greenButton}>Transparency Archive</a>
          <a href="/charter" style={goldButton}>The Charter</a>
        </div>
      </section>

      <section style={{ padding: "44px 32px" }}>
        <h2 style={sectionTitle}>What Transparency Means</h2>

        <div style={grid3}>
          {[
            ["Open Information", "Whenever possible, information should be available in a clear and understandable form."],
            ["Accountability", "Decisions should be documented, explainable, and made with the mission in mind."],
            ["Stewardship", "Resources, knowledge, and initiatives should be managed responsibly for present and future generations."],
          ].map(([title, text]) => (
            <div key={title} style={card}>
              <h3 style={cardTitle}>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "46px 32px", background: "#071827", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px", color: "#f2d28a" }}>The Test Of All Things Is Time.</h2>
        <p style={{ fontSize: "22px" }}>Some ideas survive because they are useful. The record helps us learn what endures.</p>
      </section>

      <section id="archive" style={{ padding: "48px 32px" }}>
        <h2 style={sectionTitle}>Transparency Archive</h2>

        <div style={grid4}>
          {[
            ["Community Archives", "Stories, contributions, and shared knowledge."],
            ["Initiative Archives", "Progress, learnings, outcomes, and lessons."],
            ["Governance Records", "Policies, decisions, and accountability."],
            ["Historical Milestones", "Key moments in the journey ahead."],
          ].map(([title, text]) => (
            <div key={title} style={card}>
              <h3 style={cardTitle}>{title}</h3>
              <p>{text}</p>
              <a href="/join" style={smallLink}>Explore →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 32px", background: "linear-gradient(135deg,#063d2c,#071827)", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", color: "#f2d28a" }}>Our Commitment</h2>
        <p style={{ fontSize: "22px", maxWidth: "850px", margin: "0 auto 28px" }}>
          We preserve knowledge for those who follow. We document lessons so others may learn.
        </p>
        <a href="/" style={goldButton}>Return Home</a>
      </section>
    </main>
  );
}

function GTR() {
  return (
    <div style={{
      width: "64px", height: "64px", borderRadius: "50%",
      background: "radial-gradient(circle,#10253b 35%,#071827 70%)",
      border: "3px solid #d6a536",
      color: "#d6a536",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "25px", fontWeight: "bold",
      boxShadow: "0 0 18px rgba(214,165,54,.55)"
    }}>
      GTR
    </div>
  );
}

const sectionTitle = { fontSize: "40px", textAlign: "center" as const, color: "#071827" };

const card = {
  background: "linear-gradient(180deg,#fffdf4,#f2ead7)",
  border: "1px solid #d6bd7a",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 8px 22px rgba(0,0,0,.12)",
};

const cardTitle = { fontSize: "26px", color: "#071827", marginTop: 0 };

const grid3 = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "22px", maxWidth: "1100px", margin: "30px auto" };

const grid4 = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "22px", maxWidth: "1200px", margin: "30px auto" };

const goldButton = {
  background: "linear-gradient(180deg,#f2c85b,#b77b18)",
  color: "#071827",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const greenButton = {
  background: "#063d2c",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid #d6a536",
};

const smallLink = {
  color: "#8a5a08",
  fontWeight: "bold",
  textDecoration: "none",
};