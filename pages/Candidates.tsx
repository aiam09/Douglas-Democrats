import React from 'react';
import { CANDIDATES } from '../constants';
import { Globe, ArrowRight } from 'lucide-react';

export const Candidates: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Slate</h1>
          <p className="text-xl text-slate-600">
            We are proud to endorse these qualified, dedicated public servants who are ready to work for the people of Douglas County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CANDIDATES.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col">
              <div className="relative h-96 overflow-hidden bg-slate-200">
                <img 
                  src={candidate.image} 
                  alt={candidate.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20">
                   <p className="text-primary-300 font-bold uppercase tracking-wider text-sm mb-1">{candidate.position}</p>
                   <h3 className="text-2xl font-bold text-white">{candidate.name}</h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                  {candidate.bio}
                </p>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                   <a 
                     href={candidate.website} 
                     className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                   >
                     <Globe size={18} />
                     Visit Website
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-primary-600 rounded-3xl p-10 md:p-16 text-center text-white">
           <h2 className="text-3xl font-bold mb-6">Want to run for office?</h2>
           <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
             We are always looking for passionate community members to serve on school boards, municipal councils, and more.
           </p>
           <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors shadow-lg">
             Learn How to Run
           </button>
        </div>
      </div>
    </div>
  );
};