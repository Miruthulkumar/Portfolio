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
  const primaryName = hero.name.split(" ")[0].toUpperCase();

  return (
    <section
      id="home"
      className="flow-section section-space layout-wrap pt-14 sm:pt-16 lg:pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12"
      >
        <motion.p
          variants={itemVariants}
          className="display-name absolute -top-8 right-0 hidden lg:block"
        >
          {primaryName}
        </motion.p>

        <div className="relative">
          <motion.div variants={itemVariants} className="eyebrow">
            Full Stack Developer / ECE Undergraduate
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-4 max-w-4xl text-[2.9rem] font-semibold leading-[0.9] text-[var(--paper-100)] sm:text-[4.1rem] lg:text-[5.2rem]"
          >
            {hero.name}
            <span className="mt-2 block whitespace-nowrap text-[0.42em] font-medium text-[var(--paper-200)]">
              {hero.headline}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-[1.02rem] leading-8 text-[var(--paper-200)]/82 sm:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={resumePath} download className="btn-solid">
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a href="#contact" className="btn-line">
              <Mail className="h-4 w-4" />
              Contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {hero.badges.map((badge) => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.aside variants={itemVariants} className="lg:pt-20">
          <div className="surface-card relative overflow-hidden p-3">
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent-500)]/55" />
            <img
              src={hero.image}
              alt={hero.name}
              className="h-[420px] w-full rounded-xl object-cover object-[50%_0%] transition duration-700 hover:scale-[1.03]"
            />
          </div>
          <p className="mt-4 text-right text-[0.64rem] uppercase tracking-[0.24em] text-[var(--muted-500)]">
            Salem, India
          </p>
        </motion.aside>
      </motion.div>
    </section>
  );
}
