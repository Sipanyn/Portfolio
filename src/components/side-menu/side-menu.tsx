// import styles from './side-menu.module.css';

import { useSidebarStore } from "@/stores/useSidebarStore";
import { clx } from "@/utilities/clx";
import { useTranslation } from "react-i18next";
import i18n from "@/utilities/i18n/locales";

import SideBarItem from "../base/sidebar-item/sidebar-item";

const SideMenu = (): React.ReactElement => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const { t } = useTranslation("sideMenu");
  const toggle = useSidebarStore((s) => s.toggle);
  const isFa = i18n.language === "fa";

  return (
    <div
      key={isFa ? "fa-menu" : "en-menu"}
      className={clx(
        "bg-Primary-background/10  backdrop-blur-lg border border-white/10 absolute top-0 px-4 sm:px-14 py-7  w-[90%] sm:w-fit inset-0 min-h-dvh flex flex-col justify-around transition-all duration-300 text-sm sm:text-base",
        isFa ? "right-0 " : "left-0 ",
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : isFa
            ? "translate-x-full opacity-0 "
            : "-translate-x-full opacity-0 ",
      )}
    >
      {/* Close Button */}
      <div className="absolute left-2 top-3">
        <button
          type="button"
          title="Close Menu"
          className="group size-10 sm:size-12 relative  cursor-pointer"
          onClick={() => toggle()}
        >
          <span
            className={clx(
              "absolute left-1/2 top-1/2 w-3/5 h-0.5 rounded-full bg-Main-text duration-300 -translate-x-1/2 -translate-y-1/2 rotate-45",
            )}
          ></span>

          <span
            className={clx(
              "absolute left-1/2 top-1/2 w-3/5 h-0.5 rounded-full bg-Main-text duration-300 -translate-x-1/2 -translate-y-1/2 -rotate-45",
            )}
          ></span>
        </button>
      </div>

      <div className="flex flex-row justify-around gap-10 sm:gap-25">
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
          <SideBarItem
            link="https://github.com/Sipanyn"
            name={t("social.github")}
            icon="github"
          />
          <SideBarItem
            link="https://www.linkedin.com/in/sipan-younan-b4955323a"
            name={t("social.linkedin")}
            icon="linkedin"
          />
          <SideBarItem
            link="https://www.instagram.com/sipan__yn
"
            name={t("social.instagram")}
            icon="instagram"
          />
        </div>
      </div>
      {/* Get In Touch */}
      <div className="flex flex-col gap-3 text-Main-text">
        <p>{t("connection.getInTouch")}</p>
        <p>
          <a
            href="mailto:sipannyounan@gmail.com"
            className=" hover:text-Accent-hover transition-colors"
          >
            sipannyounan@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default SideMenu;
