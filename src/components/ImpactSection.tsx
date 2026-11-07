import React, { useState } from 'react';
import { IMPACT_STATS } from '../data/mockData';
import { GraduationCap, BookOpen, Utensils, Users, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface ImpactSectionProps {
  showAnnotations?: boolean;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({
  showAnnotations = false
}) => {
  const [activeTab, setActiveTab] = useState<'education' | 'nutrition' | 'health' | 'growth'>('education');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'BookOpen': return BookOpen;
      case 'Utensils': return Utensils;
      case 'Users': return Users;
      default: return GraduationCap;
    }
  };

  const programDetails = {
    education: {
      title: 'Digital & Remedial Learning Hubs',
      stat: '15,000+ Students Empowered',
      description: 'We establish solar-powered computer centers and weekend remedial classes in underserved hamlets, improving foundational literacy and STEM confidence.',
      highlights: ['24 Rural Learning Centers', 'Free Workbooks & Tablets', 'Certified Mentorship']
    },
    nutrition: {
      title: 'Community Kitchens & Ration Drives',
      stat: '250,000+ Nutritious Meals',
      description: 'Zero hunger initiatives providing hot lunches during weekend school drives and dry ration hampers for vulnerable single-parent households.',
      highlights: ['Fresh Fruit & Milk Packs', 'Monthly Family Ration Kits', 'Zero Food Waste Protocol']
    },
    health: {
      title: 'Mobile Diagnostic & Hygiene Camps',
      stat: '18,500+ Medical Checks',
      description: 'Bringing pediatricians, dentists, and eye specialists directly to informal settlements for preventative care and free prescription distribution.',
      highlights: ['Free Spectacles & Dentistry', 'Maternal Health Guidance', 'Hygiene Kit Distribution']
    },
    growth: {
      title: 'Youth Leadership & Skill Workshops',
      stat: '1,200+ Active Volunteers',
      description: 'Training university students and young professionals in community development, project management, and empathetic leadership.',
      highlights: ['Verified Internship Certificates', 'Nationwide Volunteer Network', 'Leadership Summits']
    }
  };

  return (
    <section id="impact" className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>UX Rationale (Feature 3 - Impact):</strong> Large tabular figures coupled with a disclaimer pill explicitly denoting illustrative metrics protects organizational integrity while inspiring donor confidence.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-400 uppercase bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Feature 3: Impact Showcase (Illustrative Sample Metrics)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Impact, Their Future
          </h2>
          <p className="text-base text-slate-300">
            Real outcomes created through the collective strength of donors, volunteers, and grassroots community organizers.
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => {
            const Icon = getIcon(stat.iconName);
            return (
              <div
                key={stat.id}
                className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 hover:border-teal-500/50 transition-all hover:-translate-y-1 group flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {stat.number}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-teal-300">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Sample Metric</span>
                  <span className="text-teal-400 font-semibold">100% Tracked</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Program Deep Dive Tabs */}
        <div className="mt-16 bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-700/80">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-700">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <span>Program Pillar Breakdown</span>
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-700">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'education' ? 'bg-teal-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'nutrition' ? 'bg-teal-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Nutrition
              </button>
              <button
                onClick={() => setActiveTab('health')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'health' ? 'bg-teal-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Healthcare
              </button>
              <button
                onClick={() => setActiveTab('growth')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'growth' ? 'bg-teal-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Youth Network
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono">
                {programDetails[activeTab].stat}
              </span>
              <h4 className="text-2xl font-bold text-white">
                {programDetails[activeTab].title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {programDetails[activeTab].description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {programDetails[activeTab].highlights.map((h, i) => (
                  <span
                    key={i}
                    className="bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-1 rounded-lg flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-6 border border-slate-700 text-center space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Demo Metric Standard
              </p>
              <p className="text-2xl font-bold text-teal-300">Illustrative Data</p>
              <p className="text-xs text-slate-300">
                All statistics, donation totals, donor counts, and impact figures are sample data presented for design review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
