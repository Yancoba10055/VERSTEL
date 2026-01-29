
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bear from './Bear';
import Balloon from './Balloon';
import DancingBear from './DancingBear';

const BirthdayCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Generate random balloons when open
  const balloons = Array.from({ length: 15 }).map((_, i) => (
    <Balloon key={i} delay={i * 0.2} color={getRandomColor()} />
  ));

  function getRandomColor() {
    const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#fb923c', '#facc15', '#60a5fa', '#a78bfa'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="relative flex flex-col items-center justify-center cursor-pointer select-none">
      {/* Bear holding the envelope */}
      <div className="relative" onClick={toggleOpen}>
        <Bear isOpen={isOpen} />
        
        {/* Dancing Bears (appear when open) */}
        <AnimatePresence>
          {isOpen && (
            <>
              <DancingBear position="left" delay={0.3} />
              <DancingBear position="right" delay={0.5} />
            </>
          )}
        </AnimatePresence>
        
        {/* Envelope */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-64 sm:w-80">
          <motion.div 
            className="relative"
            animate={{ 
              y: isOpen ? 60 : 0,
              scale: isOpen ? 1.05 : 1,
              rotate: isOpen ? 0 : [0, -1, 1, 0]
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 4 },
              y: { type: 'spring', stiffness: 100 }
            }}
          >
            {/* Back part of envelope */}
            <div className="bg-rose-100 w-full h-40 sm:h-48 rounded-b-lg shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full border-2 border-rose-200 rounded-b-lg"></div>
            </div>

            {/* The Letter */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ y: 0, opacity: 0, scale: 0.8 }}
                  animate={{ y: -200, opacity: 1, scale: 1 }}
                  exit={{ y: 0, opacity: 0, scale: 0.8 }}
                  className="absolute top-4 left-2 right-2 bg-white p-6 shadow-2xl rounded-sm z-20 border-t-8 border-rose-400 min-h-[220px] flex flex-col justify-center items-center"
                  transition={{ type: 'spring', stiffness: 40, damping: 12 }}
                >
                  <p className="dancing-font text-rose-500 text-xl sm:text-2xl leading-tight text-center">
                    ¡Feliz Cumpleaños!
                  </p>
                  <motion.h2 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                    className="dancing-font text-5xl sm:text-7xl font-bold text-rose-600 my-4 drop-shadow-md"
                  >
                    SILVIA
                  </motion.h2>
                  <p className="text-rose-400 text-sm sm:text-base text-center font-semibold italic">
                    ¡Que hoy sea un día lleno de magia y alegría!
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-3xl animate-bounce">🎂</span>
                    <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
                    <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope Flap (Front top) */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none"
              initial={false}
              animate={{ rotateX: isOpen ? 160 : 0 }}
              style={{ originY: 0, transformStyle: 'preserve-3d' }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="w-full h-1/2 bg-rose-200" 
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  backfaceVisibility: 'hidden'
                }}
              ></div>
            </motion.div>

            {/* Front of envelope sides */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-rose-50 z-10 pointer-events-none"
              style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
            ></div>
            <div 
              className="absolute top-0 right-0 w-full h-full bg-rose-50 z-10 pointer-events-none"
              style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-full h-full bg-rose-100 z-10 pointer-events-none"
              style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
            ></div>
          </motion.div>
        </div>
      </div>

      {/* Balloons Container */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-visible">
        {isOpen && balloons}
      </div>
    </div>
  );
};

export default BirthdayCard;
