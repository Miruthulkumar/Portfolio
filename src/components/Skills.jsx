import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import { modeContent } from "../data/translations";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function Skills() {
  const { mode } = useLanguageTheme();
  const copy = modeContent[mode];

  return (
    <section id="skills" className="flow-section section-space layout-wrap">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.58 }}
      >
        <p className="eyebrow">{copy.skills.eyebrow}</p>
        <h2 className="section-title max-w-5xl">{copy.skills.title}</h2>
      </motion.div>

      <div className="mt-14 border-t border-[color:var(--line-soft)]">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="grid gap-4 border-b border-[color:var(--line-faint)] py-7 sm:grid-cols-[0.12fr_0.28fr_1fr] sm:gap-7"
          >
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-lg font-semibold text-[var(--paper-100)] sm:text-xl">
              {category.title}
            </h3>

            <div className="rounded-xl border border-[color:var(--line-faint)] bg-white/[0.02] p-4 sm:p-5">
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
