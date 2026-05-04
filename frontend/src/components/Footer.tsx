import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        <div>
          <h3 className="text-brand-gold font-bold tracking-widest text-xs mb-6">HEADQUARTERS</h3>
          <p className="text-sm text-gray-400">9 Flamingo Grove, Yellowwood Park, Durban</p>
        </div>
        <div>
          <h3 className="text-brand-gold font-bold tracking-widest text-xs mb-6">NATIONAL BRANCHES</h3>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>Parktown, Johannesburg</li>
            <li>City Centre, Cape Town</li>
          </ul>
        </div>
        <div>
          <h3 className="text-brand-gold font-bold tracking-widest text-xs mb-6">GET IN TOUCH</h3>
          <p className="text-sm text-gray-400">+27 66 224 6679</p>
          <p className="text-sm text-gray-400">lwazilmabaso@gmail.com</p>
        </div>
      </div>
      <div className="pt-8 flex justify-between items-center text-[10px] tracking-[0.2em] text-gray-600 uppercase font-bold">
        <span>© 2026 LN MABASO LOGISTICS</span>
        <span>Premium Vehicle Relocation</span>
      </div>
    </footer>
  );
};

export default Footer;