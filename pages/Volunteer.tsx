import React from 'react';

export const Volunteer: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get Involved</h1>
          <p className="text-xl text-slate-600">
            Join thousands of volunteers across Douglas County working to make a difference.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-primary-600 p-6 text-white text-center">
            <h2 className="text-xl font-bold">Volunteer Sign Up Form</h2>
          </div>
          <form className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-700">Email Address</label>
               <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-700">Phone Number</label>
               <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 block">I'm interested in (select all that apply):</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Canvassing (Knocking Doors)', 'Phone Banking', 'Text Banking', 'Data Entry', 'Event Hosting', 'Election Day Poll Worker'].map((item) => (
                  <label key={item} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="checkbox" className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 border-gray-300" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="button" className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl shadow-lg transition-transform active:scale-95">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};