export default function AboutPage() {
  return (
    <main style={{ background: "#f4f7f8", minHeight: "100vh", color: "#102033" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "70px 24px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px", color: "#0b1f33" }}>
          About GoldTrack Rewards
        </h1>

        <p style={{ fontSize: "22px", lineHeight: "1.6", maxWidth: "850px" }}>
          GoldTrack Rewards is a community-centered rewards ecosystem built around
          transparency, participation, and long-term public benefit.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          <div style={cardStyle}>
            <h2>Our Mission</h2>
            <p>
              To build a rewards-based community system that supports people,
              initiatives, and future programs through responsible growth.
            </p>
          </div>

          <div style={cardStyle}>
            <h2>Our Values</h2>
            <p>
              Transparency, stewardship, service, participation, and practical
              usefulness guide the GoldTrack Rewards vision.
            </p>
          </div>

          <div style={cardStyle}>
            <h2>Our Direction</h2>
            <p>
              GTR is being developed step by step, with community trust and clear
              records at the center of the project.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "48px" }}>
          <a href="/how-it-works" style={buttonStyle}>
            See How It Works
          </a>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "white",
  padding: "28px",
  borderRadius: "18px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  lineHeight: "1.6",
} as const;

const buttonStyle = {
  display: "inline-block",
  background: "#d6a43a",
  color: "#081827",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
} as const;