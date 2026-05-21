import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Flame,
  Award,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  BellRing,
  Settings,
  Factory,
  Wrench,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const Fire = () => (
  <div className="animate-in fade-in duration-700 bg-white">

    {/* 1. BREADCRUMBS */}
    <div className="bg-slate-100 py-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        <Link to="/" className="hover:text-blue-800">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Fire Protection Systems</span>
      </div>
    </div>

    {/* 2. HEADER */}
    <div className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-red-700 mb-4 flex items-center justify-center lg:justify-start gap-2">
            <ShieldCheck size={14} /> Life Safety Division
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tighter leading-none mb-6">
          Fire Protection <span className="text-red-700">&</span> Life Safety
        </h1>
        <div className="w-24 h-2 bg-red-700 mt-4 mx-auto lg:mx-0"></div>
      </div>
    </div>

    {/* 3. MAIN CONTENT */}
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row-reverse gap-16">

        {/* RIGHT SIDE: TEXT & SPECS */}
        <div className="lg:w-2/3">
          {/* Main Hero Image for Service */}
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1583845347201-f2f67977a417?auto=format&fit=crop&q=80"
              className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border-b-8 border-red-800 shadow-2xl"
              alt="Industrial Fire Sprinkler System"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=2000"; }}
            />
            <div className="absolute top-6 left-6 bg-red-700 text-white px-4 py-2 font-black text-[10px] uppercase tracking-widest">
                NFPA Compliant
            </div>
          </div>

          <h2 className="text-2xl font-black uppercase mb-6 tracking-tight text-slate-900 border-b pb-4">
            Industrial Fire Safety Engineering
          </h2>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
            Worksman Services provides full fire protection engineering solutions for commercial, industrial, and residential projects. 
            We design systems to detect fire early, control it quickly, and protect your assets.
          </p>

          <p className="text-slate-600 mb-10 leading-relaxed uppercase text-xs font-bold tracking-widest">
            Since 2016, we have followed strict NFPA standards and local Civil Defense requirements. Every project is handled by certified engineers and technicians on Ferozpur Road, Lahore.
          </p>

          {/* GRID OF SERVICES */}
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {[
              "Automatic Sprinkler Design",
              "Fire Alarm & Smoke Detection",
              "Fire Hydrant & Hose Reels",
              "FM-200 Gas Suppression",
              "Fire Pump Room Setup",
              "Water Spray & Deluge Systems",
              "Emergency Exit Signage",
              "Testing & Commissioning"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 border border-slate-200">
                <ShieldAlert size={20} className="text-red-700 shrink-0" />
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          {/* WORK PROCESS SECTION */}
          <div className="bg-slate-900 p-10 text-white mb-16">
             <h3 className="text-xl font-black uppercase mb-8 border-b border-slate-700 pb-4 tracking-tighter">Execution Workflow</h3>
             <div className="space-y-6">
                {[
                    { n: "01", t: "Risk Assessment", d: "Site inspection and fire load calculation." },
                    { n: "02", t: "System Design", d: "Engineering schematics as per NFPA codes." },
                    { n: "03", t: "Installation", d: "Professional supply and site execution." },
                    { n: "04", t: "Commissioning", d: "Final pressure testing and handover." }
                ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start">
                        <span className="text-red-500 font-black text-xl font-mono">{step.n}</span>
                        <div>
                            <h4 className="font-black uppercase text-xs tracking-widest mb-1">{step.t}</h4>
                            <p className="text-[10px] uppercase font-bold text-slate-400">{step.d}</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        </div>

        {/* LEFT SIDEBAR */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-red-50 border-2 border-red-100 p-8 shadow-sm">
            <Award size={40} className="text-red-800 mb-4" />
            <h4 className="font-black uppercase text-sm mb-2 tracking-widest">Certified Team</h4>
            <p className="text-[10px] text-slate-600 font-bold uppercase leading-relaxed">
              Our engineers are members of the National Fire Protection Association (NFPA).
            </p>
          </div>

          <div className="border border-slate-200 p-8 bg-white">
            <h4 className="font-black uppercase text-xs mb-6 border-b pb-4 tracking-widest">Technical Data</h4>
            <div className="space-y-6">
                <div className="flex gap-4">
                    <Droplets className="text-blue-700 shrink-0" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-700">Water-Based Suppression (Wet & Dry)</p>
                </div>
                <div className="flex gap-4">
                    <Flame className="text-red-700 shrink-0" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-700">Clean Agent Gas (FM-200 / CO2)</p>
                </div>
                <div className="flex gap-4">
                    <Wrench className="text-slate-500 shrink-0" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-700">24/7 AMC Maintenance Support</p>
                </div>
            </div>
          </div>

          <div className="bg-[#0f172a] p-8 text-white">
             <h4 className="font-black uppercase text-xs mb-4 tracking-widest">Request a Technical Visit</h4>
             <p className="text-[10px] font-bold text-slate-400 mb-6 uppercase">Our team will visit your factory or building for a fire safety audit.</p>
             <Link to="/contact" className="flex items-center justify-between bg-red-700 p-4 font-black uppercase text-[10px] tracking-widest hover:bg-red-800 transition-colors">
                Book Audit <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CALL TO ACTION */}
    <section className="bg-slate-50 border-t border-slate-200 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-tighter mb-4">
                Life Safety is Our Priority
            </h2>
            <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] mb-10 italic">"Engineering reliable protection since 2016"</p>
            <Link to="/contact" className="bg-[#0f172a] text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl">
                Get a Quote
            </Link>
        </div>
    </section>
  </div>
);

export default Fire;