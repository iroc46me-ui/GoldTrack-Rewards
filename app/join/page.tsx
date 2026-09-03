export default function JoinPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff7df 0%, #f5ecd1 45%, #fff7df 100%)",
        color: "#0b392d",
        fontFamily: "Georgia, serif",
        padding: "32px",
      }}
    >
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          background: "rgba(255, 250, 235, .92)",
          border: "1px solid rgba(177,132,45,.45)",
          borderRadius: "26px",
          overflow: "hidden",
          boxShadow: "0 18px 55px rgba(0,0,0,.18)",
        }}
      >
        <div
          style={{
            padding: "58px 36px",
            textAlign: "center",
            background:
              "radial-gradient(circle at center, rgba(214,183,112,.35), transparent 45%), linear-gradient(135deg, #f8edcc, #fffaf0)",
          }}
        >
          <h1 style={{ fontSize: "58px", margin: 0 }}>
            Join GoldTrack Rewards
          </h1>
          <p style={{ fontSize: "24px", color: "#9b6b1f", fontWeight: "bold" }}>
            The door is open. You are welcome here.
          </p>
          <p style={{ maxWidth: "720px", margin: "18px auto", lineHeight: 1.7 }}>
            This is where the journey begins — not with a transaction, but with
            participation, purpose, and shared stewardship.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            padding: "28px",
          }}
        >
          {[
            ["👥", "Join", "Become part of something bigger than yourself."],
            ["✅", "Be Counted", "Your voice, ideas, and presence matter."],
            ["🤝", "Participate", "Help shape initiatives that can outlast us."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              style={{
                background: "#fffaf0",
                border: "1px solid rgba(177,132,45,.45)",
                borderRadius: "18px",
                padding: "28px",
                textAlign: "center",
                boxShadow: "0 8px 22px rgba(0,0,0,.08)",
              }}
            >
              <div style={{ fontSize: "38px" }}>{icon}</div>
              <h2 style={{ color: "#9b6b1f" }}>{title}</h2>
              <p style={{ lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            margin: "0 28px 28px",
            padding: "34px",
            borderRadius: "22px",
            background: "linear-gradient(135deg, #063b2d, #0b1f1a)",
            color: "#f7efd8",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d6b370", fontSize: "34px" }}>
            The mission is the mission.
          </h2>
          <p style={{ maxWidth: "760px", margin: "0 auto", lineHeight: 1.7 }}>
            Some people build. Some teach. Some preserve knowledge. Some bring
            ideas. Some simply show up and encourage others. Every contribution
            matters.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="/community"
              style={{
                display: "inline-block",
                padding: "15px 30px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #f3cf73, #a87420)",
                color: "#1d1205",
                textDecoration: "none",
                fontWeight: "bold",
                marginRight: "14px",
              }}
            >
              Join Our Community
            </a>

            <a
              href="/"
              style={{
                display: "inline-block",
                padding: "15px 30px",
                borderRadius: "999px",
                border: "1px solid rgba(214,183,112,.7)",
                color: "#f7efd8",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}