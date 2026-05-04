import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center bg-brand-black overflow-hidden">
      {/* Background Overlay - Simulates a premium logistics environment */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>

      <div className="relative z-10 px-10 md:px-20 max-w-5xl">
        <h2 className="text-brand-gold font-bold tracking-[0.4em] text-sm mb-4">ESTABLISHED 2022</h2>
        <h1 className="heading-impact text-7xl md:text-9xl mb-6">
          Moving What <br /> <span className="text-brand-gold">Moves You</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mb-10">
          Premium vehicle relocation and specialized logistics infrastructure across South Africa.
        </p>
        <div className="flex gap-4">
          <button className="bg-brand-gold text-black px-8 py-4 font-black uppercase text-sm hover:bg-white transition-all">
            Get a Quote
          </button>
          <button className="border border-white text-white px-8 py-4 font-black uppercase text-sm hover:bg-white hover:text-black transition-all">
            Our Fleet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;