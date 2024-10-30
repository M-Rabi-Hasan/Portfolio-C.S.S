'use client'
// src/components/Technologies.tsx

import '../styles/Technologies.css';
import { motion } from "framer-motion";

import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const iconVariants = (duration:any) => ({
  initial: {y: -10},
  animate:{ 
  y: [10, -10],
  transition: 
  {duration: duration,
  ease: "linear",
  repeat: Infinity,
  repeatType: "reverse"
  }
  },
});

export default function Technologies() {
  return (
    <section className="technologies">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5 }}
      className="heading-text">Technologies</motion.h2>
      <motion.div 
       whileInView={{opacity: 1, x: 0}}
       initial={{ opacity: 0, x: -100}}        
       transition={{ duration: 1.5 }}className="icons">
        <RiReactjsLine className="tech-icon"/>
        <TbBrandNextjs className="tech-icon" />
        <SiTypescript className="tech-icon" />
        <SiHtml5 className="tech-icon" />
        <SiCss3 className="tech-icon" />
        <DiJavascript1 className="tech-icon" />
      </motion.div>
    </section>
  );
}
