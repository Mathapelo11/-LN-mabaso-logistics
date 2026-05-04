import React from 'react';
import { Truck, Shield, Map } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { title: "Vehicle Relocation", icon: <Truck />, desc: "Safe transport for private and commercial vehicles." },
    { title: "Fleet Management", icon: <Shield />, desc: "End-to-end logistics infrastructure for manufacturers." },
    { title: "National Reach", icon: <Map />, desc: "Active hubs in Johannesburg, Durban, and Cape Town." }
  ];

  return (
    <section className="bg-brand-black py-24 px-10 border-t border-brand-gray">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
        {services.map((s, i) => (
          <div key={i} className="p-12 border border-brand-gray hover:bg-brand-gray transition-colors group">
            <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h3 className="text-white font-black uppercase italic text-2xl mb-4 leading-none">{s.title}</h3>
            <p className="text-gray-500 text-sm font-medium">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Services;