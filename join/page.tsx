export default function JoinPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f8f6ef,#ece6d4)",
        padding: "60px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            color: "#123c2c",
            fontSize: "48px",
            textAlign: "center",
          }}
        >
          Join GoldTrack Rewards
        </h1>

        <hr />

        <h2>Be Counted. Be Heard.</h2>

        <p>
          GoldTrack Rewards is more than a project. It is a community built on
          participation, transparency, and shared purpose.
        </p>

        <p>
          Membership is free. Members will receive updates, project
          announcements, opportunities, and future rewards programs.
        </p>

        <h2>Benefits of Membership</h2>

        <ul>
          <li>Community updates</li>
          <li>Early participation opportunities</li>
          <li>Voting opportunities</li>
          <li>Future rewards</li>
          <li>Special announcements</li>
        </ul>

        <br />

        <a
          href="/"
          style={{
            display: "inline-block",
            background: "#c9a24a",
            color: "#123c2c",
            padding: "15px 30px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Return Home
        </a>
      </div>
    </main>
  );
}