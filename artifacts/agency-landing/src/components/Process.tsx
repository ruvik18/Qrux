function CircleDiagram({ type }: { type: "map" | "make" | "move" }) {
  const size = 180;
  const cx = size / 2;
  const cy = size / 2;
  const r = 60;

  if (type === "map") {
    const points = 12;
    const nodes = Array.from({ length: points }, (_, i) => {
      const angle = (i * 2 * Math.PI) / points - Math.PI / 2;
      return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
    });
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ opacity: 0.8 }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="var(--color-black)"
          strokeWidth="0.8"
        />
        {nodes.map((node, i) =>
          nodes
            .slice(i + 1)
            .map((target, j) =>
              (i + j) % 3 === 0 ? (
                <line
                  key={`${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="var(--color-black)"
                  strokeWidth="0.4"
                  opacity="0.3"
                />
              ) : null,
            ),
        )}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="var(--color-black)"
          />
        ))}
        <circle cx={cx} cy={cy} r="3" fill="var(--color-black)" />
      </svg>
    );
  }

  if (type === "make") {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ opacity: 0.8 }}
      >
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (i * 2 * Math.PI) / 24;
          const len = r + (i % 3 === 0 ? 16 : i % 2 === 0 ? 8 : 0);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + len * Math.cos(angle)}
              y2={cy + len * Math.sin(angle)}
              stroke="var(--color-black)"
              strokeWidth="0.8"
            />
          );
        })}
        <circle cx={cx} cy={cy} r="4" fill="var(--color-black)" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ opacity: 0.8 }}
    >
      {[16, 30, 44, 58].map((rad, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={rad}
          fill="none"
          stroke="var(--color-black)"
          strokeWidth="0.8"
          strokeDasharray={i % 2 === 0 ? "none" : "3 3"}
        />
      ))}
      {Array.from({ length: 16 }, (_, i) => {
        const angle = (i * 2 * Math.PI) / 16;
        const x = cx + 58 * Math.cos(angle);
        const y = cy + 58 * Math.sin(angle);
        return (
          <polygon
            key={i}
            points={`${x},${y - 4} ${x + 3},${y + 3} ${x - 3},${y + 3}`}
            fill="var(--color-black)"
            transform={`rotate(${(i * 360) / 16}, ${x}, ${y})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r="4" fill="var(--color-black)" />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    title: "MAP",
    subtitle: "Strategy // Structure",
    description:
      "We start by understanding your goals, your positioning, and what actually makes your brand valuable. This is where we figure out the story you're telling, who needs to hear it, and how to guide them from curious to ready to book.",
  },
  {
    num: "02",
    title: "MAKE",
    subtitle: "Design // Experience",
    description:
      'Your brand gets translated into a visual journey that feels intentional. Every click, scroll, and CTA has a purpose. We\'re building the experience that takes your leads from "this looks interesting" to "I need to work with them."',
  },
  {
    num: "03",
    title: "MOVE",
    subtitle: "Develop // Automate",
    description:
      "We build it fast, clean, and scalable. Then we plug in the tools, automate, and set up your systems. Your website becomes something that works for you, educating leads, filtering out, and delivering qualified clients ready to book.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="process-outer">
        <div
          style={{
            padding: "64px 24px",
            borderRight: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              className="badge"
              style={{ marginBottom: "24px", display: "inline-block" }}
            >
              PROCESS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: "1.05",
                letterSpacing: "-1px",
                color: "var(--color-black)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              HOW IT WORKS
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13.6px",
                fontWeight: 400,
                lineHeight: "1.6",
                color: "var(--color-black)",
                marginBottom: "32px",
              }}
            >
              Here&apos;s how we build websites that actually work:
            </p>
          </div>
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
            LEARN MORE ↗
          </a>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "64px 24px",
                borderRight:
                  i < steps.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-offbit-101)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  opacity: 0.6,
                  marginBottom: "8px",
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-offbit-101)",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  color: "var(--color-blue)",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  marginBottom: "40px",
                }}
              >
                {step.subtitle}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "40px",
                }}
              >
                <CircleDiagram
                  type={step.title.toLowerCase() as "map" | "make" | "move"}
                />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  color: "var(--color-black)",
                  textAlign: "center",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
