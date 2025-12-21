import { FaReact, FaNodeJs, FaPython, FaFigma, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiTypescript, SiAdobe } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillTag = ({ icon: Icon, name, color, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            background: 'var(--bg-tertiary)',
            padding: '0.8rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)'
        }}>
        <Icon style={{ color: color }} size={20} />
        <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{name}</span>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '80px 0', background: 'linear-gradient(to bottom, var(--bg-primary), #0d121d)' }}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="section-subtitle" style={{ marginBottom: 0 }}>My Tech Stack</p>
                </div>

                <div style={{ marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                        Languages & Frameworks
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                        <SkillTag icon={FaReact} name="React" color="#61DAFB" index={0} />
                        <SkillTag icon={FaNodeJs} name="Node.js" color="#339933" index={1} />
                        <SkillTag icon={SiTypescript} name="TypeScript" color="#3178C6" index={2} />
                        <SkillTag icon={FaPython} name="Python" color="#3776AB" index={3} />
                        <SkillTag icon={FaReact} name="React Native" color="#61DAFB" index={4} />
                    </div>

                    <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                        Design & Tools
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <SkillTag icon={FaFigma} name="Figma" color="#F24E1E" index={5} />
                        <SkillTag icon={SiAdobe} name="Adobe XD" color="#FF61F6" index={6} />
                        <SkillTag icon={FaAws} name="AWS" color="#FF9900" index={7} />
                        <SkillTag icon={FaGitAlt} name="Git" color="#F05032" index={8} />
                    </div>          </div>
            </div>
        </section>
    );
};

export default Skills;
