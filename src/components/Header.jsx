import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 backdrop-blur-md py-6' : 'py-10'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(10, 14, 23, 0.9)' : 'transparent',
        top: 0,
        left: 0,
        right: 0
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>D</div>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Dave</span>
        </div>

        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Services', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact"
              style={{
                background: 'var(--primary)',
                color: 'white',
                padding: '0.6rem 1.5rem',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'var(--primary-hover)'}
              onMouseLeave={(e) => e.target.style.background = 'var(--primary)'}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
