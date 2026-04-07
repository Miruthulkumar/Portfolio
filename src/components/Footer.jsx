import { motion } from "framer-motion";
import { footer } from "../data/portfolioData";
import { modeContent } from "../data/translations";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function Footer() {
  const { mode, isJapanese } = useLanguageTheme();
  const copy = modeContent[mode];

  return (
    <footer className="relative z-10 border-t border-[color:var(--line-faint)] bg-black/15">
      <div className="layout-wrap py-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--paper-100)]">
              {footer.name}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-8 text-[var(--paper-200)]/74">
              {copy.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            {copy.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`border-b border-transparent py-1 text-[0.68rem] font-semibold text-[var(--paper-200)] transition hover:border-[var(--accent-400)] hover:text-[var(--paper-100)] ${
                  isJapanese
                    ? "tracking-[0.07em]"
                    : "uppercase tracking-[0.23em]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-2 border-t border-[color:var(--line-faint)] pt-6 text-xs font-medium text-[var(--paper-200)]/66 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © 2026 {footer.name}. {copy.footer.rights}
          </p>
          <p>{copy.footer.builtWith}</p>
        </motion.div>
      </div>
    </footer>
  );
}
