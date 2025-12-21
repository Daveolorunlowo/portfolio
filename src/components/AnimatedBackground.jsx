import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            background: 'var(--bg-primary)'
        }}>
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                        y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 80}%`,
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.05)' : 'rgba(139, 92, 246, 0.05)',
                        filter: 'blur(80px)',
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
