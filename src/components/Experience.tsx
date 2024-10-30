'use client'
// src/components/Experience.tsx
import '../styles/Experience.css';
import {motion} from "framer-motion";

export default function Experience() {
    return (
      <section className="experience">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='heading-text'>Experience</motion.h2>
        <div className="experience-item">
          <motion.div 
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="year">2021 - Present</motion.div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="details">
            <h3>Frontend Developer - Systems Limited</h3>
            <p className='experience-text-padding'>Worked on various web applications with a focus on responsive design, accessibility, and UI consistency.</p>
            <p className='experience-skills'>React Next.js CSS JavaScript</p>
          </motion.div>
        </div>
        <div className="experience-item">
          <motion.div 
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="year">2019 - 2021</motion.div>

          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} className="details">
            <h3>Junior Developer - Startup</h3>
            <p className='experience-text-padding'>Assisted in building and maintaining scalable web applications, focusing on performance optimization and bug fixing.</p>
            <p className='experience-skills'>HTML CSS JavaScript TypeScript</p>
          </motion.div>
        </div>
        <div className="experience-item">
          <motion.div 
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="year">2017 - 2019</motion.div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} className="details">
            <h3>Junior Developer - Icreative-Technologies</h3>
            <p className='experience-text-padding'>Assisted in building and maintaining scalable web applications, focusing on performance optimization and bug fixing.</p>
            <p className='experience-skills'>HTML CSS JavaScript TypeScript</p>
          </motion.div>
        </div>
      </section>
    );
  }
  