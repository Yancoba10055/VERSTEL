
import React from 'react';
import { motion } from 'framer-motion';

interface BearProps {
  isOpen: boolean;
}

const Bear: React.FC<BearProps> = ({ isOpen }) => {
  return (
    <motion.div 
      className="w-64 sm:w-80 h-auto"
      animate={{ 
        scale: isOpen ? 1.05 : 1,
        y: isOpen ? -10 : 0 
      }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <circle cx="50" cy="50" r="25" fill="#8B4513" />
        <circle cx="150" cy="50" r="25" fill="#8B4513" />
        <circle cx="50" cy="50" r="15" fill="#A0522D" />
        <circle cx="150" cy="50" r="15" fill="#A0522D" />
        
        {/* Head */}
        <circle cx="100" cy="100" r="75" fill="#8B4513" />
        
        {/* Muzzle */}
        <ellipse cx="100" cy="125" rx="35" ry="25" fill="#DEB887" />
        
        {/* Eyes */}
        <motion.g animate={{ scaleY: isOpen ? 1 : 0.8 }}>
          <circle cx="70" cy="90" r="8" fill="#2D1B0D" />
          <circle cx="130" cy="90" r="8" fill="#2D1B0D" />
          {/* Eye highlights */}
          <circle cx="73" cy="87" r="2.5" fill="white" />
          <circle cx="133" cy="87" r="2.5" fill="white" />
        </motion.g>

        {/* Blush */}
        <circle cx="50" cy="115" r="10" fill="#FFB6C1" opacity="0.4" />
        <circle cx="150" cy="115" r="10" fill="#FFB6C1" opacity="0.4" />

        {/* Nose */}
        <path d="M90 115 Q100 105 110 115 L100 125 Z" fill="#2D1B0D" />

        {/* Mouth */}
        <motion.path 
          d={isOpen ? "M85 135 Q100 150 115 135" : "M90 135 Q100 140 110 135"} 
          stroke="#2D1B0D" 
          strokeWidth="3" 
          strokeLinecap="round" 
          fill="none"
        />

        {/* Paws (holding the area where the envelope will be) */}
        <motion.g animate={{ y: isOpen ? 15 : 0 }}>
          <circle cx="40" cy="160" r="20" fill="#8B4513" />
          <circle cx="160" cy="160" r="20" fill="#8B4513" />
          {/* Paw pads */}
          <circle cx="40" cy="160" r="12" fill="#DEB887" />
          <circle cx="160" cy="160" r="12" fill="#DEB887" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default Bear;
