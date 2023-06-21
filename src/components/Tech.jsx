import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
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
            <BallCanvas icon={technology.icon} />
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
