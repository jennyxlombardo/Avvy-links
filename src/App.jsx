import React, { useState } from 'react';
import { ArrowLeft, MapPin, ShieldCheck, Zap, Globe, Award, FileText, CheckCircle, ExternalLink, User, Calendar } from 'lucide-react';

const candidates = [
  { 
    id: 1, 
    name: "Willian C. dos Santos", 
    role: "4x Salesforce Certified Administrator", 
    location: "SÃO PAULO, BRAZIL", 
    price: "$4,600/mo",
    img: "/WillianC.jpg",
    videoUrl: "https://www.veed.io/embed/2aa485d3-f95f-403c-a810-9bdb3b84ff25",
    cvUrl: "resume willian.pdf", // Replace with link to Willian's PDF
    summary: "Specialized in training and supporting end-users on Salesforce to maximize platform efficiency.",
    skills: ["Salesforce Administration", "Data Management", "Declarative Development", "User Training"],
    certifications: ["Certified Administrator", "Platform App Builder", "AI Associate"]
  },
  { 
    id: 2, 
    name: "Fabrizio Nazar Ibarra", 
    role: "Salesforce Developer & Systems Engineer", 
    location: "LIMA, PERU", 
    price: "$5,200/mo",
    img: "FabrizioNazar.jpg",
    videoUrl: "https://www.veed.io/embed/6bca5f68-12d8-4b1c-9306-985083392326",
    cvUrl: "Resume Fabrizio Nazar 2025.pdf", // Replace with link to Willian's PDF
    summary: "Systems Engineer with 9 years of experience in full-stack development and Salesforce CRM across banking and insurance.",
    skills: ["Apex", "LWC", "Omnistudio", "Financial Services Cloud", "Integrations"],
    certifications: ["Platform Developer I", "AI Specialist", "Omnistudio Developer"]
  },
  { 
    id: 3, 
    name: "Santiago Molano", 
    role: "Salesforce Technical Architect", 
    location: "COLOMBIA / SPAIN", 
    price: "$6,000/mo",
    img: "SantiagoMolando.jpg",
    videoUrl: "https://www.veed.io/embed/18656489-2051-418d-8ccf-909afacba69e",
    cvUrl: "Santiago Molano Resume 2025 .pdf", // Replace with link to Willian's PDF
    summary: "Expert in designing complex architectures and leading development teams for scalable enterprise solutions.",
    skills: ["Technical Architecture", "Advanced Apex", "System Integration", "DevOps"],
    certifications: ["Application Architect", "System Architect", "PDII"]
  },
  { 
    id: 4, 
    name: "Edward Dalton", 
    role: "Salesforce Business Analyst & Scrum Master", 
    location: "SAN SALVADOR, EL SALVADOR", 
    price: "$4,600/mo",
    img: "EdwardDalton.jpg",
    videoUrl: "https://www.veed.io/embed/6816b96e-2a4a-4f02-b08d-c011662b1c40",
    cvUrl: "resume willian.pdf", // Replace with link to Willian's PDF
    summary: "High-impact Business Analyst with deep expertise in Health Cloud and Financial Services Cloud. Expert in bridging the gap between stakeholders and technical teams using Agile methodologies.",
    skills: ["Agile/Scrum", "User Story Mapping", "Health Cloud", "Financial Services Cloud", "Process Mapping"],
    certifications: ["Business Analyst", "Agentforce Specialist", "Health Cloud", "Financial Services Cloud", "Data Cloud Consultant"]
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div className="min-h-screen bg-[#050810] text-white font-sans selection:bg-[#2DD4BF]/30">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-[#050810]/90 sticky top-0 z-10 backdrop-blur-md px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-[#2DD4BF] font-bold hover:text-white transition uppercase text-xs tracking-widest">
              <ArrowLeft size={18}/> Back to Gallery
            </button>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Avvy Verified</span>
               <div className="h-4 w-px bg-white/10"></div>
               <span className="text-[10px] font-bold text-[#2DD4BF]">ACTIVE POOL</span>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-2 border-[#2DD4BF]/20 shadow-[0_0_30px_rgba(45,212,191,0.1)] shrink-0 bg-[#0D121F]">
                        <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                           <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">{selected.name}</h1>
                           <span className="bg-[#2DD4BF] text-black px-4 py-1 rounded-full font-black text-lg italic">{selected.price}</span>
                        </div>
                        <p className="text-slate-400 text-xl font-medium tracking-tight flex items-center gap-2">
                          <CheckCircle size={20} className="text-[#2DD4BF]" /> {selected.role}
                        </p>
                    </div>
                </div>

                <div className="relative bg-[#0D121F] aspect-video rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
                  <iframe src={selected.videoUrl} width="100%" height="100%" frameBorder="0" allowFullScreen className="absolute inset-0"></iframe>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                  <h3 className="text-[#2DD4BF] font-bold uppercase tracking-widest text-[10px] mb-4">Professional Context</h3>
                  <p className="text-slate-300 text-sm leading-relaxed italic font-light">"{selected.summary}"</p>
                </div>
                <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                  <h3 className="text-[#2DD4BF] font-bold uppercase tracking-widest text-[10px] mb-4">Domain Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills?.map(skill => (
                      <span key={skill} className="bg-[#2DD4BF]/5 text-[#2DD4BF] px-3 py-1.5 rounded-lg border border-[#2DD4BF]/20 text-[10px] font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0D121F] p-8 rounded-[2.5rem] border border-white/10 shadow-2xl sticky top-28">
                <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-8">Next Steps</h3>
                
                <div className="space-y-4 mb-10">
                    {/* CALENDLY BUTTON */}
                    <a 
                      href="https://calendly.com/jennifer-lombardo-/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-[#2DD4BF] hover:bg-white text-black font-black py-5 rounded-2xl transition-all uppercase tracking-tighter text-sm shadow-[0_10px_30px_rgba(45,212,191,0.2)]"
                    >
                      <Calendar size={18}/> Schedule Interview
                    </a>

                    {/* RESUME BUTTON */}
                    <a 
                      href={selected.cvUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl transition-all border border-white/10 text-sm uppercase tracking-tight"
                    >
                      <FileText size={18} className="text-[#2DD4BF]"/> View Full Resume
                    </a>
                </div>

                <div className="space-y-5 border-t border-white/5 pt-8">
                  <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#2DD4BF]"><MapPin size={16}/></div>
                    {selected.location}
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#2DD4BF]"><Globe size={16}/></div>
                    English & Spanish
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050810] via-[#050810] to-[#0D121F] text-white p-6 md:p-12">
      <div className="max-w-[1300px] mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-4 uppercase italic leading-[0.85]">
            CANDIDATE <span className="text-[#2DD4BF]">SELECTION</span>
          </h2>
          <p className="text-slate-500 text-xs font-bold tracking-[0.5em] uppercase opacity-50">Vetted Excellence for Salesforce Ecosystems</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {candidates.map((c) => (
            <div key={c.id} onClick={() => setSelected(c)} className="group cursor-pointer bg-[#0D121F] rounded-[2rem] border border-white/5 hover:border-[#2DD4BF]/40 transition-all duration-500 hover:-translate-y-4 flex flex-col h-full shadow-2xl relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-4 right-4 bg-[#2DD4BF] text-black font-black text-[10px] px-3 py-1 rounded-full z-10 shadow-lg">{c.price}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-[#2DD4BF] transition-colors uppercase italic tracking-tight">{c.name}</h3>
                <p className="text-slate-500 text-[10px] leading-relaxed mb-8 font-bold uppercase tracking-widest">{c.role}</p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></span>
                      <span className="text-[9px] font-black tracking-wider text-slate-300 uppercase">{c.location.split(',')[0]}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-black transition-all">
                        <ArrowLeft size={16} className="rotate-180" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}