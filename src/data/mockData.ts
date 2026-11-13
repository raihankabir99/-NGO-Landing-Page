import { Campaign, Testimonial, FAQItem } from '../types';

export const HERO_IMAGE = '/assets/images/hero_inamigos_humanitarian_1793979036646.jpg';
export const VOLUNTEER_IMAGE = '/assets/images/campaign_volunteer_team_1793979037862.jpg';

export const ORG_INFO = {
  name: 'HopeBridge Foundation',
  tagline: 'Together We Build a Better Tomorrow',
  email: 'hello@hopebridge.example',
  phone: '+1 202-555-0147',
  address: '120 Green Avenue, New York, USA',
  director: 'Daniel Morgan',
  volunteer: 'Sophia Bennett',
  beneficiary: 'James Wilson'
};

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    title: 'Education for Every Child',
    category: 'education',
    shortDescription: 'Providing textbooks, digital learning kits, and certified tutoring for underprivileged primary students.',
    fullDescription: 'Education is the most powerful tool for breaking cycles of poverty. This initiative funds comprehensive learning packages including STEM workbooks, school bags, digital learning access, and after-school remedial classes led by qualified mentors across 24 communities.',
    targetAmount: 50000,
    raisedAmount: 38500,
    image: '/assets/images/campaign_education_child_1793979036946.jpg',
    donorsCount: 420,
    urgent: true
  },
  {
    id: 'camp-2',
    title: 'Food for Everyone Initiative',
    category: 'food',
    shortDescription: 'Distributing warm, freshly prepared nutritious meals and emergency grocery hampers to vulnerable families.',
    fullDescription: 'No child should go to bed hungry. The Food for Everyone program runs community kitchens and mobile distribution vans supplying balanced meals and monthly dry ration kits to low-income settlements and senior citizens.',
    targetAmount: 30000,
    raisedAmount: 24000,
    image: '/assets/images/campaign_food_distribution_1793979037345.jpg',
    donorsCount: 315
  },
  {
    id: 'camp-3',
    title: 'Community Health & Hygiene Camps',
    category: 'health',
    shortDescription: 'Free preventative healthcare checkups, diagnostic tests, and essential wellness kit distribution.',
    fullDescription: 'Bringing medical professionals and diagnostics directly to underserved neighborhoods. Our health camps offer pediatric care, vision screening, dental checkups, maternal health guidance, and free essential wellness supplies.',
    targetAmount: 40000,
    raisedAmount: 19500,
    image: '/assets/images/campaign_community_health_1793979038013.jpg',
    donorsCount: 188
  },
  {
    id: 'camp-4',
    title: "Children's Bright Future & Tech Literacy",
    category: 'education',
    shortDescription: 'Equipping youth centers with computer labs and vocational skill training for teens.',
    fullDescription: 'Preparing youth for the modern digital economy. We establish computer literacy labs in community centers, offering practical courses in basic coding, digital tools, communication skills, and career counseling.',
    targetAmount: 60000,
    raisedAmount: 51000,
    image: '/assets/images/campaign_children_future_1793979038156.jpg',
    donorsCount: 540,
    urgent: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'James Wilson',
    role: 'Beneficiary',
    title: 'Student & Science Enthusiast',
    quote: 'The study kit and after-school mentorship from HopeBridge helped me excel in my science exams. Now I dream of becoming a software engineer!',
    impactNote: 'Received 2 years of educational scholarship and mentorship',
    avatarInitials: 'JW',
    avatarBg: 'bg-teal-600',
    location: 'New York, NY'
  },
  {
    id: 'test-2',
    name: 'Sophia Bennett',
    role: 'Volunteer',
    title: 'Weekend Teaching Lead',
    quote: 'Volunteering with HopeBridge Foundation changed my perspective on community work. Teaching math to bright, eager children every Saturday is the highlight of my week.',
    impactNote: 'Dedicated 120+ hours of weekend teaching',
    avatarInitials: 'SB',
    avatarBg: 'bg-slate-800',
    location: 'Brooklyn, NY'
  },
  {
    id: 'test-3',
    name: 'Daniel Morgan',
    role: 'Supporter',
    title: 'Director & CSR Partner',
    quote: 'HopeBridge Foundation stands out for its transparent project reporting, community engagement, and direct grassroots impact. We are proud long-term supporters.',
    impactNote: 'Sponsored 3 community nutrition centers',
    avatarInitials: 'DM',
    avatarBg: 'bg-emerald-700',
    location: 'New York, NY'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'donations',
    question: 'How does the donation demo work?',
    answer: 'This portal is an interactive frontend demonstration. No real financial payment is processed, no money is transferred, and no official tax receipt is issued.'
  },
  {
    id: 'faq-2',
    category: 'donations',
    question: 'How are funds allocated in the sample model?',
    answer: 'In our illustrative showcase model, 88% of contributions support direct program delivery (supplies, meals, books), 7% field logistics, and 5% administration.'
  },
  {
    id: 'faq-3',
    category: 'volunteering',
    question: 'Can I volunteer remotely or on weekends?',
    answer: 'We showcase flexible volunteer pathways! Volunteers can participate in weekend community drives or contribute remotely through digital mentoring and graphic design.'
  },
  {
    id: 'faq-4',
    category: 'volunteering',
    question: 'Are volunteer applications saved or processed?',
    answer: 'No. This application form is a frontend design demo. Submitted information is stored temporarily in your browser session for preview purposes and is not transmitted to any server.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'Is HopeBridge Foundation an operational organization?',
    answer: 'No. HopeBridge Foundation is a fictional NGO identity designed exclusively for frontend demonstration, portfolio presentation, and UI/UX feature evaluation.'
  }
];

export const IMPACT_STATS = [
  {
    id: 'stat-1',
    number: '15,000+',
    label: 'Children Supported',
    subtext: 'Primary & secondary students receiving books, tuition & guidance (Illustrative Sample Data)',
    iconName: 'GraduationCap'
  },
  {
    id: 'stat-2',
    number: '120+',
    label: 'Educational Centers',
    subtext: 'Active learning units across underserved communities (Illustrative Sample Data)',
    iconName: 'BookOpen'
  },
  {
    id: 'stat-3',
    number: '250,000+',
    label: 'Meals Distributed',
    subtext: 'Nutritious hot meals and monthly dry grocery packages delivered (Illustrative Sample Data)',
    iconName: 'Utensils'
  },
  {
    id: 'stat-4',
    number: '1,200+',
    label: 'Active Volunteers',
    subtext: 'Passionate youth and professionals making daily change (Illustrative Sample Data)',
    iconName: 'Users'
  }
];
