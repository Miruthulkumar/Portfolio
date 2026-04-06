import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-14"
    >
      {eyebrow ? (
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-violet-400 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.div>
  );
}
