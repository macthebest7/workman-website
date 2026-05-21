import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, Settings, Layout, Ruler, Building2, 
  CheckCircle2, ClipboardList, Wrench, ArrowRight, ShieldCheck 
} from 'lucide-react';

const MechanicalServices = () => (
  <div className="animate-in fade-in duration-700 bg-white">

    {/* 1. HEADER / HERO */}
    <section className="bg-slate-900 py-20 text-white uppercase border-b-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-blue-500"></div>
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-400">Engineering Division</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
          Mechanical Engineering Services
        </h1>
        <p className="text-slate-400 font-bold mt-4 tracking-widest text-sm">
          Design • Supply • Execution • Maintenance
        </p>
      </div>
    </section>

    {/* 2. INTRO WITH IMAGE */}
    <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl font-black uppercase mb-6 tracking-tight text-slate-900">
            Complete Mechanical <span className="text-blue-700">Turnkey</span> Solutions
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
          Worksman Services provides comprehensive mechanical engineering solutions for large-scale commercial and industrial projects in Pakistan.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8 uppercase text-xs font-bold tracking-widest">
          Since 2016, we have handled everything from initial AutoCAD design and planning to professional installation and long-term asset maintenance. Our focus is on technical durability and efficiency.
        </p>
        <div className="flex gap-4">
            <div className="flex flex-col border-l-4 border-blue-700 pl-4">
                <span className="text-2xl font-black text-slate-900 uppercase">PEC</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Licensed Engineers</span>
            </div>
            <div className="flex flex-col border-l-4 border-blue-700 pl-4">
                <span className="text-2xl font-black text-slate-900 uppercase">100%</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Code Compliant</span>
            </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-4 -right-4 w-32 h-32 border-t-8 border-r-8 border-slate-100 hidden md:block"></div>
        <img 
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80" 
          alt="Industrial Mechanical Components" 
          className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-slate-200"
        />
        <div className="absolute bottom-6 left-6 bg-blue-800 text-white p-6 max-w-[200px]">
            <Settings size={32} className="mb-2" />
            <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Precision Machining & System Assembly</p>
        </div>
      </div>
    </section>

    {/* 3. CORE SERVICES GRID */}
    <section className="py-24 bg-slate-50 border-y border-slate-200 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-black uppercase mb-12 tracking-widest text-center border-b pb-6 border-slate-200">Engineering Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[
            { t: "Mechanical Design", i: Layout, d: "Detailed AutoCAD design, load calculations, and system planning for MEP projects." },
            { t: "Material Supply", i: Settings, d: "High-quality industrial equipment sourcing, procurement, and delivery management." },
            { t: "Project Execution", i: Briefcase, d: "On-site installation, workforce management, and complete project execution." },
            { t: "System Installation", i: Wrench, d: "Installation of mechanical systems including HVAC, piping, and ducting networks." },
            { t: "Project Planning", i: ClipboardList, d: "Detailed scheduling, cost estimation, and resource planning for projects." },
            { t: "Engineering Supervision", i: Building2, d: "On-site supervision to ensure quality control and safety compliance." }
            ].map((s, i) => (
            <div key={i} className="p-8 border border-slate-200 hover:border-blue-800 transition-all bg-white group">
                <s.i size={34} className="text-blue-800 mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-black uppercase mb-3 tracking-tighter">{s.t}</h4>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-tight leading-relaxed">
                {s.d}
                </p>
            </div>
            ))}
        </div>
      </div>
    </section>

    {/* 4. WORK PROCESS */}
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-black uppercase mb-16 tracking-tighter text-center">Technical Workflow</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-slate-200">
        {[
          { n: "01", t: "Planning", d: "Defining project requirements." },
          { n: "02", t: "Design", d: "Technical blueprints & schematics." },
          { n: "03", t: "Execution", d: "On-site setup & installation." },
          { n: "04", t: "Maintenance", d: "Post-project performance checks." }
        ].map((step, i) => (
          <div key={i} className="p-10 border-r last:border-r-0 border-slate-200 hover:bg-slate-50 transition-colors">
            <span className="text-3xl font-black text-blue-100 mb-4 block group-hover:text-blue-200 transition-colors">{step.n}</span>
            <h4 className="font-black uppercase text-sm mb-2 tracking-widest">{step.t}</h4>
            <p className="text-[10px] text-slate-500 uppercase font-bold leading-relaxed">{step.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 5. WHY CHOOSE US */}
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black uppercase mb-16 tracking-tighter border-l-8 border-blue-700 pl-8">Why Worksman Mechanical?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Experienced engineering team",
            "End-to-end project handling",
            "High-quality material supply",
            "Strict safety compliance",
            "On-time project delivery",
            "Cost-effective solutions",
            "Professional supervision",
            "Long-term support"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. CTA */}
    <section className="bg-white py-24 text-center px-6">
      <div className="max-w-3xl mx-auto border-4 border-slate-100 p-16 shadow-sm">
        <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter text-[#0f172a]">
          Ready for Mechanical Support?
        </h2>
        <p className="text-slate-500 uppercase font-bold text-xs tracking-widest mb-10">
          Contact our Lahore office for professional design, supply, and execution services.
        </p>
        <Link 
          to="/contact" 
          className="bg-blue-800 text-white px-10 py-5 uppercase text-xs font-black tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl"
        >
          Request Technical Audit
        </Link>
      </div>
    </section>

  </div>
);

export default MechanicalServices;