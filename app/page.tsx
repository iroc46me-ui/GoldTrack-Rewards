export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f4eb",
        color: "#0c1b2c",
        fontFamily: "Georgia, serif",
      }}
    >
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <div
          style={{
            width: 92,
            height: 92,
            margin: "0 auto 24px",
            borderRadius: "50%",
            background: "#0c1b2c",
            border: "4px solid #c9a24a",
            color: "#c9a24a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          GTR
        </div>

        <h1 style={{ fontSize: 48, margin: 0, color: "#123c2c" }}>
          GoldTrack Rewards
        </h1>

        <p style={{ fontSize: 20, color: "#8a651f" }}>
          Our Community. Our Initiatives. Our Legacy.
        </p>

        <div
          style={{
            maxWidth: 760,
            margin: "50px auto",
            padding: "44px 26px",
            borderRadius: 28,
            border: "1px solid #c9a24a",
            background: "rgba(255,255,255,0.72)",
          }}
        >
          <h2 style={{ fontSize: 52, margin: 0, color: "#123c2c" }}>
            The Door Is Open
          </h2>

          <div style={{ marginTop: 32, fontSize: 28, lineHeight: 1.8 }}>
            <div>Join</div>
            <div>Be Counted</div>
            <div>Participate</div>
          </div>

          <p style={{ marginTop: 36, fontSize: 30, color: "#7a1f16" }}>
            Come on in 🌹
          </p>
        </div>

        <button
          style={{
            background: "#123c2c",
            color: "white",
            border: "none",
            borderRadius: 14,
            padding: "16px 30px",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Join Our Community
        </button>
      </section>
    </main>
  );
}