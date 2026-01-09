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
            background: 'color-mix(in srgb, var(--primary) 5%, rgba(10, 14, 23, 0.6))',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid color-mix(in srgb, var(--primary) 20%, rgba(255, 255, 255, 0.15))',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.5)',
            height: '100%'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.boxShadow = `0 20px 40px -5px ${color}20`; // Colored glow
        }}
        onMouseLeave={(e) => {
            const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
            e.currentTarget.style.borderColor = `color-mix(in srgb, ${primary} 20%, rgba(255, 255, 255, 0.15))`;
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }}
    >
        {/* Gradient Header */}
        <div style={{
            height: '6px',
            background: `linear-gradient(90deg, ${color}, transparent)`
        }} />

        <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
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
            color: 'var(--primary)'
        },
        {
            title: 'Snype',
            desc: 'The all-in-one platform for modern professionals to streamline workflows. Featuring real-time analytics, automated workflows, and secure payments to boost productivity.',
            tags: ['React', 'Automation', 'Analytics', 'SaaS'],
            link: 'https://snype-theta.vercel.app/',
            icon: FaBolt,
            color: 'var(--text-accent)'
        },
        {
            title: 'Jumia Navy',
            desc: 'Jumia General Store - Your one-stop shop for everything! A comprehensive e-commerce experience.',
            tags: ['React', 'Vite', 'Commerce'],
            link: 'https://jumia-navy.vercel.app/',
            icon: FaShoppingCart,
            color: 'var(--primary)'
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ position: 'relative' }}>
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
