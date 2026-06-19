import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const lineReveal = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function CornerMarkers() {
  const s = {
    position: "absolute",
    width: "6px",
    height: "6px",
    backgroundColor: "var(--color-blue)",
  };
  return (
    <>
      <div style={{ ...s, top: "-4px", left: "-4px" }} />
      <div style={{ ...s, top: "-4px", right: "-4px" }} />
      <div style={{ ...s, bottom: "-4px", left: "-4px" }} />
      <div style={{ ...s, bottom: "-4px", right: "-4px" }} />
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px 100px",
        position: "relative",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* MAIN CONTENT WRAPPER */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 
          DESKTOP: Grid with headline left, desc right
          MOBILE: Stack vertically
        */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-layout"
        >
          {/* We use a wrapper that switches layout via CSS class */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
            className="hero-grid"
          >
            {/* HEADLINE BLOCK */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              style={{
                textAlign: "center",
                position: "relative",
              }}
              className="hero-headline-wrap"
            >
              <h1
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  color: "var(--color-black)",
                  fontSize: "clamp(36px, 12vw, 110px)",
                  textTransform: "uppercase",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <motion.span
                    style={{ display: "block" }}
                    variants={lineReveal}
                  >
                    TURN YOUR
                  </motion.span>
                </div>

                <div style={{ overflow: "hidden" }}>
                  <motion.span
                    style={{ display: "block" }}
                    variants={lineReveal}
                  >
                    WEBSITE INTO{" "}
                    <span
                      style={{
                        position: "relative",
                        display: "inline-block",
                        border: "2px solid var(--color-blue)",
                        padding: "0 10px",
                        lineHeight: "0.9",
                        marginLeft: "4px",
                      }}
                    >
                      PREMIUM
                      <CornerMarkers />
                    </span>
                  </motion.span>
                </div>

                <div style={{ overflow: "hidden" }}>
                  <motion.span
                    style={{
                      display: "block",
                      fontWeight: 5,
                      letterSpacing: "-1px",
                    }}
                    variants={lineReveal}
                  >
                    BUSINESS ASSET.
                  </motion.span>
                </div>
              </h1>

              {/* DESCRIPTION — positioned absolute on desktop to sit beside headline */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.55 } as never}
                className="hero-desc-desktop"
                style={{
                  marginTop: "24px",
                  textAlign: "center",
                  maxWidth: "320px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "var(--color-black)",
                    fontWeight: 400,
                  }}
                >
                  We build custom websites for ambitious brands that already
                  have attention but need a stronger digital
                  presence—transforming visitors into qualified leads through
                  strategic design, compelling storytelling, and seamless user
                  experiences.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: "40px" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "var(--color-blue)",
              color: "var(--color-white)",
              padding: "14px 22px",
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.2px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            LET'S BUILD YOURS
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                border: "1px solid rgba(255,255,255,0.35)",
                fontSize: "13px",
              }}
            >
              ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "var(--color-black)",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span>INSTAGRAM,&nbsp;LINKEDIN,</span>
        <span style={{ color: "var(--color-blue)" }}>↓ SCROLL DOWN</span>
        <span>yuvarajdhongadi@gmail.com</span>
      </motion.div>

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (min-width: 900px) {
          .hero-headline-wrap {
            display: inline-block !important;
            text-align: left !important;
          }
          .hero-desc-desktop {
            position: absolute !important;
            top: 0 !important;
            right: -280px !important;
            width: 260px !important;
            margin-top: 8px !important;
            text-align: left !important;
          }
        }
        @media (max-width: 600px) {
          .hero-desc-desktop {
            max-width: 100% !important;
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}
