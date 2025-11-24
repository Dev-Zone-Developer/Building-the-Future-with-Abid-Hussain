import React, { useState, useEffect } from "react";
import { motion, scale } from "framer-motion";

import "./Skills.css";

const Skills = ({categories}) => {
  
  

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };


  return (
    <section id="skills" className="skills">
      <div className="skills-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="skills-title fade-in hero-title"
        >
          My Skills
        </motion.h2>
        
        <p className="skills-subtitle fade-in visible" style={{maxWidth: 635}}>
          Tools and technologies I use to bring full stack ideas to life <span style={{ display: "inline-block", transform: "scale(2.5)", paddingBottom: 4 }}>&nbsp;-&nbsp;</span> from logic to launch
        </p>
        
        <motion.div
          className={`skills-grid`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="skill-card fade-in"
            >
              <h3 className="skill-heading">
                {/* <span className="skill-icon">{cat.icon}</span> */}
                {cat.title}
              </h3>
              <ul className="skill-list">
                {cat.skills.map((skill, idx) => (
                  <li key={idx}>
                    {skill}
                      <div 
                        className="skill-progress"
                        data-level={cat.proficiency[idx]}
                      >
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${cat.proficiency[idx]}%` }}
                        />
                      </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;