import React from 'react';
import '@/styles/about.css';
import Navbar from '@/components/Navbar';
import rabi from '@/Images/Rabi.png';
import genai from '@/Images/genai.png';
import softwareengr from '@/Images/software-engr.jpg';
import cloudcomputing from '@/Images/cloud-computing.png';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Video Background Section */}
      <div className="video-background-container">
        <div className='container'>
        <Navbar />
        </div>
        <video className="background-video" autoPlay loop muted>
          <source src="/videos/CloudComputing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Crafting Digital Solutions for the Future</h1>
          <p>I am a full-stack developer passionate about building scalable software, modern applications, and cloud-based solutions.</p>
          <button className="free-consultation-btn">Free Consultation</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <Image src={rabi} alt="Professional" className="about-image" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>I am a full-stack developer with a keen interest in creating robust and efficient web applications. With expertise in both front-end and back-end technologies, I bring ideas to life through code.</p>
            <p>My journey in software development has equipped me with the skills to deliver high-quality solutions, from intuitive user interfaces to secure and optimized server-side logic.</p>
          </div>
        </div>
      </div>

      {/* Legal Practices Area */}
      <div className="legal-practices-area">
        <h3>My Core Competencies</h3>
        <h2>Areas of Expertise</h2>
        <div className="practice-cards">
          <div className="practice-card">
            <Image src={genai} alt="Corporate & Securities" className="practice-image" />
            <h4>Front-end Development</h4>
            <p>Creating responsive, accessible, and visually appealing user interfaces using modern frameworks like React and Next.js.</p>
          </div>
          <div className="practice-card">
            <Image src={softwareengr} alt="Real Estate Law" className="practice-image" />
            <h4>Back-end Development</h4>
            <p>Building scalable and secure back-end services using Node.js, Express, and databases like MongoDB and PostgreSQL.</p>
          </div>
          <div className="practice-card">
            <Image src={cloudcomputing} alt="Health Care Law" className="practice-image" />
            <h4>Cloud Solutions</h4>
            <p>Designing and deploying cloud-based infrastructure with a focus on scalability, performance, and cost-effectiveness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;