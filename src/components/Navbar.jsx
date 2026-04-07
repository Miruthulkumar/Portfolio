import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems, resumePath } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0f1218]/82 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="layout-wrap flex h-[4.65rem] items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-[var(--paper-100)]">
              Miruthul Kumar
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted-500)]">
              Portfolio 2026
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--paper-200)]/75 transition hover:text-[var(--paper-100)]"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--accent-500)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={resumePath} download className="btn-line">
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.02] text-[var(--paper-100)] transition hover:border-[var(--accent-400)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#11151d]/95 px-4 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="layout-wrap space-y-3 px-0">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-white/10 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--paper-100)] transition hover:border-[var(--accent-400)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={resumePath}
                download
                className="btn-solid w-full justify-center"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
