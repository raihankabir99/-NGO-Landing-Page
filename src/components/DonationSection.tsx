import React, { useState } from 'react';
import { Heart, Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { DonationCategory } from '../types';

interface DonationSectionProps {
  onProcessDonation: (data: {
    amount: number;
    frequency: 'Monthly' | 'One-time';
    category: string;
    impactDescription: string;
  }) => void;
  showAnnotations?: boolean;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  onProcessDonation,
  showAnnotations = false
}) => {
  const presetAmounts = [10, 25, 50, 100];
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [frequency, setFrequency] = useState<'Monthly' | 'One-time'>('Monthly');
  const [category, setCategory] = useState<DonationCategory>('education');
  const [inputError, setInputError] = useState<string>('');

  const categories = [
    { id: 'education', label: 'Child Education', icon: '📚' },
    { id: 'food', label: 'Nutrition & Meals', icon: '🍲' },
    { id: 'health', label: 'Health & Hygiene', icon: '🏥' },
    { id: 'relief', label: 'Community Relief', icon: '🤝' },
  ];

  const handleAmountSelect = (amt: number) => {
    setSelectedAmount(amt);
    setIsCustom(false);
    setCustomAmount('');
    setInputError('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setIsCustom(true);
    const num = parseFloat(val);
    if (!val) {
      setInputError('Please enter an amount');
    } else if (isNaN(num) || num <= 0) {
      setInputError('Enter a valid amount (Min $1)');
    } else if (num < 1) {
      setInputError('Minimum donation amount is $1');
    } else {
      setInputError('');
      setSelectedAmount(num);
    }
  };

  const activeAmount = isCustom ? (parseFloat(customAmount) || 0) : selectedAmount;

  const getImpactDescription = (amt: number, cat: DonationCategory) => {
    if (amt <= 0) return 'Select or enter an amount to see the tangible community impact.';
    
    if (cat === 'education') {
      if (amt < 25) return `Provides 2 specialized study workbooks and notebooks for a primary student.`;
      if (amt < 50) return `Supplies a full school bag with textbooks, geometry box & stationery kit.`;
      if (amt < 100) return `Funds 1 month of after-school remedial coaching & mentorship for an underprivileged student.`;
      return `Sponsors 2 students for an entire school term including books, uniform & digital tutoring.`;
    } else if (cat === 'food') {
      if (amt < 25) return `Provides 5 wholesome hot cooked meals for children.`;
      if (amt < 50) return `Feeds a family of four for 3 days with fresh grain and produce kits.`;
      if (amt < 100) return `Provides 2 weeks of balanced daily lunches and fruit for senior citizens.`;
      return `Supplies a comprehensive monthly grocery hamper for a vulnerable family.`;
    } else if (cat === 'health') {
      if (amt < 25) return `Provides 2 personal hygiene & sanitation kits (soaps, masks, dental care).`;
      if (amt < 50) return `Covers health screening and pediatric diagnostic checkup for a child.`;
      if (amt < 100) return `Funds prescription supplies & vision glasses for 2 elderly community members.`;
      return `Sponsors a mobile health screening clinic with doctor consultations & wellness supplies.`;
    } else {
      if (amt < 25) return `Provides emergency clean drinking water and hydration packs.`;
      if (amt < 50) return `Distributes warm blankets and emergency shelter supplies.`;
      if (amt < 100) return `Funds emergency disaster relief kit for a displaced household.`;
      return `Provides comprehensive community emergency recovery support package.`;
    }
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount < 1) {
      setInputError('Minimum donation amount is $1');
      return;
    }

    const categoryLabel = categories.find(c => c.id === category)?.label || 'General Community Fund';
    const impactText = getImpactDescription(activeAmount, category);

    onProcessDonation({
      amount: activeAmount,
      frequency,
      category: categoryLabel,
      impactDescription: impactText
    });
  };

  return (
    <section id="donation" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>UX Rationale (Feature 1 - Donation Demo):</strong> Preset cards combined with custom input and instant impact calculations improve engagement in this interactive demo flow.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            Feature 1: Interactive Donation Portal (Demo)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Small Contribution Can Change a Life
          </h2>
          <p className="text-base text-slate-600">
            Every contribution directly supports education, meals, and healthcare for children in need. Choose an amount or enter your custom gift.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Form & Amount Controls (7 cols) */}
          <form onSubmit={handleDonateSubmit} className="lg:col-span-7 p-6 sm:p-8 space-y-6 text-left">
            {/* Frequency Toggle (Monthly vs One-time) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Donation Frequency
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFrequency('Monthly')}
                  className={`py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    frequency === 'Monthly'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Give Monthly</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('One-time')}
                  className={`py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    frequency === 'One-time'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>One-time Contribution</span>
                </button>
              </div>
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Cause Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id as DonationCategory)}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      category === cat.id
                        ? 'border-teal-500 bg-teal-50/50 text-teal-900 ring-1 ring-teal-500'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="text-xs font-semibold mt-1">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Preset Amount Cards */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Amount (USD $)
              </label>
              <div className="grid grid-cols-4 gap-2.5">
                {presetAmounts.map((amt) => {
                  const isSelected = !isCustom && selectedAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountSelect(amt)}
                      className={`py-3 px-2 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-teal-600 bg-teal-600 text-white font-bold shadow-md shadow-teal-600/20 scale-[1.02]'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800 font-semibold'
                      }`}
                    >
                      <span className="text-base sm:text-lg">${amt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Or enter custom amount:
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-bold">
                  $
                </div>
                <input
                  type="number"
                  min="1"
                  step="5"
                  placeholder="Enter custom amount (e.g. 150)"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className={`block w-full pl-8 pr-4 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 ${
                    inputError
                      ? 'border-red-300 focus:ring-red-500 text-red-900'
                      : isCustom
                      ? 'border-teal-500 focus:ring-teal-500 text-slate-900 bg-teal-50/20'
                      : 'border-slate-200 focus:ring-teal-500 text-slate-900'
                  }`}
                />
              </div>
              {inputError && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{inputError}</span>
                </p>
              )}
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={activeAmount < 1 || !!inputError}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center justify-center gap-2 text-base active:scale-98"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>Donate ${activeAmount > 0 ? activeAmount.toLocaleString('en-US') : '0'} {frequency === 'Monthly' ? '/ Month' : 'Now'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            {/* Demo Disclaimer Note */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span className="flex items-center gap-1 text-teal-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Interactive Demo Portal
              </span>
              <span className="text-slate-400">No Real Payment Processed</span>
            </div>
          </form>

          {/* Right Column: Live Impact Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Sample Impact Calculator
                </span>
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-teal-500/30">
                  Demo Preview
                </span>
              </div>

              <div>
                <p className="text-slate-400 text-xs">Your Selected Gift:</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mt-1">
                  ${activeAmount > 0 ? activeAmount.toLocaleString('en-US') : '0'}
                  <span className="text-sm font-normal text-slate-400 ml-1.5">
                    {frequency === 'Monthly' ? '/ month' : 'one-time'}
                  </span>
                </p>
              </div>

              {/* Dynamic Impact Statement */}
              <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span>What your ${activeAmount} creates:</span>
                </div>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  "{getImpactDescription(activeAmount, category)}"
                </p>
              </div>

              {/* Allocation Breakdown */}
              <div className="space-y-2 text-xs">
                <p className="font-semibold text-slate-300 uppercase tracking-wider text-[10px]">Illustrative Allocation Model</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-slate-400">
                    <span>Direct Program Delivery</span>
                    <span className="font-semibold text-white">88%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-400 h-full w-[88%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Field Logistics (7%)</span>
                    <span>Admin & Operations (5%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Badge Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2 relative z-10">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Interactive demo summary generated upon completion (no financial transactions occur).</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
