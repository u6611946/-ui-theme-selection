import { useSettings } from "../context/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div className="card">
      <p className="soft">
        {language === "en"
          ? "A quiet place where choices become comfort."
          : "พื้นที่เล็ก ๆ ที่การเลือกกลายเป็นความสบายใจ"}
      </p>

      <p>🌗 Theme: <b>{theme}</b></p>
      <p>🌍 Language: <b>{language}</b></p>

      <p className="soft">
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่าของคุณ"}
      </p>
    </div>
  );
}
