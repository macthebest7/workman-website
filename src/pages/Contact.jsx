import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Page Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
            Contact Our Office
          </h1>
          <div className="w-20 h-2 bg-[#1e3a8a] mt-4"></div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        {/* Left Side: Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-black uppercase text-[#0f172a] mb-8 tracking-tight">Workman Services Lahore</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start border-l-4 border-[#1e3a8a] pl-6 py-2">
                <MapPin className="text-[#1e3a8a] shrink-0" size={28} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Office Address</h4>
                  <p className="text-sm font-black uppercase text-slate-900 leading-relaxed">
                    Workman Tower, Main Ferozpur Road,<br/>
                    Lahore, 54000, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start border-l-4 border-[#1e3a8a] pl-6 py-2">
                <Phone className="text-[#1e3a8a] shrink-0" size={28} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Call Support</h4>
                  <p className="text-xl font-black text-[#1e3a8a] tracking-tighter">+92 42 3512 3456</p>
                </div>
              </div>

              <div className="flex gap-6 items-start border-l-4 border-[#1e3a8a] pl-6 py-2">
                <Mail className="text-[#1e3a8a] shrink-0" size={28} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email Inquiries</h4>
                  <p className="text-sm font-black uppercase text-slate-900">info@workmanservices.com.pk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 text-white">
            <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
              <Clock size={14} /> Working Hours
            </h4>
            <p className="text-xs font-bold uppercase tracking-tight">Monday - Saturday: 09:00 AM - 06:00 PM</p>
            <p className="text-[10px] mt-4 opacity-50 uppercase font-bold tracking-widest italic">Emergency Support Available 24/7 for AMC Clients</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-slate-50 p-10 border border-slate-200 shadow-sm">
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-bold text-xs uppercase" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Company</label>
                <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-bold text-xs uppercase" placeholder="Business Name" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
              <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-bold text-xs uppercase" placeholder="email@company.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Project Message</label>
              <textarea className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-bold text-xs uppercase h-32" placeholder="Briefly describe your HVAC or Fire Fighting requirements..."></textarea>
            </div>

            <button className="bg-[#1e3a8a] text-white py-5 font-black uppercase text-xs tracking-widest hover:bg-[#0f172a] transition-all">
              Submit Technical Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// THIS IS THE LINE THAT WAS MISSING:
export default Contact;