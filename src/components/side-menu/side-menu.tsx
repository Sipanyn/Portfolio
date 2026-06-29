// import styles from './side-menu.module.css';

import { useSidebarStore } from "@/stores/useSidebarStore";
import { clx } from "@/utilities/clx";
import { useTranslation } from "react-i18next";
import i18n from "@/utilities/i18n/locales";
import SideBarItem from "../base/sidebar-item/sidebar-item";

const SideMenu = (): React.ReactElement => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const { t } = useTranslation("sideMenu");
  const isFarsi = i18n.language === "fa";
  return (
    <div
      className={clx(
        "bg-Secondary-background/10 backdrop-blur-lg border border-white/10 absolute top-0 p-14 sm:w-[30%] w-[90%] h-full flex flex-col justify-center transition-all duration-300",
        isFarsi ? "right-0" : "left-0",
        isOpen
          ? "translate-x-0 opacity-100"
          : isFarsi
            ? "translate-x-full opacity-0"
            : "-translate-x-full opacity-0",
      )}
    >
      <div className="flex flex-row justify-around">
        {/* Menu */}
        <div className="flex flex-col gap-4">
          <p className="mb-3.5 text-Secondary-text">{t("menu.title")}</p>
          <SideBarItem name={t("menu.home")} icon="house" />
          <SideBarItem name={t("menu.aboutme")} icon="info-circle-fill" />
          <SideBarItem name={t("menu.projects")} icon="code-slash" />
          <SideBarItem name={t("menu.contact")} icon="chat-dots" />
        </div>
        {/* Social */}
        <div className="flex flex-col gap-4 ">
          <p className="mb-3.5 text-Secondary-text">{t("social.title")}</p>
          <SideBarItem name={t("social.github")} icon="github" />
          <SideBarItem name={t("social.linkedin")} icon="linkedin" />
          <SideBarItem name={t("social.instagram")} icon="instagram" />
        </div>
      </div>
      {/* Get In Touch */}
      <div className="flex flex-col gap-3 text-Main-text absolute bottom-10 ">
        <p>{t("connection.getInTouch")}</p>
        <p>sipannyounan@gmail.com</p>
      </div>
    </div>
  );
};

export default SideMenu;
