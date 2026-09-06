export default function HomePage() {
  const nav = [
    ["About", "/about"],
    ["How It Works", "/how-it-works"],
    ["Our Community", "/community"],
    ["Initiatives", "/initiatives"],
    ["Transparency", "/transparency"],
    ["Ecosystem", "/ecosystem"],
    ["News", "/news"],
  ];

  const buttonStyle = {
    display: "inline-block",
    padding: "13px 22px",
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
        background: "#050807",
        color: "#fff7df",
        fontFamily: "Georgia, serif",
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage:
            'linear-gradient(90deg, rgba(3,10,8,.90) 0%, rgba(3,10,8,.58) 42%, rgba(3,10,8,.08) 72%), url("/hero-image-gtr.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {/* TOP NAVIGATION */}
        <header
          style={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 5%",
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
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "62px",
                height: "62px",
                borderRadius: "50%",
                border: "3px solid #d8aa3d",
                background: "#073326",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              GTR
            </div>

            <div>
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                GoldTrack Rewards
              </div>

              <div
                style={{
                  color: "#f5ecd3",
                  fontSize: "11px",
                  letterSpacing: ".5px",
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
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  color: "white",
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
                background:
                  "linear-gradient(180deg,#efc65d,#b67a17)",
                color: "#07150f",
              }}
            >
              Join / Be Counted
            </a>
          </nav>
        </header>

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "820px",
            padding: "8vh 6% 80px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 5vw, 68px)",
              lineHeight: ".98",
              textTransform: "uppercase",
              textShadow: "0 3px 15px rgba(0,0,0,.8)",
            }}
          >
            Together,
            <br />
            We Create A Legacy
            <br />
            <span style={{ color: "#d8aa3d" }}>
              Worth Continuing.
            </span>
          </h1>

          <div
            style={{
              width: "240px",
              height: "2px",
              background: "#d8aa3d",
              margin: "28px 0",
            }}
          />

          <p
            style={{
              maxWidth: "610px",
              fontSize: "20px",
              lineHeight: 1.65,
              textShadow: "0 2px 8px rgba(0,0,0,.9)",
            }}
          >
             GoldTrack Rewards is a community-driven ecosystem built around
  people, ideas, meaningful initiatives, shared knowledge, and
  stewardship for future generations.
          </p>

          {/* VALUES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(110px, 1fr))",
              gap: "16px",
              marginTop: "36px",
              maxWidth: "650px",
            }}
          >
            {[
              ["◎", "People First", "Every voice matters."],
              ["◇", "Transparent", "We operate with integrity."],
              ["✦", "Purpose Driven", "Ideas become impact."],
              ["♧", "Sustainable", "We build for tomorrow."],
              ["◎", "Global Community", "One mission. Many stories."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                style={{
                  textAlign: "center",
                  padding: "12px 8px",
                  borderRight: "1px solid rgba(216,170,61,.35)",
                }}
              >
                <div
                  style={{
                    color: "#d8aa3d",
                    fontSize: "30px",
                  }}
                >
                  {icon}
                </div>

                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    marginTop: "6px",
                    color: "#eee4cc",
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>

          {/* JOIN AREA */}
          <div
            style={{
              marginTop: "38px",
              padding: "24px",
              maxWidth: "620px",
              background: "rgba(3,18,13,.70)",
              border: "1px solid rgba(216,170,61,.45)",
              borderRadius: "14px",
              backdropFilter: "blur(4px)",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#d8aa3d",
                fontSize: "25px",
              }}
            >
              Join · Be Counted · Participate
            </h2>

            <p
              style={{
                margin: "8px 0 20px",
                fontSize: "16px",
              }}
            >
              Be part of something bigger. Your journey starts here.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/join"
                style={{
                  ...buttonStyle,
                  background:
                    "linear-gradient(180deg,#efc65d,#b67a17)",
                  color: "#07150f",
                }}
              >
                Join Our Community
              </a>

              <a
                href="/ideas"
                style={{
                  ...buttonStyle,
                  background: "rgba(5,49,37,.85)",
                  color: "#fff7df",
                }}
              >
                Submit An Idea
              </a>

              <a
                href="/initiatives"
                style={{
                  ...buttonStyle,
                  background: "rgba(5,20,18,.82)",
                  color: "#fff7df",
                }}
              >
                Explore Initiatives
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}