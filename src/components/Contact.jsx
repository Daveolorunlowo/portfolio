import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ paddingBottom: '40px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-card"
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Let's work together</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:davereebat@gmail.com" style={{ textDecoration: 'none' }}>
                            <button style={{
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                transition: 'background 0.3s',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => e.target.style.background = 'var(--primary-hover)'}
                                onMouseLeave={(e) => e.target.style.background = 'var(--primary)'}
                            >
                                <FaEnvelope /> Say Hello
                            </button>
                        </a>

                        <a href="/resume.pdf" download="Dave_Resume.pdf" style={{ textDecoration: 'none' }}>
                            <button style={{
                                background: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                            >
                                <FaDownload /> Download Resume
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Contact;
