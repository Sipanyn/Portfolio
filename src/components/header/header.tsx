// import styles from './header.module.css';
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { clx } from "@/utilities/clx";
import i18n from "@/utilities/i18n/locales";
import { useTranslation } from "react-i18next";

const Header = (): React.ReactElement => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const toggle = useSidebarStore((s) => s.toggle);
  const { t } = useTranslation("header");
  const isFa = i18n.language === "fa";
  const { toggleLanguage } = useLanguageStore((s) => s);
  return (
    <header className="flex justify-between items-center p-3 sm:p-5 text-xs sm:text-base">
      {/* Buttons */}
      <div className="flex justify-between items-center gap-1 sm:gap-6">
        {/* Hamburger Button */}
        <button
          type="button"
          title="Toggle Menu"
          className={clx(
            "group size-10 sm:size-12 relative flex justify-center items-center cursor-pointer",
            isOpen && "opacity-0",
          )}
          onClick={() => toggle()}
        >
          <span
            className={clx(
              "absolute left-1/2 top-1/2 w-3/5 h-0.5 rounded-full bg-Main-text duration-300 -translate-x-1/2 ",
              isOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-1.5",
              !isOpen && isFa && "-translate-y-1.25 md:group-hover:rotate-10",
              !isOpen && !isFa && "-translate-y-1.25 md:group-hover:-rotate-10",
            )}
          ></span>
          <span
            className={clx(
              "absolute left-1/2 top-1/2 w-3/5 h-0.5 rounded-full bg-Main-text duration-300 -translate-x-1/2",
              isOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1.5",
              !isOpen && isFa && "-translate-y-1.25 md:group-hover:-rotate-10",
              !isOpen && !isFa && "-translate-y-1.25 md:group-hover:rotate-10",
            )}
          ></span>
        </button>
        {/* Change Language Button */}
        <button
          onClick={toggleLanguage}
          type="button"
          title="Change Language"
          className={clx(
            "group flex items-center gap-2 rounded-xl cursor-pointer ",
            "bg-Accent/5 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2",
            "transition-all duration-300",
            "hover:bg-Accent-hover/10 hover:scale-105",
            "active:scale-95",
            isOpen && "opacity-0",
          )}
        >
          <i className="bi bi-globe text-lg text-white/80 transition-transform duration-300 group-hover:rotate-12"></i>
          <span className="text-Main-text hidden sm:block">
            {t("language")}
          </span>
          <span className="text-Main-text sm:hidden">{t("la")}</span>
        </button>
      </div>

      {/* About Part */}
      <div
        className={clx(
          "flex justify-between items-center gap-2 text-Main-text ",
        )}
      >
        <p>{t("title")}</p>
        <div className="relative size-5 group">
          <svg className="size-5 absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <use href="icons/sprite.svg#heart-armenia" />
          </svg>
          <svg className="size-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <use href="icons/sprite.svg#heart-iran" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
