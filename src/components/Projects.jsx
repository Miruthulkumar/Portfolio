import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="flow-section section-space layout-wrap">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Projects</p>
        <h2 className="section-title max-w-6xl">
          Selected projects presented as case studies.
        </h2>
      </motion.div>

      <div className="mt-16 space-y-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className={`grid items-end gap-10 border-t border-[color:var(--line-soft)] pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 ${
              index % 2 === 0 ? "" : "lg:[&>section:first-child]:order-2"
            }`}
          >
            <section>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
                {String(index + 1).padStart(2, "0")} / {project.type}
              </p>
              <h3 className="mt-4 max-w-2xl text-[2.3rem] font-semibold leading-[0.88] text-[var(--paper-100)] sm:text-[3.15rem] lg:text-[4.35rem]">
                {project.title}
              </h3>

              <p className="section-copy mt-6 max-w-2xl lg:pl-20">
                {project.description}
              </p>

              <ul className="mt-8 space-y-2.5 text-sm leading-7 text-[var(--paper-200)]/80 lg:pl-20">
                {project.keyFeatures.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-500)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2.5 lg:pl-20">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 lg:pl-20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-line"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section className="group outline-frame relative min-h-[320px] overflow-hidden p-5 sm:min-h-[410px] sm:p-8">
              <p className="absolute right-4 top-2 text-[4.6rem] font-semibold leading-none tracking-[-0.05em] text-white/[0.08] sm:text-[7rem]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_9%,rgba(111,151,255,0.28),transparent_52%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted-500)]">
                  Project Snapshot
                </p>
                <p className="max-w-sm text-2xl font-semibold leading-tight text-[var(--paper-100)] sm:text-3xl">
                  {project.title}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--paper-200)]/72">
                    {project.techStack.length} Technologies
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
