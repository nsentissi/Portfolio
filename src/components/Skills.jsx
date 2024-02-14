import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const skillVariants = {
  hidden: (direction) => ({
    x: direction === "left" ? -100 : 100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function Skills() {
  return (
    <div className="skills__container">
      {skills.map(({ title, img }, index) => {
        const [ref, inView] = useInView({
          threshold: 0.1,
      }); 
        return (
          <motion.div
          className="progress__box"
          key={index}
          ref={ref} 
          initial="hidden"
          animate={inView ? "visible" : "hidden"} 
          variants={skillVariants} 
          custom={index % 2 === 0 ? "left" : "right"}
      >
            <motion.div className="progress__circle">
              <img src={img} alt={title} />
            </motion.div>
            <h3 className="skills__title">{title}</h3>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Skills;