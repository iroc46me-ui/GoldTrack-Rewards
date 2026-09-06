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

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid #c99a32",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        background: "#efe6d2",
        color: "#123c2f",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* TOP NAVIGATION */}
      <header
        style={{
          background: "#071827",
          color: "white",
          padding: "18px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            color: "#d8aa3d",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "3px solid #d8aa3d",
              background: "#073326",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "23px",
              fontWeight: "bold",
            }}
          >
            GTR
          </div>

          <div>
            <div
              style={{
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              GoldTrack Rewards
            </div>

            <div
              style={{
                color: "#f5ecd3",
                fontSize: "10px",
              }}
            >
              OUR COMMUNITY. OUR INITIATIVES. OUR LEGACY.
            </div>
          </div>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                color: label === "About" ? "#d8aa3d" : "white",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="/join"
            style={{
              ...buttonStyle,
              background: "linear-gradient(180deg,#efc65d,#b67a17)",
              color: "#07150f",
            }}
          >
            Join / Be Counted
          </a>
        </nav>
      </header>

      {/* BACKGROUND PAGE */}
      <section
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1055px",
          minHeight: "1491px",
          margin: "0 auto",
          backgroundImage: 'url("/about-background.png")',
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        {/* HERO TEXT */}
        <div
          style={{
            position: "absolute",
            top: "7%",
            left: "8%",
            width: "50%",
          }}
        >
          <div
            style={{
              color: "#9a741e",
              fontSize: "17px",
              letterSpacing: "2px",
            }}
          >
            ABOUT
          </div>

          <h1
            style={{
              margin: "6px 0 8px",
              fontSize: "clamp(38px,5vw,64px)",
              lineHeight: ".95",
              color: "#123c2f",
            }}
          >
            GoldTrack
            <br />
            Rewards
          </h1>

          <p
            style={{
              color: "#9a741e",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Our Story. Our Purpose. Our Promise.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.5,
              maxWidth: "470px",
            }}
          >
            GoldTrack Rewards is a community-driven ecosystem built to help
            people participate, preserve knowledge, support meaningful
            initiatives, and create something worthy of continuing.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "22px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>Join</strong>
              <div style={{ fontSize: "13px" }}>Be part of something bigger.</div>
            </div>

            <div>
              <strong>Be Counted</strong>
              <div style={{ fontSize: "13px" }}>Your voice matters.</div>
            </div>

            <div>
              <strong>Participate</strong>
              <div style={{ fontSize: "13px" }}>Help move the mission forward.</div>
            </div>
          </div>
        </div>

        {/* STONE SIGN */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "8%",
            width: "22%",
            textAlign: "center",
            color: "#57401a",
          }}
        >
          <div style={{ fontSize: "18px", lineHeight: 1.6 }}>
            OUR MISSION
            <br />
            IS THE MISSION.
            <br />
            <br />
            THE TOKEN
            <br />
            IS THE TOOL.
          </div>
        </div>

        {/* OUR STORY */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "8%",
            right: "8%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "12px",
              color: "#123c2f",
            }}
          >
            Our Story
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: 1.55,
              fontSize: "16px",
            }}
          >
            We empower people to participate, share ideas, preserve knowledge,
            support initiatives, and help build something meaningful for future
            generations.
          </p>
        </div>

        {/* FOUR PRINCIPLES */}
        <div
          style={{
            position: "absolute",
            top: "39%",
            left: "7%",
            right: "7%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
            textAlign: "center",
          }}
        >
          {[
            ["Global Community", "People from many places, backgrounds, and experiences."],
            ["Purpose Driven", "Meaningful ideas become useful action."],
            ["Transparency", "We operate openly and preserve the record."],
            ["Recognition", "Every meaningful contribution matters."],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 style={{ color: "#8d6a20", marginBottom: "8px" }}>
                {title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* WHY GOLDTRACK EXISTS */}
        <div
          style={{
            position: "absolute",
            top: "50.5%",
            left: "7%",
            width: "33%",
            color: "#f6edd6",
          }}
        >
          <h2
            style={{
              color: "#d9ad42",
              fontSize: "26px",
              marginBottom: "12px",
            }}
          >
            Why GoldTrack Rewards Exists
          </h2>

          <p style={{ fontSize: "14px", lineHeight: 1.5 }}>
            GoldTrack Rewards was created to encourage participation, preserve
            useful knowledge, recognize meaningful contributions, and support
            practical ideas that strengthen communities.
          </p>

          <p style={{ fontSize: "14px", lineHeight: 1.5 }}>
            The mission remains the mission. The token is one tool that may
            support that mission.
          </p>
        </div>

        {/* SIX SMALL CARDS */}
        <div
          style={{
            position: "absolute",
            top: "50.5%",
            left: "43%",
            right: "7%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}
        >
          {[
            ["Knowledge Access", "Helpful resources and learning."],
            ["Shared Ideas", "Community ideas worth exploring."],
            ["Future Transparency", "Open information and clear records."],
            ["Recognize Meaning", "Contributions should matter."],
            ["Preserve Knowledge", "Save what may help others."],
            ["Build A Legacy", "Create something worth continuing."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                textAlign: "center",
                padding: "8px",
                fontSize: "12px",
              }}
            >
              <strong style={{ color: "#8d6a20" }}>{title}</strong>
              <div style={{ marginTop: "4px" }}>{text}</div>
            </div>
          ))}
        </div>

        {/* GUIDING PRINCIPLES */}
        <div
          style={{
            position: "absolute",
            top: "67%",
            left: "7%",
            right: "7%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#123c2f",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Our Guiding Principles
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "16px",
            }}
          >
            {[
              ["Service", "We serve people and future generations."],
              ["Integrity", "We act with honesty and transparency."],
              ["Stewardship", "We protect what matters."],
              ["Community", "Participation is our strength."],
              ["Legacy", "We build beyond today."],
            ].map(([title, text]) => (
              <div key={title}>
                <strong style={{ color: "#8d6a20" }}>{title}</strong>
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COMMUNITY BEFORE CURRENCY */}
        <div
          style={{
            position: "absolute",
            top: "68%",
            right: "8%",
            width: "25%",
            textAlign: "center",
          }}
        >
          <strong style={{ color: "#8d6a20" }}>
            Community Before Currency
          </strong>

          <p style={{ fontSize: "13px", lineHeight: 1.45 }}>
            Our mission is not driven by money alone. Our community remains the
            heart of everything we build.
          </p>
        </div>

        {/* FOUNDER AREA */}
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "8%",
            width: "48%",
            color: "#f5ecd3",
          }}
        >
          <h2
            style={{
              color: "#d9ad42",
              fontSize: "25px",
              marginBottom: "10px",
            }}
          >
            Meet The Founder
          </h2>

          <p style={{ fontSize: "14px", lineHeight: 1.5 }}>
            GoldTrack Rewards began as an idea that people, knowledge,
            participation, stewardship, and future opportunities could be
            connected in one lasting ecosystem.
          </p>

          <p
            style={{
              color: "#d9ad42",
              fontStyle: "italic",
            }}
          >
            “Thank you for being here.”
          </p>
        </div>

        {/* BOTTOM JOIN */}
        <div
          style={{
            position: "absolute",
            bottom: "3.5%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "80%",
          }}
        >
          <div
            style={{
              fontSize: "21px",
              color: "#8d6a20",
              marginBottom: "14px",
            }}
          >
            Join · Be Counted · Participate
          </div>

          <a
            href="/join"
            style={{
              ...buttonStyle,
              background: "#07452f",
              color: "white",
              padding: "14px 30px",
              fontSize: "16px",
            }}
          >
            Join Our Community
          </a>
        </div>
      </section>
    </main>
  );
}