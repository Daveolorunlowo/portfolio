import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBolt, FaUserGraduate, FaShoppingCart } from 'react-icons/fa';

const ProjectCard = ({ title, desc, tags, link, github, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -15, scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        style={{
            background: 'rgba(30, 41, 59, 0.7)', // Darker glass base
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            height: '100%'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.boxShadow = `0 20px 40px -5px ${color}20`; // Colored glow
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }}
    >
        {/* Gradient Header */}
        <div style={{
            height: '6px',
            background: `linear-gradient(90deg, ${color}, transparent)`
        }} />

        <div style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div style={{
                    background: `${color}15`, // Very subtle tint
                    padding: '1rem',
                    borderRadius: '16px',
                    color: color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon size={28} />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    {github && (
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: 'white' }}
                            style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                        >
                            <FaGithub size={22} />
                        </motion.a>
                    )}
                    {link && (
                        <motion.a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: 'white' }}
                            style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                        >
                            <FaExternalLinkAlt size={20} />
                        </motion.a>
                    )}
                </div>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>{title}</h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                {desc}
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {tags.map((tag, i) => (
                    <span key={i} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-primary)',
                        padding: '0.5rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: 'InternSync',
            desc: 'A comprehensive platform streamlining the internship search and application process. Connecting ambitious students with opportunities that perfectly match their skills.',
            tags: ['React', 'Node.js', 'Vite', 'Tailwind'],
            link: 'https://intersync.vercel.app/',
            icon: FaUserGraduate,
            color: '#3B82F6' // Blue
        },
        {
            title: 'Jumia Navy',
            desc: 'Jumia General Store - Your one-stop shop for everything! A comprehensive e-commerce experience.',
            tags: ['React', 'Vite', 'Commerce'],
            link: 'https://jumia-navy.vercel.app/',
            icon: FaShoppingCart,
            color: '#1e3a8a' // Navy Blue
        },
        {
            title: 'Snype',
            desc: 'The all-in-one platform for modern professionals to streamline workflows. Featuring real-time analytics, automated workflows, and secure payments to boost productivity.',
            tags: ['React', 'Automation', 'Analytics', 'SaaS'],
            link: 'https://snype-theta.vercel.app/',
            icon: FaBolt,
            color: '#F59E0B' // Amber/Orange
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ position: 'relative' }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
                zIndex: -1
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '5rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 5rem' }}
                >
                    <h2 className="section-title">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Delivering high-performance digital solutions. Exploring new technologies to build tools that matter.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} delay={i * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
