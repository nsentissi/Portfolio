import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Info = () => {
  return (
    <div>
      {personalInfo.map(({title, description}, index)=>{
        return (
            <motion.li className="info__item" key={index} variants={itemVariants}>
                <span className='info__title'>{title}</span>
                <span className="info__description">{description}</span>
            </motion.li>
        )
      })}
    </div>
  )
}

export default Info;