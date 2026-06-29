import { clx } from "@/utilities/clx";

// import styles from './menu-item.module.css';
type menuItemProps = {
  name: string;
  icon: string;
};
const MenuItem = ({ name, icon }: menuItemProps): React.ReactElement => {
  return (
    <div className="group flex flex-row gap-2 items-center text-Main-text hover:accent-Accent cursor-pointer">
      <i className={clx(`bi bi-${icon}`, "text-Accent")}></i>

      <p className="transition-transform duration-300 group-hover:translate-x-2 ">
        {name}
      </p>
    </div>
  );
};

export default MenuItem;
