import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    // Geolocation for Hemisphere detection (Visuals & Theme)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLatitude(position.coords.latitude),
        (error) => console.log("Theme Geo error:", error)
      );
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      // Logic duplicated from AnimatedBackground for consistency without complex state lifting
      const month = new Date().getMonth();
      const isNorth = latitude === null || latitude >= 0;

      let season = 'WINTER';
      if (month >= 2 && month <= 4) season = 'SPRING';
      else if (month >= 5 && month <= 7) season = 'SUMMER';
      else if (month >= 8 && month <= 10) season = 'AUTUMN';
      else season = 'WINTER';

      if (!isNorth) {
        if (season === 'WINTER') season = 'SUMMER';
        else if (season === 'SUMMER') season = 'WINTER';
        else if (season === 'SPRING') season = 'AUTUMN';
        else if (season === 'AUTUMN') season = 'SPRING';
      }

      const root = document.documentElement;

      switch (season) {
        case 'WINTER':
          root.style.setProperty('--primary', '#3B82F6'); // Blue
          root.style.setProperty('--primary-hover', '#2563EB');
          root.style.setProperty('--text-accent', '#38BDF8');
          root.style.setProperty('--gradient-main', 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)');
          break;
        case 'SPRING':
          root.style.setProperty('--primary', '#D946EF'); // Fuchsia
          root.style.setProperty('--primary-hover', '#C026D3');
          root.style.setProperty('--text-accent', '#F472B6');
          root.style.setProperty('--gradient-main', 'linear-gradient(135deg, #D946EF 0%, #8B5CF6 100%)'); // Pink to Purple
          break;
        case 'SUMMER':
          root.style.setProperty('--primary', '#F59E0B'); // Amber
          root.style.setProperty('--primary-hover', '#D97706');
          root.style.setProperty('--text-accent', '#FBBF24');
          root.style.setProperty('--gradient-main', 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)'); // Amber to Red
          break;
        case 'AUTUMN':
          root.style.setProperty('--primary', '#D97706'); // Rust
          root.style.setProperty('--primary-hover', '#B45309');
          root.style.setProperty('--text-accent', '#F59E0B');
          root.style.setProperty('--gradient-main', 'linear-gradient(135deg, #D97706 0%, #78350F 100%)'); // Rust to Brown
          break;
      }
    };

    updateTheme();
  }, [latitude]); // Re-run when latitude is determined

  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
