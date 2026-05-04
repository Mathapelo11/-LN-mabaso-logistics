import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Footer from './components/Footer';
import Blueprint from './pages/Blueprint';

const App: React.FC = () => {
  // Logic to handle page switching
  const [activePage, setActivePage] = useState<'home' | 'blueprint'>('home');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Pass the setter to the Navbar so buttons actually work */}
      <Navbar setActivePage={setActivePage} />
      
      <main className="flex-grow">
        {activePage === 'home' ? (
          <>
            <Hero />
            <Services />
            <Fleet />
          </>
        ) : (
          <Blueprint />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App; // Vital: Ensure this default export stays at the bottom