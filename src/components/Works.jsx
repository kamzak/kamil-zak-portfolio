import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 30,
        scale: 1,
        speed: 300,
      }}
      className="bg-tertiary p-5 rounded-md sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white text-[24px] font-bold">{project.name}</h3>
        <p className="text-secondary text-[16px] mt-2">{project.description}</p>
      </div>

      <div className="flex justify-center m-1 card-img_hover my-6 gap-6">
        {project.source_code_link && (
          <div
            className="pink-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => window.open(project.source_code_link, "_blank")}
          >
            <img
              src={github}
              alt="github"
              className="w-12 h-12 rounded-full ease-linear hover:bg-pink-600 transition-all duration-200 transform hover:scale-110 hover:rotate-12 hover:rotate"
            />
          </div>
        )}

        {project?.live_demo_link && (
          <div
            className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => window.open(project.live_demo_link, "_blank")}
          >
            <img
              src={website}
              alt="github"
              className="w-12 h-12 rounded-full ease-linear transition-all duration-200 transform hover:scale-110 hover:-rotate-12 hover:rotate"
            />
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 justify-center">
        {project.tags.map((tag) => (
          <p key={tag.name} className={`text-[16px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl leading-[30px] text-[17px]"
        >
          Following project showcases my skills and experience through real-word
          examples of my work. Each project is briefly described with links to
          code repositories and live demos in it. It reflects my ability to
          solve complex problems, work with different technologies, and deliver
          high-quality results.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project ${index}`} project={project} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Works, "");
