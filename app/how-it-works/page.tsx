export default function HowItWorksPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px",
        background: "linear-gradient(135deg,#f8f3e6,#d9e8df)",
        color: "#061827",
        fontFamily: "Georgia, serif",
      }}
    >
      <h1 style={{ fontSize: "52px", textAlign: "center" }}>
        How GoldTrack Rewards Works
      </h1>

      <p style={{ fontSize: "22px", textAlign: "center" }}>
        Ideas become participation. Participation becomes initiatives.
        Initiatives create impact. What we learn is preserved.
      </p>

      <div style={{ marginTop: "40px", fontSize: "22px", lineHeight: "1.8" }}>
        <p>1. A person joins or submits an idea.</p>
        <p>2. The community listens, discusses, and helps shape it.</p>
        <p>3. Good ideas become initiatives, stories, archives, or future tools.</p>
        <p>4. Everything useful is preserved for those who come after us.</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a
          href="/"
          style={{
            padding: "16px 32px",
            borderRadius: "10px",
            background: "linear-gradient(180deg,#f2c85b,#b77b18)",
            color: "#061827",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
