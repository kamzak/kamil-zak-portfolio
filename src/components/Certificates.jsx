import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { Tilt } from "react-tilt";

const CertCard = ({ cert, index }) => (
  <Tilt
    options={{
      max: 15,
      scale: 1,
      speed: 450,
    }}
    className="sm:w-[360px] w-full"
  >
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient p-1 rounded-2xl shadow-card h-full"
    >
      <div className="flex flex-col bg-tertiary p-10 justify-between h-full rounded-2xl">
        <h3 className="text-white text-[24px] font-bold">{cert.name}</h3>
        <p className="blue-text-gradient font-medium text-[18px] mt-2">
          {cert.organization}
        </p>
        <p className="text-secondary text-[16px] mt-2">{cert.date}</p>

        <button
          className="p-4 mt-5 w-2/3 border-2 border-[#00aafffe] hover:border-[#fff] rounded-full  cursor-pointer self-center"
          onClick={() => window.open(cert.link, "_blank")}
        >
          Show credential
        </button>
      </div>
    </motion.div>
  </Tilt>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl leading-[30px] text-[17px]"
        >
          These certificates represent my dedication to continually learning and
          mastering the latest web development techniques and technologies. Each
          one is a testament to my ability to understand and implement complex
          frontend concepts.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-8">
        {certificates.map((cert, index) => (
          <CertCard key={`certificate-${index}`} cert={cert} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "");
