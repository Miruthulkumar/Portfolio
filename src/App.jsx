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
import SakuraPetals from "./components/SakuraPetals";
import { useLanguageTheme } from "./context/LanguageThemeContext";

export default function App() {
  const { mode, isJapanese } = useLanguageTheme();

  return (
    <div
      className={`site-shell site-mode-${mode} min-h-screen text-[var(--paper-100)]`}
    >
      <div className="pointer-events-none fixed inset-0 z-0 grid-texture opacity-35" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-44 bg-gradient-to-b from-white/[0.05] to-transparent" />
      {isJapanese ? (
        <>
          <div className="sakura-haze pointer-events-none fixed inset-0 z-0" />
          <div className="sakura-lines pointer-events-none fixed inset-0 z-0" />
        </>
      ) : null}
      <SakuraPetals />

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
const text = `
███╗   ███╗██╗██████╗ ██╗   ██╗████████╗██╗   ██╗ ██╗   ██╗██╗     
████╗ ████║██║██╔══██╗██║   ██║╚══██╔══╝██║   ██╔╝██║   ██║██║     
██╔████╔██║██║██████╔╝██║   ██║   ██║   ████████╔ ██║   ██║██║     
██║╚██╔╝██║██║██╔══██╗██║   ██║   ██║   ██╔═══██╗ ██║   ██║██║     
██║ ╚═╝ ██║██║██║  ██║╚██████╔╝   ██║   ██║   ██╗ ╚██████╔╝███████╗
╚═╝     ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝   ╚═╝  ╚═════╝ ╚══════╝

██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗ 
██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗
█████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝
██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗
██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`;

console.log(
  "%c" + text,
  `
  color: #AABCFA;
  font-weight: bold;
  font-family: monospace;
  line-height: 1.1;
  `,
);
