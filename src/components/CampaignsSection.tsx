import React, { useState } from 'react';
import { CAMPAIGNS } from '../data/mockData';
import { Campaign } from '../types';
import { Heart, Users, ArrowRight, Sparkles, AlertCircle, Info } from 'lucide-react';

interface CampaignsSectionProps {
  onSelectCampaign: (campaign: Campaign) => void;
  onDonateCampaign: (campaign: Campaign) => void;
  showAnnotations?: boolean;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({
  onSelectCampaign,
  onDonateCampaign,
  showAnnotations = false
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCampaigns = filter === 'all'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === filter);

  return (
    <section id="campaigns" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>UX Rationale (Feature 4 - Campaigns):</strong> Progress bars with exact financial targets, percentage completed, and urgent badges create a sense of collective goal progression.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            Feature 4: Active Campaigns & Drives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Be Part of Something Meaningful
          </h2>
          <p className="text-base text-slate-600">
            Support our ongoing humanitarian initiatives. Every campaign addresses a specific community need with full goal visibility.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Campaigns ({CAMPAIGNS.length})
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'education'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Education & Tech
            </button>
            <button
              onClick={() => setFilter('food')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'food'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Food & Nutrition
            </button>
            <button
              onClick={() => setFilter('health')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'health'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Healthcare
            </button>
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCampaigns.map((campaign) => {
            const pct = Math.min(100, Math.round((campaign.raisedAmount / campaign.targetAmount) * 100));

            return (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
              >
                <div>
                  {/* Campaign Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {campaign.urgent && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <AlertCircle className="w-3 h-3" />
                        <span>Urgent Need</span>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-teal-300 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border border-teal-500/30">
                      {pct}% Funded
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                      {campaign.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {campaign.shortDescription}
                    </p>

                    {/* Progress Bar & Financials */}
                    <div className="pt-2 space-y-1.5">
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center text-xs pt-1">
                        <div>
                          <span className="font-bold text-slate-900 font-mono">${campaign.raisedAmount.toLocaleString('en-US')}</span>
                          <span className="text-slate-400 text-[10px] block">Raised</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-slate-600 font-mono">${campaign.targetAmount.toLocaleString('en-US')}</span>
                          <span className="text-slate-400 text-[10px] block">Goal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <div className="flex items-center text-[11px] text-slate-500 justify-between mb-2">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-teal-600" />
                      <strong>{campaign.donorsCount}</strong> Donors
                    </span>
                    <span className="text-slate-400">Sample Drive Data</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectCampaign(campaign)}
                      className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      <span>Learn More</span>
                    </button>

                    <button
                      onClick={() => onDonateCampaign(campaign)}
                      className="w-full py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white text-white" />
                      <span>Support</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
