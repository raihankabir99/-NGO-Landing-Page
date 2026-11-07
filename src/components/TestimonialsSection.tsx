import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, Sparkles, ShieldCheck, Heart, MapPin, Award } from 'lucide-react';

interface TestimonialsSectionProps {
  showAnnotations?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  showAnnotations = false
}) => {
  const [filterRole, setFilterRole] = useState<'All' | 'Beneficiary' | 'Volunteer' | 'Supporter'>('All');

  const filtered = filterRole === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.role === filterRole);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>UX Rationale (Feature 5 - Testimonials):</strong> Quad-attributed stories featuring distinct persona roles (Beneficiary, Volunteer, Supporter) builds 360-degree ecosystem credibility.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Feature 5: Inspiring Stories (Sample Testimonials)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stories That Inspire Us
          </h2>
          <p className="text-base text-slate-600">
            Hear from the young minds we empower, the dedicated volunteers in the field, and the generous supporters making it all possible.
          </p>
        </div>

        {/* Role Filter Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(['All', 'Beneficiary', 'Volunteer', 'Supporter'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setFilterRole(r)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterRole === r
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r === 'All' ? 'All Stories' : `${r}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative"
            >
              <div className="space-y-4">
                {/* Quote Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white ${item.avatarBg}`}>
                      {item.role} Story
                    </span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded border border-slate-300">
                      Illustrative Demo Testimonial
                    </span>
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 group-hover:text-teal-500/40 transition-colors" />
                </div>

                {/* Quote Body */}
                <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                  "{item.quote}"
                </p>

                {/* Impact Note */}
                <div className="bg-white rounded-xl p-3 border border-slate-200/80 text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-teal-700 text-[10px] uppercase tracking-wider block">Impact Milestone</span>
                  <p className="font-medium">{item.impactNote}</p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-md shrink-0`}>
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{item.title}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p className="mt-8 text-center text-xs text-slate-400 italic">
          * Note: All stories and profiles above are fictional sample testimonials created for the HopeBridge Foundation design showcase.
        </p>
      </div>
    </section>
  );
};
