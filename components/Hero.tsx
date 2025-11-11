
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          ALINA Innen- & Ausbau
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Ihr Partner für hochwertige Renovierung und Innenausbau
        </p>
        <a 
          href="#kontakt" 
          className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 hover:bg-blue-600 shadow-lg"
        >
          Kostenlose Anfrage senden
        </a>
      </div>
    </section>
  );
};

export default Hero;
