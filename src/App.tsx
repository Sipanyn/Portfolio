import "./App.css";
import Home from "./components/pages/home/home";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/utilities/i18n/locales/index.ts";
import { useLanguageStore } from "./stores/useLanguageStore";
import { useEffect } from "react";

function App() {
  const language = useLanguageStore((s) => s.language);
  useEffect(() => {
    const html = document.documentElement;
    const isFarsi = language === "fa";

    html.dir = isFarsi ? "rtl" : "ltr";
    html.lang = language;

    html.classList.remove("BalooBhaijaan", "Nunito");
    html.classList.add(isFarsi ? "BalooBhaijaan" : "Nunito");
  }, [language]);
  return <Home />;
}

export default App;
