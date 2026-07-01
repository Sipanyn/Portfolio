// import styles from './intro.module.css';

import { clx } from "@/utilities/clx";
import i18n from "@/utilities/i18n/locales";
import { useTranslation } from "react-i18next";

const Intro = (): React.ReactElement => {
  const { t } = useTranslation("intro");
  const isFa = i18n.language === "fa";
  return (
    <div className="flex flex-col gap-2.5 w-fit pr-2.5 sm:pr-0">
      {/* title */}
      <div
        className={clx(
          "flex flex-col",
          isFa ? "flex-col-reverse gap-3 sm:gap-6 mb-5" : "flex-col",
        )}
      >
        <p
          className={clx(
            "text-Accent  font-bold text-4xl sm:text-8xl animate-pulse [animation-duration:4s]",
            isFa && "pr-10 sm:pr-14",
          )}
        >
          {t("frontend")}
        </p>
        <p
          className={clx(
            "text-Main-text font-bold text-4xl sm:text-8xl  animate-pulse [animation-duration:4s]",
            !isFa && "pl-14",
          )}
        >
          {t("developer")}
        </p>
      </div>
      <p className="text-Secondary-text max-w-lg">{t("content")}</p>
      <a href="/downloads/MyResume-191[www.cvbuilder.me]883.pdf" download>
        <button
          type="button"
          title="download cv"
          className="text-Main-text group flex items-center gap-2 rounded-xl cursor-pointer bg-Accent/5 backdrop-blur-sm  px-4 py-2 transition-all duration-300 hover:bg-Accent-hover/10 hover:scale-105 active:scale-95 mt-2.5"
        >
          <i className="bi bi-file-earmark-text text-lg text-white/80 transition-transform duration-300 group-hover:rotate-12"></i>
          {t("cvDownload")}
        </button>
      </a>
    </div>
  );
};

export default Intro;
