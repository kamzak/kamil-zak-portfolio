import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}{" "}
            <span className="text-secondary text-[12px]">
              {index === 2 ? "beginner" : ""}
            </span>
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a self-taught, passionate{" "}
        <span className="text-white">Frontend Developer</span> who crafts
        functional, manageable, and beautiful web pages. My journey in the realm
        of coding has been marked by perseverance and a joy for creation, two
        traits that I believe are key to my success thus far.
        <br /> <br />I have a wealth of experience working with a myriad of
        technologies, including but not limited to,{" "}
        <span className="text-white">
          {" "}
          React, Redux, Next.js, Node.js, Express, SASS, styled components,
          module CSS, MUI, WebSocket, React Query, and Git.
        </span>{" "}
        Each project I undertake is an opportunity to refine these skills and
        learn new ones.
        <br /> <br />
        One of my proudest achievements to date is serving as the{" "}
        <span className="text-white">lead frontend developer</span> on a project
        for my alma mater, AGH University of Science and Technology, where I
        completed my degree in{" "}
        <span className="text-white">
          {" "}
          Computer Aided Engineering Processes.
        </span>
        <br /> <br />
        Currently, I am deepening my knowledge of{" "}
        <span className="text-white">Typescript</span> and always on the lookout
        for new challenges. I am brimming with ideas and highly motivated to
        further expand my knowledge base. My ultimate professional goal is to
        transition into a{" "}
        <span className="text-white">fullstack developer role</span>, a
        challenge I am eagerly preparing for.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
