import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white text-black px-4">
      <div className="max-w-4xl mx-auto border-t-8 border-black pt-8">
        <h1 className="text-4xl font-bold mb-2">LN <span className="text-yellow-600">MABASO</span></h1>
        <p className="text-lg font-semibold tracking-widest uppercase mb-4">Logistics & Car Movers[cite: 1]</p>
        <p className="italic text-gray-600 mb-8">"Moving What Moves You"[cite: 1]</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border-l-4 border-yellow-600">
            <h2 className="text-xl font-bold mb-4 uppercase">Company Overview</h2>
            <p>Established in 2022, we specialize in vehicle movement across South Africa, including Durban, Johannesburg, and Cape Town.[cite: 1]</p>
          </div>
          
          <div className="bg-gray-50 p-6 border-l-4 border-yellow-600">
            <h2 className="text-xl font-bold mb-4 uppercase">Key Pricing</h2>
            <p>Standard delivery for petrol vehicles starts at <span className="font-bold text-yellow-700">R5.60/km</span>.[cite: 1]</p>
          </div>
        </div>

        <div className="text-sm text-gray-500 flex justify-between border-t pt-4">
          <div>
            <p><strong>Head Office:</strong> 9 Flamingo Grove, Durban[cite: 1]</p>
            <p><strong>Joburg:</strong> 8 Hillside Rd, Parktown[cite: 1]</p>
          </div>
          <div className="text-right">
            <p><strong>Contact:</strong> +27 66 224 6679[cite: 1]</p>
            <p><strong>IG:</strong> LN_Mabaso_[cite: 1]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;