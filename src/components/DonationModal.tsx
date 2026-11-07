import React, { useState } from 'react';
import { DonationReceiptData } from '../types';
import { X, CheckCircle2, ShieldCheck, Download, Share2, Heart, Award, FileText } from 'lucide-react';

interface DonationModalProps {
  data: DonationReceiptData | null;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  const [donorNameInput, setDonorNameInput] = useState(data.donorName || 'Generous Donor');
  const [donorEmailInput, setDonorEmailInput] = useState(data.donorEmail || 'donor@example.com');
  const [isReceiptGenerated, setIsReceiptGenerated] = useState(true);
  const [printed, setPrinted] = useState(false);

  const handlePrintReceipt = () => {
    window.print();
    setPrinted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-teal-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Donation Receipt & Confirmation</h3>
              <p className="text-[10px] text-teal-400 font-mono">Receipt #{data.transactionId}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto text-left">
          {/* Success Banner */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-center space-y-1">
            <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Thank You for Your Generosity!</h4>
            <p className="text-xs text-slate-600">
              Your contribution helps build a brighter future for children in need.
            </p>
          </div>

          {/* Official Printable 80G Receipt Card */}
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-5 bg-slate-50 space-y-4 print:border-solid print:p-0">
            <div className="flex justify-between items-start border-b border-slate-200 pb-3">
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">InAmigos Foundation</p>
                <p className="text-[10px] text-slate-500">Registered NGO under Section 80G Tax Act</p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-300">
                80G TAX EXEMPT RECEIPT
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 text-[10px] uppercase block">Donation Amount</span>
                <span className="text-xl font-extrabold text-slate-900 font-mono">
                  ₹{data.amount.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-teal-700 font-semibold block">{data.frequency} Gift</span>
              </div>

              <div>
                <span className="text-slate-400 text-[10px] uppercase block">Selected Cause</span>
                <span className="font-bold text-slate-800">{data.category}</span>
                <span className="text-[10px] text-slate-500 block">{data.date}</span>
              </div>
            </div>

            {/* Impact Quote */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1">
                Direct Impact Delivered
              </span>
              <p className="text-slate-700 font-medium italic">
                "{data.impactDescription}"
              </p>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-200">
              <span>Transaction Ref: {data.transactionId}</span>
              <span className="font-semibold text-slate-600">Interactive Demo Receipt</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handlePrintReceipt}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-teal-400" />
            <span>{printed ? 'Printed / Saved' : 'Download Receipt (PDF)'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
