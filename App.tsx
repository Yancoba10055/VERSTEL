
import React, { useState, useEffect } from 'react';
import BirthdayCard from './components/BirthdayCard';
import BackgroundDecorations from './components/BackgroundDecorations';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <BackgroundDecorations />
      <main className="z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-rose-400 mb-8 text-center drop-shadow-sm">
          ¡Una sorpresa para ti! 🐾
        </h1>
        <BirthdayCard />
        <p className="mt-8 text-rose-300 text-sm animate-pulse font-medium">
          Haz clic en el sobre para descubrir la magia
        </p>
      </main>
    </div>
  );
};

export default App;
