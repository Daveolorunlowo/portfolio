import { FaQuoteLeft } from 'react-icons/fa';

const Quote = () => {
    return (
        <section style={{ padding: '100px 0', textAlign: 'center', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <FaQuoteLeft style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '2rem', opacity: 0.5 }} />

                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.3', marginBottom: '1.5rem' }}>
                    "Code is like humor. When you have to explain it, it's bad."
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>— Cory House</p>
            </div>
        </section>
    );
};

export default Quote;
