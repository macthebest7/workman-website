import React from 'react';
import { Settings, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/workman-logo.png';

const Footer = () => (
  <footer className="bg-[#0f172a] text-slate-500 py-16 border-t-8 border-blue-800">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-1">
        {/* UPDATED FOOTER LOGO */}
        <img 
          src={LogoImg} 
          alt="Workman Services" 
          className="h-14 w-auto md:h-16 lg:h-20 max-w-[220px] brightness-0 invert opacity-80 mb-6" 
        />
        <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-60">
          Established MEP contractors specialized in HVAC&R and Fire Fighting since 2016.
        </p>
      </div>

      <div>
        <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Regionaxl Headquarters</h4>
        <div className="text-[10px] font-bold uppercase tracking-widest flex flex-col gap-4">
          <p className="flex items-start gap-3">
            <MapPin size={18} className="text-blue-500 shrink-0" /> 
            <span>Main Ferozpur Road, <br/>Industrial Area, Lahore, Pakistan</span>
          </p>
          <p className="flex items-center gap-3">
            <Phone size={16} className="text-blue-500 shrink-0" /> 
            <span>+92 (42) 3512-3456</span>
          </p>
        </div>
      </div>

      <div className="bg-[#1e3a8a]/10 p-6 border border-blue-900/50">
        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
          <Clock size={14} className="text-blue-400"/> Emergency Service
        </h4>
        <p className="text-[10px] leading-relaxed mb-4 italic">Available for AMC clients across Punjab 24/7.</p>
        <p className="text-white font-mono text-lg font-black tracking-tighter text-blue-400">+92 310 4144911</p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-[9px] font-bold uppercase tracking-[0.4em] flex justify-between">
      <p>© 2024 Worksman Services Ltd. Lahore</p>
      <div className="flex gap-6">
        <Link to="/safety" className="hover:text-white">HSE Policy</Link>
        <Link to="/contact" className="hover:text-white">Tenders</Link>
      </div>
    </div>
  </footer>
);

export default Footer;