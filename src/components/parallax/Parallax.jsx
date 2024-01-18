import "./parallax.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const sunVariant = {
  visible: {
    x: [-500, 0],
    y: [150, -200],
    transition: {
      delay: 0.2,
      x: {
        duration: 1,
        ease: "easeIn",
      },
      y: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

const dayStyle = {
  sun: {
    clipPath: "circle(50%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "300px",
    height: "300px",
  },
  moon: {
    clipPath: "circle(45%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100px",
    height: "100px",
    overflow: "hidden",
  },
};

export const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div
        className="parallax"
        style={
          type === "skills"
            ? { background: "linear-gradient(180deg, #0c0c1d, #505064)" }
            : { background: "linear-gradient(180deg, #0c0c1d, #00001)" }
        }
        ref={ref}
      >
        <motion.h1 style={{ y: yText }}>
          {type === "skills" ? "Skills" : "Projects"}
        </motion.h1>
        <div className="mountains"></div>
        <motion.div
          className="day"
          variants={sunVariant}
          // initial="hidden"
          whileInView="visible"
          style={
            type === "skills"
              ? { backgroundImage: 'url("./sun1.png")', ...dayStyle.sun }
              : { backgroundImage: 'url("./moon.png")', ...dayStyle.moon }
          }
        ></motion.div>
        <motion.div
          className="stars"
          style={{ backgroundImage: 'url("./stars.png")', x: yBg }}
        ></motion.div>
      </div>
    </>
  );
};
