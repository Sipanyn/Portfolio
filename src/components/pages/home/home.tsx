import styles from "./home.module.css";

import LightRays from "@/components/base/light-rays/light-rays";
import Header from "@/components/header/header";
import SideMenu from "@/components/side-menu/side-menu";

const Home = (): React.ReactElement => {
  return (
    <div>
      <div className="fixed top-0 w-full">
        <Header />
      </div>

      <SideMenu />

      <div className={styles.lightRays}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={3}
        />
      </div>
    </div>
  );
};

export default Home;
