import React from 'react';
import { Thermometer, Zap, CheckCircle2, Snowflake, Wind, Settings, Building2, ShieldCheck } from 'lucide-react';

const AirConditioning = () => (
  <div className="animate-in fade-in duration-700">

    {/* HEADER */}
    <section className="bg-slate-50 py-16 border-b border-slate-200 uppercase">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#0f172a] tracking-tighter">
          Commercial Air Conditioning
        </h1>
        <div className="w-20 h-2 bg-blue-600 mt-4"></div>
        <p className="text-slate-600 mt-4 max-w-2xl normal-case">
          Efficient and reliable air conditioning solutions for commercial and industrial environments.
        </p>
      </div>
    </section>

    {/* MAIN CONTENT */}
    <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80"
        className="grayscale border-b-8 border-blue-600"
        alt="AC Unit"
      />

      {/* CONTENT */}
      <div>

        <h2 className="text-2xl font-black uppercase mb-6">
          Precision Cooling Solutions
        </h2>

        <p className="text-slate-600 leading-relaxed mb-6 font-medium">
          We provide high-efficiency HVAC air conditioning systems for offices, banks, hospitals,
          shopping malls, and data centers. Our focus is on comfort, energy saving, and system reliability.
        </p>

        <p className="text-slate-600 leading-relaxed mb-8 font-medium">
          From system design to installation and maintenance, we deliver complete end-to-end AC solutions
          tailored to your building requirements.
        </p>

        {/* SERVICES */}
        <h3 className="text-lg font-bold uppercase mb-4">Our Air Conditioning Services</h3>

        <ul className="space-y-4">
          {[
            "VRF / VRV Inverter Systems",
            "Split Air Conditioning Systems",
            "Cassette & Ceiling Units",
            "Ducted Split Systems",
            "Precision Cooling (Data Centers)",
            "Chilled Water Fan Coil Units",
            "Central Air Conditioning Systems",
            "AC Maintenance & Repair Services"
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 border-l-4 border-blue-600 pl-4 py-2 font-black text-xs uppercase text-slate-800 tracking-widest"
            >
              <Snowflake size={18} className="text-blue-600" />
              {item}
            </li>
          ))}
        </ul>

        {/* PROCESS */}
        <div className="mt-10">
          <h3 className="text-lg font-bold uppercase mb-4">Work Process</h3>
          <div className="space-y-2 text-sm text-slate-700">
            <p>1. Site inspection and cooling load calculation</p>
            <p>2. System design and equipment selection</p>
            <p>3. Installation of indoor and outdoor units</p>
            <p>4. Ducting and piping work</p>
            <p>5. Testing and system balancing</p>
            <p>6. Final commissioning</p>
            <p>7. Maintenance planning and support</p>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-10">
          <h3 className="text-lg font-bold uppercase mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <Thermometer className="text-blue-700 mt-1" size={16} />
              Stable indoor temperature control
            </div>
            <div className="flex items-start gap-2">
              <Wind className="text-blue-700 mt-1" size={16} />
              Improved air circulation
            </div>
            <div className="flex items-start gap-2">
              <Zap className="text-yellow-600 mt-1" size={16} />
              Reduced electricity consumption
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="text-green-700 mt-1" size={16} />
              Long system life and reliability
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* EXTRA INFO SECTION */}
    <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

      <div className="bg-slate-50 border border-slate-200 p-6">
        <Settings className="text-slate-700 mb-3" />
        <h4 className="font-bold uppercase text-sm mb-2">Engineering Standards</h4>
        <p className="text-xs text-slate-600">
          Designed according to ASHRAE standards and modern HVAC engineering practices.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-6">
        <Building2 className="text-slate-700 mb-3" />
        <h4 className="font-bold uppercase text-sm mb-2">Industries We Serve</h4>
        <p className="text-xs text-slate-600">
          Offices, banks, hospitals, malls, factories, and data centers.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-6">
        <CheckCircle2 className="text-blue-700 mb-3" />
        <h4 className="font-bold uppercase text-sm mb-2">Maintenance Support</h4>
        <p className="text-xs text-slate-600">
          Regular servicing and emergency repair support available.
        </p>
      </div>

    </section>

    {/* CTA */}
    <section className="bg-slate-900 text-white py-16 text-center px-6">
      <h2 className="text-2xl font-black uppercase mb-4">
        Need a Reliable HVAC Solution?
      </h2>
      <p className="text-slate-300 mb-6">
        Contact Worksman Services for professional air conditioning system design and installation.
      </p>
      <button className="bg-blue-600 px-6 py-3 uppercase text-xs font-bold tracking-widest">
        Get a Quote
      </button>
    </section>

  </div>
);

export default AirConditioning;