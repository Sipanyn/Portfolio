import styles from "./home.module.css";

import Particles from "@/components/base/particles/particles";
import Header from "@/components/header/header";
import SideMenu from "@/components/side-menu/side-menu";

const Home = (): React.ReactElement => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header />
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
