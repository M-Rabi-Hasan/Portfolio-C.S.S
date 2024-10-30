import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
