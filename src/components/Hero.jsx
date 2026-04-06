import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { hero, resumePath } from "../data/portfolioData";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="flow-section section-shell section-padding pt-14 sm:pt-16 lg:pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid items-center gap-10"
      >
        <div className="relative max-w-4xl">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md"
          >
            Software Developer
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-5xl text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl text-xl font-medium leading-8 text-white/80 sm:text-2xl"
          >
            {hero.headline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a href={resumePath} download className="premium-button-solid">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#contact" className="premium-button">
              <Mail className="h-4 w-4" />
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
