import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'Projects', 'Skills', 'Contact'];

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 backdrop-blur-md py-4' : 'py-6'}`}
        style={{
          backgroundColor: scrolled ? 'rgba(10, 14, 23, 0.9)' : 'transparent',
          top: 0,
          left: 0,
          right: 0
        }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 60 }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>D</div>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Dave</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links-desktop" style={{ gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((item) => (
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

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle" style={{ zIndex: 60 }}>
            <button onClick={toggleMenu} style={{ color: 'white', fontSize: '1.5rem', background: 'transparent' }}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--bg-secondary)',
              zIndex: 55,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'var(--primary)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
