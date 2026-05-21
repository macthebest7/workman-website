import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Menu, 
  X, 
  ChevronDown,
  MapPin,
  MessageSquare 
} from 'lucide-react';
import LogoImg from '../assets/workman-logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceLinks = [
    { name: "HVAC Systems", path: "/services/hvac" },
    { name: "Fire Fighting Systems", path: "/services/fire" },
    { name: "Ventilation Systems", path: "/services/ventilation" },
    { name: "Air Conditioning", path: "/services/air-conditioning" },
    { name: "Mechanical Services", path: "/services/mechanical-engineering" },
    { name: "Testing & Commissioning", path: "/services/testing-commissioning" },
    { name: "Maintenance & Installation", path: "/services/maintenance" },
    { name: "Thermal Insulation", path: "/services/insulation" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-xl font-sans">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#0f172a] text-white py-2.5 px-6 hidden lg:block border-b border-blue-900/30">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-blue-500" /> +92 (310) 4144-911
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-blue-500" /> worksmanservices@yahoo.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-500" /> Main Raiwind Road, Lahore
            </span>
          </div>
          <div className="flex gap-6 opacity-90 items-center">
            <span className="flex items-center gap-1.5 underline decoration-blue-500 underline-offset-4">
              <ShieldCheck size={14} className="text-blue-400" /> ISO 9001:2015 Certified
            </span>
            <span className="w-px h-3 bg-slate-700"></span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-blue-400" /> 24/7 Support
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR - Increased height for Massive Branding */}
      <nav className="bg-white border-b-2 border-slate-100 px-6">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center h-28 md:h-36">
          
          {/* BRANDING SECTION: Logo + Text */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            {/* The Logo Image */}
            <img 
              src={LogoImg} 
              alt="Workman Services" 
              className="h-20 w-auto object-contain md:h-28 lg:h-32 transition-all duration-300 group-hover:scale-105" 
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}
            />
            {/* The Company Name Wordmark */}
            <div className="flex flex-col border-l-2 border-slate-200 pl-4 py-1 hidden sm:flex">
              <span className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0f172a] leading-none tracking-tighter uppercase">
                WORKSMAN
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-500 tracking-[0.4em] uppercase leading-none mt-1">
                SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center gap-1 h-full font-bold uppercase tracking-widest text-[12px] text-slate-700">
            <Link to="/" className="px-4 py-2 hover:text-[#1e3a8a] transition-colors border-b-2 border-transparent hover:border-[#1e3a8a]">Home</Link>
            <Link to="/about" className="px-4 py-2 hover:text-[#1e3a8a] transition-colors border-b-2 border-transparent hover:border-[#1e3a8a]">About</Link>
            
            <div className="relative group h-full flex items-center">
              <button className="px-4 py-2 flex items-center gap-1 group-hover:text-[#1e3a8a] transition-colors uppercase cursor-pointer border-b-2 border-transparent group-hover:border-[#1e3a8a]">
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-3 z-50">
                {serviceLinks.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.path} 
                    className="block p-4 hover:bg-slate-50 border-b border-slate-50 text-[11px] font-black text-slate-600 hover:text-[#1e3a8a] last:border-0 uppercase"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/projects" className="px-4 py-2 hover:text-[#1e3a8a] transition-colors border-b-2 border-transparent hover:border-[#1e3a8a]">Projects</Link>
            <Link to="/contact" className="px-4 py-2 hover:text-[#1e3a8a] transition-colors border-b-2 border-transparent hover:border-[#1e3a8a]">Contact</Link>
          </div>

          {/* Right Section: Industrial CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+924235123456" 
              className="bg-[#1e3a8a] text-white px-8 py-4 text-[12px] font-black uppercase tracking-widest hover:bg-[#0f172a] transition-all rounded-none flex items-center gap-2 shadow-md"
            >
              <Phone size={16} /> Call Office
            </a>
            <a 
              href="https://wa.me/923104144911" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] text-white p-4 hover:bg-[#1ebd5b] transition-all rounded-none shadow-md flex items-center justify-center"
            >
              <MessageSquare size={24} fill="currentColor" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-3 text-slate-900 border-2 border-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* 3. MOBILE MENU DRAWER */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-6 absolute left-0 w-full shadow-2xl z-[60] overflow-y-auto max-h-[85vh]">
            <ul className="flex flex-col gap-1 px-8 font-black uppercase tracking-widest text-xs text-slate-700">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-4 border-b border-slate-50 text-base">Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-4 border-b border-slate-50 text-base">About Us</Link></li>
              
              <li className="py-4 text-[#1e3a8a] font-black border-b-2 border-slate-50 mt-4">ENGINEERING SERVICES:</li>
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} onClick={() => setIsMenuOpen(false)} className="block py-3.5 pl-4 border-b border-slate-50 text-[10px] font-bold text-slate-500 hover:text-blue-800">
                    {service.name}
                  </Link>
                </li>
              ))}

              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block py-5 border-b border-slate-50">Projects Portfolio</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-5 border-b border-slate-50">Contact Us</Link></li>
              
              <li className="pt-10 grid grid-cols-1 gap-4">
                <a href="tel:+923104144911" className="bg-[#1e3a8a] text-white py-5 text-center font-black">CALL NOW</a>
                <a href="https://wa.me/923104144911" className="bg-[#25D366] text-white py-5 text-center font-black">WHATSAPP CHAT</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;