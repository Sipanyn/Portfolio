import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enheader from "@/utilities/i18n/locales/en/header.json";
import faheader from "@/utilities/i18n/locales/fa/header.json";

import ensideMenu from "@/utilities/i18n/locales/en/side-menu.json";
import fasideMenu from "@/utilities/i18n/locales/fa/side-menu.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: enheader,
      sideMenu: ensideMenu,
    },
    fa: {
      header: faheader,
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
