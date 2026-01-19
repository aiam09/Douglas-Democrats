import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { MERCH_ITEMS } from '../../constants';

export const MerchSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4">
                        Official Store
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-4">Douglas Democrats Merchandise</h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Show your pride for Douglas Democrats with our official merchandise. Every purchase directly supports our efforts to elect Democrats.
                    </p>
                </div>
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-primary-50 transition-colors">
                    <ShoppingBag size={20} />
                    Shop All Items
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {MERCH_ITEMS.map((item) => (
                    <a key={item.id} href={item.url} className="group block bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden relative">
                             <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                             />
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{item.name}</h3>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300 font-medium">${item.price.toFixed(2)}</span>
                                <span className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
};