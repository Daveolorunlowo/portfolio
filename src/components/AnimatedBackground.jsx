import { useRef, useEffect, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const audioRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 }); // Track mouse for parallax
    const [muted, setMuted] = useState(true);
    const [audioError, setAudioError] = useState(false);
    const [latitude, setLatitude] = useState(null); // Null means unknown/default to North

    useEffect(() => {
        // Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                },
                (error) => {
                    console.log("Geolocation error (using default North):", error);
                }
            );
        }
    }, []);

    // --- SEASON & TIME LOGIC ---
    const getSeason = () => {
        const month = new Date().getMonth(); // 0-11
        const isNorth = latitude === null || latitude >= 0;

        // Standard Northern Hemisphere Seasons
        // Winter: Dec, Jan, Feb
        // Spring: Mar, Apr, May
        // Summer: Jun, Jul, Aug
        // Autumn: Sep, Oct, Nov

        let season = 'WINTER';
        if (month >= 2 && month <= 4) season = 'SPRING';
        else if (month >= 5 && month <= 7) season = 'SUMMER';
        else if (month >= 8 && month <= 10) season = 'AUTUMN';
        else season = 'WINTER';

        // Invert for Southern Hemisphere
        if (!isNorth) {
            if (season === 'WINTER') return 'SUMMER';
            if (season === 'SUMMER') return 'WINTER';
            if (season === 'SPRING') return 'AUTUMN';
            if (season === 'AUTUMN') return 'SPRING';
        }

        return season;
    };

    const isDayTime = () => {
        const hour = new Date().getHours();
        return hour >= 6 && hour < 18;
    };

    const getSoundSource = () => {
        const season = getSeason();
        const day = isDayTime();

        if (season === 'WINTER') return '/sounds/wind.mp3';
        if (day) return '/sounds/birds.mp3';
        return '/sounds/crickets.mp3';
    };

    useEffect(() => {
        const source = getSoundSource();

        if (!audioRef.current) {
            audioRef.current = new Audio(source);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
        } else if (audioRef.current.getAttribute('src') !== source) {
            const oldAudio = audioRef.current;
            oldAudio.pause();

            audioRef.current = new Audio(source);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
            if (!muted) {
                audioRef.current.play().catch(e => {
                    console.log("Audio play failed:", e);
                    setAudioError(true);
                });
            }
        }

        if (audioRef.current) {
            if (muted) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => {
                    console.log("Audio auto-play blocked:", e);
                    setAudioError(true);
                });
            }
        }

        return () => {
            if (audioRef.current) audioRef.current.pause();
        }
    }, [muted, getSeason(), isDayTime()]);

    const toggleMute = () => {
        setMuted(!muted);
        setAudioError(false);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const CLOUD_COUNT = 6;
        const STAR_COUNT = 150;

        let clouds = [];
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initSystems();
        };

        const initSystems = () => {
            // Realistic Clouds
            clouds = [];
            for (let i = 0; i < CLOUD_COUNT; i++) {
                const puffCount = 15 + Math.floor(Math.random() * 10);
                const puffs = [];
                const clusterWidth = 150 + Math.random() * 100;

                for (let j = 0; j < puffCount; j++) {
                    puffs.push({
                        dx: (Math.random() - 0.5) * clusterWidth,
                        dy: (Math.random() - 0.5) * (clusterWidth * 0.4),
                        r: 30 + Math.random() * 40,
                        opacity: 0.1 + Math.random() * 0.2
                    });
                }

                clouds.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * (canvas.height * 0.6),
                    scale: 0.8 + Math.random() * 0.6, // depth factor
                    speed: 0.1 + Math.random() * 0.2,
                    puffs: puffs
                });
            }

            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    opacity: Math.random()
                });
            }
        };

        const getSkyColor = (hour) => {
            const TIMES = {
                0: ['#020617', '#0f172a'],
                5: ['#0f172a', '#312e81'],
                6: ['#1e1b4b', '#f59e0b'],
                8: ['#3b82f6', '#93c5fd'],
                12: ['#0ea5e9', '#bae6fd'],
                17: ['#3b82f6', '#fed7aa'],
                18: ['#1e1b4b', '#f97316'],
                19: ['#172554', '#4c1d95'],
                21: ['#020617', '#1e1b4b']
            };

            const keys = Object.keys(TIMES).map(Number).sort((a, b) => a - b);
            let activeKey = keys[0];
            for (let k of keys) {
                if (hour >= k) activeKey = k;
            }
            return TIMES[activeKey];
        };

        const draw = () => {
            const date = new Date();
            const hour = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;

            const [topColor, bottomColor] = getSkyColor(hour);

            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, topColor);
            gradient.addColorStop(1, bottomColor);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Stars
            let starOpacity = 0;
            if (hour < 6 || hour > 19) starOpacity = 1;
            else if (hour < 7) starOpacity = 1 - (hour - 6);
            else if (hour > 18) starOpacity = hour - 18;

            if (starOpacity > 0) {
                ctx.fillStyle = 'white';
                stars.forEach(star => {
                    ctx.globalAlpha = star.opacity * starOpacity;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.globalAlpha = 1;
            }

            // Celestial
            let celestialX, celestialY, celestialType;
            if (hour >= 6 && hour < 18) {
                const sunProgress = (hour - 6) / 12;
                celestialX = canvas.width * 0.1 + (canvas.width * 0.8) * sunProgress;
                celestialY = canvas.height * 0.8 - Math.sin(sunProgress * Math.PI) * (canvas.height * 0.6);
                celestialType = 'SUN';
            } else {
                let moonHour = hour >= 18 ? hour - 18 : hour + 6;
                const moonProgress = moonHour / 12;
                celestialX = canvas.width * 0.1 + (canvas.width * 0.8) * moonProgress;
                celestialY = canvas.height * 0.8 - Math.sin(moonProgress * Math.PI) * (canvas.height * 0.6);
                celestialType = 'MOON';
            }

            if (celestialType === 'SUN') {
                const glow = ctx.createRadialGradient(celestialX, celestialY, 20, celestialX, celestialY, 120);
                glow.addColorStop(0, 'rgba(253, 224, 71, 0.4)');
                glow.addColorStop(1, 'rgba(253, 224, 71, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(celestialX, celestialY, 120, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#FDB813';
                ctx.beginPath();
                ctx.arc(celestialX, celestialY, 40, 0, Math.PI * 2);
                ctx.fill();
            } else {
                const glow = ctx.createRadialGradient(celestialX, celestialY, 20, celestialX, celestialY, 70);
                glow.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
                glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(celestialX, celestialY, 70, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#F4F6F0';
                ctx.beginPath();
                ctx.arc(celestialX, celestialY, 30, 0, Math.PI * 2);
                ctx.fill();
            }

            // Clouds
            let r = 255, g = 255, b = 255;
            if (hour < 6 || hour > 20) { r = 100; g = 116; b = 139; }
            else if (hour > 17 || hour < 7) { r = 253; g = 186; b = 116; }

            // Mouse Parallax
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            clouds.forEach(cloud => {
                cloud.x += cloud.speed;
                if (cloud.x > canvas.width + 200) cloud.x = -200;

                // Parallax Offset
                // Closer clouds (higher scale) move MORE (perspective)
                const parallaxX = (mouseRef.current.x - centerX) * 0.02 * cloud.scale;
                const parallaxY = (mouseRef.current.y - centerY) * 0.02 * cloud.scale;

                cloud.puffs.forEach(puff => {
                    const cx = (cloud.x + parallaxX) + puff.dx * cloud.scale;
                    const cy = (cloud.y + parallaxY) + puff.dy * cloud.scale;
                    const radius = puff.r * cloud.scale;

                    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
                    grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${puff.opacity})`);
                    grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                    ctx.fill();
                });
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [latitude]); // Re-init if latitude changes (though mostly for initial load)

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            />

            <button
                onClick={toggleMute}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 50,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'var(--text-primary)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
        </>
    );
};

export default AnimatedBackground;
