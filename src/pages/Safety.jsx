import React from 'react';
import { HardHat, ShieldCheck, Activity, BookOpen } from 'lucide-react';

const Safety = () => (
  <div className="animate-in fade-in duration-500 bg-white">
    <section className="bg-blue-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Safety First</h1>
        <p className="text-blue-200 font-bold uppercase tracking-[0.3em] text-sm italic">"Zero Accidents. Zero Compromise."</p>
      </div>
    </section>

    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-slate-900 text-white p-12">
          <HardHat size={48} className="text-blue-400 mb-6" />
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">HSE Policy</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-6">
            We operate under a strict Health, Safety, and Environment (HSE) management system. Every technician undergoes mandatory safety training before entering any project site.
          </p>
          <ul className="space-y-4 text-[10px] font-bold tracking-[0.1em] uppercase">
            <li className="flex gap-2"><span>[01]</span> Mandatory PPE at all sites</li>
            <li className="flex gap-2"><span>[02]</span> Weekly Toolbox Safety Meetings</li>
            <li className="flex gap-2"><span>[03]</span> Incident Reporting Transparency</li>
          </ul>
        </div>
        <div className="border-4 border-slate-100 p-12 flex flex-col justify-center">
          <ShieldCheck size={48} className="text-blue-800 mb-6" />
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter text-slate-900">Certifications</h3>
          <p className="text-sm text-slate-600 mb-6 italic">Our mechanical works are fully bonded, insured, and certified by international quality boards.</p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-slate-100 px-4 py-2 text-[10px] font-bold border border-slate-200 uppercase">ISO 45001:2018</span>
            <span className="bg-slate-100 px-4 py-2 text-[10px] font-bold border border-slate-200 uppercase">NFPA Member</span>
            <span className="bg-slate-100 px-4 py-2 text-[10px] font-bold border border-slate-200 uppercase">OSHA Certified</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Safety;