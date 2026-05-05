import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-12">
          <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm">Our Fleet</span>
          <h2 className="text-white text-4xl font-black uppercase">Professional Vehicle Transport</h2>
        </div>
        
        {/* Grid Space for Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
          <div className="md:col-span-2 bg-zinc-900 border border-white/5 overflow-hidden group">
             {/* IMAGE 1 SPACE */}
             <div className="w-full h-full flex items-center justify-center text-zinc-700 italic group-hover:scale-110 transition-transform duration-700">
               [Insert Large Fleet Photo Here]
             </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
             <div className="bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-700 italic overflow-hidden">
               {/* IMAGE 2 SPACE */}
               [Small Photo 1]
             </div>
             <div className="bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-700 italic overflow-hidden">
               {/* IMAGE 3 SPACE */}
               [Small Photo 2]
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;