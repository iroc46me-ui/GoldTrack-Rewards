export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        minHeight: "100vh",
        backgroundColor: "#f5f2e9",
        padding: "40px",
      }}
    >
      <img
        src="/thumbnail.jpg"
        alt="The Door Is Open"
        style={{
          width: "40%",
          maxWidth: "500px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>GoldTrack Rewards</h1>

        <button>JOIN</button>

        <button>BE COUNTED</button>

        <button>PARTICIPATE</button>

        <button>CONTACT US</button>

        <button>ENTER</button>
      </div>
    </main>
  );
}