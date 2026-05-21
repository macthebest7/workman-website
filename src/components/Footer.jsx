import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/workman-logo.png';

const Footer = () => (
  <footer className="bg-[#0f172a] text-slate-400 py-16 border-t-8 border-[#1e3a8a] font-sans">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* COLUMN 1: BRANDING */}
        <div className="flex flex-col items-start">
          <img 
            src={LogoImg} 
            alt="Worksman Services" 
            className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 mb-8" 
          />
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] leading-relaxed opacity-60">
            Established MEP contractors specialized in HVAC&R and Fire Fighting since 2016. 
            Providing precision engineering solutions across Pakistan.
          </p>
        </div>

        {/* COLUMN 2: CONTACT */}
        <div>
          <h4 className="text-white text-[12px] font-black uppercase tracking-[0.3em] mb-8">
            REGIONAL HEADQUARTERS
          </h4>
          <div className="text-[10px] font-bold uppercase tracking-widest flex flex-col gap-6">
            <p className="flex items-start gap-4 leading-normal">
              <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" /> 
              <span>Main Raiwind Road, <br/>Industrial Area, Lahore, Pakistan</span>
            </p>
            <p className="flex items-center gap-4">
              <Phone size={18} className="text-blue-500 shrink-0" /> 
              <span>+92 (310) 4144-911</span>
            </p>
            <p className="flex items-center gap-4">
              <Mail size={18} className="text-blue-500 shrink-0" /> 
              <span>worksmanservices@yahoo.com</span>
            </p>
          </div>
        </div>

        {/* COLUMN 3: QUICK LINKS (Added to fill the gap) */}
        <div>
          <h4 className="text-white text-[12px] font-black uppercase tracking-[0.3em] mb-8">
            TECHNICAL DIVISIONS
          </h4>
          <ul className="text-[10px] font-bold uppercase tracking-widest flex flex-col gap-4">
            <li><Link to="/services/hvac" className="hover:text-white transition-colors">• HVAC & Refrigeration</Link></li>
            <li><Link to="/services/fire-fighting" className="hover:text-white transition-colors">• Fire Protection</Link></li>
            <li><Link to="/services/ventilation" className="hover:text-white transition-colors">• Industrial Ventilation</Link></li>
            <li><Link to="/services/insulation" className="hover:text-white transition-colors">• Thermal Insulation</Link></li>
          </ul>
        </div>

        {/* COLUMN 4: EMERGENCY BOX */}
        <div className="bg-[#1e3a8a]/10 p-8 border border-blue-900/50 relative overflow-hidden group">
          <ShieldCheck size={60} className="absolute -right-4 -top-4 text-blue-500 opacity-10 group-hover:scale-110 transition-transform" />
          
          <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Clock size={16} className="text-blue-400"/> EMERGENCY SERVICE
          </h4>
          <p className="text-[10px] font-bold uppercase italic tracking-widest text-slate-500 mb-6 leading-relaxed">
            Available for AMC clients across Punjab 24/7.
          </p>
          <p className="text-white font-mono text-2xl font-black tracking-tighter">
            +92 310 4144911
          </p>
        </div>
      </div>
      
      {/* BOTTOM COPYRIGHT BAR */}
      <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">
          © 2026 WORKSMAN SERVICES LTD. LAHORE
        </p>
        
        <div className="flex gap-10">
          <Link to="/safety" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors">
            HSE POLICY
          </Link>
          <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors">
            TENDERS
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;