import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    badge: "OUR WORK",
    title: "CouncilOs",
    description:
      "A platform connecting students with verified overseas education consultants — simplifying the journey from college shortlisting to visa filing.",
    date: "March 2024",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781845764/Screenshot_2026-06-19_at_10.35.27_AM_keallf.png",
    imageAlt: "Oviguide education platform",
    caseStudyUrl: "https://councilos.vercel.app/",
  },
  {
    id: 2,
    badge: "OUR WORK",
    title: "AlphaJee.com",
    description:
      "A focused JEE preparation platform delivering curated study material, adaptive mock tests, and rank analytics to serious engineering aspirants.",
    date: "June 2024",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781845877/Screenshot_2026-06-17_at_9.13.28_AM_es56ni.png",
    imageAlt: "AlphaJEE education platform",
    caseStudyUrl: "https://alphajee.com",
  },
  {
    id: 3,
    badge: "OUR WORK",
    title: "jeeplanner.in",
    description:
      "An AI-powered SaaS platform that automates data workflows and surfaces business intelligence — built for teams that move fast.",
    date: "September 2024",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781845946/Screenshot_2026-06-19_at_10.42.14_AM_hojhgo.png",
    imageAlt: "JeePlanner platform",
    caseStudyUrl: "https://jeeplanner.in",
  },
  {
    id: 4,
    badge: "OUR WORK",
    title: "OVIBATTLE.IN",
    description:
      "A competitive gaming tournament platform for student communities — featuring real-time brackets, leaderboards, and prize tracking.",
    date: "December 2024",
    imageUrl:
      "https://res.cloudinary.com/dmafbzu8f/image/upload/v1781846293/Screenshot_2026-06-19_at_10.48.00_AM_vj0vb7.png",
    imageAlt: "OviBattle gaming platform",
    caseStudyUrl: "https://ovibattle.in",
  },
];

function WorkRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      key={project.id}
      className="work-row"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderBottom:
          index < projects.length - 1
            ? "1px solid var(--color-border)"
            : "none",
      }}
    >
      <div
        style={{
          padding: "36px 24px",
          borderRight: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span
            className="badge"
            style={{ marginBottom: "16px", display: "inline-block" }}
          >
            {project.badge}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2.4vw, 32px)",
              fontWeight: 500,
              lineHeight: "1.1",
              letterSpacing: "-0.5px",
              color: "var(--color-black)",
              marginTop: "12px",
              marginBottom: "20px",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13.6px",
              fontWeight: 400,
              lineHeight: "1.6",
              letterSpacing: "0.2px",
              color: "var(--color-black)",
              marginBottom: "24px",
            }}
          >
            {project.description}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "var(--color-border)",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={`https://ui-avatars.com/api/?name=${project.title}&background=bbbdc1&color=222222&size=28`}
              alt={project.title}
              width="28"
              height="28"
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                color: "var(--color-blue)",
              }}
            >
              Case Study
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--color-black)",
              }}
            >
              {project.title}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                color: "var(--color-black)",
                opacity: 0.5,
              }}
            >
              {project.date}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        style={{ position: "relative", overflow: "hidden" }}
        initial={{ scale: 1.04 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
        <a
          href={project.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "28px",
            height: "28px",
            backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "var(--color-black)",
            fontSize: "13px",
          }}
        >
          ↗
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      {projects.map((project, index) => (
        <WorkRow key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
