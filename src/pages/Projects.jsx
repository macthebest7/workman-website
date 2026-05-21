import React from 'react';

const Projects = () => {
  const projectList = [
    { title: "Metro City Mall", type: "HVAC & Chiller Plant", location: "Downtown", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" },
    { title: "BioTech Labs", type: "Clean Room Ventilation", location: "Science Park", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80" },
    { title: "Logistics Hub", type: "Fire Suppression System", location: "Port Area", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" },
    { title: "Grand Hotel", type: "Turnkey MEP Works", location: "Business District", img: "https://images.unsplash.com/photo-1551882547-ff43c63efa9c?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      <section className="bg-slate-100 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black uppercase tracking-tighter">Project Portfolio</h1>
          <p className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.3em] mt-2">Our Footprint in Mechanical Engineering</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {projectList.map((p, i) => (
            <div key={i} className="group relative overflow-hidden bg-slate-900 aspect-video border border-slate-200">
              <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" alt={p.title} />
              <div className="absolute bottom-0 left-0 p-8 text-white z-10 w-full bg-gradient-to-t from-slate-950 to-transparent">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">{p.type}</p>
                <h3 className="text-2xl font-black uppercase tracking-tight">{p.title}</h3>
                <p className="text-[10px] uppercase opacity-70 mt-1">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;