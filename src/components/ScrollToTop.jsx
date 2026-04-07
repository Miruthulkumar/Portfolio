import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { modeContent } from "../data/translations";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { mode } = useLanguageTheme();
  const copy = modeContent[mode];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-[var(--ink-900)]/95 text-[var(--paper-100)] transition hover:-translate-y-0.5 hover:border-[var(--accent-400)]"
          aria-label={copy.misc.scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
