import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const defaultSettings = {
  theme: "light",
  language: "en",
};

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(defaultSettings.theme);
  const [language, setLanguage] = useState(defaultSettings.language);

  // LOAD from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme);
      setLanguage(parsed.language);
    }
  }, []);

  // SAVE to localStorage
  useEffect(() => {
    const data = { theme, language };
    localStorage.setItem("app-settings", JSON.stringify(data));
  }, [theme, language]);

  function resetSettings() {
    setTheme("light");
    setLanguage("en");
  }

  return (
    <SettingsContext.Provider
      value={{ theme, language, setTheme, setLanguage, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
