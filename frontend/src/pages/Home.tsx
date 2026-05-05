import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';

interface HomeProps {
  setActivePage: (page: 'home' | 'blueprint') => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <main className="bg-black min-h-screen">
      {/* ADD THE NAVBAR HERE */}
      <Navbar setActivePage={setActivePage} />
      
      <Hero setActivePage={setActivePage} />
      
      {/* Update your Services.tsx to use bg-black and text-white */}
      <Services /> 

      {/* Footer with Contact Info */}
      <footer className="bg-zinc-900 border-t border-yellow-600/20 py-10 text-center">
        <p className="text-yellow-600 font-bold">LN MABASO LOGISTICS</p>[cite: 1]
        <p className="text-gray-500 text-sm mt-2">© 2026 Johannesburg | Durban | Cape Town</p>[cite: 1]
      </footer>
    </main>
  );
};

export default Home;