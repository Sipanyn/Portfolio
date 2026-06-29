import { clx } from "@/utilities/clx";

// import styles from './social-item.module.css';
type socialItemProps = {
  icon: string;
  name: string;
};
const SocialItem = ({ icon, name }: socialItemProps): React.ReactElement => {
  return (
    <div className="group flex flex-row gap-2 items-center text-Main-text  cursor-pointer">
      <i className={clx(`bi bi-${icon}`, "text-Accent")}></i>

      <p className="transition-transform duration-300 group-hover:translate-x-2">
        {name}
      </p>
    </div>
  );
};

export default SocialItem;
