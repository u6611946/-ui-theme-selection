import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const defaultSettings = {
  theme: "light",
  language: "en",
};

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const data = JSON.parse(saved);
      setTheme(data.theme);
      setLanguage(data.language);
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "app-settings",
      JSON.stringify({ theme, language })
    );
  }, [theme, language]);

  function resetSettings() {
    setTheme(defaultSettings.theme);
    setLanguage(defaultSettings.language);
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
