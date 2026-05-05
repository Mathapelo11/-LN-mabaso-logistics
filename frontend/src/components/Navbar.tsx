import React from 'react';

interface NavbarProps {
  setActivePage: (page: 'home' | 'blueprint') => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav className="w-full fixed top-0 z-50">
      {/* Black Top Bar with Contacts */}
      <div className="bg-black text-white py-2 px-6 flex justify-between items-center text-xs border-b border-yellow-600/20">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">📍 JHB | DBN | CT</span>
          <span className="flex items-center gap-1">📞 +27 66 224 6679</span>
        </div>
        <div className="hidden md:block italic text-yellow-600">
          "Moving What Moves You"
        </div>
      </div>

      {/* Main Glassmorphism Nav */}
      <div className="bg-black/90 backdrop-blur-md py-4 px-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
          {/* LOGO SPACE */}
          <div className="h-12 w-12 bg-yellow-600 rounded flex items-center justify-center font-black text-black text-xl">
            LN
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tighter text-2xl uppercase">LN MABASO</span>
            <span className="text-yellow-600 font-semibold tracking-[0.2em] text-[10px] uppercase">Logistics & Car Movers</span>[cite: 1]
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button onClick={() => setActivePage('home')} className="text-white hover:text-yellow-600 font-medium transition uppercase text-sm tracking-widest">Home</button>
          <button 
            onClick={() => setActivePage('blueprint')} 
            className="bg-yellow-600 text-black px-5 py-2 font-bold uppercase text-xs tracking-tighter hover:bg-white transition duration-300"
          >
            Logistics Blueprint
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;