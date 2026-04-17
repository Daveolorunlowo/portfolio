import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section style={{
            padding: '120px 0 80px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(circle at top right, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 40%)'
        }}>
            <div className="container hero-grid">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="glass-panel"
                    style={{ padding: '3rem', borderRadius: '24px' }}
                >

                    <motion.h1 variants={itemVariants} className="hero-title">
                        I'm <br />
                        <span className="text-gradient">Dave</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-subtitle">
                        Software Engineer specializing in building exceptional digital experiences.
                        I build robust and scalable web solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-buttons">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{
                                background: 'white',
                                color: 'black',
                                padding: '0.8rem 2rem',
                                borderRadius: '4px',
                                fontWeight: '600',
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                            View My Work
                        </motion.button>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                { Icon: FaGithub, href: 'https://github.com/Daveolorunlowo' },
                                { Icon: FaLinkedin, href: 'https://linkedin.com/in/dave-olorunlowo-b9248339b/' },
                                { Icon: FaTwitter, href: 'https://x.com/Dave45O' }
                            ].map(({ Icon, href }, idx) => (
                                <motion.a
                                    key={idx}
                                    href={href}
                                    target={href.startsWith('http') ? "_blank" : "_self"}
                                    rel={href.startsWith('http') ? "noopener noreferrer" : ""}
                                    whileHover={{ y: -5, color: 'var(--primary)' }}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-secondary)',
                                        transition: 'all 0.3s'
                                    }}>
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
