import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
