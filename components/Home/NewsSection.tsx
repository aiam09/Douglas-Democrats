import React from 'react';
import { NEWS_ITEMS } from '../../constants';
import { Calendar, ArrowRight } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Updates</h2>
            <p className="text-slate-600 max-w-2xl">Stay informed about our recent victories, upcoming community initiatives, and press releases.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            View All News <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm flex-1 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700">
                  Read Full Story
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            View All News <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};