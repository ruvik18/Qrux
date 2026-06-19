import { useState } from "react";

const STARS = (n: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill={i < n ? "var(--color-blue)" : "none"}
      stroke="var(--color-blue)"
      strokeWidth="0.8"
    >
      <polygon points="5,1 6.2,3.8 9.5,4 7,6.2 7.9,9.5 5,7.8 2.1,9.5 3,6.2 0.5,4 3.8,3.8" />
    </svg>
  ));

const testimonials = [
  {
    id: 1,
    quote:
      "qurx studios crafted my website a lot way better than i expected ,and the response is insane , the support is good and devilvered in time, kudos to you guys",
    name: "Narendra",
    role: "Founder, — jeeplanner.in",
    project: "jeeplanner.in",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781845946/Screenshot_2026-06-19_at_10.42.14_AM_hojhgo.png",
    avatarUrl: "https://i.pravatar.cc/48?img=51",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "never seen such fast delivery at this grade of quality , got best ui/ux in a short span of time made the web looks so clean and you guys are amazing thank for your work",
    name: " likith",
    role: "Principal Designer, ovibattle",
    project: "ovibattle",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781846293/Screenshot_2026-06-19_at_10.48.00_AM_vj0vb7.png",
    avatarUrl: "https://i.pravatar.cc/48?img=25",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "goated stuff, Qrux made my so good i cant belive still this all done in a span of 2 days , we have a lot of respect on your work and you guys  did so well. and we are much satisfiled with the output you gave us ! ",
    name: "anuridh",
    role: "Owner, coucilos — Hyderabad",
    project: "councilos",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781845764/Screenshot_2026-06-19_at_10.35.27_AM_keallf.png",
    avatarUrl: "https://i.pravatar.cc/48?img=47",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="testimonials-grid">
        <div
          style={{
            borderRight: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={t.imageUrl}
            alt={t.project}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              minHeight: "380px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              backgroundColor: "var(--color-bg)",
              padding: "6px 10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 400,
                color: "var(--color-blue)",
              }}
            >
              Client
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13.6px",
                fontWeight: 600,
                color: "var(--color-black)",
              }}
            >
              {t.project}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "clamp(24px, 4vw, 64px) clamp(20px, 4vw, 48px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <span className="badge">FEEDBACK</span>
              <div style={{ display: "flex", gap: "8px" }}>
                {(["←", "→"] as const).map((arrow, i) => (
                  <button
                    key={arrow}
                    onClick={() =>
                      setCurrent((c) =>
                        i === 0
                          ? (c - 1 + testimonials.length) % testimonials.length
                          : (c + 1) % testimonials.length,
                      )
                    }
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid var(--color-border)",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      color: "var(--color-black)",
                    }}
                  >
                    {arrow}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
              {STARS(t.stars)}
            </div>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                fontWeight: 400,
                lineHeight: "1.7",
                color: "var(--color-black)",
                marginBottom: "32px",
                fontStyle: "italic",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src={t.avatarUrl}
              alt={t.name}
              width="48"
              height="48"
              style={{ borderRadius: "50%", flexShrink: 0 }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-black)",
                  marginBottom: "2px",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  opacity: 0.6,
                }}
              >
                {t.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
