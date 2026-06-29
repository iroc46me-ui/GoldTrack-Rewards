export default function IdeasPage() {
  return (
    <main style={{ margin: 0, background: "#061827", minHeight: "100vh" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <img
          src="/ideas-and-inovation.jpg"
          alt="Ideas and Innovation"
          style={{ width: "100%", display: "block" }}
        />

        {/* Bottom You Are Welcome Here button */}
        <a
          href="/join"
          aria-label="Join Be Counted Participate"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "36%",
            top: "96%",
            width: "32%",
            height: "4%",
          }}
        />

        <style>{`
  .ghostLantern {
    cursor: pointer;
    border-radius: 12px;
    border: 2px solid rgba(90, 55, 15, 0.45);
    box-shadow: 0 0 8px rgba(90, 55, 15, 0.35);
    transition: box-shadow .25s ease, border .25s ease;
  }

  .ghostLantern:hover {
    border: 2px solid rgba(120, 75, 20, 0.8);
    box-shadow: 0 0 18px rgba(120, 75, 20, 0.75);
  }
`}</style>