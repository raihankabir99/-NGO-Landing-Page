import React from 'react';
import { Heart, UserPlus, ShieldCheck, Award, Users, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroSectionProps {
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  showAnnotations?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDonateClick,
  onVolunteerClick,
  showAnnotations = false
}) => {
  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background scrim overlay with photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Smiling school children empowered by InAmigos Foundation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Design Annotation callout if enabled */}
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-2 max-w-3xl">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>UX Rationale (Hero):</strong> Human-centered photographic hero anchors emotional connection. Dual clear CTAs cater to both financial donors and time-contributing volunteers.
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust badge kicker - clean text with separator */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-500/30 px-3.5 py-1.5 rounded-lg backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Registered Non-Profit NGO Initiative</span>
              <span className="text-teal-600">·</span>
              <span>Section 80G Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Together, We Can Create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">Better Tomorrow.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Empowering communities, supporting children and creating opportunities through compassion and collective action. Join InAmigos Foundation in bringing light, learning, and food to families in need.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onDonateClick}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-3 text-base group active:scale-95"
              >
                <Heart className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onVolunteerClick}
                className="bg-slate-800/90 hover:bg-slate-800 text-white font-semibold px-7 py-4 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all flex items-center justify-center gap-2.5 text-base active:scale-95 backdrop-blur-sm"
              >
                <UserPlus className="w-5 h-5 text-teal-400" />
                <span>Become a Volunteer</span>
              </button>
            </div>

            {/* Quick Proof metrics strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">15,000+</p>
                <p className="text-xs text-slate-400 mt-0.5">Children Educated</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">250K+</p>
                <p className="text-xs text-slate-400 mt-0.5">Nutritious Meals</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">100%</p>
                <p className="text-xs text-slate-400 mt-0.5">Direct Impact</p>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800/90 shadow-2xl p-2 group hover:border-teal-500/50 transition-all duration-300">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={HERO_IMAGE}
                  alt="InAmigos children classroom learning"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 text-left space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-teal-400 uppercase tracking-wider">Active Spotlight</span>
                    <span className="text-slate-400 text-[11px]">Rural Learning Hubs</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    "Every child deserves books, mentors & hope."
                  </h3>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full w-[77%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 pt-0.5">
                    <span>₹385,000 Raised</span>
                    <span className="font-semibold text-teal-300">77% of ₹500,000 Goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
