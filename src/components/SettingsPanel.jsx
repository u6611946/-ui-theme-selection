import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel() {
  const { setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div>
      <h3>Settings</h3>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>

      <br /><br />

      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("th")}>TH</button>

      <br /><br />

      <button onClick={resetSettings}>Reset</button>
    </div>
  );
}
