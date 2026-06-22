export default function JoinPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f8f6ef,#e8dcc3)",
        padding: "24px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "linear-gradient(135deg,#fffdf8,#f8f1e1)",
          padding: "34px",
          borderRadius: "25px",
          border: "2px solid #d8c28a",
          boxShadow: "0 15px 40px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            color: "#0d3b2e",
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Join GoldTrack Rewards
        </h1>

        <hr style={{ borderColor: "#d6c28a" }} />

        <h2 style={{ color: "#8b6f2c", fontSize: "28px" }}>
          Be Counted. Be Heard.
        </h2>

        <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
          GoldTrack Rewards is more than a project. It is a community built on
          participation, transparency, and shared purpose.
        </p>

        <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
          Membership is free. Members will receive updates, project
          announcements, opportunities, and future rewards programs.
        </p>

        <h2 style={{ color: "#8b6f2c", fontSize: "28px" }}>
          Benefits of Membership
        </h2>

        <ul style={{ fontSize: "20px", lineHeight: "1.6" }}>
          <li>Community updates</li>
          <li>Early participation opportunities</li>
          <li>Voting opportunities</li>
          <li>Future rewards</li>
          <li>Special announcements</li>
        </ul>

        <div style={{ marginTop: "35px", textAlign: "center" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "linear-gradient(180deg,#d7b45a,#9b731f)",
              color: "#0c1b2c",
              padding: "16px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid #c9a24a",
              boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
            }}
          >
            Return Home
          </a>
        </div>
      </div>
    </main>
  );
}