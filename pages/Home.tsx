import React from 'react';
import { Hero } from '../components/Home/Hero';
import { ActionCards } from '../components/Home/ActionCards';
import { NewsSection } from '../components/Home/NewsSection';
import { MerchSection } from '../components/Home/MerchSection';
import { EVENTS } from '../constants';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="bg-slate-50 pb-20">
        <ActionCards />
        
        {/* Events Preview Section */}
        <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Upcoming Events</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Join the Movement</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Politics happens in person. Whether it's a monthly meeting, a fundraiser, or a community cleanup, showing up is the first step to making a difference.
              </p>
              <Link to="/events" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-8 transition-colors">
                View All Events
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-2 border border-slate-100">
               <div className="space-y-2">
                 {EVENTS.slice(0, 3).map((event) => (
                   <div key={event.id} className="group p-4 rounded-xl hover:bg-slate-50 transition-colors flex gap-4">
                     <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-primary-100 text-primary-700 rounded-lg border border-primary-200">
                       <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                       <span className="text-xl font-extrabold">{event.date.split(' ')[1].replace(',','')}</span>
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors text-lg">{event.title}</h4>
                       <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                         <MapPin size={14} />
                         {event.location}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>
      </div>
      <MerchSection />
      <NewsSection />
    </div>
  );
};