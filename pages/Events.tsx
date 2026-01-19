import React from 'react';
import { EVENTS } from '../constants';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Upcoming Events</h1>
        
        <div className="space-y-6">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="shrink-0 flex flex-row md:flex-col items-center justify-center w-full md:w-24 h-24 bg-primary-50 text-primary-700 rounded-2xl border border-primary-100 gap-2 md:gap-0">
                <span className="text-sm font-bold uppercase">{event.date.split(' ')[0]}</span>
                <span className="text-3xl font-extrabold">{event.date.split(' ')[1].replace(',','')}</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{event.title}</h3>
                <div className="flex flex-col sm:flex-row gap-4 text-slate-500 text-sm font-medium mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary-500" />
                    {event.date.split('-')[1] || 'TBD'}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary-500" />
                    {event.location}
                  </div>
                </div>
                <p className="text-slate-600">{event.description}</p>
              </div>
              
              <div className="shrink-0 mt-4 md:mt-0 w-full md:w-auto">
                <button className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
                  RSVP Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Looking for past events? <a href="#" className="text-primary-600 font-bold hover:underline">View Archive</a>
          </p>
        </div>
      </div>
    </div>
  );
};