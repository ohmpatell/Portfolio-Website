import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          @ohmpatell
        </motion.span>
        <div className="social">
          <a href="https://linkedin.com/in/ohmpatel1">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://twitter.com/ohmpatell">
            <img src="/twitterx.png" alt="" />
          </a>
          <a href="https://github.com/ohmpatell">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
