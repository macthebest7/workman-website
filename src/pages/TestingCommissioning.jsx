import React from 'react';
import { Gauge, ClipboardCheck, Activity, ShieldCheck, CheckCircle2, Settings, Wrench, Building2, AlertTriangle } from 'lucide-react';

const TestingCommissioning = () => (
  <div className="animate-in fade-in duration-700">

    {/* HEADER */}
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
          Testing & Commissioning
        </h1>
        <div className="w-20 h-2 bg-blue-800 mt-4"></div>
        <p className="text-slate-600 mt-4 max-w-2xl">
          We verify, test, and certify all mechanical and fire systems to ensure they perform safely and efficiently.
        </p>
      </div>
    </section>

    {/* INTRO */}
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-black uppercase mb-4">System Performance Verification</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Workman Services provides complete testing and commissioning (T&C) services for HVAC, fire fighting, and mechanical systems.
          We make sure every system works exactly as designed before final handover.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Our process includes detailed inspection, performance testing, safety checks, and documentation to ensure full compliance with international standards.
        </p>
      </div>
    </section>

    {/* MAIN SECTION */}
    <section className="py-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="text-2xl font-black uppercase mb-6">
          What We Test
        </h2>

        <div className="space-y-4 mb-10">

          <div className="flex gap-4 p-5 bg-slate-900 text-white">
            <Gauge size={28} className="text-blue-400 shrink-0" />
            <div>
              <h4 className="font-black uppercase text-xs">Air Flow Testing</h4>
              <p className="text-[11px] opacity-70 uppercase mt-1">
                Measuring airflow distribution and balancing HVAC systems.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200">
            <ShieldCheck size={28} className="text-blue-800 shrink-0" />
            <div>
              <h4 className="font-black uppercase text-xs">Safety Shutdown Testing</h4>
              <p className="text-[11px] text-slate-500 uppercase mt-1">
                Testing fire alarms, dampers, and emergency shutdown systems.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200">
            <Activity size={28} className="text-green-700 shrink-0" />
            <div>
              <h4 className="font-black uppercase text-xs">System Performance Testing</h4>
              <p className="text-[11px] text-slate-500 uppercase mt-1">
                Checking efficiency, pressure levels, and operational stability.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200">
            <Settings size={28} className="text-slate-700 shrink-0" />
            <div>
              <h4 className="font-black uppercase text-xs">Equipment Calibration</h4>
              <p className="text-[11px] text-slate-500 uppercase mt-1">
                Ensuring sensors, gauges, and control systems are accurate.
              </p>
            </div>
          </div>

        </div>

        {/* BENEFITS */}
        <h3 className="text-lg font-black uppercase mb-4">Why Testing is Important</h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
          {[
            "Ensures system safety before operation",
            "Prevents future breakdowns",
            "Improves energy efficiency",
            "Confirms design accuracy",
            "Meets legal compliance standards",
            "Reduces maintenance cost"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="text-green-700 mt-1" size={16} />
              {item}
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80"
          alt="Testing and Commissioning"
          className="grayscale border border-slate-200 shadow-xl"
        />
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black uppercase mb-10">Commissioning Process</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-700">
          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">1. Inspection</h4>
            <p>Site review and system verification before testing.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">2. Testing</h4>
            <p>Functional and performance testing of all systems.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">3. Adjustment</h4>
            <p>Fine-tuning systems for optimal performance.</p>
          </div>

          <div className="p-6 bg-white border border-slate-200">
            <h4 className="font-bold uppercase mb-2">4. Handover</h4>
            <p>Final certification and project completion report.</p>
          </div>
        </div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-black uppercase mb-6">Industries We Serve</h2>

      <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
        {[
          "Commercial Buildings",
          "Industrial Plants",
          "Hospitals",
          "Warehouses",
          "Shopping Malls",
          "Residential Projects"
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
        Need Professional Testing Services?
      </h2>
      <p className="text-slate-300 mb-6">
        Contact Worksman Services for complete testing and commissioning of your systems.
      </p>
      <button className="bg-blue-600 px-6 py-3 uppercase text-xs font-bold tracking-widest">
        Request a Quote
      </button>
    </section>

  </div>
);

export default TestingCommissioning;