import "./skills.scss";
import { motion, useInView } from "framer-motion";
import skills from "./skills-list";
import { useRef, useEffect, useState } from "react";
import ParticleComponent from "./ParticleComponent";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  /* eslint-disable no-unused-vars */
  const [maxSkillsInOneList, setMaxSkillsInOneList] = useState(0);

  useEffect(() => {
    const calculateMaxSkills = () => {
      let skillWidth = 110;
      let margin = 180;
      let newMaxSkillsInOneList = Math.floor((window.innerWidth - margin * 2) / skillWidth);

      if (window.innerWidth < 641) {
        skillWidth = 64;
        margin = 64;
        newMaxSkillsInOneList = Math.floor((window.innerWidth - margin * 2) / skillWidth);
      }

      setMaxSkillsInOneList(newMaxSkillsInOneList);
    };

    calculateMaxSkills();

    // Recalculate maxSkillsInOneList on window resize
    const handleResize = () => {
      calculateMaxSkills();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let skillsetItems = skills.map((skill, i) => (
    <motion.li
      key={i}
      className="skill"
      data-name={skill.name}
      whileHover={{ scale: 1.2 }}
    >
      <img src={skill.img} alt="skill" />
    </motion.li>
  ));

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <ParticleComponent />
      <motion.div className="listContainer" variants={variants}>
        <ul className="skills-container">{skillsetItems}</ul>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
