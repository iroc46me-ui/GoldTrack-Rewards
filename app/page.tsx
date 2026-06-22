export default function HomePage() {
  const buttonStyle = {
    padding: "16px 28px",
    borderRadius: "14px",
    border: "2px solid #c9a24a",
    background: "linear-gradient(180deg, #d7b45a, #9b731f)",
    color: "#0c1b2c",
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: "1px",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f2e9, #d9ead7)",
        padding: "40px",
      }}
    >
      <img
        src="/thumbnail.jpg"
        alt="The Door Is Open"
        style={{
          width: "32%",
          maxWidth: "400px",
          borderRadius: "18px",
          boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#123c2c",
            fontFamily: "Georgia, serif",
            marginBottom: "20px",
          }}
        >
          GoldTrack Rewards
        </h1>

        <button style={buttonStyle}>JOIN</button>
        <button style={buttonStyle}>BE COUNTED</button>
        <button style={buttonStyle}>PARTICIPATE</button>
        <button style={buttonStyle}>CONTACT US</button>
        <button style={buttonStyle}>ENTER</button>
      </div>
    </main>
  );
}