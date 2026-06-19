import { useState } from "react";

const WEBSITE_TYPES = [
  "One-Pager (Single-page)",
  "Full Website (Multi-page)",
  "Website Redesign",
  "Web Application",
  "Not Sure Yet",
];

const GOALS = [
  "Generate qualified leads",
  "Sell products / services online",
  "Build brand credibility",
  "Showcase portfolio / work",
  "Improve existing website",
];

const BUDGETS = [
  "Under ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹60,000",
  "₹60,000+",
  "Let's discuss",
];

const TIMELINES = [
  "Immediately",
  "Within 2 weeks",
  "Within a month",
  "1–3 months",
  "No rush, planning ahead",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1.5px solid var(--color-blue)",
  backgroundColor: "var(--color-white)",
  fontFamily: "var(--font-display)",
  fontSize: "13.6px",
  fontWeight: 400,
  color: "var(--color-black)",
  outline: "none",
  borderRadius: "0",
  appearance: "none" as const,
  WebkitAppearance: "none" as const,
};

const labelStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "var(--color-blue)",
  color: "var(--color-white)",
  fontFamily: "var(--font-display)",
  fontSize: "11px",
  fontWeight: 400,
  letterSpacing: "0.5px",
  padding: "3px 8px",
  marginBottom: "4px",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "18px",
  fontWeight: 500,
  color: "var(--color-black)",
  letterSpacing: "-0.3px",
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "1px solid var(--color-border)",
};

function FieldLabel({ children, required }: { children: string; required?: boolean }) {
  return (
    <div style={labelStyle}>
      {children}{required && "*"}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    websiteType: WEBSITE_TYPES[0],
    goal: GOALS[0],
    budget: BUDGETS[0],
    timeline: TIMELINES[0],
    industry: "",
    websiteLink: "",
    businessDesc: "",
    name: "",
    email: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry — ${form.websiteType} | ${form.name || "New Client"}`
    );

    const body = encodeURIComponent(
      `01 | ABOUT YOUR PROJECT
Website Type: ${form.websiteType}
Goal: ${form.goal}
Budget: ${form.budget}
Ready to Start: ${form.timeline}

02 | ABOUT YOUR BUSINESS
Industry: ${form.industry}
Website / Social: ${form.websiteLink || "—"}
Business Description:
${form.businessDesc || "—"}

03 | ABOUT YOURSELF
Name: ${form.name}
Email: ${form.email}
Additional Notes:
${form.notes || "—"}`
    );

    window.location.href = `mailto:yuvarajdhongadi@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ borderBottom: "1px solid var(--color-border)" }}>
      {/* Header row */}
      <div className="contact-header-grid">
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-blue)",
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}
          >
            [ CONTACT ]
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.8vw, 51.2px)",
              fontWeight: 400,
              lineHeight: "1.05",
              letterSpacing: "-1.5px",
              color: "var(--color-black)",
              marginBottom: "0",
            }}
          >
            First Tell Us What You&apos;re Building!
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingLeft: "48px",
            gap: "24px",
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-black)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            INSTAGRAM
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              color: "var(--color-black)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="M8 11v5M8 8v.01M12 16v-5m0 0c0-1 1-2 2-2s2 1 2 2v5" />
            </svg>
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Body: left info + right form */}
      <div className="contact-body-grid">
        {/* Left col */}
        <div
          style={{
            padding: "48px 24px",
            borderRight: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13.6px",
                fontWeight: 400,
                lineHeight: "1.7",
                color: "var(--color-black)",
                marginBottom: "32px",
              }}
            >
              This form helps us get a real picture of where you&apos;re at and what you&apos;re building. We read every inquiry ourselves. From there, we&apos;ll reach you to map out what your website actually needs to do to support your brand as it evolves.
            </p>

            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  opacity: 0.55,
                  letterSpacing: "0.3px",
                  marginBottom: "4px",
                }}
              >
                Or just email us at:
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
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  opacity: 0.55,
                  letterSpacing: "0.3px",
                  marginBottom: "4px",
                }}
              >
                WhatsApp / Phone:
              </div>
              <a
                href="https://wa.me/917892653131"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-blue)",
                  textDecoration: "none",
                }}
              >
                +91 7892653131
              </a>
            </div>
          </div>

          {/* YouTube embed */}
          <div style={{ marginTop: "40px" }}>
            <div
              style={{
                position: "relative",
                border: "2px solid var(--color-black)",
                backgroundColor: "var(--color-black)",
                overflow: "hidden",
                aspectRatio: "16 / 9",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/_YuEK6fhidE?autoplay=0&mute=1&rel=0"
                title="Qrux Studios — We Make the Coolest Websites"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "var(--color-black)",
                padding: "8px 12px",
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 400,
                color: "var(--color-green)",
                letterSpacing: "0.3px",
                textAlign: "center",
              }}
            >
              OH ALSO, WE&apos;VE BEEN TOLD WE MAKE THE COOLEST WEBSITES.
            </div>
          </div>
        </div>

        {/* Right col — Form */}
        <div style={{ padding: "48px 40px" }}>
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                minHeight: "400px",
                gap: "16px",
              }}
            >
              <span className="badge">REQUEST SENT</span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 400,
                  letterSpacing: "-1px",
                  color: "var(--color-black)",
                  lineHeight: 1.1,
                }}
              >
                Your email client should
                <br />
                have opened. Hit send!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  color: "var(--color-black)",
                  maxWidth: "380px",
                }}
              >
                If it didn&apos;t open, email us directly at{" "}
                <a href="mailto:yuvarajdhongadi@gmail.com" style={{ color: "var(--color-blue)" }}>
                  yuvarajdhongadi@gmail.com
                </a>{" "}
                or WhatsApp us at{" "}
                <a href="https://wa.me/917892653131" style={{ color: "var(--color-blue)" }}>
                  +91 7892653131
                </a>
                . We respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: "none",
                  border: "1px solid var(--color-border)",
                  padding: "8px 16px",
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  cursor: "pointer",
                  color: "var(--color-black)",
                }}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Section 01 */}
              <div style={{ marginBottom: "40px" }}>
                <div style={sectionTitleStyle}>01 | About Your Project</div>

                <div className="contact-form-fields-2col">
                  <div>
                    <FieldLabel required>Website Type</FieldLabel>
                    <div style={{ position: "relative" }}>
                      <select value={form.websiteType} onChange={set("websiteType")} required style={{ ...inputStyle, paddingRight: "32px", cursor: "pointer" }}>
                        {WEBSITE_TYPES.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: "10px", color: "var(--color-blue)" }}>▼</span>
                    </div>
                  </div>
                  <div>
                    <FieldLabel required>What&apos;s your goal?</FieldLabel>
                    <div style={{ position: "relative" }}>
                      <select value={form.goal} onChange={set("goal")} required style={{ ...inputStyle, paddingRight: "32px", cursor: "pointer" }}>
                        {GOALS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: "10px", color: "var(--color-blue)" }}>▼</span>
                    </div>
                  </div>
                </div>

                <div className="contact-form-fields-2col" style={{ marginBottom: 0 }}>
                  <div>
                    <FieldLabel required>What&apos;s your budget?</FieldLabel>
                    <div style={{ position: "relative" }}>
                      <select value={form.budget} onChange={set("budget")} required style={{ ...inputStyle, paddingRight: "32px", cursor: "pointer" }}>
                        {BUDGETS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: "10px", color: "var(--color-blue)" }}>▼</span>
                    </div>
                  </div>
                  <div>
                    <FieldLabel required>When are you ready to start?</FieldLabel>
                    <div style={{ position: "relative" }}>
                      <select value={form.timeline} onChange={set("timeline")} required style={{ ...inputStyle, paddingRight: "32px", cursor: "pointer" }}>
                        {TIMELINES.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: "10px", color: "var(--color-blue)" }}>▼</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 02 */}
              <div style={{ marginBottom: "40px" }}>
                <div style={sectionTitleStyle}>02 | About Your Business</div>

                <div className="contact-form-fields-2col">
                  <div>
                    <FieldLabel required>Your Industry</FieldLabel>
                    <input
                      type="text"
                      placeholder="e.g. Dental Clinic, CA Firm, Restaurant…"
                      value={form.industry}
                      onChange={set("industry")}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <FieldLabel>Link to your website / social</FieldLabel>
                    <input
                      type="url"
                      placeholder="URL (optional)"
                      value={form.websiteLink}
                      onChange={set("websiteLink")}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel required>Briefly explain your business</FieldLabel>
                  <textarea
                    placeholder="Like you&apos;re explaining it to a 5-year-old"
                    value={form.businessDesc}
                    onChange={set("businessDesc")}
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
                  />
                </div>
              </div>

              {/* Section 03 */}
              <div style={{ marginBottom: "32px" }}>
                <div style={sectionTitleStyle}>03 | About Yourself</div>

                <div className="contact-form-fields-2col">
                  <div>
                    <FieldLabel required>What&apos;s your name?</FieldLabel>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={set("name")}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <FieldLabel required>What&apos;s your email?</FieldLabel>
                    <input
                      type="email"
                      placeholder="mail@example.com"
                      value={form.email}
                      onChange={set("email")}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel>Anything else we should know?</FieldLabel>
                  <textarea
                    placeholder="Inspirations, concerns, ideas — anything..."
                    value={form.notes}
                    onChange={set("notes")}
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "var(--color-blue)",
                    color: "var(--color-white)",
                    border: "none",
                    padding: "12px 20px",
                    fontFamily: "var(--font-display)",
                    fontSize: "13.6px",
                    fontWeight: 400,
                    letterSpacing: "0.2px",
                    cursor: "pointer",
                  }}
                >
                  SEND PROJECT REQUEST
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      border: "1px solid rgba(255,255,255,0.4)",
                      fontSize: "11px",
                    }}
                  >
                    ↗
                  </span>
                </button>

                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  {["Free Consultation", "No Obligation", "Response Within 24 Hours"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "var(--color-black)",
                        opacity: 0.55,
                        letterSpacing: "0.2px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ color: "var(--color-blue)", fontSize: "8px" }}>■</span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
