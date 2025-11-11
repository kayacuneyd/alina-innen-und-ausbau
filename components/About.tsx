
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Über uns</h2>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600">
            Wir sind ein kleines, erfahrenes Team, das seit Jahren hochwertige Renovierungs- und Ausbauarbeiten in der Region durchführt. Unser Anspruch ist es, die Wünsche unserer Kunden mit höchster Präzision und Qualität zu realisieren. Vertrauen, saubere Arbeit und Pünktlichkeit sind die Grundpfeiler unserer Unternehmensphilosophie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
