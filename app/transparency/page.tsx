
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
    left: "7.5%",
    top: "17%",
    width: "19.5%",
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
    left: "29.2%",
    top: "17%",
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
    left: "51%",
    top: "17%",
    width: "20.2%",
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
  left: "72.5%",
  top: "17%",
  width: "20%",
  height: "3.5%",
  cursor: "pointer",
  background: "rgba(255, 0, 0, 0.22)",
  border: "2px solid red",
  zIndex: 100,
}}
/>
        {/* Explore The Archive bottom button */}
<a
  href="/archive"
  aria-label="Explore The Archive"
  style={{
    position: "absolute",
    left: "70%",
    top: "95.5%",
    width: "23%",
    height: "3%",
    cursor: "pointer",
    background: "rgba(255, 0, 0, 0.22)",
    border: "2px solid red",
    zIndex: 100,
  }}
/>
       </div>
    </main>
  );
}       
         
       {/* Join / Be Counted top button */}
        
<a
  href="/join"
  aria-label="Join Be Counted"
  style={{
    position: "absolute",
    right: "2%",
    top: "1.2%",
    width: "14%",
    height: "4.2%",
    cursor: "pointer",
    background: "rgba(255,0,0,0.22)",
    border: "2px solid red",
    zIndex: 100,
  }}
/>