import React, { useState } from 'react'; 
import { Calculator, MessageSquareShare, ArrowRight, ChevronDown, Info, ShieldCheck, MapPin, Truck } from 'lucide-react';

const Blueprint: React.FC = () => {
  const [kms, setKms] = useState<number>(0);
  const [vehicleType, setVehicleType] = useState<string>("");
  const [pickup, setPickup] = useState<string>("");
  const [dropoff, setDropoff] = useState<string>("");

  const sendWhatsApp = () => {
    const phoneNumber = "27662246679"; // Official LN MABASO contact
    const message = `Hello LN MABASO LOGISTICS, I require a quote for a ${vehicleType} move from ${pickup} to ${dropoff} (approx. ${kms}km). Please provide a formal written estimation.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-brand-gold pl-6">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase text-black leading-none mb-2">
            Estimation <span className="text-brand-gold">Analyst</span>
          </h1>
          <p className="text-gray-500 font-medium tracking-tight">Generate a logistics blueprint for your vehicle relocation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Input Panel */}
          <div className="bg-black p-8 rounded-sm shadow-2xl">
            <h2 className="flex items-center gap-3 text-white font-bold tracking-widest text-sm uppercase mb-10">
              <Calculator className="text-brand-gold" size={20} /> Input Specifications
            </h2>

            <div className="space-y-8">
              <div>
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <Truck size={14} /> Vehicle Type
                </label>
                <select 
                  className="w-full bg-transparent border-b border-gray-800 text-white py-3 outline-none focus:border-brand-gold transition-all"
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option className="text-black" value="">Select Vehicle Class</option>
                  <option className="text-black" value="Sedan/SUV">Sedan / SUV</option>
                  <option className="text-black" value="Luxury/Sports">Luxury / Sports Vehicle</option>
                  <option className="text-black" value="Commercial">Commercial / Light Truck</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-2 block">Pickup City</label>
                  <input type="text" placeholder="e.g. Durban" className="w-full bg-transparent border-b border-gray-800 text-white py-2 outline-none focus:border-brand-gold" onChange={(e) => setPickup(e.target.value)} />
                </div>
                <div>
                  <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-2 block">Drop-off City</label>
                  <input type="text" placeholder="e.g. JHB" className="w-full bg-transparent border-b border-gray-800 text-white py-2 outline-none focus:border-brand-gold" onChange={(e) => setDropoff(e.target.value)} />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-2 block">Estimated Kilometers</label>
                <input 
                  type="number" 
                  className="w-full bg-transparent border-b border-gray-800 text-white text-4xl font-black py-2 outline-none focus:border-brand-gold"
                  onChange={(e) => setKms(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="border-[10px] border-gray-50 p-10 flex flex-col justify-between h-full">
            <div className="space-y-10">
              <h3 className="text-black font-black text-xs tracking-[0.4em] uppercase border-b pb-4 flex items-center justify-between">
                Written Estimation <Info size={14} className="text-gray-300" />
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase text-xs">Route complexity</span>
                <span className="text-2xl font-black italic uppercase">{kms > 500 ? "High Impact" : "Standard"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase text-xs">Service Tier</span>
                <span className="text-2xl font-black italic uppercase text-brand-gold">Premium Logistics</span>
              </div>
            </div>

            <button onClick={sendWhatsApp} className="mt-12 flex items-center justify-between w-full p-6 bg-brand-gold hover:bg-black hover:text-white text-black transition-all">
              <span className="font-black uppercase text-sm flex items-center gap-3">
                <MessageSquareShare size={20} /> Request Formal Quote
              </span>
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Insights & FAQs Section */}
        <div className="grid md:grid-cols-2 gap-20 border-t pt-20">
          <div>
            <h3 className="text-2xl font-black italic uppercase mb-8">Logistics <span className="text-brand-gold">Insights</span></h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-sm">
                <h4 className="font-bold text-sm uppercase mb-2 flex items-center gap-2"><MapPin size={16} className="text-brand-gold" /> Strategic Reach</h4>
                <p className="text-gray-500 text-sm">Our primary hubs in Johannesburg, Durban, and Cape Town ensure seamless national coverage.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-sm">
                <h4 className="font-bold text-sm uppercase mb-2 flex items-center gap-2"><ShieldCheck size={16} className="text-brand-gold" /> Safety Standards</h4>
                <p className="text-gray-500 text-sm">Every relocation follows rigorous safety protocols to protect your high-value assets.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black italic uppercase mb-8">FAQ</h3>
            <div className="space-y-4">
              <details className="group border-b pb-4 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-sm uppercase">How long does relocation take? <ChevronDown size={16} /></summary>
                <p className="pt-4 text-gray-500 text-sm">National transit between major hubs typically ranges from 24 to 72 hours.</p>
              </details>
              <details className="group border-b pb-4 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-sm uppercase">Is insurance included? <ChevronDown size={16} /></summary>
                <p className="pt-4 text-gray-500 text-sm">All movements are covered by our standard Goods in Transit insurance.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blueprint;