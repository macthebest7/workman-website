import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fan, Wind, CheckCircle2, Factory, Settings, 
  ShieldCheck, AlertTriangle, ArrowRight, Gauge, 
  MoveRight 
} from 'lucide-react';

const Ventilation = () => (
  <div className="animate-in fade-in duration-700 bg-white">

    {/* 1. PAGE HEADER */}
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-1 bg-blue-800"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-800">Air Movement Division</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tighter uppercase leading-none">
          Industrial Ventilation <br/> <span className="text-blue-700">& Exhaust Systems</span>
        </h1>
        <p className="text-slate-500 mt-6 max-w-2xl text-sm font-bold uppercase tracking-widest leading-relaxed">
          Engineered solutions for airflow control, smoke management, and environmental safety since 2016.
        </p>
      </div>
    </section>

    {/* 2. INTRO WITH NEW IMAGE */}
    <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-3xl font-black uppercase mb-6 tracking-tight text-slate-900 border-b pb-4">
          Integrated Airflow Engineering
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
          Worksman Services designs and installs high-capacity ventilation systems for the most demanding industrial environments in Pakistan.
        </p>

        <p className="text-slate-600 leading-relaxed mb-10 text-sm font-medium">
          From massive textile factories to commercial basement parking, our systems ensure precise air change rates, 
          dust extraction, and temperature regulation to maintain operational efficiency and human safety.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Industrial Exhaust Systems",
            "Fresh Air Handling Units",
            "Smoke Extraction Networks",
            "Kitchen Ecology Units",
            "GI & PI Duct Fabrication",
            "Staircase Pressurization",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 border border-slate-100 bg-slate-50"
            >
              <Fan className="text-blue-800 shrink-0" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NEW UPDATED IMAGE */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 border-t-8 border-l-8 border-slate-100 hidden md:block"></div>
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
          className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-b-8 border-blue-900"
          alt="Industrial Ventilation Ductwork"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000"; }}
        />
        <div className="absolute bottom-6 right-6 bg-blue-900 text-white p-6 max-w-[220px] shadow-xl">
           <Gauge size={32} className="mb-2 text-blue-300" />
           <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Precision CFM calculations and pressure testing included.</p>
        </div>
      </div>
    </section>

    {/* 3. TECHNICAL BENEFITS */}
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black uppercase mb-12 tracking-widest text-center">Safety & Quality Standards</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { t: "Air Quality", i: Wind, d: "Removes harmful gases, dust, and fumes from workspaces." },
            { t: "Compliance", i: ShieldCheck, d: "Meets international ASHRAE and OSHA safety guidelines." },
            { t: "Efficiency", i: Settings, d: "Energy-saving VFD driven fans and optimized duct routes." },
            { t: "Risk Control", i: AlertTriangle, d: "Essential smoke management for high-risk facilities." }
          ].map((item, idx) => (
            <div key={idx} className="text-center md:text-left border-l border-slate-700 pl-6">
              <item.i className="text-blue-500 mb-4" size={28} />
              <h4 className="font-black uppercase text-sm mb-2">{item.t}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. SECTORS SERVED */}
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-black uppercase mb-16 tracking-tighter text-[#0f172a] text-center">Sectors Supported</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          "Factories", "Warehouses", "Hospitals", "Malls", "Laboratories", "Kitchens"
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-8 border border-slate-200 bg-white hover:border-blue-700 transition-colors group">
            <Factory className="text-slate-300 group-hover:text-blue-800 transition-colors mb-3" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* 5. CALL TO ACTION */}
    <section className="bg-slate-50 border-t border-slate-200 py-24 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter text-[#0f172a]">
          Require a Professional Ventilation Audit?
        </h2>
        <p className="text-slate-500 uppercase font-bold text-xs tracking-widest mb-10 leading-loose">
          Contact our Lahore headquarters on Ferozpur Road for a technical site survey and ductwork design.
        </p>
        <Link 
          to="/contact" 
          className="bg-[#0f172a] text-white px-12 py-5 uppercase text-xs font-black tracking-[0.3em] hover:bg-blue-800 transition-all flex items-center justify-center gap-3 w-fit mx-auto shadow-xl"
        >
          Request Technical Quote <MoveRight size={18} />
        </Link>
      </div>
    </section>

  </div>
);

export default Ventilation;