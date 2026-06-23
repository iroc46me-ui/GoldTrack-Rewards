
export default function TransparencyPage() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "#061827",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <img
          src="/thumbnail.jpg"
          alt="Transparency Archive"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Browse Archives */}
        <a
          href="/archives"
          aria-label="Browse Archives"
          style={{
            position: "absolute",
            left: "9%",
            top: "16.5%",
            width: "19%",
            height: "5.5%",
            cursor: "pointer",
          }}
        />

        {/* Initiative Records */}
        <a
          href="/initiatives"
          aria-label="Initiative Records"
          style={{
            position: "absolute",
            left: "31%",
            top: "16.5%",
            width: "20%",
            height: "5.5%",
            cursor: "pointer",
          }}
        />

        {/* Community History */}
        <a
          href="/community"
          aria-label="Community History"
          style={{
            position: "absolute",
            left: "53%",
            top: "16.5%",
            width: "20%",
            height: "5.5%",
            cursor: "pointer",
          }}
        />

        {/* Governance Records */}
        <a
          href="/charter"
          aria-label="Governance Records"
          style={{
            position: "absolute",
            left: "75%",
            top: "16.5%",
            width: "20%",
            height: "5.5%",
            cursor: "pointer",
          }}
        />

        {/* Join / Be Counted top button */}
        <a
          href="/join"
          aria-label="Join Be Counted"
          style={{
            position: "absolute",
            right: "2%",
            top: "2.5%",
            width: "12%",
            height: "4.5%",
            cursor: "pointer",
          }}
        />
      </div>
    </main>
  );
}