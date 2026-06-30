// import styles from './rotating-flags.module.css';
import { clx } from "@/utilities/clx";
import { useState, useEffect } from "react";

export default function RotatingFlags() {
  const [showSecondFlag, setShowSecondFlag] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondFlag((prev) => !prev);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // perspective-500 gives depth to the 3D rotation
    <div className="relative size-5 perspective-normal">
      <div
        className={clx(
          "relative w-full h-full duration-700 transform-3d",
          showSecondFlag
            ? "transform-[rotateY(180deg)]"
            : "transform-[rotateY(0deg)]",
        )}
      >
        {/* Front side: Armenia (visible at 0 deg) */}
        <svg className="size-5 absolute inset-0 backface-hidden">
          <use href="icons/sprite.svg#heart-armenia" />
        </svg>

        {/* Back side: Iran (visible at 180 deg, pre-rotated) */}
        <svg className="size-5 absolute inset-0 backface-hidden transform-[rotateY(180deg)]">
          <use href="icons/sprite.svg#heart-iran" />
        </svg>
      </div>
    </div>
  );
}
