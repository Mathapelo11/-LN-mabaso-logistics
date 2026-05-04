import React from 'react';

// THIS INTERFACE FIXES ERROR TS2322
interface NavProps {
  setActivePage: (page: 'home' | 'blueprint') => void;
}

const Navbar: React.FC<NavProps> = ({ setActivePage }) => {
  return (
    <nav className="bg-black py-6 px-10 flex justify-between items-center sticky top-0 z-50 border-b border-brand-gray">
      <div className="text-white text-2xl italic font-black tracking-tighter">
        LN <span className="text-brand-gold uppercase">Mabaso</span>
      </div>
      
      <div className="flex gap-8 items-center">
        <button 
          onClick={() => setActivePage('home')}
          className="text-white hover:text-brand-gold uppercase font-black text-xs tracking-[0.2em] transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => setActivePage('blueprint')}
          className="bg-brand-gold text-black px-6 py-2 font-black text-xs uppercase tracking-widest hover:bg-white transition-all"
        >
          Analyst Blueprint
        </button>
      </div>
    </nav>
  );
};

export default Navbar;