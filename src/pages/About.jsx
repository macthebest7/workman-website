import React from 'react';
import { 
  Users, ShieldCheck, HardHat, Target, Award, Zap, 
  History, Building2, Briefcase, CheckCircle2 
} from 'lucide-react';

const About = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* 1. INDUSTRIAL HEADER */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-800 mb-2">Corporate Profile</div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tighter">
            Engineering Excellence Since 2016
          </h1>
          <div className="w-20 h-2 bg-[#1e3a8a] mt-4"></div>
        </div>
      </section>

      {/* 2. OUR STORY (Simple English) */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center border-b border-slate-100">
        <div>
          <h2 className="text-2xl font-black uppercase text-[#0f172a] mb-6">About Worksman Services</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Worksman Services is a trusted engineering company based in Lahore. Since 2016, we have helped businesses with their heating, cooling, and fire safety systems.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            We provide a complete service. This means we help you from the very start with the <strong>design and planning</strong>, through to the <strong>installation</strong>, and finally the <strong>long-term maintenance</strong>. Whether you have a factory, an office building, or a large house, we make sure your machines work perfectly.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
            <div>
              <div className="text-3xl font-black text-[#1e3a8a]">10+</div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Years of Work</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#1e3a8a]">1000+</div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#1e3a8a]">24/7</div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Support</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-800 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            className="grayscale w-full shadow-2xl border border-slate-200" 
            alt="Workman Engineering Site" 
          />
          <div className="absolute bottom-6 right-6 bg-[#1e3a8a] text-white p-6 hidden lg:block">
            <History size={32} className="mb-2" />
            <p className="text-xs font-black uppercase tracking-widest">Established in Lahore</p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID (Heavy Industrial Look) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-black uppercase text-[#0f172a] mb-16 tracking-tighter">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 shadow-sm">
            {[
              { t: "Experienced Team", i: Users, d: "Our leaders and engineers have many years of knowledge in mechanical systems." },
              { t: "Certified Technicians", i: ShieldCheck, d: "Our workers are trained and have the right licenses to do the job safely." },
              { t: "Safety Focused", i: HardHat, d: "We follow strict safety rules at every site to protect people and equipment." },
              { t: "Tailored Solutions", i: Target, d: "We don't give the same plan to everyone. We design what is best for YOUR building." },
              { t: "Quality Assurance", i: Award, d: "We only use high-quality materials that meet international engineering standards." },
              { t: "Innovation Driven", i: Zap, d: "We use the latest technology to save you money on electricity and energy." }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-colors group">
                <item.i className="text-[#1e3a8a] mb-6 transition-transform group-hover:scale-110" size={32} />
                <h4 className="text-sm font-black uppercase tracking-widest text-[#0f172a] mb-3">{item.t}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed tracking-tight">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK STANDARDS (Trust Data) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" 
                className="grayscale w-full border-b-8 border-slate-900" 
                alt="HVAC Installation" 
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-3xl font-black uppercase text-[#0f172a] mb-6 tracking-tighter">Our Commitment to You</h3>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                We believe that a job is only finished when the customer is happy and the system is safe. Every project we handle in Lahore follows international codes like <strong>NFPA</strong> for fire safety and <strong>ASHRAE</strong> for cooling.
              </p>
              <div className="space-y-4">
                {[
                  "On-time project delivery",
                  "Honest and fair pricing",
                  "Clean and professional site management",
                  "Clear technical reports for every check"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#1e3a8a] shrink-0" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter">Ready to Start Your Project?</h2>
          <p className="text-slate-400 mb-10 uppercase text-xs font-bold tracking-[0.2em]">Contact our Lahore office today for a technical visit.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#1e3a8a] text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all">
              Talk to an Engineer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;