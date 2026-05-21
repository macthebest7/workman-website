import React from 'react';
import { Briefcase, Settings, Layout, Ruler, Building2, CheckCircle2, ClipboardList, Wrench } from 'lucide-react';

const MechanicalServices = () => (
  <div className="animate-in fade-in duration-700">

    {/* HEADER */}
    <section className="bg-slate-900 py-20 text-white uppercase">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-black tracking-tighter">
          Mechanical Engineering Services
        </h1>
        <p className="text-blue-400 font-bold mt-2 tracking-widest">
          Design • Supply • Execution • Maintenance
        </p>
      </div>
    </section>

    {/* INTRO */}
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-black uppercase mb-4">Complete Mechanical Solutions</h2>
        <p className="text-slate-600 leading-relaxed">
          Workman Services provides complete mechanical engineering solutions for commercial and industrial projects.
          We handle everything from design and planning to installation, execution, and long-term maintenance.
        </p>
      </div>
    </section>

    {/* CORE SERVICES */}
    <section className="py-10 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">

        {[
          {
            t: "Mechanical Design",
            i: Layout,
            d: "Detailed AutoCAD design, load calculations, and system planning for MEP projects."
          },
          {
            t: "Material Supply",
            i: Settings,
            d: "High-quality industrial equipment sourcing, procurement, and delivery management."
          },
          {
            t: "Project Execution",
            i: Briefcase,
            d: "On-site installation, workforce management, and complete project execution."
          },
          {
            t: "System Installation",
            i: Wrench,
            d: "Installation of mechanical systems including HVAC, piping, and ducting networks."
          },
          {
            t: "Project Planning",
            i: ClipboardList,
            d: "Detailed scheduling, cost estimation, and resource planning for projects."
          },
          {
            t: "Engineering Supervision",
            i: Building2,
            d: "On-site supervision to ensure quality control and safety compliance."
          }

        ].map((s, i) => (
          <div key={i} className="p-8 border border-slate-200 hover:border-blue-800 transition-all bg-white">
            <s.i size={34} className="text-blue-800 mb-5" />
            <h4 className="text-lg font-black uppercase mb-3">{s.t}</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-tight leading-relaxed">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* WORK PROCESS */}
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black uppercase mb-10">Work Process</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-700">
          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">1. Planning</h4>
            <p>Understanding project requirements and site conditions.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">2. Design</h4>
            <p>Creating mechanical drawings and system layouts.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">3. Execution</h4>
            <p>On-site installation and mechanical system setup.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">4. Maintenance</h4>
            <p>Regular servicing and system performance checks.</p>
          </div>
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-black uppercase mb-8">Why Choose Us</h2>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
        {[
          "Experienced mechanical engineering team",
          "Complete end-to-end project handling",
          "High-quality material and equipment",
          "Strict safety and quality standards",
          "On-time project delivery",
          "Cost-effective engineering solutions",
          "Professional site supervision",
          "Long-term maintenance support"
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="text-green-700 mt-1" size={16} />
            {item}
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-slate-900 text-white py-16 text-center px-6">
      <h2 className="text-2xl font-black uppercase mb-4">
        Need Mechanical Engineering Support?
      </h2>
      <p className="text-slate-300 mb-6">
        Contact Workman Services for reliable mechanical design, supply, and execution services.
      </p>
      <button className="bg-blue-600 px-6 py-3 uppercase text-xs font-bold tracking-widest">
        Request a Quote
      </button>
    </section>

  </div>
);

export default MechanicalServices;