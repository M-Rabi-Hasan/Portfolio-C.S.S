'use client'
// src/components/AboutMe.tsx
import '../styles/AboutMe.css';
import Heropic from "../Images/Rabi.png"
import Image from 'next/image';
import {motion} from "framer-motion"

export default function AboutMe() {
    return (
      <section className="about-me">
        <motion.h2 
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='heading-text'>About Me</motion.h2>
        <div className="about-me-content">
          <motion.div
           whileInView={{ opacity: 1, x:0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 1 }}
          className="about-me-image">
            <Image src={Heropic} alt="About Me" />
          </motion.div>
          <div className="about-me-text">
            <motion.p 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='about-text-padding'>
            I am a dedicated and versatile full stack developer with a passion 
            for creating efficient and user-friendly web applications. 
            With 5 years of professional experience, I have worked with 
            a variety of technologies, including React, Next.js, Node.js, 
            MySQL, PostgreSQL, and MongoDB. My journey in web development 
            began with a deep curiosity for how things work, and it has 
            evolved into a career where I continuously strive to learn and 
            adapt to new challenges. I thrive in collaborative environments 
            and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, 
            exploring new technologies, and contributing to open-source projects.
            </motion.p>
          </div>
        </div>
      </section>
    );
  }