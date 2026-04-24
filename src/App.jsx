import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Gallery from './sections/Gallery.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
