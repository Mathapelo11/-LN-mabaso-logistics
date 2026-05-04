import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-black italic mb-6">WORK WITH <span className="text-brand-gold">US</span></h2>
          <p className="opacity-60 mb-10">Ready to move? Our dispatch team is standing by.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-brand-gold" />
              <p>Durban (HQ) | Johannesburg | Cape Town</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-brand-gold" />
              <p>+27 66 224 6679</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-brand-gold" />
              <p>Lwazilmabaso@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10">
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-brand-gold/30 p-3 outline-none focus:border-brand-gold transition-colors" />
          <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-gold/30 p-3 outline-none focus:border-brand-gold transition-colors" />
          <textarea placeholder="Tell us about your vehicle and route" rows={4} className="w-full bg-transparent border-b border-brand-gold/30 p-3 outline-none focus:border-brand-gold transition-colors"></textarea>
          <button className="w-full py-4 bg-brand-gold text-black font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;