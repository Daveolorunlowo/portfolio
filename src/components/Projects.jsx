import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBolt, FaUserGraduate, FaShoppingCart } from 'react-icons/fa';

const ProjectCard = ({ title, desc, tags, link, github, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{
            background: 'rgba(12, 14, 22, 0.75)',
            backdropFilter: 'blur(24px)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        }}
        whileHover={{ y: -8 }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = color + '55';
            e.currentTarget.style.boxShadow = `0 24px 60px -12px ${color}30`;
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        {/* Coloured top accent bar */}
        <div style={{
            height: 3,
            background: `linear-gradient(90deg, ${color}, ${color}00)`,
            flexShrink: 0,
        }} />

        {/* Subtle inner glow blob matching the accent colour */}
        <div style={{
            position: 'absolute',
            top: -40, left: -40,
            width: 180, height: 180,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
            pointerEvents: 'none',
        }} />

        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.4rem', position: 'relative' }}>

            {/* Header row: icon + links */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {/* Icon badge */}
                <div style={{
                    width: 50, height: 50,
                    borderRadius: '14px',
                    background: color + '18',
                    border: `1px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: color,
                    flexShrink: 0,
                }}>
                    <Icon size={22} />
                </div>

                {/* Action icons */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    {github && (
                        <motion.a
                            href={github} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, color: '#fff' }}
                            style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 0 }}
                        >
                            <FaGithub size={19} />
                        </motion.a>
                    )}
                    {link && (
                        <motion.a
                            href={link} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, color: '#fff' }}
                            style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 0 }}
                        >
                            <FaExternalLinkAlt size={17} />
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Title */}
            <div>
                <h3 style={{
                    fontSize: '1.35rem', fontWeight: 700,
                    color: '#fff', marginBottom: '0.6rem',
                    letterSpacing: '-0.01em',
                }}>
                    {title}
                </h3>
                <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7, fontSize: '0.9rem',
                }}>
                    {desc}
                </p>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {tags.map((tag, i) => (
                    <span key={i} style={{
                        background: color + '12',
                        color: color,
                        border: `1px solid ${color}30`,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.03em',
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA link */}
            {link && (
                <motion.a
                    href={link} target="_blank" rel="noopener noreferrer"
                    whileHover={{ gap: '0.7rem' }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                        textDecoration: 'none',
                        fontSize: '0.82rem', fontWeight: 600,
                        color: color,
                        letterSpacing: '0.04em',
                        paddingTop: '0.25rem',
                        transition: 'gap 0.2s',
                    }}
                >
                    View Project <FaExternalLinkAlt size={11} />
                </motion.a>
            )}
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
            color: '#3B82F6',
        },
        {
            title: 'Snype',
            desc: 'The all-in-one platform for modern professionals to streamline workflows. Featuring real-time analytics, automated workflows, and secure payments to boost productivity.',
            tags: ['React', 'Automation', 'Analytics', 'SaaS'],
            link: 'https://snype-theta.vercel.app/',
            icon: FaBolt,
            color: '#eab308',
        },
        {
            title: 'Jumia Navy',
            desc: 'Jumia General Store — Your one-stop shop for everything. A comprehensive e-commerce experience built for speed and scale.',
            tags: ['React', 'Vite', 'Commerce'],
            link: 'https://jumia-navy.vercel.app/',
            icon: FaShoppingCart,
            color: '#8b5cf6',
        },
    ];

    return (
        <section id="projects" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 4rem' }}
                >
                    <h2 className="section-title">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        High-performance digital solutions built with modern technology stacks.
                    </p>
                </motion.div>

                {/* Card grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.75rem',
                    alignItems: 'stretch',
                }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} delay={i * 0.12} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
