import { useState } from "react";
import { motion, spring } from "framer-motion";
import { Links } from "./links/Links";
import "./sidebar.scss";
import { ToggleButton } from "./toggleButton/ToggleButton";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: spring,
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: spring,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/* Sidebar list  */}
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
