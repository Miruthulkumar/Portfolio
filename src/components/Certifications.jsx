import { motion } from "framer-motion";
import { achievements, certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="flow-section section-space layout-wrap"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.56 }}
      >
        <p className="eyebrow">Credentials</p>
        <h2 className="section-title max-w-5xl">
          Certifications and achievements as milestones.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.56 }}
          className="surface-card p-7 sm:p-8"
        >
          <h3 className="text-2xl font-semibold text-[var(--paper-100)]">
            Certifications
          </h3>

          <ol className="mt-8 space-y-3">
            {certifications.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-xl border border-[color:var(--line-faint)] bg-white/[0.02] p-4"
              >
                <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted-500)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.98rem] leading-8 text-[var(--paper-200)]/82">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.56, delay: 0.08 }}
          className="surface-card p-7 sm:p-8"
        >
          <h3 className="text-2xl font-semibold text-[var(--paper-100)]">
            Achievements
          </h3>

          <div className="mt-8 space-y-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-[color:var(--line-faint)] bg-white/[0.02] p-4"
              >
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
                  Highlight {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.98rem] leading-7 text-[var(--paper-200)]/82">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
