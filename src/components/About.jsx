import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="flow-section section-space layout-wrap">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title max-w-4xl">
            I design and develop practical digital systems across web and IoT.
          </h2>
          <p className="section-copy max-w-2xl">
            {about.internship.description}
          </p>
          <a href="#projects" className="btn-line mt-9">
            See selected projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, delay: 0.07 }}
          className="border-l border-[color:var(--line-soft)] pl-7 sm:pl-10"
        >
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted-500)]">
            Current Role Focus
          </p>
          <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-[0.95] text-[var(--paper-100)] sm:text-4xl">
            {about.internship.role}
          </h3>

          <div className="mt-10 space-y-4">
            {about.highlights.map((item, index) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-4 border-b border-[color:var(--line-faint)] pb-4"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted-500)]">
                  {String(index + 1).padStart(2, "0")} / {item.label}
                </p>
                <p className="text-right text-base font-semibold text-[var(--paper-100)] sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 border-t border-[color:var(--line-faint)] pt-6">
            <p className="text-[0.64rem] uppercase tracking-[0.22em] text-[var(--muted-500)]">
              Intent
            </p>
            <p className="mt-3 text-sm leading-8 text-[var(--paper-200)]/80">
              Build software that is clean in architecture, practical in real
              use, and easy to extend over time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
