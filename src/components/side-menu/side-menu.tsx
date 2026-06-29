// import styles from './side-menu.module.css';

import { useSidebarStore } from "@/stores/useSidebarStore";
import MenuItem from "../base/menu-item/menu-item";
import SocialItem from "../base/social-item/social-item";
import { clx } from "@/utilities/clx";

const SideMenu = (): React.ReactElement => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  return (
    <div
      className={clx(
        "bg-Secondary-background/10 backdrop-blur-lg border border-white/10 absolute top-0 right-0 p-14 sm:w-[30%] w-[90%] h-full flex flex-col justify-center transition-all duration-300",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <div className="flex flex-row justify-around">
        {/* Social */}
        <div className="flex flex-col gap-4 ">
          <p className="mb-3.5 text-Secondary-text">SOCIAL</p>
          <SocialItem name="Github" icon="github" />
          <SocialItem name="Linkedin" icon="linkedin" />
          <SocialItem name="Instagram" icon="instagram" />
        </div>
        {/* Menu */}
        <div className="flex flex-col gap-4">
          <p className="mb-3.5 text-Secondary-text">MENU</p>
          <MenuItem name="Home" icon="house" />
          <MenuItem name="About Me" icon="info-circle-fill" />
          <MenuItem name="Projects" icon="code-slash" />
          <MenuItem name="Contact" icon="chat-dots" />
        </div>
      </div>
      {/* Get In Touch */}
      <div className="flex flex-col gap-3 text-Main-text absolute bottom-10 ">
        <p>GET IN TOUCH</p>
        <p>sipannyounan@gmail.com</p>
      </div>
    </div>
  );
};

export default SideMenu;
