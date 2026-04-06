import { motion } from "framer-motion";
import { BadgeCheck, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements, certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="flow-section section-shell section-padding"
    >
      <SectionHeading
        eyebrow="Recognition"
        title="Certifications & Achievements"
        subtitle="A focused record of language proficiency, academic learning, and competitive performance."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-violet-400">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="mt-6 space-y-3">
            {certifications.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-[0.97rem] text-white/75 backdrop-blur-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="glass-card p-7 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-violet-400">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
          </div>

          <div className="mt-6 space-y-3">
            {achievements.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-[0.97rem] text-white/75 backdrop-blur-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
