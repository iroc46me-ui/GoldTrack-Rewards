export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #1a1207 0%, #050505 60%, #000 100%)",
        display: "grid",
        gridTemplateColumns: "1fr minmax(300px, 520px) 1fr",
        alignItems: "center",
        gap: "28px",
        padding: "32px",
        color: "#f7efd8",
        fontFamily: "Georgia, serif",
      }}
    >
      <section style={{ textAlign: "right", lineHeight: 1.6 }}>
        <h2 style={{ color: "#d6b370", fontSize: "32px" }}>Begin Here</h2>
        <p>Community</p>
        <p>Stewardship</p>
        <p>Transparency</p>
      </section>

      <a
        href="/join"
        aria-label="Enter GoldTrack Rewards"
        style={{
          display: "block",
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow:
            "0 0 40px rgba(255,220,120,.35), 0 0 120px rgba(214,183,112,.25)",
          border: "1px solid rgba(214,183,112,.35)",
        }}
      >
        <img
          src="/the-door-is-open.jpg"
          alt="The Door Is Open"
          style={{
            width: "100%",
            maxHeight: "92vh",
            objectFit: "contain",
            display: "block",
          }}
        />
      </a>

      <section style={{ textAlign: "left", lineHeight: 1.6 }}>
        <h2 style={{ color: "#d6b370", fontSize: "32px" }}>Step Through</h2>
        <p>Join</p>
        <p>Be Counted</p>
        <p>Participate</p>

        <a
          href="/join"
          style={{
            display: "inline-block",
            marginTop: "22px",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #f0c15c, #9b6b1f)",
            color: "#1d1205",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Begin the Journey
        </a>
      </section>
    </main>
  );
}