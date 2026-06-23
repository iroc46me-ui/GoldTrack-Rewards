export default function CommunityPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f8f3e6,#dceadf)",
        color: "#061827",
        fontFamily: "Georgia, serif",
        padding: "0",
      }}
    >
      <section
        style={{
          padding: "70px 30px",
          textAlign: "center",
          background:
            "linear-gradient(180deg,#061827,#0b3b2e)",
          color: "#fff7df",
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "15px" }}>
          Our Community
        </h1>
        <p style={{ fontSize: "24px", maxWidth: "850px", margin: "0 auto" }}>
          Different people. Different skills. One shared mission.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          ["People First", "Everything begins and ends with the people who choose to participate."],
          ["Shared Purpose", "We gather around ideas, stewardship, knowledge, and meaningful action."],
          ["Many Ways To Help", "Members can join, submit ideas, tell stories, preserve knowledge, or support initiatives."],
          ["Built To Last", "What we learn today becomes part of the archive for those who come after us."],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              background: "linear-gradient(135deg,#fffdf5,#f1e4c8)",
              border: "1px solid #d6bd7a",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 10px 25px rgba(0,0,0,.15)",
            }}
          >
            <h2 style={{ color: "#0b3b2e", fontSize: "28px" }}>{title}</h2>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{text}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "30px auto",
          padding: "40px",
          borderRadius: "22px",
          background: "#061827",
          color: "#fff7df",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(0,0,0,.25)",
        }}
      >
        <h2 style={{ fontSize: "42px", color: "#f2c85b" }}>
          The Community Is The Strength
        </h2>
        <p style={{ fontSize: "21px", lineHeight: "1.7" }}>
          GoldTrack Rewards is not only a website. It is a living ecosystem of
          people, ideas, records, stories, initiatives, and future tools.
          The mission grows because people choose to be counted.
        </p>
      </section>

      <div style={{ textAlign: "center", padding: "45px" }}>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "16px 34px",
            borderRadius: "12px",
            background: "linear-gradient(180deg,#f2c85b,#b77b18)",
            color: "#061827",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 8px 18px rgba(0,0,0,.25)",
          }}
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
