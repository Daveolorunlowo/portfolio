import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-panel"
        style={{ padding: '2rem', textAlign: 'center' }}
    >
        <div style={{ 
            width: '60px', height: '60px', 
            background: 'var(--primary)', 
            borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'white',
            boxShadow: '0 0 20px var(--primary)'
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{desc}</p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            desc: 'Building responsive, high-performance web applications using modern frameworks like React and Node.js.'
        },
        {
            icon: FaMobileAlt,
            title: 'Mobile Solutions',
            desc: 'Crafting cross-platform mobile experiences with React Native for seamless performance on iOS and Android.'
        },
        {
            icon: FaRocket,
            title: 'Performance Optimization',
            desc: 'Enhancing site speed and SEO to ensure your digital products reach and engage the widest possible audience.'
        },
        {
            icon: FaDatabase,
            title: 'Backend Architecture',
            desc: 'Designing scalable and secure server-side solutions and databases to power complex applications.'
        }
    ];

    return (
        <section id="services" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">My <span className="text-gradient">Services</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>Specialized solutions tailored to your business needs.</p>
                </motion.div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                    gap: '2rem' 
                }}>
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
