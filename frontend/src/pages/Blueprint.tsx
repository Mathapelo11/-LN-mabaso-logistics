import React from 'react';

const BlueprintForm: React.FC = () => {
  return (
    <div className="bg-[#050505] border border-[#333333] p-12">
      <div className="border-l-4 border-[#C5A059] pl-6 mb-16">
        <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">
          THE LOGISTICS <span className="text-[#C5A059]">BLUEPRINT</span>
        </h2>
        <p className="text-gray-500 uppercase text-[10px] tracking-[0.3em] mt-2">
          Advanced route analysis for premium vehicle relocation
        </p>
      </div>

      <form className="space-y-16">
        {/* Section 1: Client Data */}
        <div>
          <h3 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-4">
            <span className="opacity-50">01</span> Delivery Contact Information
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <input type="text" placeholder="NAME" className="blueprint-input" />
            <input type="text" placeholder="SURNAME" className="blueprint-input" />
            <input type="text" placeholder="CONTACT NUMBER" className="blueprint-input" />
            <input type="email" placeholder="EMAIL ADDRESS" className="blueprint-input md:col-span-3" />
          </div>
        </div>

        {/* Section 2: Logistics Route */}
        <div>
          <h3 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-4">
            <span className="opacity-50">02</span> Delivery Address
          </h3>
          <div className="space-y-10">
            <input type="text" placeholder="PICK UP ADDRESS" className="blueprint-input" />
            <input type="text" placeholder="DROP OFF ADDRESS" className="blueprint-input" />
          </div>
        </div>

        {/* Section 3: Vehicle Specs */}
        <div>
          <h3 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-4">
            <span className="opacity-50">03</span> Vehicle Information
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <input type="text" placeholder="VEHICLE MAKE" className="blueprint-input" />
            <input type="text" placeholder="VEHICLE MODEL" className="blueprint-input" />
            <select className="blueprint-input appearance-none">
              <option className="bg-black">NEW / USED VEHICLE</option>
              <option className="bg-black">NEW</option>
              <option className="bg-black">USED</option>
            </select>
            <input type="text" placeholder="REGISTRATION NUMBER" className="blueprint-input md:col-span-3" />
          </div>
        </div>

        {/* Action Button - Image_f62d36 style */}
        <div className="pt-10">
          <button className="w-full bg-[#C5A059] text-black font-black uppercase py-5 tracking-[0.2em] hover:bg-white transition-all flex justify-center items-center gap-4">
            Request Formal Premium Quote <span>→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlueprintForm;