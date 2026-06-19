import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Process from "../components/Process";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <div className="grid-overlay">
        <div className="grid-overlay-col" />
        <div className="grid-overlay-col" />
        <div className="grid-overlay-col" />
        <div className="grid-overlay-col" style={{ borderRight: "1px solid var(--color-border)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <FadeIn direction="up" delay={0}>
          <About />
        </FadeIn>
        <Work />
        <FadeIn direction="up" delay={0}>
          <Process />
        </FadeIn>
        <FadeIn direction="up" delay={0}>
          <Services />
        </FadeIn>
        <FadeIn direction="up" delay={0}>
          <Testimonials />
        </FadeIn>
        <FadeIn direction="up" delay={0}>
          <Pricing />
        </FadeIn>
        <FadeIn direction="up" delay={0}>
          <Contact />
        </FadeIn>
        <FadeIn direction="up" delay={0}>
          <Footer />
        </FadeIn>
        <WhatsAppButton />
      </div>
    </div>
  );
}
