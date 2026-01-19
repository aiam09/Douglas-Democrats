import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT } from '../../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/douglas/1920/1080"
          alt="Community gathering"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping"></span>
            Official Committee Website
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">Better Future</span> for Douglas County
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
            {HERO_CONTENT.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 group"
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <Link
              to="/volunteer"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              {HERO_CONTENT.ctaSecondary}
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};