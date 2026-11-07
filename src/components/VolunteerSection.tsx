import React, { useState } from 'react';
import { UserCheck, Sparkles, CheckCircle2, Shield, Heart, Award, ArrowRight, User } from 'lucide-react';
import { VOLUNTEER_IMAGE } from '../data/mockData';

interface VolunteerSectionProps {
  showAnnotations?: boolean;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({
  showAnnotations = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    areaOfInterest: 'Teaching & Child Mentorship',
    availability: 'Weekends'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [volunteerBadgeId, setVolunteerBadgeId] = useState('');

  const areasOfInterest = [
    'Teaching & Child Mentorship',
    'Food & Ration Distribution Drive',
    'Community Health Camps',
    'Social Media, Tech & Graphic Design',
    'Event Management & Field Logistics',
    'Youth Empowerment Workshops'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.location.trim()) errs.location = 'Location / City is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = 'HB-VOL-' + Math.floor(100000 + Math.random() * 900000);
      setVolunteerBadgeId(generatedId);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      areaOfInterest: 'Teaching & Child Mentorship',
      availability: 'Weekends'
    });
    setErrors({});
  };

  return (
    <section id="volunteer" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnnotations && (
          <div className="mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>UX Rationale (Feature 2 - Volunteer Demo):</strong> Clear field validations and instant generation of a personalized Volunteer Pass preview provides immediate feedback in this interactive demo.
            </span>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            Feature 2: Volunteer Registration (Demo)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Be the Reason Someone Smiles
          </h2>
          <p className="text-base text-slate-600">
            Join 1,200+ passionate volunteers dedicated to uplifting local communities. Your skills and time can ignite lifelong positive change.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Volunteer Application Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md text-left">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-teal-600" />
                    <span>Volunteer Application Form (Demo)</span>
                  </h3>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                    Demo Open Enrollment
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sophia Bennett"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : 'border-slate-200 focus:ring-teal-500 bg-white'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="sophia@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                          : 'border-slate-200 focus:ring-teal-500 bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 202-555-0147"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                          : 'border-slate-200 focus:ring-teal-500 bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New York, NY"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus:ring-2 ${
                      errors.location
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : 'border-slate-200 focus:ring-teal-500 bg-white'
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-red-600">{errors.location}</p>
                  )}
                </div>

                {/* Area of Interest & Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Area of Interest
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {areasOfInterest.map((area, idx) => (
                        <option key={idx} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Availability
                    </label>
                    <select
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Weekends">Weekends Only</option>
                      <option value="Weekdays">Weekdays</option>
                      <option value="Flexible">Flexible / Online</option>
                    </select>
                  </div>
                </div>

                {/* Submit Application Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base active:scale-98"
                >
                  <UserCheck className="w-5 h-5 text-teal-400" />
                  <span>Submit Demo Application</span>
                </button>
              </form>
            ) : (
              /* Success Confirmation & Pass Preview */
              <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    Demo Submission Received
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Welcome to HopeBridge, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for testing our volunteer portal demo. Please note that application information is stored temporarily in this demo session and is not sent to any server.
                  </p>
                </div>

                {/* Generated Volunteer Badge Card */}
                <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-2xl p-5 border border-teal-500/30 text-left space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-wider">Demo Volunteer Pass Preview</p>
                        <p className="text-[10px] text-teal-400 font-mono">Ref ID: {volunteerBadgeId}</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
                      DEMO APPLICANT PREVIEW
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-slate-400 text-[10px]">Volunteer Name</p>
                      <p className="font-semibold text-slate-100">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px]">Location</p>
                      <p className="font-semibold text-slate-100">{formData.location}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px]">Assigned Pillar</p>
                      <p className="font-semibold text-teal-300">{formData.areaOfInterest}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px]">Schedule</p>
                      <p className="font-semibold text-slate-100">{formData.availability}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-teal-600 hover:text-teal-700 underline"
                >
                  Test another application
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Friendly Volunteer Photography Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <div className="aspect-[4/3] relative">
                <img
                  src={VOLUNTEER_IMAGE}
                  alt="HopeBridge Volunteer Team smiling outdoors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                    Community Spirit
                  </span>
                  <p className="text-sm font-bold">
                    "Join hands with 1,200+ community volunteers."
                  </p>
                </div>
              </div>
            </div>

            {/* Volunteer Benefits */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Why Volunteer with HopeBridge?
              </h4>
              <ul className="space-y-3 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Receive a sample <strong>Certificate of Service</strong> for career & community recognition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Flexible commitments: Weekend community drives or online mentoring.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Build leadership, event management, and team collaboration skills.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
