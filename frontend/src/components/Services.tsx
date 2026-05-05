import React from 'react';

// Define an interface for the service object to fix implicit 'any' errors
interface ServiceItem {
  title: string;
  desc: string;
  img: string;
}

const Services: React.FC = () => {
  const serviceList: ServiceItem[] = [
    { 
      title: "Dealer to Dealer Delivery", 
      desc: "We offer professional dealer to dealer delivery services with full technical oversight.",
      img: "/path-to-driver-image.jpg" 
    },
    { 
      title: "Dealer to Door delivery", 
      desc: "Petrol vehicle R5.60 x number of kilometers for seamless individual delivery.",
      img: "/path-to-car-image.jpg" 
    },
    { 
      title: "Dealer to Storage/ Storage to Dealer", 
      desc: "Prices vary for different dealers. Flexible logistical solutions for vehicle inventory.",
      img: "/path-to-storage-image.jpg" 
    },
    { 
      title: "Highly Trained Drivers", 
      desc: "All drivers are vetted, professionally trained, and dedicated to safety.",
      img: "/path-to-team-image.jpg" 
    },
    { 
      title: "Fleet Management Delivery", 
      desc: "Comprehensive delivery and management solutions for large corporate fleets.",
      img: "/path-to-fleet-image.jpg" 
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-yellow-600 text-sm font-bold tracking-[0.3em] uppercase mb-3">
            Premium Solutions
          </h2>
          <h3 className="text-5xl font-black uppercase mb-4 italic">
            Our Services
          </h3>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-400 italic text-lg">"Moving What Moves You"</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-900 border border-white/5 overflow-hidden transition-all duration-500 hover:border-yellow-600/50"
            >
              {/* Image Container */}
              <div className="h-64 bg-zinc-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* 
                  When you have your photos, replace the div below with:
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                */}
                <div className="w-full h-full flex items-center justify-center text-zinc-600 italic">
                  [Service Photo {index + 1}]
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 bg-yellow-600 text-black w-12 h-12 flex items-center justify-center font-bold text-xl shadow-xl">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors uppercase tracking-tight">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-widest cursor-pointer">
                  Learn More 
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Contact Prompt */}
        <div className="mt-20 text-center border-t border-white/5 pt-12">
          <p className="text-gray-500 mb-4">Looking for something else?</p>
          <button className="text-white border-b-2 border-yellow-600 pb-1 hover:text-yellow-600 transition-colors font-bold">
            Message LN Mabaso Logistics and Car Movers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;