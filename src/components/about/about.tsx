// import styles from './about.module.css';

import ScrollFloat from "../base/scroll-float/scroll-float";

const About = (): React.ReactElement => {
  return (
    <div className="flex flex-col mb-100 px-30">
      <p className="text-Main-text text-4xl font-semibold text-center mb-20">
        Frontend developers: fighting browsers so users don’t have to.
      </p>
      <div className="flex flex-row gap-15">
        <p className="text-Main-text  whitespace-nowrap shrink-0">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Hi,I'm Sipan Younan
          </ScrollFloat>
        </p>
        <p className="text-Main-text text-center">
          I’m a frontend developer from Urmia, Iran,I turn coffee into clean,
          maintainable code and transform thoughtful design into seamless,
          functional experiences. Currently, I’m deeply focused on React.js and
          TypeScript, building scalable and high-performance web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
