import React from 'react';
import { Heart, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onDonateClick: () => void;
  onVolunteerClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onDonateClick,
  onVolunteerClick
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" onClick={() => onNavigate('hero')} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-teal-500/20">
                <Heart className="w-5 h-5 fill-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">HopeBridge</span>
                <span className="text-[10px] font-semibold tracking-wider text-teal-400 uppercase -mt-1">Foundation</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              HopeBridge Foundation is a non-profit organization concept focused on empowering communities, supporting children, and creating sustainable educational and health opportunities through compassionate collective action.
            </p>

            <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Fictional NGO Concept Showcase</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-teal-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-teal-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('impact')} className="hover:text-teal-400 transition-colors">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('campaigns')} className="hover:text-teal-400 transition-colors">
                  Campaigns & Drives
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-teal-400 transition-colors">
                  Stories & Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-teal-400 transition-colors">
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get Involved (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onDonateClick} className="hover:text-teal-400 transition-colors flex items-center gap-1 text-teal-300 font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-teal-400" />
                  Try Demo Donation Portal
                </button>
              </li>
              <li>
                <button onClick={onVolunteerClick} className="hover:text-teal-400 transition-colors">
                  Become a Volunteer (Demo)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('campaigns')} className="hover:text-teal-400 transition-colors">
                  Sponsor a School Program
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-teal-400 transition-colors">
                  Corporate Partnership Demo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-teal-400 transition-colors">
                  Volunteer Pass Verification Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Demo Contact Info</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>hello@hopebridge.example</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+1 202-555-0147</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>120 Green Avenue, New York, USA</span>
              </p>
            </div>

            <div className="pt-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Connect With Us (Demo)</p>
              <div className="flex gap-1.5 text-xs flex-wrap">
                {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((social, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800 text-[11px] select-none cursor-default"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HopeBridge Foundation NGO Website Demo Showcase. Fictional frontend project.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">All data shown is illustrative for design demonstration purposes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
