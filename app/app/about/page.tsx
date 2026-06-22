export default function AboutPage() {
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

  const card = {
    background: "linear-gradient(135deg,#fffdf7,#f2ead7)",
    border: "1px solid #d6bd7a",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 8px 18px rgba(0,0,0,.12)",
  };

  const goldButton = {
    display: "inline-block",
    padding: "15px 24px",
    borderRadius: "10px",
    background: "linear-gradient(180deg,#f2c85b,#b77b18)",
    color: "#071827",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 8px 18px rgba(0,0,0,.25)",
  };

  return (
    <main style={{ fontFamily: "Georgia, serif", background: "#f4eddd", color: "#061827" }}>
      <header
        style={{
          background: "#061827",
          color: "white",
          padding: "14px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#d6a83a", fontSize: "28px", fontWeight: "bold" }}>
          GTR GoldTrack Rewards
        </div>

        <nav style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                color: label === "About" ? "#d6a83a" : "white",
                textDecoration: "none",
                borderBottom: label === "About" ? "2px solid #d6a83a" : "none",
                paddingBottom: "6px",
              }}
            >
              {label}
            </a>
          ))}
          <a href="/join" style={goldButton}>Join / Be Counted</a>
        </nav>
      </header>

      <section
        style={{
          padding: "70px 50px",
          background:
            "linear-gradient(135deg,rgba(255,255,255,.85),rgba(255,255,255,.45)), linear-gradient(120deg,#dff3ff,#f7e8b8,#b7d8b4)",
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "68px", lineHeight: "1", margin: 0 }}>
            What Is <br />
            <span style={{ color: "#b98519" }}>GoldTrack Rewards?</span>
          </h1>

          <p style={{ fontSize: "22px", lineHeight: "1.55", maxWidth: "760px" }}>
            GoldTrack Rewards is a community-driven ecosystem designed to help people
            participate, preserve knowledge, support meaningful initiatives, and strengthen
            communities through stewardship, transparency, and shared purpose.
          </p>
        </div>

        <div
          style={{
            width: "330px",
            height: "330px",
            borderRadius: "50%",
            margin: "0 auto",
            background: "radial-gradient(circle,#173d31,#061827)",
            border: "8px solid #d6a83a",
            color: "#d6a83a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "86px",
            fontWeight: "bold",
            boxShadow: "0 20px 50px rgba(0,0,0,.35)",
          }}
        >
          GTR
        </div>
      </section>

      <section style={{ padding: "34px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }}>
        {[
          ["People First", "Our community is the foundation."],
          ["Purpose Driven", "Meaningful initiatives create real impact."],
          ["Knowledge Preserved", "We document today for tomorrow."],
          ["Future Focused", "Preserving knowledge for generations."],
        ].map(([title, text]) => (
          <div key={title} style={{ ...card, textAlign: "center" }}>
            <h2 style={{ color: "#0b3b26" }}>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: "0 34px 34px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }}>
        {[
          ["The Mission", "GoldTrack Rewards began with a simple belief: people can accomplish more together than they can alone."],
          ["The Ecosystem", "GoldTrack Rewards is designed to connect people, ideas, knowledge, initiatives, transparency, and archives."],
          ["The GTR Emblem", "The emblem represents stewardship, participation, direction, and shared purpose."],
          ["Why Gold?", "Gold represents endurance, permanence, trust, and long-term value."],
          ["The Future", "Additional tools may be developed to support participation, stewardship, transparency, and initiatives."],
          ["Why It Exists", "Meaningful challenges continue to exist. Knowledge needs preservation. Good ideas deserve exploration."],
        ].map(([title, text]) => (
          <div key={title} style={card}>
            <h2 style={{ color: "#8b6f2c", fontSize: "30px" }}>{title}</h2>
            <p style={{ fontSize: "18px", lineHeight: "1.55" }}>{text}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          margin: "0 34px 34px",
          padding: "46px",
          borderRadius: "22px",
          background: "linear-gradient(135deg,#061827,#0b3b26)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "38px", color: "#d6a83a" }}>
          Together We Learn. Together We Build. Together We Preserve.
        </h2>
        <p style={{ fontSize: "24px" }}>
          Together We Create Something Worthy Of Continuing.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginTop: "28px" }}>
          <a href="/join" style={goldButton}>Join / Be Counted</a>
          <a href="/submit-idea" style={{ ...goldButton, background: "linear-gradient(180deg,#2e7d45,#0b3b26)", color: "white" }}>
            Submit An Idea
          </a>
          <a href="/ecosystem" style={{ ...goldButton, background: "linear-gradient(180deg,#6340a0,#2b1458)", color: "white" }}>
            Explore The Ecosystem
          </a>
        </div>
      </section>

      <footer style={{ background: "#061827", color: "white", padding: "24px 34px" }}>
        <strong style={{ color: "#d6a83a" }}>GoldTrack Rewards</strong>
        <span style={{ marginLeft: "20px" }}>Our Community. Our Initiatives. Our Legacy.</span>
      </footer>
    </main>
  );
}