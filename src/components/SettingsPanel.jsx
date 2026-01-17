import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel() {
  const { setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div className="panel">
      <h3>Choose your mood 🌱</h3>

      <div>
        <button onClick={() => setTheme("light")}>☀ Light</button>
        <button onClick={() => setTheme("dark")}>🌙 Dark</button>
      </div>

      <h3>Choose your voice 💬</h3>
      <div>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("th")}>TH</button>
      </div>

      <button className="reset" onClick={resetSettings}>
        Reset to calm ✨
      </button>
    </div>
  );
}
