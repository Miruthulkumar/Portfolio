import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Globe2,
  BrainCircuit,
  Wrench,
  Laptop2,
  CircuitBoard,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolioData";

const iconMap = {
  code: Code2,
  web: Globe2,
  database: Database,
  brain: BrainCircuit,
  chip: Cpu,
  tool: Wrench,
  system: Laptop2,
};

export default function Skills() {
  return (
    <section id="skills" className="flow-section section-shell section-padding">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
        subtitle="A practical skill set spanning web development, embedded systems, tools, and core engineering fundamentals."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.iconKey] || CircuitBoard;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-violet-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/50">Focused and hands-on</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
