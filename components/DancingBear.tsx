
import React from 'react';
import { motion } from 'framer-motion';

interface DancingBearProps {
  delay?: number;
  position: 'left' | 'right';
}

const DancingBear: React.FC<DancingBearProps> = ({ delay = 0, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: position === 'left' ? -50 : 50 }}
      animate={{ 
        opacity: 1, 
        scale: 0.6, 
        x: position === 'left' ? -140 : 140,
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        x: { duration: 0.8, delay, type: 'spring' },
        y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
      }}
      className="absolute top-0 pointer-events-none"
    >
      <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Orejas */}
        <circle cx="50" cy="50" r="25" fill="#A67B5B" />
        <circle cx="150" cy="50" r="25" fill="#A67B5B" />
        
        {/* Moño (Diferenciador de Osita) */}
        <path d="M150 30 L170 10 L180 30 L170 50 Z" fill="#FF69B4" />
        <path d="M150 30 L130 10 L120 30 L130 50 Z" fill="#FF69B4" />
        <circle cx="150" cy="30" r="8" fill="#FF1493" />

        {/* Cabeza */}
        <circle cx="100" cy="100" r="75" fill="#A67B5B" />
        
        {/* Hocico */}
        <ellipse cx="100" cy="125" rx="35" ry="25" fill="#F5DEB3" />
        
        {/* Ojos felices */}
        <circle cx="70" cy="90" r="8" fill="#2D1B0D" />
        <circle cx="130" cy="90" r="8" fill="#2D1B0D" />
        <circle cx="73" cy="87" r="3" fill="white" />
        <circle cx="133" cy="87" r="3" fill="white" />

        {/* Mejillas */}
        <circle cx="50" cy="115" r="12" fill="#FFB6C1" opacity="0.6" />
        <circle cx="150" cy="115" r="12" fill="#FFB6C1" opacity="0.6" />

        {/* Nariz */}
        <path d="M90 115 Q100 105 110 115 L100 125 Z" fill="#2D1B0D" />

        {/* Sonrisa */}
        <path d="M85 135 Q100 150 115 135" stroke="#2D1B0D" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>
  );
};

export default DancingBear;
