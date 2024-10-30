"use client"; 

// src/components/Hero.tsx
import '../styles/Hero.css';
import Heropic from "../Images/Rabi.png"
import Image from 'next/image';
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
  }
});


export default function Hero() {
    return (
      <section className="hero">
        <div className="hero-text">
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className='heading-text heading-text-font'>Rabi Hassan</motion.h1>
          <motion.p 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className='full-stack-developer '>Full Stack Developer</motion.p>
          <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className='hero-text-padding'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create 
            innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
        </div>
        <motion.div 
         initial={{x: 100, opacity: 0}}
         animate={{x: 0, opacity: 1}}
         transition={{duration: 1, delay: 1.2}}
        className="hero-image">
          <Image src={Heropic} alt="Profile" />
        </motion.div>
      </section>
    );
  }
  