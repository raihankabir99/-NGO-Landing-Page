import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ShieldCheck, Share2 } from 'lucide-react';

interface ContactSectionProps {
  showAnnotations?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  showAnnotations = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSent(true);
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>UX Rationale (Feature 6 - Contact & FAQ Demo):</strong> Pair direct contact channels with an expandable FAQ accordion to answer common questions in a clean frontend demo.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            Feature 6: Contact, Support & FAQ (Demo)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Make a Difference Together
          </h2>
          <p className="text-base text-slate-600">
            Have questions about sample donations, volunteering, or corporate partnerships? Explore our demo contact interface.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Form & Info Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Info Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5 break-all">hello@hopebridge.example</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">+1 202-555-0147</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Office Address</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">120 Green Avenue, New York, USA</p>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-teal-600" />
                <span>Send Us a Demo Message</span>
              </h3>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Daniel Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-300 focus:ring-red-500 bg-red-50/20' : 'border-slate-200 focus:ring-teal-500'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="daniel@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                          errors.email ? 'border-red-300 focus:ring-red-500 bg-red-50/20' : 'border-slate-200 focus:ring-teal-500'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Donation & Receipt Support">Donation & Receipt Support</option>
                      <option value="Volunteer Programs">Volunteer Opportunities</option>
                      <option value="Corporate Partnership">Corporate Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How can we help or collaborate with you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-300 focus:ring-red-500 bg-red-50/20' : 'border-slate-200 focus:ring-teal-500'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Demo Message</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Demo Message Preview</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for testing the contact form. This is a frontend demonstration — no email was sent and no reply will be sent.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="text-xs font-semibold text-teal-600 hover:text-teal-700 underline"
                  >
                    Send another demo message
                  </button>
                </div>
              )}
            </div>

            {/* Social Media Links Strip */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-400">Social Media Links (Demo)</p>
                <p className="text-xs text-slate-300 mt-0.5">Non-interactive sample social profile indicators.</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {['Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'Facebook'].map((net, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700 select-none cursor-default"
                  >
                    {net} <span className="text-[10px] text-slate-500">(Demo)</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/80 transition-colors flex items-center justify-between gap-3 text-sm font-semibold text-slate-900"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic">
              * Contact information and forms presented above are illustrative demo placeholders for the HopeBridge Foundation frontend project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
