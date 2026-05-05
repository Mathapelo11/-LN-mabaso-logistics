import React from 'react';

interface HeroProps {
  setActivePage: (page: 'home' | 'blueprint') => void;
}

const Hero: React.FC<HeroProps> = ({ setActivePage }) => {
  return (
    <section className="relative h-screen flex items-center bg-black pt-20">
      <div className="absolute inset-0 opacity-50">
        {/* Placeholder for your truck/fleet background image */}
        <div className="w-full h-full bg-[url('/path-to-your-fleet-image.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <h1 className="text-white text-6xl md:text-8xl font-black mb-4 leading-none uppercase italic">
          Reliable & <br /> <span className="text-yellow-600">Professional</span>
        </h1>
        <p className="text-gray-400 text-xl mb-10 max-w-xl border-l-2 border-yellow-600 pl-6">
          South Africa's premier vehicle and fleet moving company services.[cite: 1]
        </p>
        <button 
          onClick={() => setActivePage('blueprint')}
          className="bg-yellow-600 text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-white transform hover:scale-105 transition-all shadow-2xl"
        >
          Get An Instant Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;