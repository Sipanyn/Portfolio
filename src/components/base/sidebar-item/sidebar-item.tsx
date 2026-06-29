import { clx } from "@/utilities/clx";
import i18n from "@/utilities/i18n/locales";

// import styles from './social-item.module.css';
type socialItemProps = {
  icon: string;
  name: string;
};
const SideBarItem = ({ icon, name }: socialItemProps): React.ReactElement => {
  const isFa = i18n.language === "fa";
  return (
    <div className="group flex flex-row gap-2 items-center text-Main-text  cursor-pointer">
      <i className={clx(`bi bi-${icon}`, "text-Accent")}></i>

      <p
        className={clx(
          "transition-transform duration-300",
          isFa ? "group-hover:-translate-x-2" : "group-hover:translate-x-2",
        )}
      >
        {name}
      </p>
    </div>
  );
};

export default SideBarItem;
