import React from 'react';
import { BookOpen, Utensils, HeartPulse, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
  showAnnotations?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMoreClick,
  showAnnotations = false
}) => {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Distributing books, digital workbooks, and offering after-school tuition hubs led by youth mentors.',
      accent: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Serving hot, hygienic meals and monthly grain rations to ensure zero children study on an empty stomach.',
      accent: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Hygiene',
      description: 'Organizing preventative medical checkups, vision tests, and distributing free health kits in hamlets.',
      accent: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      icon: Sparkles,
      title: 'Youth Mentorship',
      description: 'Connecting energetic youth volunteers with young learners for skill development and personal growth.',
      accent: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>UX Rationale (About):</strong> Establishes organizational credibility early. Replaces long corporate text blocks with 4 distinct pillar cards and transparent operational guarantees.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            About HopeBridge Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Driven by Compassion, Grounded in Community Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            HopeBridge Foundation is a non-profit organization concept dedicated to empowering underprivileged children and families. We believe that small, collective acts of generosity create lasting social change.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${pillar.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                  <span>Community Verified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Principles Strip */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Transparent & User-Centered NGO Platform Showcase
            </h3>
            <p className="text-sm text-slate-300">
              This interactive platform demonstrates seamless donation calculations, volunteer registrations, and campaign goal tracking in a clean, production-grade frontend preview.
            </p>
          </div>
          <button
            onClick={onLearnMoreClick}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all text-sm shrink-0 flex items-center gap-2"
          >
            <span>Explore Our Impact</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
