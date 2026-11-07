import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onDonateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onDonateClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark & Emblem */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
                HopeBridge
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-teal-600 uppercase -mt-1">
                Foundation
              </span>
            </div>
          </a>

          {/* Zone 2: 6 Clean single-line Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive
                      ? 'text-teal-600 border-teal-600 font-semibold'
                      : 'border-transparent hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Donate Button) & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onDonateClick}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center gap-2 text-sm whitespace-nowrap shrink-0 active:scale-95"
            >
              <Heart className="w-4 h-4 text-white fill-white/30" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 pb-2 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-teal-50 text-teal-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDonateClick();
                }}
                className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-teal-400" />
                <span>Support HopeBridge Foundation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
