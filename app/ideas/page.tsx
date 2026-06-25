export default function IdeasPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        background: "#061827",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          src="/ideas-%26-innovation.jpg"
          alt="GoldTrack Rewards Ideas and Innovation"
          style={{
            width: "100%",
            display: "block",
          }}
        />

        {/* Top Logo Home */}
        <a
          href="/"
          aria-label="GoldTrack Rewards Home"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "2%",
            top: "1%",
            width: "11%",
            height: "7%",
          }}
        />

        {/* Submit Idea Main Button */}
        <a
          href="/ideas"
          aria-label="Submit an Idea"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "39%",
            top: "21%",
            width: "22%",
            height: "5%",
          }}
        />

        {/* Healthcare Navigation */}
        <a
          href="/initiatives"
          aria-label="Healthcare Navigation"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "50%",
            top: "29%",
            width: "11%",
            height: "12%",
          }}
        />

        {/* Education and Knowledge */}
        <a
          href="/archive"
          aria-label="Education and Knowledge"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "62%",
            top: "29%",
            width: "11%",
            height: "12%",
          }}
        />

        {/* Legacy and Stewardship */}
        <a
          href="/charter"
          aria-label="Legacy and Stewardship"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "74%",
            top: "29%",
            width: "11%",
            height: "12%",
          }}
        />

        {/* Community Building */}
        <a
          href="/community"
          aria-label="Community Building"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "86%",
            top: "29%",
            width: "11%",
            height: "12%",
          }}
        />

        {/* Bottom Submit Idea */}
        <a
          href="/ideas"
          aria-label="Submit an Idea Bottom"
          className="ghostLantern"
          style={{
            position: "absolute",
            left: "39%",
            top: "91%",
            width: "22%",
            height: "5%",
          }}
        />

        <style>{`
          .ghostLantern {
            cursor: pointer;
            border-radius: 14px;
            box-shadow: 0 0 0px rgba(255,215,100,0);
            transition: box-shadow .35s ease;
          }

          .ghostLantern:hover {
            box-shadow: 0 0 18px rgba(255,215,100,.75);
          }
        `}</style>
      </div>
    </main>
  );
}
