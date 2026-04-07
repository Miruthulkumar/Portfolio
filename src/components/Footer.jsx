import { motion } from "framer-motion";
import { footer, navItems } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[color:var(--line-faint)] bg-black/10">
      <div className="layout-wrap py-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--paper-100)]">
              {footer.name}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-8 text-[var(--paper-200)]/74">
              {footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-transparent py-1 text-[0.62rem] font-semibold uppercase tracking-[0.23em] text-[var(--paper-200)] transition hover:border-[var(--accent-400)] hover:text-[var(--paper-100)]"
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
          <p>© 2026 {footer.name}. All rights reserved.</p>
          <p>
            Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide
            React.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
