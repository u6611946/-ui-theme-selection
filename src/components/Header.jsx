import { useSettings } from "../context/SettingsContext";

export default function Header() {
  const { language } = useSettings();

  return (
    <h1 className="title">
      {language === "en"
        ? "Welcome to Your Space ✨"
        : "ยินดีต้อนรับสู่พื้นที่ของคุณ ✨"}
    </h1>
  );
}
