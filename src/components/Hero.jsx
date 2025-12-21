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
            background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1) 0%, transparent 40%)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} style={{
                        display: 'inline-block',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--primary)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.5px'
                    }}>
                        ● AVAILABLE FOR WORK
                    </motion.div>

                    <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', lineHeight: '1.1', fontWeight: '700', marginBottom: '1rem' }}>
                        I'm <br />
                        <span className="text-gradient">Dave</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                        Software Engineer specializing in building exceptional digital experiences.
                        I craft robust and scalable web solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'white',
                                color: 'black',
                                padding: '0.8rem 2rem',
                                borderRadius: '4px',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}>
                            View My Work
                        </motion.button>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
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
