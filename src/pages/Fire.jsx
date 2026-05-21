import React from "react";
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
} from "lucide-react";

const FireFighting = () => (
  <div className="animate-in fade-in duration-500">

    {/* HEADER */}
    <div className="bg-slate-100 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
          Fire Protection Systems
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl">
          We design, install, test, and maintain complete fire safety systems that protect lives, property, and industrial assets.
        </p>
      </div>
    </div>

    {/* MAIN */}
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row-reverse gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-2/3">

          <img
            src="https://images.unsplash.com/photo-1599708147812-e89f2ca2531b?auto=format&fit=crop&q=80"
            className="w-full h-80 object-cover grayscale mb-10 border-b-8 border-red-800"
            alt="Fire Fighting Systems"
          />

          <h2 className="text-2xl font-bold uppercase mb-6">
            Complete Fire Safety Engineering Solutions
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Workman Services provides full fire protection engineering solutions for commercial, industrial, and residential projects.
            Our systems are designed to detect fire early, control it quickly, and reduce damage and risk.
          </p>

          <p className="text-slate-700 mb-8 leading-relaxed">
            We follow NFPA standards and local civil defense requirements. Every project is handled by experienced engineers and trained technicians.
          </p>

          {/* SERVICES */}
          <h3 className="text-lg font-bold uppercase mb-4">Our Fire Protection Services</h3>

          <ul className="space-y-4 mb-10">
            {[
              "Automatic Sprinkler System Design & Installation",
              "Fire Alarm & Smoke Detection Systems",
              "Fire Hydrant & Hose Reel Systems",
              "FM-200 & Clean Agent Suppression Systems",
              "Fire Pump Room Installation",
              "Water Spray & Deluge Systems",
              "Emergency Exit & Exit Signage Systems",
              "Fire System Testing & Commissioning",
              "Annual Maintenance Contracts (AMC)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                <ShieldAlert size={18} className="text-red-700 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* WORK PROCESS */}
          <h3 className="text-lg font-bold uppercase mb-4">Work Process</h3>

          <div className="space-y-2 text-sm text-slate-700 mb-10">
            <p>1. Site inspection and fire risk assessment</p>
            <p>2. System design as per NFPA and safety codes</p>
            <p>3. Approval from authorities (if required)</p>
            <p>4. Equipment supply and installation</p>
            <p>5. Pressure testing and system checks</p>
            <p>6. Final commissioning and handover</p>
            <p>7. Maintenance and emergency support</p>
          </div>

          {/* BENEFITS */}
          <h3 className="text-lg font-bold uppercase mb-4">
            Why Fire Protection is Important
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 mb-10">
            <div className="flex gap-2 items-start">
              <AlertTriangle className="text-red-700 mt-1" size={16} />
              Protects human life from fire hazards
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle2 className="text-green-700 mt-1" size={16} />
              Reduces property and equipment damage
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle2 className="text-green-700 mt-1" size={16} />
              Helps meet legal safety requirements
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle2 className="text-green-700 mt-1" size={16} />
              Improves emergency response time
            </div>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="lg:w-1/3 space-y-6">

          <div className="bg-red-50 border-2 border-red-100 p-6">
            <Award size={36} className="text-red-800 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">Certified Engineering Team</h4>
            <p className="text-xs text-slate-600">
              Our engineers follow NFPA standards and local fire safety regulations for all projects.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Flame className="text-red-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">Fast Fire Response</h4>
            <p className="text-xs text-slate-600">
              Systems activate automatically within seconds to control fire spread.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Droplets className="text-blue-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">Water & Gas Systems</h4>
            <p className="text-xs text-slate-600">
              We provide both water-based and gas-based suppression systems.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Building2 className="text-slate-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">All Building Types</h4>
            <p className="text-xs text-slate-600">
              Industrial, commercial, residential, hospitals, and warehouses.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Wrench className="text-slate-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">Maintenance Support</h4>
            <p className="text-xs text-slate-600">
              Regular inspection and maintenance to ensure system reliability.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* EXTRA INFO */}
    <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

      <div className="bg-slate-50 border border-slate-200 p-6">
        <Settings className="text-slate-700 mb-3" />
        <h4 className="font-bold uppercase text-sm mb-2">Engineering Standards</h4>
        <p className="text-xs text-slate-600">
          Designed according to NFPA codes and international fire safety standards.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-6">
        <Factory className="text-slate-700 mb-3" />
        <h4 className="font-bold uppercase text-sm mb-2">Industries We Serve</h4>
        <p className="text-xs text-slate-600">
          Factories, warehouses, malls, offices, hospitals, and residential buildings.
        </p>
      </div>

      <div className="bg-red-50 border border-red-100 p-6">
        <BellRing className="text-red-700 mb-3" />
        <h4 className="font-bold uppercase text-sm mb-2">24/7 Emergency Support</h4>
        <p className="text-xs text-slate-600">
          Emergency response and technical support available anytime.
        </p>
      </div>

    </section>

    {/* CTA */}
    <section className="bg-slate-900 text-white py-16 text-center px-6">
      <h2 className="text-2xl font-black uppercase mb-4">
        Need a Fire Safety System?
      </h2>
      <p className="text-slate-300 mb-6">
        Contact Workman Services for professional fire protection system design and installation.
      </p>
      <button className="bg-red-600 px-6 py-3 uppercase text-xs font-bold tracking-widest">
        Get a Quote
      </button>
    </section>

  </div>
);

export default FireFighting;