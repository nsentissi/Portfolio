import React from 'react';
import { motion } from 'framer-motion';
import Info from "../../components/Info"
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Nawfal-Sentissi-CV.pdf";
import Skills from "../../components/Skills";
import "./about.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};



const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <motion.div className="about__container grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>

            <motion.ul className="info__list grid" variants={containerVariants}>
              <Info />
            </motion.ul>

            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <motion.div className="stats grid" variants={containerVariants}>
            <Stats />
          </motion.div>
        </motion.div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <Skills />
      </section>
    </main>
  );
};

export default About;