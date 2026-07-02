import AnimatedContent from "@/components/base/animated-content/animated-content";
import styles from "./home.module.css";

import Particles from "@/components/base/particles/particles";
import Header from "@/components/header/header";
import Intro from "@/components/intro/intro";
import SideMenu from "@/components/side-menu/side-menu";
import { clx } from "@/utilities/clx";
import i18n from "@/utilities/i18n/locales";

const Home = (): React.ReactElement => {
  const isFa = i18n.language === "fa";
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      <div
        className={clx(
          "absolute top-60  z-2",
          isFa
            ? "lg:right-60 md:right-30 right-5"
            : "lg:left-60 md:left-30 left-5",
        )}
      >
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <Intro />
        </AnimatedContent>
      </div>
      <div className="relative z-10">
        <SideMenu />
      </div>

      <div className={styles.particles}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
          cameraDistance={30}
        />
      </div>
    </div>
  );
};

export default Home;
