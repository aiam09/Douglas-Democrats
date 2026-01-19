import React from 'react';
import { Vote, Users, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ActionCards: React.FC = () => {
  return (
    <section className="py-0 relative -mt-24 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-primary-500">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mb-6">
              <Vote size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Voter Services</h3>
            <p className="text-slate-600 mb-6">Need to register? Looking for your polling place? Want to vote by mail? We have all the info you need.</p>
            <Link to="/voting" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Get Voter Info <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-blue-600">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Meet Candidates</h3>
            <p className="text-slate-600 mb-6">Learn about the dedicated public servants running to represent you and improve our community.</p>
            <Link to="/candidates" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Candidates <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-slate-800">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 mb-6">
              <HandHeart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Volunteer</h3>
            <p className="text-slate-600 mb-6">Our strength comes from people like you. Join us to canvass, phone bank, or help at events.</p>
            <Link to="/volunteer" className="text-slate-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Get Involved <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};