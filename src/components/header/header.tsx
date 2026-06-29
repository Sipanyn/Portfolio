// import styles from './header.module.css';

import { useSidebarStore } from "@/stores/useSidebarStore";
import { clx } from "@/utilities/clx";

const Header = (): React.ReactElement => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const toggle = useSidebarStore((s) => s.toggle);

  return (
    <header className="w-full flex justify-between items-center p-5">
      {/* About Part */}
      <div className="flex justify-between items-center gap-2 text-Main-text font-Nunito font-bold">
        <div className="relative size-5 group">
          <svg className="size-5 absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <use href="icons/sprite.svg#heart-armenia" />
          </svg>
          <svg className="size-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <use href="icons/sprite.svg#heart-iran" />
          </svg>
        </div>

        <p>Frontend Developer React/TS</p>
      </div>
      {/* Button */}
      <button
        type="button"
        title="Toggle Menu"
        className="group size-12 relative flex justify-center items-center cursor-pointer "
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
    </header>
  );
};

export default Header;
