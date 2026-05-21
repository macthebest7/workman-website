import React from "react";
import {
  CheckCircle2,
  Thermometer,
  Wind,
  ShieldCheck,
  Snowflake,
  Factory,
  Settings,
  Zap,
} from "lucide-react";

const Hvac = () => (
  <div className="animate-in fade-in duration-500">

    {/* HEADER */}
    <div className="bg-slate-100 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
          HVAC & Industrial Refrigeration
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl">
          Complete heating, cooling, ventilation, and refrigeration systems for commercial and industrial facilities.
        </p>
      </div>
    </div>

    {/* MAIN */}
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-2/3">

          <img
            src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80"
            className="w-full h-80 object-cover grayscale mb-10 border-b-8 border-blue-800"
            alt="HVAC Systems"
          />

          {/* INTRO */}
          <h2 className="text-2xl font-bold uppercase mb-6">
            Advanced Thermal & Air Management Solutions
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Workman Services provides complete HVAC engineering solutions including design, installation,
            testing, and maintenance of advanced cooling and ventilation systems.
          </p>

          <p className="text-slate-700 mb-8 leading-relaxed">
            Our systems are designed to maintain temperature control, improve air quality, and reduce
            energy consumption in commercial buildings, industries, hospitals, and warehouses.
          </p>

          {/* SERVICES */}
          <h3 className="text-lg font-bold uppercase mb-4">
            Our HVAC Services
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Chiller Plant Installation & Maintenance",
              "VRF / VRV Air Conditioning Systems",
              "Industrial Ventilation Systems",
              "Cold Storage & Refrigeration Rooms",
              "Duct Design & Fabrication",
              "Air Handling Units (AHU) Installation",
              "Precision Air Conditioning Systems",
              "HVAC System Troubleshooting",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 text-xs font-bold uppercase"
              >
                <CheckCircle2 size={16} className="text-blue-700" />
                {item}
              </div>
            ))}
          </div>

          {/* PROCESS */}
          <h3 className="text-lg font-bold uppercase mb-4">
            Work Process
          </h3>

          <div className="space-y-2 text-sm text-slate-700 mb-10">
            <p>1. Site inspection and load calculation</p>
            <p>2. HVAC system design (as per ASHRAE standards)</p>
            <p>3. Equipment selection and approval</p>
            <p>4. Installation of mechanical systems</p>
            <p>5. Ducting and piping work</p>
            <p>6. Testing, balancing, and commissioning</p>
            <p>7. Preventive maintenance planning</p>
          </div>

          {/* BENEFITS */}
          <h3 className="text-lg font-bold uppercase mb-4">
            Why HVAC Systems Are Important
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex gap-2 items-start">
              <Thermometer className="text-blue-700 mt-1" size={16} />
              Maintains stable indoor temperature
            </div>

            <div className="flex gap-2 items-start">
              <Wind className="text-blue-700 mt-1" size={16} />
              Improves air quality and ventilation
            </div>

            <div className="flex gap-2 items-start">
              <Zap className="text-yellow-600 mt-1" size={16} />
              Reduces energy consumption
            </div>

            <div className="flex gap-2 items-start">
              <ShieldCheck className="text-green-700 mt-1" size={16} />
              Improves equipment life and performance
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:w-1/3 space-y-6">

          <div className="bg-slate-900 text-white p-6">
            <h4 className="font-bold uppercase text-xs tracking-widest mb-3 border-b border-slate-700 pb-2">
              Technical Standards
            </h4>
            <p className="text-xs opacity-70">
              All HVAC systems follow ASHRAE 90.1 energy efficiency standards and local mechanical codes.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Factory className="text-slate-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">
              Industrial Grade Systems
            </h4>
            <p className="text-xs text-slate-600">
              Designed for factories, warehouses, and heavy-duty operations.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Snowflake className="text-blue-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">
              Energy Efficient Cooling
            </h4>
            <p className="text-xs text-slate-600">
              We focus on reducing energy cost with modern HVAC technologies.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6">
            <Settings className="text-slate-700 mb-3" />
            <h4 className="font-bold uppercase text-sm mb-2">
              Complete Maintenance
            </h4>
            <p className="text-xs text-slate-600">
              Regular servicing to ensure long system life and performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Hvac;