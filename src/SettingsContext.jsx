import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {

  // default values
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // 1) Load from localStorage (on start)
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme);
      setLanguage(parsed.language);
    }
  }, []);

  // 2) Save to localStorage (when changed)
  useEffect(() => {
    const settings = {
      theme: theme,
      language: language
    };
    localStorage.setItem(
      "app-settings",
      JSON.stringify(settings)
    );
  }, [theme, language]);

  // reset function
  function resetSettings() {
    setTheme("light");
    setLanguage("en");
  }

  return (
    <SettingsContext.Provider value={{
      theme,
      language,
      setTheme,
      setLanguage,
      resetSettings
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
