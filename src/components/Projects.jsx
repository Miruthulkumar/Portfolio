import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flow-section section-shell section-padding"
    >
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Selected work across software and IoT, presented with a clean recruiter-friendly emphasis on purpose, stack, and impact."
      />

      <div className="grid gap-6 lg:grid-cols-2 xl:gap-7">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.005 }}
            className="glass-card group relative overflow-hidden p-6 sm:p-7 lg:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-60" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-violet-600/20 to-violet-500/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-[1.7rem]">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-[0.98rem] leading-8 text-white/75">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                Key Features
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/70">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/70 transition duration-300 group-hover:border-white/30 group-hover:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="premium-button-solid"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
