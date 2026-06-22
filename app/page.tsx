export default function HomePage() {
  const nav = ["About", "How It Works", "The Charter", "Our Community", "Initiatives", "Transparency", "News"];

  const button = {
    display: "inline-block",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#081d2c",
    background: "linear-gradient(180deg,#f0c45a,#b98519)",
    boxShadow: "0 8px 20px rgba(0,0,0,.25)",
  };

  const card = {
    background: "linear-gradient(135deg,#fffdf7,#f3ead7)",
    border: "1px solid #d6bd7a",
    borderRadius: "18px",
    padding: "26px",
    boxShadow: "0 10px 25px rgba(0,0,0,.12)",
  };

  return (
    <main style={{ fontFamily: "Georgia, serif", background: "#f7f0df", color: "#071f1a" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 36px",
          background: "#061827",
          color: "white",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "bold", color: "#f0c45a" }}>
          GTR GoldTrack Rewards
        </div>

        <nav style={{ display: "flex", gap: "22px", alignItems: "center", fontSize: "15px" }}>
          {nav.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replaceAll(" ", "-")}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}

          <a href="/join" style={button}>Join / Be Counted</a>
        </nav>
      </header>

      <section
        style={{
          minHeight: "520px",
          padding: "70px 50px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,255,255,.45)), linear-gradient(120deg,#dff3ff,#f7e8b8,#cbe6c5)",
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "66px", lineHeight: "1", margin: 0, color: "#071f1a" }}>
            What Is <br />
            <span style={{ color: "#b98519" }}>GoldTrack Rewards?</span>
          </h1>

          <p style={{ fontSize: "22px", lineHeight: "1.55", maxWidth: "760px" }}>
            GoldTrack Rewards is a community-driven ecosystem designed to help people
            participate, preserve knowledge, support meaningful initiatives, and strengthen
            communities through stewardship, transparency, and shared purpose.
          </p>

          <div style={{ display: "flex", gap: "18px", marginTop: "30px" }}>
            <a href="/join" style={button}>Join / Be Counted</a>
            <a href="/submit-idea" style={{ ...button, background: "linear-gradient(180deg,#2e7d45,#0b3b26)", color: "white" }}>
              Submit An Idea
            </a>
            <a href="/ecosystem" style={{ ...button, background: "linear-gradient(180deg,#4b348a,#24134d)", color: "white" }}>
              Explore The Ecosystem
            </a>
          </div>
        </div>

        <div
          style={{
            width: "330px",
            height: "330px",
            borderRadius: "50%",
            margin: "0 auto",
            background: "radial-gradient(circle,#f5d56b,#9b6b16,#061827)",
            border: "8px solid #f0c45a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f8d56a",
            fontSize: "86px",
            fontWeight: "bold",
            boxShadow: "0 20px 50px rgba(0,0,0,.35)",
          }}
        >
          GTR
        </div>
      </section>

      <section style={{ padding: "38px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
        {[
          ["People First", "Our community is the foundation."],
          ["Purpose Driven", "Meaningful initiatives create real impact."],
          ["Knowledge Preserved", "We document today for tomorrow."],
          ["Future Focused", "Preserving knowledge for generations."],
        ].map(([title, text]) => (
          <div key={title} style={card}>
            <h2 style={{ color: "#0b3b26" }}>{title}</h2>
            <p style={{ fontSize: "18px" }}>{text}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: "20px 38px 38px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {[
          ["The Mission", "People can accomplish more together than they can alone. The mission is the mission."],
          ["The Ecosystem", "GoldTrack Rewards connects people, ideas, knowledge, initiatives, transparency, and archives."],
          ["The GTR Emblem", "The emblem represents stewardship, participation, and shared direction."],
          ["Why Gold?", "Gold represents endurance, trust, and lasting value."],
          ["The Future", "Additional systems and tools may support participation, stewardship, and growth."],
          ["Why It Exists", "Meaningful challenges continue to exist. Good ideas deserve exploration."],
        ].map(([title, text]) => (
          <div key={title} style={card}>
            <h2 style={{ color: "#8b6f2c", fontSize: "30px" }}>{title}</h2>
            <p style={{ fontSize: "19px", lineHeight: "1.55" }}>{text}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          margin: "0 38px 38px",
          padding: "46px",
          borderRadius: "22px",
          background: "linear-gradient(135deg,#061827,#0b3b26)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "38px", color: "#f0c45a" }}>
          Together We Learn. Together We Build. Together We Preserve.
        </h2>

        <p style={{ fontSize: "24px" }}>
          Together We Create Something Worthy Of Continuing.
        </p>
      </section>
    </main>
  );
}