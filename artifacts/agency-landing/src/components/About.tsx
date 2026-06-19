export default function About() {
  return (
    <section
      id="about"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div style={{ padding: "96px 24px 64px 24px" }}>
        <div style={{ marginBottom: "48px" }}>
          <span className="badge">ABOUT US</span>
        </div>

        {/* HEADING ROW with border-bottom */}
        <div
          className="about-grid"
          style={{
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "48px",
            marginBottom: "0",
          }}
        >
          <div />
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.8vw, 51.2px)",
                fontWeight: 400,
                lineHeight: "1.15",
                letterSpacing: "-1.5px",
                color: "var(--color-black)",
                margin: 0,
              }}
            >
              Most local businesses in India have a website that looks like it
              was built in 2012 — or worse, no website at all. Your competitors
              are getting the customers you deserve. A website built right
              changes that in days, not months.
            </h2>
          </div>
        </div>

        {/* LINK ROW — aligned right, same grid */}
        <div
          className="about-footer-grid"
          style={{
            paddingTop: "24px",
            paddingBottom: "64px",
          }}
        >
          <div />
          <div />
          <div />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13.6px",
                fontWeight: 400,
                letterSpacing: "0.2px",
                color: "var(--color-blue)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              START A PROJECT ↗
            </a>
          </div>
        </div>

        {/* BODY TEXT — moved below the border and link */}
        <div className="about-body-grid">
          <div
            style={{
              padding: "32px 24px 0 0",
              borderRight: "1px solid var(--color-border)",
            }}
          >
            <div
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ marginTop: "2px", flexShrink: 0 }}
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="var(--color-black)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M10 6v4l3 3"
                  stroke="var(--color-black)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13.6px",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    letterSpacing: "0.2px",
                    color: "var(--color-black)",
                    marginBottom: "16px",
                  }}
                >
                  At{" "}
                  <strong
                    style={{ color: "var(--color-blue)", fontWeight: 600 }}
                  >
                    Qrux Studios
                  </strong>
                  , we specialise in websites and web applications for local
                  businesses across India. We start by understanding your
                  customers, your positioning, and your goals — then we build
                  something that actually works for your business.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13.6px",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "var(--color-black)",
                  }}
                >
                  Then we make it look fire.
                </p>
              </div>
            </div>
          </div>
          <div />
          <div />
          <div />
        </div>
      </div>
    </section>
  );
}
