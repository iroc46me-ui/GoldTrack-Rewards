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
            border-radius: 14px;
            box-shadow: 0 0 0px rgba(255, 215, 100, 0);
            transition: box-shadow .35s ease;
          }

          .ghostLantern:hover {
            box-shadow: 0 0 18px rgba(255, 215, 100, .75);
          }
        `}</style>
      </div>
    </main>
  );
}
