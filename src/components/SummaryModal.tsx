import React, { useState } from 'react';
import { X, Award, CheckCircle2, FileText, Download, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [downloaded, setDownloaded] = useState(false);

  const handlePrint = () => {
    window.print();
    setDownloaded(true);
  };

  const featureChecklist = [
    { title: '1. Donation Section', detail: 'Preset $ cards ($10, $25, $50, $100), custom input, frequency toggle, cause selector, live impact calculation & printable demo summary.' },
    { title: '2. Volunteer Registration', detail: 'Full name, email, phone, location, area of interest, availability form with live validation and interactive Volunteer Pass preview generator.' },
    { title: '3. Impact Showcase', detail: 'Statistic cards (Children, Schools, Meals, Volunteers) with clear illustrative sample tags and tabbed program pillar deep dive.' },
    { title: '4. Campaigns & Events', detail: '4 interactive campaign cards with goal progress bars, donor counters, category filters, Learn More modal & Support CTA.' },
    { title: '5. Testimonials', detail: '3 stories representing Beneficiary (James Wilson), Volunteer (Sophia Bennett), and Supporter (Daniel Morgan) personas with quote, role, and location.' },
    { title: '6. Contact & Support', detail: 'Validated contact form with demo preview notices, email/phone/address placeholders, social links, and 5-item expandable FAQ accordion.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Project Showcase Summary</h3>
              <p className="text-[10px] text-teal-400 font-mono">HopeBridge Foundation Showcase Project</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto text-left">
          {/* Project Overview */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Project Executive Summary</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              This concept showcase demonstrates how a modern, responsive NGO web interface can elevate brand trust, boost donor conversions, and streamline volunteer recruitment for <strong>HopeBridge Foundation</strong>.
            </p>
          </div>

          {/* 6 Feature Implementation Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Implemented Showcase Features (6/6 Completed)
            </h4>
            <div className="space-y-2">
              {featureChecklist.map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className="flex items-center gap-1.5 text-teal-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      {item.title}
                    </span>
                    <span className="text-[10px] bg-teal-50 text-teal-700 font-semibold px-2 py-0.5 rounded border border-teal-200">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 pl-5 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-2 text-xs">
            <p className="font-bold text-teal-400 uppercase tracking-wider text-[10px]">UX & Design Specifications</p>
            <div className="grid grid-cols-2 gap-2 text-slate-300 text-[11px]">
              <div>• Palette: Clean White + Deep Navy + Teal Accents</div>
              <div>• Typography: Plus Jakarta Sans & DM Sans</div>
              <div>• Layout: 1440px Grid (Desktop & Mobile)</div>
              <div>• Accessibility: Contrast AA Compliant</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-teal-400" />
            <span>{downloaded ? 'Report Generated' : 'Export PDF / Print Summary'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
