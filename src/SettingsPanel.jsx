import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel() {
  const {
    setTheme,
    setLanguage,
    resetSettings
  } = useSettings();

  return (
    <>
      <h3>Settings</h3>

      <div>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>

      <div>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("th")}>TH</button>
      </div>

      <button onClick={resetSettings}>Reset</button>
    </>
  );
}
