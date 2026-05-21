import React from 'react';
import { Fan, Wind, CheckCircle2, Factory, Settings, ShieldCheck, AlertTriangle } from 'lucide-react';

const Ventilation = () => (
  <div className="animate-in fade-in duration-700">

    {/* HEADER */}
    <section className="bg-slate-50 py-16 border-b border-slate-200 uppercase">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#0f172a] tracking-tighter">
          Industrial Ventilation Systems
        </h1>
        <div className="w-20 h-2 bg-[#1e3a8a] mt-4"></div>
        <p className="text-slate-600 mt-4 max-w-2xl normal-case">
          Reliable air movement, exhaust control, and indoor air quality solutions for industrial and commercial environments.
        </p>
      </div>
    </section>

    {/* INTRO */}
    <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-2xl font-black uppercase mb-6">
          Fresh Air & Exhaust Management Solutions
        </h2>

        <p className="text-slate-600 leading-relaxed mb-6 font-medium">
          Workman Services provides complete industrial ventilation systems designed for warehouses, factories,
          commercial kitchens, hospitals, and production facilities.
        </p>

        <p className="text-slate-600 leading-relaxed mb-8 font-medium">
          Our systems ensure proper air circulation, smoke extraction, dust control, and temperature regulation
          to maintain a safe and healthy working environment.
        </p>

        {/* SERVICES */}
        <h3 className="text-lg font-black uppercase mb-4">Our Ventilation Services</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Industrial Exhaust Systems",
            "Fresh Air Handling Units (AHU)",
            "Smoke Extraction Systems",
            "Kitchen Hood & Ecology Units",
            "GI Ductwork Fabrication",
            "Dust & Fume Extraction Systems",
            "Basement Ventilation Systems",
            "Pressurization Systems for Stairs",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 border border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-widest"
            >
              <Fan className="text-blue-800" size={16} />
              {item}
            </div>
          ))}
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80"
        className="grayscale border-b-8 border-blue-900"
        alt="Ventilation Systems"
      />
    </section>

    {/* BENEFITS */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-black uppercase mb-8">Why Ventilation is Important</h2>

      <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
        <div className="flex items-start gap-2">
          <Wind className="text-blue-700 mt-1" size={16} />
          Improves indoor air quality and airflow
        </div>
        <div className="flex items-start gap-2">
          <ShieldCheck className="text-green-700 mt-1" size={16} />
          Reduces health risks from poor air conditions
        </div>
        <div className="flex items-start gap-2">
          <Factory className="text-slate-700 mt-1" size={16} />
          Essential for industrial and factory safety
        </div>
        <div className="flex items-start gap-2">
          <AlertTriangle className="text-red-700 mt-1" size={16} />
          Removes smoke, dust, and harmful gases
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black uppercase mb-10">Work Process</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-700">
          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">1. Site Survey</h4>
            <p>Understanding airflow requirements and building layout.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">2. Design</h4>
            <p>Creating ventilation and ducting system design.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">3. Installation</h4>
            <p>On-site ducting, fan, and system installation.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">4. Testing</h4>
            <p>Airflow testing and system performance checks.</p>
          </div>
        </div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-black uppercase mb-6">Industries We Serve</h2>

      <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
        {[
          "Industrial Plants",
          "Warehouses",
          "Commercial Kitchens",
          "Hospitals",
          "Shopping Malls",
          "Basement Parking Areas"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-4 border border-slate-200">
            <Factory className="text-slate-700" size={16} />
            {item}
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-slate-900 text-white py-16 text-center px-6">
      <h2 className="text-2xl font-black uppercase mb-4">
        Need a Ventilation System?
      </h2>
      <p className="text-slate-300 mb-6">
        Contact Worksman Services for professional ventilation design and installation solutions.
      </p>
      <button className="bg-blue-600 px-6 py-3 uppercase text-xs font-bold tracking-widest">
        Request a Quote
      </button>
    </section>

  </div>
);

export default Ventilation;