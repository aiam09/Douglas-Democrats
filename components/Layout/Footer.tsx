import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-primary-500 text-white p-1.5 rounded">
                 <span className="font-bold text-lg">DD</span>
               </div>
               <span className="font-bold text-xl">Douglas Dems</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Working tirelessly to elect Democrats who share our values of equality, justice, and opportunity for all Douglas County residents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-primary-300 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/candidates" className="text-slate-300 hover:text-primary-300 text-sm transition-colors">Meet the Candidates</Link></li>
              <li><Link to="/voting" className="text-slate-300 hover:text-primary-300 text-sm transition-colors">Voter Services</Link></li>
              <li><Link to="/events" className="text-slate-300 hover:text-primary-300 text-sm transition-colors">Events Calendar</Link></li>
              <li><Link to="/volunteer" className="text-slate-300 hover:text-primary-300 text-sm transition-colors">Volunteer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>
                  PO Box 1234<br />
                  Douglasville, GA 30133
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>(770) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>info@douglasdems.org</span>
              </li>
            </ul>
          </div>

          {/* Action */}
          <div>
             <h3 className="font-bold text-lg mb-4 text-primary-400">Join the Fight</h3>
             <p className="text-slate-400 text-sm mb-4">Sign up for our newsletter to get the latest updates.</p>
             <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
               />
               <button className="w-full py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-sm font-bold transition-colors">
                 Subscribe
               </button>
             </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 Douglas County Democratic Committee. All rights reserved.
          </p>
          <div className="px-4 py-2 border border-slate-700 rounded bg-slate-800/50">
             <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
               Paid for by the Douglas County Democratic Committee
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};