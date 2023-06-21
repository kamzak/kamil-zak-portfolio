import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";

const TechMobileSphere = ({ icon }) => (
  <div className="w-24 h-24 drop-shadow-[0_15px_25px_rgba(255,255,255,0.25)] ">
    <img src={icon} alt="icon" className="w-full h-full object-contain" />
  </div>
);

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Technologies I used at my projects{" "}
        </p>
        <h2 className={styles.sectionHeadText}>My stack.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            {isMobile ? (
              <TechMobileSphere icon={technology.icon} />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
            <p className="text-center text-white-100 text-[14px] mt-2">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
