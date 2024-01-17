import "./projects.scss";
import projectData from "../../../projects.json";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NewSection = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <motion.div className="project-container">
        <div className="image-container" ref={ref}>
          <img src={`./${item.img}`} alt="" />
        </div>
        <motion.div className="text-container" style={{ y: y }}>
          <h1>{item.name}</h1>
          <p>{item.dsc}</p>
          <a href={item.link} target="_blank">
            <button>Visit site</button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Project head animation
const pTextVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      // duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const iVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Data = projectData.data;

export const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useTransform(scrollYProgress, [1, 0], ["100%", "0%"]);

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <div className="head">
          <motion.img
            src="/idea.png"
            alt=""
            variants={iVariant}
            initial="hidden"
            whileInView="visible"
          />
          <motion.h1
            variants={pTextVariant}
            initial="hidden"
            whileInView="visible"
          >
            Projects
          </motion.h1>
        </div>
        <motion.div
          className="progressBar"
          style={{
            scaleX: scaleX,
            transition: {
              duration: 5,
              ease: easeOut,
            },
          }}
        ></motion.div>
      </div>
      {Data.map((item) => (
        <NewSection item={item} key={item.id} />
      ))}
    </div>
  );
};
