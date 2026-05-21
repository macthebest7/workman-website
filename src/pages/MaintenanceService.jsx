import React from 'react';
import { Wrench, Clock, ClipboardCheck, Zap, ShieldCheck, Activity } from 'lucide-react';

const MaintenanceService = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Industrial Page Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
            Maintenance & AMC Solutions
          </h1>
          <div className="w-20 h-2 bg-[#1e3a8a] mt-4"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl font-black uppercase text-[#1e3a8a] mb-6">Proactive Asset Protection</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Since 2016, Worksman Services has provided high-tier Annual Maintenance Contracts (AMC) to industrial and commercial facilities across Lahore. We ensure your mechanical infrastructure operates at peak efficiency with zero downtime.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 p-4 border border-slate-100 bg-slate-50">
              <Clock className="text-[#1e3a8a] shrink-0" size={24} />
              <div>
                <h4 className="font-black text-xs uppercase">24/7 Emergency Response</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase">Dedicated support line for AMC partners on Ferozpur Road and surrounding industrial zones.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-slate-100 bg-slate-50">
              <ClipboardCheck className="text-[#1e3a8a] shrink-0" size={24} />
              <div>
                <h4 className="font-black text-xs uppercase">Predictive Maintenance</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase">Utilizing vibration analysis and thermal imaging to detect faults before failure.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 p-8 text-white flex flex-col justify-center text-center">
            <Activity size={40} className="mx-auto mb-4 text-blue-400" />
            <h4 className="text-xl font-black uppercase tracking-tighter">99.9%</h4>
            <p className="text-[9px] font-bold uppercase opacity-60">System Uptime</p>
          </div>
          <div className="bg-[#1e3a8a] p-8 text-white flex flex-col justify-center text-center">
            <ShieldCheck size={40} className="mx-auto mb-4 text-blue-200" />
            <h4 className="text-xl font-black uppercase tracking-tighter">100%</h4>
            <p className="text-[9px] font-bold uppercase opacity-60">Compliance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceService;