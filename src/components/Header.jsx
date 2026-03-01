import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const SPRING = { type: 'spring', stiffness: 380, damping: 30, mass: 0.7 };

const Header = () => {
  const [active, setActive] = useState('');
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = '';
      for (const { label, id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= window.innerHeight * 0.4 && r.bottom >= window.innerHeight * 0.4)
            cur = label;
        }
      }
      if (window.scrollY < 40) cur = '';
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const indicator = hovered ?? active;

  return (
    <>
      {/* ── FLOATING NAV ─────────────────────────────────────────────── */}
      <div style={{
        position: 'fixed', top: scrolled ? '1rem' : '1.75rem',
        left: 0, width: '100%',
        display: 'flex', justifyContent: 'center',
        zIndex: 200, pointerEvents: 'none',
        transition: 'top 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <motion.header
          initial={{ y: -80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ pointerEvents: 'auto' }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.35rem 0.35rem 0.35rem 1rem',
            background: 'rgba(9, 9, 14, 0.7)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled
              ? '0 20px 60px -10px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 8px 30px rgba(0,0,0,0.3)',
            transition: 'box-shadow 0.5s',
          }}>

            {/* LOGO */}
            <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.55rem', marginRight: '0.5rem' }}>
              {/* Spinning gradient ring logo */}
              <div style={{ position: 'relative', width: 32, height: 32, flexShrink: 0 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #7c3aed, #ec4899, #3b82f6, #7c3aed)',
                    padding: '2px',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 2, borderRadius: '50%',
                  background: '#09090e',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>D</span>
                </div>
              </div>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.03em' }}>
                Dave
              </span>
            </a>

            {/* DESKTOP NAV */}
            <nav
              className="nav-links-desktop"
              style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
              onMouseLeave={() => setHovered(null)}
            >
              {NAV_LINKS.map(({ label, id }) => {
                const lit = indicator === label;

                return (
                  <div key={label} style={{ position: 'relative' }}
                    onMouseEnter={() => setHovered(label)}>

                    {/* Sliding glow pill */}
                    {lit && (
                      <motion.div
                        layoutId="nav-pill"
                        transition={SPRING}
                        style={{
                          position: 'absolute', inset: 0,
                          borderRadius: '100px',
                          background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(236,72,153,0.25))',
                          border: '1px solid rgba(124,58,237,0.3)',
                          boxShadow: '0 0 20px rgba(124,58,237,0.25), inset 0 0 12px rgba(124,58,237,0.1)',
                          zIndex: 0,
                        }}
                      />
                    )}

                    <a href={`#${id}`} style={{
                      display: 'block', position: 'relative', zIndex: 1,
                      padding: '0.55rem 1.1rem',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: lit ? 600 : 400,
                      letterSpacing: '0.04em',
                      color: lit ? '#fff' : 'rgba(255,255,255,0.42)',
                      transition: 'color 0.25s',
                      whiteSpace: 'nowrap',
                    }}>
                      {label}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* GLOW CTA */}
            <motion.a
              href="#contact"
              className="nav-links-desktop"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                textDecoration: 'none',
                marginLeft: '0.3rem',
                padding: '0.58rem 1.35rem',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: '#fff',
                fontSize: '0.8rem', fontWeight: 600,
                letterSpacing: '0.03em', whiteSpace: 'nowrap',
                boxShadow: '0 0 20px rgba(124,58,237,0.45)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(124,58,237,0.7)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.45)'}
            >
              Let's Talk
            </motion.a>


          </div>
        </motion.header>
      </div>

      {/* ── MOBILE DROPDOWN ─────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mob"
            initial={{ opacity: 0, scale: 0.96, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.96, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: scrolled ? '5.4rem' : '6rem',
              left: '1rem', right: '1rem',
              zIndex: 190,
              background: 'rgba(9,9,14,0.9)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '0.75rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(124,58,237,0.15)',
            }}
          >
            {NAV_LINKS.map(({ label, id }, i) => {
              const isActive = active === label;
              return (
                <motion.a
                  key={label}
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  style={{
                    display: 'block', padding: '0.9rem 1.2rem',
                    borderRadius: '12px', textDecoration: 'none',
                    fontSize: '1.1rem', fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.45)',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1))'
                      : 'transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </motion.a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', margin: '0.5rem 0 0',
                padding: '0.9rem', borderRadius: '100px', textAlign: 'center',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                textDecoration: 'none', color: '#fff', fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
              }}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
