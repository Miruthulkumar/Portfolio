import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/portfolioData";
import { modeContent } from "../data/translations";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function Projects() {
  const { mode } = useLanguageTheme();
  const copy = modeContent[mode];
  const localizedProjects = (copy.projects.list ?? []).map(
    (localized, index) => ({
      ...projects[index],
      ...localized,
    }),
  );
  const projectList =
    localizedProjects.length > 0 ? localizedProjects : projects;

  return (
    <section id="projects" className="flow-section section-space layout-wrap">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">{copy.projects.eyebrow}</p>
        <h2 className="section-title max-w-6xl">{copy.projects.title}</h2>
      </motion.div>

      <div className="mt-14 space-y-10">
        {projectList.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="surface-card elevate-hover grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]"
          >
            <section className={index % 2 === 0 ? "" : "lg:order-2"}>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
                {String(index + 1).padStart(2, "0")} / {project.type}
              </p>
              <h3 className="mt-3 max-w-2xl text-[2rem] font-semibold leading-[0.92] text-[var(--paper-100)] sm:text-[2.6rem] lg:text-[3rem]">
                {project.title}
              </h3>

              <p className="section-copy mt-5 max-w-2xl">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5 text-sm leading-7 text-[var(--paper-200)]/80">
                {project.keyFeatures.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-500)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-line"
                >
                  <Github className="h-4 w-4" />
                  {copy.projects.github}
                </a>
                <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid"
                >
                  {copy.projects.view}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section
              className={`group outline-frame relative min-h-[240px] overflow-hidden rounded-xl p-5 sm:min-h-[290px] sm:p-6 ${
                index % 2 === 0 ? "" : "lg:order-1"
              }`}
            >
              <p className="absolute right-4 top-2 text-[3.8rem] font-semibold leading-none tracking-[-0.05em] text-white/[0.08] sm:text-[5.3rem]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_9%,rgba(111,151,255,0.24),transparent_52%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted-500)]">
                  {copy.projects.snapshot}
                </p>
                <p className="max-w-sm text-xl font-semibold leading-tight text-[var(--paper-100)] sm:text-2xl">
                  {project.title}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--paper-200)]/72">
                    {project.techStack.length} {copy.projects.technologies}
                  </p>
                  <ArrowUpRight className="h-5 w-5 text-[var(--accent-400)] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </section>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
