import React from 'react';
import { ShieldCheck, Zap, Droplets, Wind, CheckCircle2, Thermometer, Factory, Settings, Wrench, Building2, AlertTriangle, Award } from 'lucide-react';

const Insulation = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">

      {/* HEADER */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-800 mb-2">Mechanical Division</div>
          <h1 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
            Thermal & Acoustic Insulation
          </h1>
          <div className="w-20 h-2 bg-[#1e3a8a] mt-4"></div>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Energy efficient insulation solutions for HVAC, piping, ducts, and industrial systems across commercial and industrial facilities.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl font-black uppercase text-[#1e3a8a] mb-6 tracking-tight">
            Industrial Insulation Engineering Solutions
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Workman Services delivers complete thermal and acoustic insulation solutions designed to improve energy efficiency,
            reduce operational cost, and enhance system performance for industrial and commercial projects.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            We specialize in hot and cold insulation systems using globally approved materials such as rockwool, fiberglass,
            nitrile rubber, and aluminum/GI cladding, following ASTM, BS, and SMACNA standards.
          </p>

          {/* KEY FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Energy Efficiency", i: Zap, d: "Reduces heat loss and improves system performance." },
              { t: "Condensation Control", i: Droplets, d: "Prevents moisture buildup and corrosion." },
              { t: "Noise Reduction", i: Wind, d: "Minimizes vibration and mechanical sound." },
              { t: "Fire Safety", i: ShieldCheck, d: "Fire-rated insulation materials for protection." }
            ].map((feature, idx) => (
              <div key={idx} className="p-4 border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-2">
                  <feature.i className="text-blue-800" size={20} />
                  <h4 className="text-[11px] font-black uppercase tracking-widest">{feature.t}</h4>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">
                  {feature.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -top-4 -right-4 w-32 h-32 border-t-8 border-r-8 border-blue-800 hidden md:block"></div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
            className="w-full grayscale shadow-2xl border-b-8 border-[#1e3a8a]"
            alt="Mechanical Insulation Site"
          />
          <div className="absolute bottom-6 left-6 bg-white p-6 border border-slate-200 shadow-xl max-w-xs">
            <Thermometer className="text-blue-800 mb-2" size={32} />
            <p className="text-[10px] font-black uppercase leading-tight">
              Designed for extreme industrial temperature conditions
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black uppercase mb-8">Applications</h2>

        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
          {[
            "HVAC Duct Insulation",
            "Chilled Water Piping",
            "Steam & Hot Water Lines",
            "Cold Storage Systems",
            "Industrial Equipment",
            "Boilers & Heat Exchangers"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-4 border border-slate-200">
              <Factory className="text-slate-700" size={16} />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL TABLE */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-16 text-center">
            Technical Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border border-slate-700">
            {[
              {
                category: "Pipe Insulation",
                items: ["Chilled Water Lines", "Steam Piping", "Armaflex Closed Cell", "GI / Aluminum Cladding"]
              },
              {
                category: "Duct Insulation",
                items: ["Rockwool Slabs", "Fiberglass Wrap", "Thermal Acoustic Liners", "Vapor Barrier Systems"]
              },
              {
                category: "Acoustic Systems",
                items: ["Sound Barriers", "Vibration Isolation", "Plant Room Treatment", "Noise Reduction Panels"]
              }
            ].map((col, i) => (
              <div key={i} className="p-10 border border-slate-700 hover:bg-slate-800 transition-colors">
                <h4 className="text-blue-400 font-black uppercase text-xs tracking-[0.2em] mb-6">
                  {col.category}
                </h4>
                <ul className="space-y-4">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                      <CheckCircle2 size={14} className="text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase mb-10">Work Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-700">
            {[
              { t: "Survey", d: "Site inspection and insulation assessment." },
              { t: "Design", d: "Material selection and system design." },
              { t: "Installation", d: "On-site insulation application." },
              { t: "Testing", d: "Thermal performance verification." }
            ].map((step, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200">
                <h4 className="font-bold uppercase mb-2">{i + 1}. {step.t}</h4>
                <p>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black uppercase mb-6">Industries We Serve</h2>

        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
          {[
            "Industrial Plants",
            "Power Stations",
            "Warehouses",
            "Hospitals",
            "Commercial Buildings",
            "Cold Storage Facilities"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-4 border border-slate-200">
              <Building2 className="text-slate-700" size={16} />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16 text-center px-6">
        <h2 className="text-2xl font-black uppercase mb-4">
          Need Professional Insulation Services?
        </h2>
        <p className="text-slate-300 mb-6">
          Contact Workman Services for thermal and acoustic insulation solutions.
        </p>
        <button className="bg-blue-600 px-6 py-3 uppercase text-xs font-bold tracking-widest">
          Request a Quote
        </button>
      </section>

    </div>
  );
};

export default Insulation;