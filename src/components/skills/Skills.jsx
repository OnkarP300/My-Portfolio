import "./skills.scss";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      staggerChildren: 0.08,
    },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export const Skills = () => {
  return (
    <motion.div className="skills">
      {/* Title */}
      <div className="title">
        <img src="/skill.png" alt="" />
        <motion.h1
          className="textA"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          Skills
        </motion.h1>
        <h2> Learned So Far.</h2>
      </div>
      <motion.hr
        initial={{ width: "0" }}
        whileInView={{ width: "1300px" }}
        transition={{ duration: 1 }}
      />

      {/* List  */}
      <motion.div
        className="skillList"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/html.png" alt="" />
          <h2>HTML</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/css.png" alt="" />
          <h2>CSS</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/js.png" alt="" />
          <h2>JAVA SCRIPT</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/react.png" alt="" />
          <h2>REACT</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/framer-motion.png" alt="" />
          <h2>FRAMER-Motion</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/bootstrap.png" alt="" />
          <h2>BOOTSTRAP</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/git.png" alt="" />
          <h2>GIT</h2>
        </motion.div>
        <motion.div className="listItems" variants={itemVariants}>
          <img src="/python.png" alt="" />
          <h2>PYTHON</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
