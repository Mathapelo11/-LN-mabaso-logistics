import React from 'react';
import { CheckCircle, Truck, Shield } from 'lucide-react';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black italic mb-12 uppercase text-black">
          The <span className="text-brand-gold">Fleet</span> Standards
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Method 1 */}
          <div className="space-y-4 group">
             <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400 group-hover:border-brand-gold border-2 border-transparent transition-all">
               [Driven Method Photo]
             </div>
             <div className="flex items-center gap-2 text-brand-gold">
               <Truck size={20} /> {/* Clears Truck warning */}
               <h3 className="font-bold text-xl text-black uppercase">Driven on Road</h3>
             </div>
             <p className="text-sm opacity-70">Professional drivers for cost-effective, rapid delivery across SA.</p>
          </div>

          {/* Method 2 */}
          <div className="space-y-4 group">
             <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400 group-hover:border-brand-gold border-2 border-transparent transition-all">
               [Trailer/Truck Photo]
             </div>
             <div className="flex items-center gap-2 text-brand-gold">
               <Truck size={20} />
               <h3 className="font-bold text-xl text-black uppercase">Truck & Trailer</h3>
             </div>
             <p className="text-sm opacity-70">Bulk logistics for dealers and high-volume regional movements.</p>
          </div>

          {/* Method 3 */}
          <div className="space-y-4 group">
             <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400 group-hover:border-brand-gold border-2 border-transparent transition-all">
               [Flatbed Photo]
             </div>
             <div className="flex items-center gap-2 text-brand-gold">
               <CheckCircle size={20} /> {/* Clears CheckCircle warning */}
               <h3 className="font-bold text-xl text-black uppercase">Specialized Flatbed</h3>
             </div>
             <p className="text-sm opacity-70">Premium zero-mileage transport for luxury and non-running vehicles.</p>
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="mt-16 p-8 bg-black text-white rounded-3xl border-b-4 border-brand-gold flex flex-col md:flex-row items-center gap-8">
           <Shield size={60} className="text-brand-gold" />
           <div>
             <div className="flex items-center gap-2 mb-2">
               <CheckCircle size={18} className="text-brand-gold" />
               <h4 className="text-2xl font-black italic uppercase">Certified Compliance</h4>
             </div>
             <p className="opacity-70 text-sm max-w-xl">
               LN MABASO operates under strict South African Road Safety standards. Our 100% GIT Insurance coverage ensures your assets are protected from pickup to drop-off.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;