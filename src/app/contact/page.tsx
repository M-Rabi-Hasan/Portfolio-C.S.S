import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '@/styles/Contact.css';

export default function Contact() {
  return (
    <div className="container">
      <Navbar />
      <main className="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} />

          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
