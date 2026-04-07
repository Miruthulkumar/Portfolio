import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="site-shell min-h-screen text-[var(--paper-100)]">
      <div className="pointer-events-none fixed inset-0 z-0 grid-texture opacity-35" />
      <div className="pointer-events-none fixed inset-y-0 left-[9%] z-0 hidden w-px bg-white/[0.06] lg:block" />
      <div className="pointer-events-none fixed inset-y-0 right-[7%] z-0 hidden w-px bg-white/[0.04] lg:block" />

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </motion.div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
