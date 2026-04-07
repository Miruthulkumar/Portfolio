import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { japaneseResumePath, resumePath } from "../data/portfolioData";
import { modeContent } from "../data/translations";
import LanguageToggle from "./LanguageToggle";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, isJapanese } = useLanguageTheme();
  const copy = modeContent[mode];
  const currentResumePath = isJapanese ? japaneseResumePath : resumePath;

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
          ? "border-white/10 bg-[var(--ink-900)]/82 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`layout-wrap flex items-center justify-between gap-4 ${
          isJapanese ? "h-[5rem]" : "h-[4.65rem]"
        }`}
      >
        <a href="#home" className="group flex items-center gap-3">
          <div
            className={`flex items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white/[0.03] text-[0.62rem] font-semibold tracking-[0.18em] text-[var(--paper-100)] transition group-hover:border-[var(--accent-400)] ${
              isJapanese ? "h-10 w-10" : "h-9 w-9"
            }`}
          >
            {isJapanese ? "宮" : "MK"}
          </div>
          <div>
            <p
              className={`text-[0.72rem] font-semibold text-[var(--paper-100)] ${
                isJapanese ? "tracking-[0.08em]" : "uppercase tracking-[0.25em]"
              }`}
            >
              Miruthul Kumar
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative text-[0.7rem] font-semibold text-[var(--paper-200)]/82 transition hover:text-[var(--paper-100)] ${
                isJapanese ? "tracking-[0.08em]" : "uppercase tracking-[0.24em]"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--accent-500)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={currentResumePath}
            download
            className={`btn-line ${isJapanese ? "" : "h-9 px-4 py-1.5"}`}
          >
            <Download className="h-4 w-4" />
            {copy.navbar.resume}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white/[0.03] text-[var(--paper-100)] transition hover:border-[var(--accent-400)] lg:hidden"
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
            className="border-t border-white/10 bg-[var(--ink-900)]/95 px-4 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="layout-wrap space-y-3 px-0">
              <div className="pb-2">
                <LanguageToggle compact />
              </div>
              {copy.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl border border-white/10 px-4 py-3 text-[0.7rem] font-semibold text-[var(--paper-100)] transition hover:border-[var(--accent-400)] ${
                    isJapanese
                      ? "tracking-[0.08em]"
                      : "uppercase tracking-[0.22em]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={currentResumePath}
                download
                className="btn-solid w-full justify-center"
              >
                <Download className="h-4 w-4" />
                {copy.navbar.downloadResume}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
