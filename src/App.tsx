import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DonationSection } from './components/DonationSection';
import { VolunteerSection } from './components/VolunteerSection';
import { ImpactSection } from './components/ImpactSection';
import { CampaignsSection } from './components/CampaignsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { DonationModal } from './components/DonationModal';
import { CampaignModal } from './components/CampaignModal';

import { Campaign, DonationReceiptData } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [receiptData, setReceiptData] = useState<DonationReceiptData | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  // Scroll handler helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Process donation callback from DonationSection
  const handleProcessDonation = (data: {
    amount: number;
    frequency: 'Monthly' | 'One-time';
    category: string;
    impactDescription: string;
  }) => {
    const receipt: DonationReceiptData = {
      donorName: 'Generous Supporter',
      donorEmail: 'donor@example.com',
      amount: data.amount,
      frequency: data.frequency,
      category: data.category,
      transactionId: 'DEMO-REF-2026-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      impactDescription: data.impactDescription
    };

    setReceiptData(receipt);
  };

  // Support campaign direct trigger from Campaign card
  const handleSupportCampaign = (campaign: Campaign) => {
    scrollToSection('donation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      {/* 2. NGO Main Responsive Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onDonateClick={() => scrollToSection('donation')}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onDonateClick={() => scrollToSection('donation')}
          onVolunteerClick={() => scrollToSection('volunteer')}
          showAnnotations={false}
        />

        {/* About Us Section */}
        <AboutSection
          onLearnMoreClick={() => scrollToSection('impact')}
          showAnnotations={false}
        />

        {/* Feature 1: Donation Portal */}
        <DonationSection
          onProcessDonation={handleProcessDonation}
          showAnnotations={false}
        />

        {/* Feature 2: Volunteer Registration */}
        <VolunteerSection
          showAnnotations={false}
        />

        {/* Feature 3: Impact Showcase */}
        <ImpactSection
          showAnnotations={false}
        />

        {/* Feature 4: Campaigns & Events */}
        <CampaignsSection
          onSelectCampaign={(c) => setSelectedCampaign(c)}
          onDonateCampaign={handleSupportCampaign}
          showAnnotations={false}
        />

        {/* Feature 5: Testimonials */}
        <TestimonialsSection
          showAnnotations={false}
        />

        {/* Feature 6: Contact, Support & FAQ */}
        <ContactSection
          showAnnotations={false}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onDonateClick={() => scrollToSection('donation')}
        onVolunteerClick={() => scrollToSection('volunteer')}
      />

      {/* Interactive Modals */}
      <DonationModal
        data={receiptData}
        onClose={() => setReceiptData(null)}
      />

      <CampaignModal
        campaign={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        onDonate={handleSupportCampaign}
      />

    </div>
  );
}
