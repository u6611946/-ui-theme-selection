import { useSettings } from "../context/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <>
      <div>Current Theme: {theme}</div>
      <div>Current Language: {language}</div>

      <div>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </div>
    </>
  );
}
