import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Latest News</h1>
          <p className="text-xl text-slate-600">
            Stay up to date with the latest press releases, community updates, and announcements from the Douglas Democrats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm flex-1 leading-relaxed">
                  {item.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700">
                  Read Full Story <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};