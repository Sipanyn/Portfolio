// import styles from './header.module.css';
import { useSidebarStore } from "@/stores/useSidebarStore";
import { clx } from "@/utilities/clx";
import i18n from "@/utilities/i18n/locales";
import { useTranslation } from "react-i18next";

const Header = (): React.ReactElement => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const toggle = useSidebarStore((s) => s.toggle);
  const { t } = useTranslation("headerTitle");
  const isFa = i18n.language === "fa";
  return (
    <header className="w-full flex justify-between items-center p-5">
      {/* Button */}
      <button
        type="button"
        title="Toggle Menu"
        className={clx(
          "group size-12 relative flex justify-center items-center cursor-pointer ",
          isOpen && !isFa && "translate-x-90",
          isOpen && isFa && "-translate-x-90",
        )}
        onClick={() => toggle()}
      >
        <span
          className={clx(
            "absolute left-1/2 top-1/2 w-3/5 h-0.5 rounded-full bg-Main-text duration-300 -translate-x-1/2 ",
            isOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-1.5",
            !isOpen && "-translate-y-1.25 md:group-hover:rotate-10",
          )}
        ></span>
        <span
          className={clx(
            "absolute left-1/2 top-1/2 w-3/5 h-0.5 rounded-full bg-Main-text duration-300 -translate-x-1/2",
            isOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1.5",
            !isOpen && "-translate-y-1.25 md:group-hover:-rotate-10",
          )}
        ></span>
      </button>
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
