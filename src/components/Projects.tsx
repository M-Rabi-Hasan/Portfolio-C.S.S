'use client'
// src/components/Projects.tsx
import '../styles/Projects.css';
import portfolio from "../Images/portfolio-web.png"
import ecommerce from "../Images/e-commerce.png"
import Image from 'next/image';
import {motion} from "framer-motion";

export default function Projects() {
    return (
      <section className="projects">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5}}
        className='project-heading'>Projects</motion.h2>
        <div className="project-item">
          <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} className="project-image">
            <Image src={portfolio} alt="Project 1" />
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }} className="project-details">
            <h3>Portfolio Website</h3>
            <p className='project-text-padding'>A responsive portfolio website showcasing skills and projects with clean design and intuitive navigation.</p>
            <p className='project-skills'>HTML CSS JavaScript React</p>
          </motion.div>
        </div>
        <div className="project-item">
          <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} className="project-image">
            <Image src={ecommerce} alt="Project 2" />
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }} className="project-details">
            <h3>E-commerce Platform</h3>
            <p className='project-text-padding'>A full-featured e-commerce platform with real-time product management, user authentication, and payment integration.</p>
            <p className='project-skills'>Next.js TypeScript Node.js MongoDB</p>
          </motion.div>
        </div>
      </section>
    );
  }
  