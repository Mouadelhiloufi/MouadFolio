import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StarAnimation() {
    const stars = [
        {
            position: "-top-10 -left-10",
            size: "text-8xl",
            duration: 20,
            delay: 0,
            opacity: "opacity-20"
        },
        {
            position: "top-40 -right-8",
            size: "text-6xl",
            duration: 25,
            delay: 1,
            opacity: "opacity-15"
        },
        {
            position: "bottom-20 left-40",
            size: "text-5xl",
            duration: 30,
            delay: 2,
            opacity: "opacity-10"
        },
        {
            position: "top-60 left-1/3",
            size: "text-4xl",
            duration: 22,
            delay: 0.5,
            opacity: "opacity-20"
        },
        {
            position: "bottom-40 right-1/4",
            size: "text-7xl",
            duration: 28,
            delay: 1.5,
            opacity: "opacity-15"
        }
    ];

    return (
        <>
            {stars.map((star, index) => (
                <motion.div 
                    key={index}
                    className={`absolute ${star.position} text-[#FFE5DD] ${star.size} ${star.opacity}`}
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                        rotate: {
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        delay: star.delay
                    }}
                >
                    <FontAwesomeIcon icon={faStar} />
                </motion.div>
            ))}
        </>
    );
} 