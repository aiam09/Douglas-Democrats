import React from 'react';
import { MerchSection } from '../components/Home/MerchSection';

export const Merch: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-900">
      <div className="text-center pt-8 pb-4 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Official Store</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
           Wear your values. Support the cause.
        </p>
      </div>
      <MerchSection />
      
      {/* Shipping Info / Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-slate-400">
          <div>
            <h3 className="text-white font-bold mb-2">Secure Payments</h3>
            <p className="text-sm">All transactions are processed securely via ActBlue.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Union Printed</h3>
            <p className="text-sm">All our merchandise is printed in the USA by union shops.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Shipping</h3>
            <p className="text-sm">Orders typically ship within 5-7 business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};