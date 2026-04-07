import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-mode";

const LanguageThemeContext = createContext(null);

export function LanguageThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedMode = window.localStorage.getItem(STORAGE_KEY);
    return savedMode === "ja" ? "ja" : "en";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute("data-portfolio-mode", mode);
    document.documentElement.lang = mode === "ja" ? "ja" : "en";
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      isJapanese: mode === "ja",
      setMode,
      toggleMode: () => setMode((current) => (current === "en" ? "ja" : "en")),
    }),
    [mode],
  );

  return (
    <LanguageThemeContext.Provider value={value}>
      {children}
    </LanguageThemeContext.Provider>
  );
}

export function useLanguageTheme() {
  const context = useContext(LanguageThemeContext);

  if (!context) {
    throw new Error(
      "useLanguageTheme must be used within LanguageThemeProvider",
    );
  }

  return context;
}
