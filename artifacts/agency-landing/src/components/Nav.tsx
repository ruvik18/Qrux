import { useState } from "react";

function LogoCornerMarkers() {
  const s = {
    position: "absolute",
    width: "5px",
    height: "5px",
    backgroundColor: "var(--color-white)",
    zIndex: 2,
  };
  return (
    <>
      <div style={{ ...s, top: "-2.5px", left: "-2.5px" }} />
      <div style={{ ...s, top: "-2.5px", right: "-2.5px" }} />
      <div style={{ ...s, bottom: "-2.5px", left: "-2.5px" }} />
      <div style={{ ...s, bottom: "-2.5px", right: "-2.5px" }} />
    </>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .nav-desktop-sticky {
            position: relative !important;
          }
        }
      `}</style>

      <nav
        className="nav-desktop-sticky"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "19.2px 24px 4.8px 24px",
          backgroundColor: "var(--color-bg)",
        }}
      >
        <a href="#home" style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "var(--color-green)",
              padding: "6px 12px",
              border: "1.5px solid var(--color-blue)",
            }}
          >
            <LogoCornerMarkers />
            <span
              style={{
                fontFamily: "var(--font-offbit-101)",
                fontSize: "24px",
                fontWeight: 900,
                letterSpacing: "1px",
                color: "var(--color-blue)",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              QRUX STUDIOS
            </span>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span className="nav-slots-label">
            <span style={{ color: "var(--color-blue)", fontSize: "10px" }}>
              ●
            </span>
            BANGALORE, INDIA
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "var(--color-blue)",
              color: "var(--color-white)",
              border: "none",
              padding: "10px 16px",
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              letterSpacing: "0.2px",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "16px", lineHeight: 1 }}>+</span> MENU
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: "var(--color-blue)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "80px 32px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "19.2px",
              right: "24px",
              backgroundColor: "var(--color-black)",
              color: "var(--color-white)",
              border: "none",
              padding: "10px 16px",
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              cursor: "pointer",
            }}
          >
            × CLOSE
          </button>
          {[
            ["HOME", "home"],
            ["ABOUT", "about"],
            ["WORK", "work"],
            ["PROCESS", "process"],
            ["SERVICES", "services"],
            ["PRICING", "pricing"],
            ["CONTACT", "contact"],
          ].map(([label, anchor]) => (
            <a
              key={label}
              href={`#${anchor}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 6vw, 60px)",
                fontWeight: 600,
                color: "var(--color-white)",
                textDecoration: "none",
                lineHeight: 1.15,
                letterSpacing: "-1.5px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-white)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
