import React from 'react';
import { VOTER_RESOURCES } from '../constants';
import * as LucideIcons from 'lucide-react';

export const Voting: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Voter Information Center</h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
             Your vote is your voice. We've gathered all the tools you need to ensure your ballot is cast and counted.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {VOTER_RESOURCES.map((resource, idx) => {
            // Dynamically get icon component
            const IconComponent = (LucideIcons as any)[resource.icon] || LucideIcons.HelpCircle;
            
            return (
              <a 
                key={idx} 
                href={resource.link} 
                className="group block p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <IconComponent size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Info Sections */}
        <div className="space-y-16">
          <section className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-primary-500 pl-4">Important Dates (2024 General Election)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                 <span className="block text-primary-600 font-bold uppercase tracking-wider text-xs mb-2">October 21</span>
                 <h4 className="text-lg font-bold text-slate-900">Last Day to Register</h4>
                 <p className="text-slate-500 text-sm mt-2">Forms must be received by your County Voter Registration Office.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm">
                 <span className="block text-primary-600 font-bold uppercase tracking-wider text-xs mb-2">October 29</span>
                 <h4 className="text-lg font-bold text-slate-900">Mail-in Application Deadline</h4>
                 <p className="text-slate-500 text-sm mt-2">Applications must be received by 5:00 PM.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-primary-100">
                 <span className="block text-primary-600 font-bold uppercase tracking-wider text-xs mb-2">November 5</span>
                 <h4 className="text-lg font-bold text-slate-900">Election Day</h4>
                 <p className="text-slate-500 text-sm mt-2">Polls are open from 7:00 AM to 8:00 PM.</p>
               </div>
            </div>
          </section>

          <section>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
             <div className="space-y-4">
               {[
                 { q: "Do I need ID to vote?", a: "If you are voting at a polling place for the first time, you must show proof of identification, either with a photo or without." },
                 { q: "Can I hand deliver my mail-in ballot?", a: "Yes, you can return your ballot to the County Election Office or an official secure drop box." },
                 { q: "How do I check my registration status?", a: "Visit the PA Voter Services website and use the 'Find Voter Registration Status' tool." }
               ].map((faq, i) => (
                 <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                   <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
                   <p className="text-slate-600">{faq.a}</p>
                 </div>
               ))}
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};