import React, { useEffect, useState } from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { TiArrowRight } from "react-icons/ti";
import "./home.css"



const Home = () => {

  const textAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
        <motion.h1
            className="home__title"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            custom={1} 
          >
            <motion.span variants={textAnimation} custom={2}>
              I'm Nawfal Sentissi
            </motion.span>{' '}
            Web Developer
          </motion.h1>

          <motion.p
            className="home__description"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            custom={3} 
          >
            I'm a Web designer & front-end developer focused on crafting clean &
            user-friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </motion.p>

          <Link to="/about" className="button">
            More about me{" "}
            <span className="button__icon">
            <TiArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
