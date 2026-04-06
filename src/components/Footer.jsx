import { motion } from "framer-motion";
import { footer, navItems } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950/50 to-slate-900/30">
      <div className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">{footer.name}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
              {footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-white/20 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 shadow-sm transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white"
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
          className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs font-medium text-white/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-white/60">
            © 2026 {footer.name}. All rights reserved.
          </p>
          <p>
            Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide
            React.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
