import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container footer-container">
                <div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Dave</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>© 2025 All rights reserved.</div>
                </div>

                <div className="footer-links">
                    {['Services', 'Skills', 'Contact'].map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{link}</a>
                    ))}
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/Davolily" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <FaGithub style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }} />
                    </a>
                    <a href="https://linkedin.com/in/dave-olorunlowo-b9248339b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <FaLinkedin style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }} />
                    </a>
                    <a href="https://x.com/Dave45O" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <FaTwitter style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }} />
                    </a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
