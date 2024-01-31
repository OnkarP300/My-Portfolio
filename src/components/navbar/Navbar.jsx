import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import { delay, motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar  */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ON&#42928;AR
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="https://github.com/OnkarP300" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://linkedin.com/in/onkar-patil-656026200"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
          >
            <img src="/naukri.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
