export default function HomePage() {
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
    background: "rgba(255,250,238,.94)",
    border: "1px solid #d6bd7a",
    borderRadius: "14px",
    boxShadow: "0 8px 18px rgba(0,0,0,.12)",
    padding: "22px",
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

  const greenButton = {
    ...goldButton,
    background: "linear-gradient(180deg,#226b39,#073b26)",
    color: "white",
  };

  const purpleButton = {
    ...goldButton,
    background: "linear-gradient(180deg,#6340a0,#2b1458)",
    color: "white",
  };

  return (
    <main
      style={{
        margin: 0,
        fontFamily: "Georgia, serif",
        background: "#f4eddd",
        color: "#061827",
      }}
    >
      <header
        style={{
          background: "#061827",
          color: "white",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "3px solid #d6a83a",
              background: "radial-gradient(circle,#123c2c,#061827)",
              color: "#d6a83a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            GTR
          </div>

          <div>
            <div style={{ color: "#d6a83a", fontSize: "26px", fontWeight: "bold" }}>
              GoldTrack Rewards
            </div>
            <div style={{ fontSize: "13px" }}>
              Our Community. Our Initiatives. Our Legacy.
            </div>
          </div>
        </div>

        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                color: label === "Ecosystem" ? "#d6a83a" : "white",
                textDecoration: "none",
                fontSize: "14px",
                borderBottom: label === "Ecosystem" ? "2px solid #d6a83a" : "none",
                paddingBottom: "6px",
              }}
            >
              {label}
            </a>
          ))}
          <a href="/join" style={goldButton}>
            Join / Be Counted
          </a>
        </nav>
      </header>

      <section
        style={{
          minHeight: "430px",
          padding: "70px 50px",
          textAlign: "center",
          background:
            "linear-gradient(rgba(255,255,255,.38),rgba(255,255,255,.38)), radial-gradient(circle at center,#ffeaa6,#8fc9f0,#2f7b46)",
        }}
      >
        <h1 style={{ fontSize: "58px", margin: "0 0 12px" }}>
          THE GOLDTRACK REWARDS
          <br />
          <span style={{ fontSize: "72px" }}>ECOSYSTEM</span>
        </h1>

        <p style={{ fontSize: "24px", maxWidth: "850px", margin: "0 auto 28px" }}>
          A growing collection of people, initiatives, archives, resources, and
          participation systems working together to support the mission.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "18px" }}>
          <a href="/community" style={greenButton}>Explore Community</a>
          <a href="/initiatives" style={greenButton}>Explore Initiatives</a>
          <a href="/archives" style={purpleButton}>Explore Archives</a>
        </div>

        <div
          style={{
            margin: "42px auto 0",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "7px solid #d6a83a",
            background: "radial-gradient(circle,#153b2d,#061827)",
            color: "#d6a83a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "54px",
            fontWeight: "bold",
            boxShadow: "0 0 40px rgba(255,215,100,.75)",
          }}
        >
          GTR
        </div>
      </section>

      <section
        style={{
          padding: "38px",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "28px",
        }}
      >
        <div style={card}>
          <h2 style={{ textAlign: "center", fontSize: "30px" }}>
            How Everything Connects
          </h2>

          {["Community", "Ideas", "Initiatives", "Results", "Archives", "Future Generations"].map(
            (item) => (
              <div
                key={item}
                style={{
                  margin: "12px auto",
                  padding: "14px",
                  maxWidth: "300px",
                  borderRadius: "10px",
                  border: "1px solid #b9c7b5",
                  textAlign: "center",
                  fontWeight: "bold",
                  background: "#f8fbf5",
                }}
              >
                {item}
              </div>
            )
          )}

          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Every element strengthens the others. Together, we create lasting impact.
          </p>
        </div>

        <div style={card}>
          <h2 style={{ textAlign: "center", fontSize: "30px" }}>
            Ecosystem Components
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "16px",
            }}
          >
            {[
              ["👥", "Community Network", "People connecting, learning, and being counted."],
              ["💡", "Idea Network", "Ideas submitted, explored, and refined."],
              ["🚀", "Initiative Network", "Projects that address meaningful challenges."],
              ["📖", "Knowledge Library", "Resources, guides, lessons, and research."],
              ["🛡️", "Transparency Systems", "Open records and accountability."],
              ["🗂️", "Archive Network", "Preserving decisions, lessons, and milestones."],
              ["🤝", "Participation Systems", "Helping people find where they fit."],
              ["🏛️", "Stewardship Framework", "Guiding principles and practices."],
            ].map(([icon, title, text]) => (
              <div key={title} style={{ ...card, textAlign: "center", padding: "16px" }}>
                <div style={{ fontSize: "34px" }}>{icon}</div>
                <h3>{title}</h3>
                <p style={{ fontSize: "14px" }}>{text}</p>
                <a href="#" style={{ color: "#8b6508", fontWeight: "bold" }}>
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ margin: "0 38px 30px", ...card }}>
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          The Journey Of A Contribution
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,1fr)",
            gap: "12px",
            textAlign: "center",
          }}
        >
          {[
            ["🧭", "Challenge"],
            ["📝", "Idea"],
            ["💬", "Discuss"],
            ["🔎", "Research"],
            ["🛠️", "Build"],
            ["🚀", "Launch"],
            ["📊", "Measure"],
            ["📚", "Archive"],
          ].map(([icon, label]) => (
            <div key={label}>
              <div style={{ fontSize: "36px" }}>{icon}</div>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "0 38px 38px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "24px",
        }}
      >
        <div style={card}>
          <h2>Growing Together</h2>
          <p>
            Our community spans the globe. We learn from one another, share
            resources, and build solutions that make a difference.
          </p>
        </div>

        <div style={card}>
          <h2>Future Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {["Resource Systems", "Community Tools", "Stewardship Systems", "Learning Systems", "Recognition Programs", "Participation Utilities"].map(
              (item) => (
                <div key={item} style={{ border: "1px solid #d6bd7a", padding: "12px", borderRadius: "10px" }}>
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div style={card}>
          <h2>The Mission Remains The Center</h2>
          <p>
            Tools may change. Technology may change. Initiatives may change.
            The mission remains the mission.
          </p>
        </div>
      </section>

      <section
        style={{
          margin: "0 38px 38px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <div style={{ ...card, background: "#061827", color: "white" }}>
          <h2 style={{ color: "#d6a83a" }}>Our Community Is The Strength</h2>
          <p>Different backgrounds. Different skills. One purpose.</p>
          <p>Our community is the strength behind everything we build.</p>
        </div>

        <div style={{ ...card, background: "#073b26", color: "white" }}>
          <h2 style={{ color: "#d6a83a" }}>
            Together We Create A Lasting Legacy
          </h2>
          <p>Together we learn. Together we build. Together we preserve.</p>
        </div>
      </section>

      <section
        style={{
          background: "#061827",
          color: "white",
          textAlign: "center",
          padding: "34px",
        }}
      >
        <h2 style={{ color: "#d6a83a", fontSize: "34px" }}>
          Be Part Of The Ecosystem
        </h2>

        <p>
          Whether you have ideas, resources, skills, or time — there is a place
          for you in the GoldTrack Rewards ecosystem.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginTop: "22px" }}>
          <a href="/join" style={goldButton}>Join / Be Counted</a>
          <a href="/submit-idea" style={greenButton}>Submit An Idea</a>
          <a href="/archives" style={purpleButton}>Explore The Archive</a>
        </div>
      </section>

      <footer
        style={{
          background: "#042d21",
          color: "white",
          padding: "26px 38px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ color: "#d6a83a" }}>GoldTrack Rewards</strong>
        <span>Our Community. Our Initiatives. Our Legacy.</span>
      </footer>
    </main>
  );
}