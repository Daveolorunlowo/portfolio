
import { FaPenNib, FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        className="glass-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        style={{
            padding: '2rem',
            transition: 'all 0.3s',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
            e.currentTarget.style.boxShadow = `0 10px 30px ${primary}40`;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '';
        }}
    >
        <div style={{
            background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'var(--primary)'
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{desc}</p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: FaPenNib,
            title: 'UI/UX Designer',
            desc: 'Creating intuitive, user-centric, and aesthetically pleasing interfaces that drive engagement.'
        },
        {
            icon: FaCode,
            title: 'Fullstack Dev',
            desc: 'Building robust, scalable web applications from front-end to back-end architecture.'
        },
        {
            icon: FaMobileAlt,
            title: 'Mobile App Dev',
            desc: 'Developing native and cross-platform mobile apps for iOS and Android ecosystems.'
        },
        {
            icon: FaPalette,
            title: 'Graphics Designer',
            desc: 'Crafting compelling visual assets, branding materials, and marketing collateral.'
        }
    ];

    return (
        <section id="services" className="section-padding">
            <div className="container">
                <h2 className="section-title">My Services</h2>
                <p className="section-subtitle">
                    Delivering high-quality digital solutions across various domains with precision and creativity.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
