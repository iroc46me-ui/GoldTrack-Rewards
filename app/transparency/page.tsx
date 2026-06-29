
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
  href="/archive"
  aria-label="Browse Archives"
  style={{
    position: "absolute",
    left: "30%",
    top: "17%",
    width: "19%",
    height: "3.5%",
    cursor: "pointer",
    background: "rgba(255, 0, 0, 0.22)",
    border: "2px solid red",
    zIndex: 100,
  }}
/>

{/* Initiative Records */}
<a
  href="/initiatives"
  aria-label="Initiative Records"
  style={{
    position: "absolute",
    left: "29%",
    top: "17.5%",
    width: "19%",
    height: "3.5%",
    cursor: "pointer",
    background: "rgba(255, 0, 0, 0.22)",
    border: "2px solid red",
    zIndex: 100,
  }}
/>

{/* Community History */}
<a
  href="/community"
  aria-label="Community History"
  style={{
    position: "absolute",
    left: 60.%",
    top: "17.5%",
    width: "20%",
    height: "3%",
    cursor: "pointer",
    background: "rgba(255, 0, 0, 0.22)",
    border: "2px solid red",
    zIndex: 100,
  }}
/>

{/* Governance Records */}
<a
  href="/charter"
  aria-label="Governance Records"
  style={{
    position: "absolute",
    left: "73%",
    top: "17%",
    width: "19.5%",
    height: "3%",
    cursor: "pointer",
    background: "rgba(255, 0, 0, 0.22)",
    border: "2px solid red",
    zIndex: 100,
  }}
/>
        
        
         
       {/* Join / Be Counted top button */}
        <a
          href="/join"
          aria-label="Join Be Counted"
          style={{
            position: "absolute",
            right: "2%",
            top: "1%",
            width: "12%",
            height: "4%",
            cursor: "pointer",
          }}
        />

      </div>
    </main>
  );
}