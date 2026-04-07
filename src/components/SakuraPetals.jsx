import { motion } from "framer-motion";
import { useLanguageTheme } from "../context/LanguageThemeContext";

const petals = [
  { left: "10%", delay: 0.1, duration: 10, size: 16 },
  { left: "24%", delay: 0.8, duration: 12, size: 12 },
  { left: "43%", delay: 0.4, duration: 11, size: 14 },
  { left: "63%", delay: 1.1, duration: 13, size: 16 },
  { left: "82%", delay: 0.6, duration: 10.5, size: 13 },
];

export default function SakuraPetals() {
  const { isJapanese } = useLanguageTheme();

  if (!isJapanese) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <motion.span
          key={index}
          initial={{ y: -40, x: 0, opacity: 0 }}
          animate={{ y: [0, 280, 620], x: [0, 18, -14], opacity: [0, 0.65, 0] }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1.2,
          }}
          className="absolute rounded-[58%_42%_53%_47%/62%_49%_51%_38%] bg-[var(--sakura-petal)]"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.82,
          }}
        />
      ))}
    </div>
  );
}
