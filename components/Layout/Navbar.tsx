import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(null);
  }, [location]);

  const toggleMobileSubmenu = (label: string) => {
    if (mobileSubmenuOpen === label) {
      setMobileSubmenuOpen(null);
    } else {
      setMobileSubmenuOpen(label);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
             <div className="bg-primary-500 text-white p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
               <span className="font-bold text-xl tracking-tighter">DD</span>
             </div>
             <div className={`flex flex-col ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} lg:group-hover:text-primary-200 transition-colors`}>
               <span className="font-bold text-lg leading-none">Douglas</span>
               <span className="text-sm font-medium tracking-wide uppercase">Democrats</span>
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                      scrolled
                        ? 'text-slate-600 group-hover:text-primary-500'
                        : 'text-white/90 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-semibold transition-colors duration-200 ${
                        scrolled
                          ? isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-500'
                          : isActive ? 'text-white border-b-2 border-white' : 'text-white/90 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-slate-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg transition-transform hover:scale-105 ${
                scrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Heart size={16} fill="currentColor" />
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileSubmenuOpen === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileSubmenuOpen === item.label && (
                      <div className="pl-6 space-y-1 bg-slate-50/50 rounded-lg mb-2">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-3 py-2.5 rounded-md text-sm font-medium ${
                                isActive
                                  ? 'text-primary-600'
                                  : 'text-slate-500 hover:text-slate-900'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-medium ${
                        isActive
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors"
              >
                <Heart size={18} fill="currentColor" />
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};