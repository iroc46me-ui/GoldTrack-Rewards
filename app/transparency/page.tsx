
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
    left: "0.5%",
    top: "18.2%",
    width: "22%",
    height: "4.8%",
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
    left: "24.5%",
    top: "18.2%",
    width: "23%",
    height: "4.8%",
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
    left: "49.5%",
    top: "18.2%",
    width: "24%",
    height: "4.8%",
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
    left: "75%",
    top: "18.2%",
    width: "24%",
    height: "4.8%",
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
            left: "31%",
            top: "16.5%",
            width: "16%",
            height: "4.5%",
            cursor: "pointer",
          }}
        />

        
      {/* Community History */}
<a
  href="/community"
  aria-label="Community History"
  className="ghostLantern"
  style={{
    position: "absolute",
    left: "55%",
    top: "17%",
    width: "18%",
    height: "3.5%",
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
            width: "17%",
            height: "4.5%",
            cursor: "pointer",
          }}
        />

        {/* Join / Be Counted top button */}
          <a
  href="/join"
  aria-label="Join Be Counted"
  className="ghostLantern"
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
</main>
  );
}