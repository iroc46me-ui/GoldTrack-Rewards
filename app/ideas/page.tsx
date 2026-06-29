export default function IdeasPage() {
  return (
    <main style={{ margin: 0, background: "#061827", minHeight: "100vh" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <img
          src="/ideas-and-inovation.jpg"
          alt="Ideas and Innovation"
          style={{ width: "100%", display: "block" }}
        />

        <a
          href="/join"
          aria-label="Join Be Counted Participate"
          style={{
            position: "absolute",
            left: "34%",
            top: "90.5%",
            width: "32%",
            height: "4.5%",
            cursor: "pointer",
          }}
        />
      </div>
    </main>
  );
}