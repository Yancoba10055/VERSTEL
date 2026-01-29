
import React from 'react';
import { motion } from 'framer-motion';

interface BalloonProps {
  delay: number;
  color: string;
}

const Balloon: React.FC<BalloonProps> = ({ delay, color }) => {
  // Random horizontal drift
  const drift = Math.random() * 200 - 100;
  
  return (
    <motion.div
      initial={{ y: 200, x: 0, opacity: 0, scale: 0.5 }}
      animate={{ 
        y: -1000, 
        x: drift,
        opacity: [0, 1, 1, 0],
        scale: 1,
        rotate: [0, 10, -10, 5, 0]
      }}
      transition={{ 
        duration: 4 + Math.random() * 2, 
        delay: delay,
        ease: "easeOut"
      }}
      className="absolute bottom-0"
      style={{ left: `calc(50% + ${Math.random() * 100 - 50}px)` }}
    >
      <div className="relative">
        <div 
          className="w-12 h-16 rounded-full shadow-inner"
          style={{ 
            backgroundColor: color,
            boxShadow: `inset -6px -6px 12px rgba(0,0,0,0.1), inset 4px 4px 10px rgba(255,255,255,0.4)`
          }}
        ></div>
        <div 
          className="w-0.5 h-16 mx-auto bg-gray-300 opacity-50"
          style={{ transform: 'translateY(-2px)' }}
        ></div>
        {/* Reflection */}
        <div className="absolute top-2 left-3 w-3 h-5 bg-white opacity-30 rounded-full blur-[1px]"></div>
      </div>
    </motion.div>
  );
};

export default Balloon;
