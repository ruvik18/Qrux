import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setName("");
      setEmail("");
    }
  };

  return (
    <section id="archive" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            borderRight: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80"
            alt="Studio magazine"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              minHeight: "280px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              right: "16px",
              backgroundColor: "var(--color-blue)",
              padding: "12px 16px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 400,
                color: "var(--color-white)",
                letterSpacing: "0.5px",
                marginBottom: "4px",
                textTransform: "uppercase",
              }}
            >
              Studio Dispatch Vol. 1 // Not Just Any Magazine
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-offbit-101)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "var(--color-green)",
                  letterSpacing: "2px",
                }}
              >
                STUDIO
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  color: "var(--color-white)",
                  border: "1px solid var(--color-green)",
                  padding: "2px 8px",
                }}
              >
                $4.99
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "64px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 300,
              lineHeight: "1.4",
              letterSpacing: "-0.1px",
              color: "var(--color-black)",
              marginBottom: "32px",
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "20px" }}>👋</span>
            You are in the messy middle and you are not alone.
          </p>

          {subscribed ? (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--color-blue)",
              }}
            >
              You&apos;re in. Welcome to the archive.
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
              <div style={{ display: "flex", gap: "0" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    flex: "1",
                    padding: "10px 12px",
                    border: "1px solid var(--color-border)",
                    borderRight: "none",
                    backgroundColor: "var(--color-white)",
                    fontFamily: "var(--font-display)",
                    fontSize: "13.6px",
                    fontWeight: 400,
                    color: "var(--color-black)",
                    outline: "none",
                    borderRadius: "0",
                  }}
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: "1",
                    padding: "10px 12px",
                    border: "1px solid var(--color-border)",
                    borderRight: "none",
                    backgroundColor: "var(--color-white)",
                    fontFamily: "var(--font-display)",
                    fontSize: "13.6px",
                    fontWeight: 400,
                    color: "var(--color-black)",
                    outline: "none",
                    borderRadius: "0",
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
    </section>
  );
}
