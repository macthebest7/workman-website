import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, FlameKindling, ArrowRight, ShieldCheck, HardHat, Clock, 
  Building2, Fan, Thermometer, Gauge, Wrench, FileText, 
  Settings, CheckCircle2, History, Target, Briefcase, Zap, Star,
  Phone, Mail, MapPin, MessageSquare
} from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[650px] bg-slate-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7e8b?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale" 
            alt="Mechanical Engineering" 
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <div className="max-w-3xl border-l-8 border-blue-700 pl-8">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              Reliable HVAC & Fire Fighting Solutions Since 2016
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-medium">
              Delivering complete mechanical engineering solutions including design, supply, installation, testing, commissioning, and maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#1e3a8a] text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-blue-800 transition-all">
                Request a Quote
              </Link>
              <Link to="/services/hvac" className="border-2 border-white text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="absolute bottom-0 w-full bg-[#0f172a]/90 py-8 hidden lg:block border-t border-blue-900/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
            {[
              { t: "10+ Years Experience", i: Clock, d: "Expert Leadership" },
              { t: "1000+ Projects", i: Building2, d: "Completed Nationwide" },
              { t: "Certified Engineers", i: Award, d: "Licensed Professionals" },
              { t: "Turnkey Solutions", i: ShieldCheck, d: "Design to Maintenance" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 text-white">
                <stat.i size={32} className="text-blue-500" />
                <div>
                  <div className="text-sm font-black uppercase tracking-widest">{stat.t}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-tighter mb-6">About Worksman Services</h2>
            <div className="w-20 h-1.5 bg-[#1e3a8a] mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              Worksman Services has been providing reliable HVAC&R and Fire Fighting solutions since 2016. We deliver complete mechanical engineering services from design to long-term maintenance across commercial, industrial, and residential sectors.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Our team operates with a "Safety First" mindset, ensuring that every installation meets international standards (NFPA & ASHRAE). Based in Lahore, we handle complex projects with precision engineering.
            </p>
            <Link to="/about" className="text-blue-800 font-black uppercase text-xs tracking-widest border-b-2 border-blue-800 pb-1">Read Corporate Profile</Link>
          </div>
          <div className="bg-slate-100 p-2 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
              alt="Installation Site" 
              className="w-full grayscale border border-slate-200" 
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-tighter">Our Specialized Services</h2>
            <div className="w-20 h-1.5 bg-[#1e3a8a] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "HVAC Systems", i: Wind, d: "Centralized cooling & heating systems." },
              { t: "Fire Fighting Systems", i: FlameKindling, d: "NFPA suppression & detection networks." },
              { t: "Ventilation Systems", i: Fan, d: "Industrial fresh air & exhaust management." },
              { t: "Air Conditioning", i: Thermometer, d: "Commercial VRF & Split AC solutions." },
              { t: "Testing & Commissioning", i: Gauge, d: "Third-party auditing & performance checks." },
              { t: "Maintenance Services", i: Wrench, d: "24/7 AMC and preventative care." },
              { t: "Mechanical Design", i: FileText, d: "Initial schematics & hydraulic calculations." },
              { t: "Installation Services", i: HardHat, d: "Expert site execution by certified teams." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200 hover:border-blue-800 hover:shadow-md transition-all group">
                <s.i size={36} className="text-[#1e3a8a] mb-6 transition-transform group-hover:scale-110" />
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-3">{s.t}</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-tighter mb-16 text-center">Why Worksman Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {[
              { t: "Industry Experience Since 2016", i: History },
              { t: "Certified Engineers & Technicians", i: Award },
              { t: "Strict Safety Compliance", i: ShieldCheck },
              { t: "High Quality Standards", i: Target },
              { t: "End-to-End Project Handling", i: Briefcase },
              { t: "On-Time Project Delivery", i: Clock },
              { t: "Reliable Maintenance Support", i: Wrench },
              { t: "Custom Engineering Solutions", i: Zap }
            ].map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-slate-100 p-2 text-blue-800"><p.i size={24} /></div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-800 leading-tight pt-1">{p.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-tighter mb-12">Successful Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Decent Marriage Complex", t: "Commercial", l: "Lahore", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" },
              { n: "BioTech Pharma", t: "Industrial", l: "Faisalabad", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80" },
              { n: "City Hospital", t: "Hospital", l: "Sahiwal", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" }
            ].map((p, i) => (
              <div key={i} className="group overflow-hidden bg-white border border-slate-200">
                <div className="overflow-hidden aspect-video">
                  <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={p.n} />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1">{p.t} • {p.l}</p>
                  <h4 className="text-sm font-black uppercase text-slate-900">{p.n}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-16">Our Project Workflow</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {["Consultation", "Design", "Supply", "Installation", "Testing", "Commissioning", "Maintenance"].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-[#1e3a8a] flex items-center justify-center font-black mb-4 border border-blue-400 group-hover:bg-blue-600 transition-colors">
                  {i + 1}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest leading-tight">{step}</p>
                {i < 6 && <div className="hidden lg:block absolute translate-x-12 translate-y-6 text-blue-900">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-black uppercase tracking-tighter mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "Engr. Ahmed Ali", c: "Pak Textiles", text: "Workman Services delivered our HVAC plant upgrade ahead of schedule. Their T&C process is incredibly thorough." },
              { n: "Sarah Khan", c: "Urban Mall", text: "Professional fire safety partners. They handled our Civil Defense approvals without any hassle." },
              { n: "Bilal Ahmed", c: "Data Center Inc.", text: "Precision cooling is critical for us. Workman's design team understood our requirements perfectly." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-xs text-slate-600 font-bold uppercase italic leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-[10px] font-black uppercase text-slate-900">{t.n}</p>
                <p className="text-[9px] font-bold uppercase text-blue-700 tracking-widest">{t.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Contact Our Office</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start border-l-4 border-[#1e3a8a] pl-6">
                <MapPin className="text-[#1e3a8a] shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Office Address</h4>
                  <p className="text-xs font-black uppercase text-slate-900 leading-relaxed">Main Raiwind Road, Lahore, 54000, Pakistan</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border-l-4 border-[#1e3a8a] pl-6">
                <Phone className="text-[#1e3a8a] shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Support</h4>
                  <p className="text-xs font-black uppercase text-slate-900">+92 310-4144911</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border-l-4 border-[#1e3a8a] pl-6">
                <Mail className="text-[#1e3a8a] shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Inquiries</h4>
                  <p className="text-xs font-black uppercase text-slate-900">worksmanservices@yahoo.com</p>
                </div>
              </div>
            </div>
            {/* Mobile CTAs */}
            <div className="mt-12 flex gap-4">
               <a href="https://wa.me/923104144911" className="bg-[#25D366] text-white px-6 py-4 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                  <MessageSquare size={16} /> WhatsApp
               </a>
               <a href="tel:+924235123456" className="bg-[#1e3a8a] text-white px-6 py-4 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                  <Phone size={16} /> Call Now
               </a>
            </div>
          </div>

          <div className="bg-slate-50 p-10 border border-slate-200">
            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-black text-[10px] uppercase tracking-widest" placeholder="Full Name" />
                <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-black text-[10px] uppercase tracking-widest" placeholder="Company" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-black text-[10px] uppercase tracking-widest" placeholder="Email" />
                <input className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-black text-[10px] uppercase tracking-widest" placeholder="Phone" />
              </div>
              <textarea className="p-4 border border-slate-300 outline-none focus:border-[#1e3a8a] font-black text-[10px] uppercase tracking-widest h-32" placeholder="Message / Project Scope"></textarea>
              <button className="bg-[#1e3a8a] text-white py-5 font-black uppercase text-xs tracking-widest hover:bg-[#0f172a] transition-all">Submit Technical Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Map Award for lucide compatibility if not already imported
const Award = ({size, className}) => <ShieldCheck size={size} className={className} />;

export default Home;