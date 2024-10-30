'use client'
// src/components/Footer.tsx
import '../styles/Footer.css';
import {motion} from "framer-motion";

export default function Footer() {
    return (
      <footer className="footer">
        <h3 
         className='technology-heading'>
          Get in Touch
        </h3>
        <ul className="contact-info">
          <li>
            Phone: +92 3131289017</li>
          <li>
            Email: hassanahmedshaikh9@gmail.com
          </li>
          <li>Address: 123 Main Street, City, Country
          </li>
        </ul>
      </footer>
    );
  }
  