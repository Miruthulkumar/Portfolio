import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Layers3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolioData";

const highlights = [GraduationCap, Award, Briefcase, Layers3];

export default function About() {
  return (
    <section id="about" className="flow-section section-shell section-padding">
      <SectionHeading
        eyebrow="Profile"
        title={about.title}
        subtitle="A software-oriented ECE student building polished projects across web, embedded, and IoT workflows."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] xl:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 sm:p-8"
        >
          <div className="space-y-5 text-white/80">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-8 text-[0.98rem] sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
              Internship
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">
              {about.internship.role}
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              {about.internship.description}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {about.highlights.map((item, index) => {
            const Icon = highlights[index];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card group p-4 sm:p-5 transition duration-300 hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-violet-400 transition duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
