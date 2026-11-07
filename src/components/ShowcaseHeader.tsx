import React from 'react';
import { Eye, Award, CheckCircle2, FileText, Sparkles } from 'lucide-react';

interface ShowcaseHeaderProps {
  showAnnotations: boolean;
  setShowAnnotations: (show: boolean) => void;
  activeFeature: string;
  onNavigateFeature: (featureId: string) => void;
  onOpenSummaryModal: () => void;
}

export const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({
  showAnnotations,
  setShowAnnotations,
  activeFeature,
  onNavigateFeature,
  onOpenSummaryModal
}) => {
  const features = [
    { id: 'donation', label: '1. Donation' },
    { id: 'volunteer', label: '2. Volunteer' },
    { id: 'impact', label: '3. Impact' },
    { id: 'campaigns', label: '4. Campaigns' },
    { id: 'testimonials', label: '5. Testimonials' },
    { id: 'contact', label: '6. Contact & Support' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 border-b border-slate-800 text-xs py-2 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Project title & Internship Tag */}
        <div className="flex items-center gap-2">
          <span className="bg-teal-500/20 text-teal-300 font-semibold px-2 py-0.5 rounded border border-teal-500/30 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            Internship Showcase Project
          </span>
          <span className="hidden sm:inline font-medium text-slate-300">
            InAmigos Foundation – NGO Website Feature Concept
          </span>
        </div>

        {/* Middle: Direct Jump to 6 Key Features */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none max-w-full">
          <span className="text-slate-400 font-medium mr-1 hidden md:inline">Features:</span>
          {features.map((feat) => (
            <button
              key={feat.id}
              onClick={() => onNavigateFeature(feat.id)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeFeature === feat.id
                  ? 'bg-teal-600 text-white font-medium shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {feat.label}
            </button>
          ))}
        </div>

        {/* Right: Controls & Annotations toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors border ${
              showAnnotations
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-medium'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Toggle UX Design Notes explaining project choices"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showAnnotations ? 'UX Notes: ON' : 'UX Notes: OFF'}</span>
          </button>

          <button
            onClick={onOpenSummaryModal}
            className="px-2.5 py-1 rounded bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold flex items-center gap-1 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Submission Summary</span>
          </button>
        </div>
      </div>
    </div>
  );
};
