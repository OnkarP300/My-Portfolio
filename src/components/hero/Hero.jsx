import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: "130%",
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const Hero = () => {
  const Onkar = "ONKAR";
  const onkar = Onkar.split("");
  const Patil = "PATIL";
  const patil = Patil.split("");

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            animate="animate"
            initial="initial"
          >
            <motion.div className="h2" variants={textVariants}>
              <div className="h2o">
                {onkar.map((i) => (
                  <motion.h2 variants={textVariants} key={i}>
                    {i}
                  </motion.h2>
                ))}
              </div>
              <div className="h2p">
                {patil.map((i) => (
                  <motion.h2 variants={textVariants} key={i}>
                    {i}
                  </motion.h2>
                ))}
              </div>
            </motion.div>
            <motion.h1 variants={textVariants}>
              Front-End Web Developer
            </motion.h1>
            <a href="/Onkar Patil(resume).pdf" target="_blank">
              <div className="button">
                <motion.button variants={textVariants}>Resume</motion.button>
              </div>
            </a>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="./scroll.png"
              alt=""
            />
          </motion.div>
        </div>
        <div className="imageContainer">
          <img src="../hero1.png" alt="" />
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          animate="animate"
          initial="initial"
        >
          Front-End Web Developer
        </motion.div>
      </div>
    </>
  );
};
