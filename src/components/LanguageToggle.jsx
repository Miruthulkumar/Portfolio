import { motion } from "framer-motion";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function LanguageToggle({ compact = false }) {
  const { mode, setMode } = useLanguageTheme();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-[color:var(--line-soft)] bg-[var(--toggle-bg)] p-1 ${
        compact ? "text-xs" : "text-[0.7rem]"
      }`}
      role="group"
      aria-label="Language selection"
    >
      <ToggleButton
        active={mode === "en"}
        onClick={() => setMode("en")}
        label="EN"
        compact={compact}
      />
      <ToggleButton
        active={mode === "ja"}
        onClick={() => setMode("ja")}
        label="日本語"
        compact={compact}
        japaneseAccent
      />
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
  compact,
  japaneseAccent = false,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-full px-3 py-1.5 font-semibold tracking-[0.12em] transition ${
        compact ? "min-w-[64px]" : "min-w-[76px]"
      } ${
        active
          ? "bg-[var(--toggle-active-bg)] text-[var(--toggle-active-text)]"
          : "text-[var(--toggle-inactive-text)] hover:text-[var(--paper-100)]"
      }`}
    >
      {japaneseAccent ? (
        <motion.span
          aria-hidden="true"
          animate={{
            scale: [1, 1.035, 1],
            opacity: active ? [0.58, 0.74, 0.58] : [0.38, 0.52, 0.38],
          }}
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute inset-1 rounded-full border border-[#b81f4b]/35 bg-white/80 ${
            active ? "opacity-55" : "opacity-35"
          }`}
        >
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b81f4b]/85" />
        </motion.span>
      ) : null}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}
