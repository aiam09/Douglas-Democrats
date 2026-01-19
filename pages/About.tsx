import React from 'react';
import { LEADERSHIP } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-primary-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About the Committee</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are dedicated to promoting Democratic principles and electing qualified candidates who will serve all the people of Douglas County.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                The Douglas County Democratic Committee works to elect candidates who are committed to good government, economic opportunity, and social justice. We believe in a government that works for everyone, not just the wealthy and well-connected.
              </p>
              <p>
                From school boards to the White House, we support leaders who will fight for quality education, affordable healthcare, environmental protection, and workers' rights.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/mission/800/600" 
              alt="Volunteers working" 
              className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-96"
            />
          </div>
        </section>

        {/* Chair's Message */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0">
               <img 
                 src={LEADERSHIP[0].image} 
                 alt={LEADERSHIP[0].name} 
                 className="w-40 h-40 rounded-full border-4 border-primary-500 object-cover"
               />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Message from the Chair</h2>
              <blockquote className="text-xl md:text-2xl font-medium text-slate-200 italic mb-6">
                "Together, we have turned Douglas County blue. But our work is never finished. We must continue to organize, advocate, and vote to protect our progress."
              </blockquote>
              <cite className="not-italic font-bold text-primary-400 text-lg block">
                — {LEADERSHIP[0].name}, <span className="text-slate-400 font-normal">Chair</span>
              </cite>
            </div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600">Meet the team guiding our committee.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="group text-center">
                <div className="mb-4 relative inline-block">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-48 h-48 rounded-2xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-primary-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bylaws CTA */}
        <section className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Committee Bylaws</h3>
          <p className="text-slate-600 mb-6">Transparency is key to our organization. View our official governing rules.</p>
          <button className="px-6 py-2 bg-white text-primary-600 border border-primary-200 font-bold rounded-lg hover:bg-primary-600 hover:text-white transition-colors">
            Download PDF
          </button>
        </section>
      </div>
    </div>
  );
};