import { useState } from "react";

const included = [
  "Complete website redesign — up to 5 pages",
  "Mobile responsive design",
  "WhatsApp integration + click-to-call",
  "Contact forms + Google Maps",
  "SSL setup, domain & hosting assistance",
  "SEO-friendly titles, meta descriptions, sitemap",
  "Google Search Console setup",
  "Social media integration",
  "Website launch support",
];

export default function Pricing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setName("");
      setEmail("");
    }
  };

  return (
    <section id="pricing" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="pricing-body">
        {/* Left — Package details */}
        <div
          style={{
            padding: "64px 40px",
            borderRight: "1px solid var(--color-border)",
          }}
        >
          <span className="badge" style={{ marginBottom: "32px", display: "inline-block" }}>
            QRUX FOUNDATION PACKAGE
          </span>

          <div style={{ marginBottom: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 6.5vw, 88px)",
                fontWeight: 600,
                lineHeight: 0.9,
                letterSpacing: "-2px",
                color: "var(--color-black)",
              }}
            >
              ₹15,000
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-black)",
              opacity: 0.55,
              marginBottom: "40px",
              letterSpacing: "0.3px",
              textTransform: "uppercase",
            }}
          >
            One-Time Fee · Additional pages at ₹500/page
          </div>

          <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            {included.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                  marginBottom: "10px",
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  lineHeight: "1.5",
                }}
              >
                <span style={{ color: "var(--color-blue)", fontWeight: 700, flexShrink: 0 }}>—</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — CTA + timeline + newsletter */}
        <div
          style={{
            padding: "64px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span className="badge" style={{ marginBottom: "32px", display: "inline-block" }}>
              TIMELINE
            </span>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 500,
                lineHeight: "1.1",
                letterSpacing: "-1px",
                color: "var(--color-black)",
                marginBottom: "16px",
              }}
            >
              3–4 Business
              <br />
              Days. That&apos;s It.
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13.6px",
                fontWeight: 400,
                lineHeight: "1.7",
                color: "var(--color-black)",
                marginBottom: "32px",
                maxWidth: "320px",
              }}
            >
              Most websites are delivered within 3–4 business days. No months-long agency timelines. You get a professional site your customers will trust — fast.
            </p>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--color-blue)",
                color: "var(--color-white)",
                padding: "12px 20px",
                fontFamily: "var(--font-display)",
                fontSize: "13.6px",
                fontWeight: 400,
                letterSpacing: "0.2px",
                textDecoration: "none",
                marginBottom: "48px",
              }}
            >
              REQUEST A QUOTE ↗
            </a>
          </div>

          <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            {submitted ? (
              <p style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 500, color: "var(--color-blue)" }}>
                You&apos;re in. We&apos;ll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.8px",
                    color: "var(--color-black)",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  JOIN THE ARCHIVE
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      flex: "1 1 100px",
                      padding: "10px 12px",
                      border: "1px solid var(--color-border)",
                      borderRight: "none",
                      backgroundColor: "var(--color-white)",
                      fontFamily: "var(--font-display)",
                      fontSize: "13.6px",
                      color: "var(--color-black)",
                      outline: "none",
                      borderRadius: "0",
                      minWidth: "0",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: "1 1 140px",
                      padding: "10px 12px",
                      border: "1px solid var(--color-border)",
                      borderRight: "none",
                      backgroundColor: "var(--color-white)",
                      fontFamily: "var(--font-display)",
                      fontSize: "13.6px",
                      color: "var(--color-black)",
                      outline: "none",
                      borderRadius: "0",
                      minWidth: "0",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "10px 16px",
                      backgroundColor: "var(--color-blue)",
                      color: "var(--color-white)",
                      border: "none",
                      fontFamily: "var(--font-display)",
                      fontSize: "13.6px",
                      fontWeight: 400,
                      letterSpacing: "0.2px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      borderRadius: "0",
                    }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
