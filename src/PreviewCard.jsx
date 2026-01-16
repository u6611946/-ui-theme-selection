import { useSettings } from "../context/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginTop: "16px" }}>
      <h3>Preview</h3>
      <p>Theme: {theme}</p>
      <p>Language: {language}</p>
      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}
