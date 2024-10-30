import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutMe from '../../components/AboutMe';

export default function About() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
