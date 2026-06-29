import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enheaderTitle from "@/utilities/i18n/locales/en/header-title.json";
import faheaderTitle from "@/utilities/i18n/locales/fa/header-title.json";

import ensideMenu from "@/utilities/i18n/locales/en/side-menu.json";
import fasideMenu from "@/utilities/i18n/locales/fa/side-menu.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      headerTitle: enheaderTitle,
      sideMenu: ensideMenu,
    },
    fa: {
      headerTitle: faheaderTitle,
      sideMenu: fasideMenu,
    },
  },

  lng: "en",
  fallbackLng: "fa",
  ns: ["footer"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"], // IMPORTANT
  },
});

export default i18n;
