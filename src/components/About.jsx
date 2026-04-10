import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { about } from "../data/portfolioData";
import { modeContent } from "../data/translations";
import { useLanguageTheme } from "../context/LanguageThemeContext";

const highlightDetails = [
  "ECE undergraduate focused on building practical software systems.",
  "Worked on real UI tasks during internship and improved frontend workflow understanding.",
  "Delivered full stack and IoT projects with end-to-end implementation.",
];

export default function About() {
  const { mode } = useLanguageTheme();
  const copy = modeContent[mode];
  const localizedHighlights = copy.about.highlightsList;
  const highlightItems =
    localizedHighlights ??
    about.highlights.map((item, index) => ({
      label: item.label,
      value: item.value,
      detail: highlightDetails[index],
    }));

  return (
    <section id="about" className="flow-section section-space layout-wrap">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62 }}
          className="surface-card p-7 sm:p-8"
        >
          <p className="eyebrow">{copy.about.eyebrow}</p>
          <h2 className="section-title max-w-4xl">
            {copy.about.title ??
              "I design and develop practical digital systems across web and IoT."}
          </h2>
          <p className="section-copy max-w-2xl">
            {copy.about.description ?? about.internship.description}
          </p>
          <a href="#projects" className="btn-line mt-9">
            {copy.about.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, delay: 0.07 }}
          className="surface-card p-7 sm:p-8"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted-500)]">
                {copy.about.snapshot}
              </p>
              <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-[var(--paper-100)] sm:text-3xl">
                {copy.about.strengths}
              </h3>
            </div>
            <p className="hidden text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted-500)] sm:block">
              03 {copy.about.highlights}
            </p>
          </div>

          <div className="mt-7 space-y-3">
            {highlightItems.map((item, index) => (
              <div
                key={item.label}
                className="rounded-xl border border-[color:var(--line-faint)] bg-white/[0.02] px-4 py-4"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
                  {String(index + 1).padStart(2, "0")} / {item.value}
                </p>
                <p className="mt-2 text-base font-semibold text-[var(--paper-100)] sm:text-lg">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-7 text-[var(--paper-200)]/82">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[color:var(--line-faint)] bg-white/[0.015] px-4 py-5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
              {copy.about.internship}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--paper-200)]/82">
              {copy.about.internshipRole ?? about.internship.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
