function PageDiagram({ type }: { type: "single" | "multi" | "growth" }) {
  if (type === "single") {
    return (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <rect
          x="8"
          y="8"
          width="54"
          height="54"
          stroke="var(--color-black)"
          strokeWidth="1"
          rx="2"
        />
        <line
          x1="8"
          y1="35"
          x2="62"
          y2="35"
          stroke="var(--color-black)"
          strokeWidth="0.5"
        />
        <circle cx="35" cy="35" r="2" fill="var(--color-black)" />
        <line
          x1="22"
          y1="8"
          x2="22"
          y2="62"
          stroke="var(--color-black)"
          strokeWidth="0.3"
        />
        <line
          x1="48"
          y1="8"
          x2="48"
          y2="62"
          stroke="var(--color-black)"
          strokeWidth="0.3"
        />
      </svg>
    );
  }
  if (type === "multi") {
    return (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <rect
          x="8"
          y="8"
          width="54"
          height="54"
          stroke="var(--color-black)"
          strokeWidth="1"
          rx="2"
        />
        <line
          x1="8"
          y1="26"
          x2="62"
          y2="26"
          stroke="var(--color-black)"
          strokeWidth="0.5"
        />
        <line
          x1="8"
          y1="44"
          x2="62"
          y2="44"
          stroke="var(--color-black)"
          strokeWidth="0.5"
        />
        <line
          x1="26"
          y1="8"
          x2="26"
          y2="62"
          stroke="var(--color-black)"
          strokeWidth="0.5"
        />
        <line
          x1="44"
          y1="8"
          x2="44"
          y2="62"
          stroke="var(--color-black)"
          strokeWidth="0.5"
        />
        <circle cx="35" cy="35" r="2" fill="var(--color-black)" />
        <circle cx="17" cy="17" r="1.5" fill="var(--color-black)" />
        <circle cx="53" cy="53" r="1.5" fill="var(--color-black)" />
      </svg>
    );
  }
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
      <circle
        cx="35"
        cy="35"
        r="26"
        stroke="var(--color-black)"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="35"
        cy="35"
        r="17"
        stroke="var(--color-black)"
        strokeWidth="0.5"
        fill="none"
      />
      <circle
        cx="35"
        cy="35"
        r="8"
        stroke="var(--color-black)"
        strokeWidth="0.5"
        fill="none"
      />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 2 * Math.PI) / 8;
        return (
          <line
            key={i}
            x1={35 + 8 * Math.cos(angle)}
            y1={35 + 8 * Math.sin(angle)}
            x2={35 + 26 * Math.cos(angle)}
            y2={35 + 26 * Math.sin(angle)}
            stroke="var(--color-black)"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

const services = [
  {
    num: "01",
    title: "One-Pager Site",
    timeline: "2 - 3 days",
    description:
      "A streamlined single-page site that tells your complete story, showcases your best work, and guides visitors straight to booking. Perfect for focused offers or launching fast.",
    useCases: [
      "Sales Page,",
      "Personal Brand,",
      "Product Launch,",
      "Event Landing Page",
    ],
    diagram: "single" as const,
  },
  {
    num: "02",
    title: "Full Website",
    timeline: "6 days",
    description:
      "Multi-page custom build with strategic structure. Your complete brand experience – portfolio, process, services, and story – all connected to convert traffic into qualified leads.",
    useCases: [
      "Consultancy,",
      "Established Agency,",
      "Service-Based Business,",
      "Multi-Disciplinary Creative",
    ],
    diagram: "multi" as const,
  },
  {
    num: "03",
    title: "Website Growth",
    timeline: "4 - 6 Weeks",
    description:
      "Ongoing strategic partnership to evolve your site as your business grows. New pages, new offers, A/B testing, and continuous optimisation to keep converting at a higher level.",
    useCases: [
      "Scaling Business,",
      "Content Creator,",
      "Course Launch,",
      "Membership Site",
    ],
    diagram: "growth" as const,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div style={{ padding: "96px 24px 0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            className="badge"
            style={{ marginBottom: "24px", display: "inline-block" }}
          >
            OUR SERVICES
          </span>
          <h2
            style={{
              fontFamily: "var(--font-offbit-101)",
              fontSize: "clamp(32px, 4vw, 51.2px)",
              fontWeight: 900,
              lineHeight: "1.15",
              letterSpacing: "-1.5px",
              color: "var(--color-black)",
              textTransform: "uppercase",
            }}
          >
            THREE OPTIONS. ONE
            <br />
            GOAL.
          </h2>
        </div>
      </div>

      <div>
        {services.map((service) => (
          <div
            key={service.num}
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <div className="services-row-header">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  opacity: 0.5,
                }}
              >
                {service.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  color: "var(--color-black)",
                }}
              >
                {service.title}
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  color: "var(--color-black)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="var(--color-black)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M7 4v3l2 2"
                    stroke="var(--color-black)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                {service.timeline}
              </span>
            </div>

            <div
              style={{
                height: "1px",
                backgroundColor: "var(--color-border)",
                margin: "24px 0 0 0",
              }}
            />

            <div className="services-row-body">
              <div />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13.6px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  letterSpacing: "0.1px",
                  color: "var(--color-black)",
                }}
              >
                {service.description}
              </p>
              <div>
                {service.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "13.6px",
                      fontWeight: 400,
                      color: "var(--color-blue)",
                      lineHeight: "1.8",
                    }}
                  >
                    {useCase}
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "4px",
                }}
              >
                <PageDiagram type={service.diagram} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
