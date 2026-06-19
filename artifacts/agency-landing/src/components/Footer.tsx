export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="footer-links-grid">
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-black)",
              marginBottom: "8px",
            }}
          >
            Quick Links
          </div>
          <div className="footer-quick-links">
            {[
              ["HOME", "home"],
              ["ABOUT", "about"],
              ["WORK", "work"],
              ["CONTACT", "contact"],
            ].map(([label, anchor]) => (
              <a
                key={label}
                href={`#${anchor}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-black)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-black)",
            }}
          >
            BANGALORE, INDIA
          </div>
          <a
            href="mailto:yuvarajdhongadi@gmail.com"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-blue)",
              textDecoration: "none",
            }}
          >
            YUVARAJDHONGADI@GMAIL.COM
          </a>
          <a
            href="https://wa.me/917892653131"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-black)",
              textDecoration: "none",
            }}
          >
            +91 7892653131
          </a>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid var(--color-border)" }} />

      <div style={{ overflow: "hidden", padding: "24px 0 0 0" }}>
        <div
          style={{
            fontFamily: "var(--font-offbit-dot)",
            fontSize: "clamp(56px, 12vw, 168px)",
            fontWeight: 700,
            lineHeight: 0.85,
            color: "var(--color-black)",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          QRUX
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          padding: "16px 24px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "13.6px",
            fontWeight: 400,
            letterSpacing: "0.2px",
            color: "var(--color-black)",
          }}
        >
          © 2026 Qrux Studios. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
