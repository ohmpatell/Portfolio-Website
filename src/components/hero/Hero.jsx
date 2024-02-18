import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>OHM PATEL</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Software Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <Link to="Portfolio" smooth duration={500}>
              <motion.button variants={textVariants}>
                See my Latest Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500}>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </Link>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="buttons"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer and Software Engineer
      </motion.div>
      <div className="imageContainer">
          <img src="/avatar.png" alt="" />        
      </div>
    </div>
  );
};

export default Hero;
