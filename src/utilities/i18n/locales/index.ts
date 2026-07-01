import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enheader from "./en/header.json";
import faheader from "./fa/header.json";

import ensideMenu from "./en/side-menu.json";
import fasideMenu from "./fa/side-menu.json";

import enintro from "./en/intro.json";
import faintro from "./fa/intro.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: enheader,
      sideMenu: ensideMenu,
      intro: enintro,
    },
    fa: {
      header: faheader,
      sideMenu: fasideMenu,
      intro: faintro,
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
