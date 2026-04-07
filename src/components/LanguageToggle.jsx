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
      />
    </div>
  );
}

function ToggleButton({ active, onClick, label, compact }) {
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
      {label}
    </motion.button>
  );
}
