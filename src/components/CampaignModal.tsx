import React from 'react';
import { Campaign } from '../types';
import { X, Heart, Users, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CampaignModalProps {
  campaign: Campaign | null;
  onClose: () => void;
  onDonate: (campaign: Campaign) => void;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({
  campaign,
  onClose,
  onDonate
}) => {
  if (!campaign) return null;

  const pct = Math.min(100, Math.round((campaign.raisedAmount / campaign.targetAmount) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Image Banner */}
        <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
          <img
            src={campaign.image}
            alt={campaign.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-500/30 px-2.5 py-0.5 rounded-full">
              {campaign.category} Initiative
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {campaign.title}
            </h3>
          </div>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 space-y-6 overflow-y-auto text-left">
          {/* Progress Bar Strip */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900">Funding Progress</span>
              <span className="font-mono font-bold text-teal-600">{pct}% Raised</span>
            </div>
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-600 pt-1 font-mono">
              <span>Raised: <strong>₹{campaign.raisedAmount.toLocaleString('en-IN')}</strong></span>
              <span>Goal: <strong>₹{campaign.targetAmount.toLocaleString('en-IN')}</strong></span>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              About This Campaign
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {campaign.fullDescription}
            </p>
          </div>

          {/* Campaign Key Highlights */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-teal-600 shrink-0" />
              <div>
                <span className="font-bold text-slate-900 block">{campaign.donorsCount} Donors</span>
                <span className="text-[10px] text-slate-500">Active supporters</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold text-slate-900 block">80G Tax Deductible</span>
                <span className="text-[10px] text-slate-500">Instant certificate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onDonate(campaign);
            }}
            className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white text-white" />
            <span>Support This Campaign</span>
          </button>
        </div>
      </div>
    </div>
  );
};
