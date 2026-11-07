import { Campaign, Testimonial, FAQItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_inamigos_humanitarian_1793979036646.jpg';
export const VOLUNTEER_IMAGE = '/src/assets/images/campaign_volunteer_team_1793979037862.jpg';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    title: 'Education for Every Child',
    category: 'education',
    shortDescription: 'Providing textbooks, digital learning kits, and certified tutoring for underprivileged primary students.',
    fullDescription: 'Education is the most powerful tool for breaking cycles of poverty. This initiative funds comprehensive learning packages including STEM workbooks, school bags, digital learning access, and after-school remedial classes led by qualified youth mentors across 24 rural communities.',
    targetAmount: 500000,
    raisedAmount: 385000,
    image: '/src/assets/images/campaign_education_child_1793979036946.jpg',
    donorsCount: 420,
    urgent: true
  },
  {
    id: 'camp-2',
    title: 'Food for Everyone Initiative',
    category: 'food',
    shortDescription: 'Distributing warm, freshly cooked nutritious meals and ration kits to vulnerable daily wage families.',
    fullDescription: 'No child should go to bed hungry. The Food for Everyone program runs community kitchens and mobile distribution vans supplying balanced meals (pulses, rice, vegetables, fruits) and monthly dry ration kits to low-income settlements and senior citizens.',
    targetAmount: 300000,
    raisedAmount: 240000,
    image: '/src/assets/images/campaign_food_distribution_1793979037345.jpg',
    donorsCount: 315
  },
  {
    id: 'camp-3',
    title: 'Community Health & Hygiene Camps',
    category: 'health',
    shortDescription: 'Free preventative healthcare checkups, diagnostic tests, and essential medicine distribution.',
    fullDescription: 'Bringing doctors, nurses, and diagnostics directly to underserved neighborhoods. Our health camps offer pediatrics, vision screening, dental checkups, maternal health guidance, and free essential medication distributions.',
    targetAmount: 400000,
    raisedAmount: 195000,
    image: '/src/assets/images/campaign_community_health_1793979038013.jpg',
    donorsCount: 188
  },
  {
    id: 'camp-4',
    title: "Children's Bright Future & Tech Literacy",
    category: 'education',
    shortDescription: 'Equipping youth centers with computer labs and vocational skill training for teens.',
    fullDescription: 'Preparing youth for the modern digital economy. We establish computer literacy labs in community centers, offering practical courses in basic coding, digital tools, communication skills, and career counseling.',
    targetAmount: 600000,
    raisedAmount: 510000,
    image: '/src/assets/images/campaign_children_future_1793979038156.jpg',
    donorsCount: 540,
    urgent: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Kumar',
    role: 'Beneficiary',
    title: 'Student & Science Enthusiast',
    quote: 'The study kit and after-school mentorship from InAmigos helped me score 92% in my 10th board exams. Now I dream of becoming a computer engineer!',
    impactNote: 'Received 2 years of educational scholarship and mentorship',
    avatarInitials: 'AK',
    avatarBg: 'bg-teal-600',
    location: 'Bangalore, Karnataka'
  },
  {
    id: 'test-2',
    name: 'Priya Sharma',
    role: 'Volunteer',
    title: 'Weekend Teaching Lead',
    quote: 'Volunteering with InAmigos Foundation changed my perspective on community work. Teaching math to bright, eager children every Saturday is the highlight of my week.',
    impactNote: 'Dedicated 120+ hours of weekend teaching',
    avatarInitials: 'PS',
    avatarBg: 'bg-slate-800',
    location: 'Pune, Maharashtra'
  },
  {
    id: 'test-3',
    name: 'Vikramaditya Roy',
    role: 'Supporter',
    title: 'Corporate CSR Partner',
    quote: 'InAmigos Foundation stands out for its exceptional transparency, live project reporting, and direct grassroots impact. We are proud long-term corporate donors.',
    impactNote: 'Sponsored 3 community nutrition centers',
    avatarInitials: 'VR',
    avatarBg: 'bg-emerald-700',
    location: 'Mumbai, Maharashtra'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'donations',
    question: 'Are contributions eligible for 80G Tax Exemption?',
    answer: 'Yes! All monetary contributions to InAmigos Foundation are eligible for tax deduction benefits under Section 80G of the Indian Income Tax Act. A formal tax receipt is instantly generated.'
  },
  {
    id: 'faq-2',
    category: 'donations',
    question: 'How much of my donation goes directly to beneficiaries?',
    answer: 'We maintain strict financial efficiency. 88% of every donation goes directly into program implementation (books, food, health supplies), 7% for grassroots operations, and 5% for administration.'
  },
  {
    id: 'faq-3',
    category: 'volunteering',
    question: 'Can I volunteer remotely or only on weekends?',
    answer: 'We offer flexible volunteer pathways! You can join weekend teaching drives on-ground or contribute remotely through digital mentoring, graphic design, social media, or translation.'
  },
  {
    id: 'faq-4',
    category: 'volunteering',
    question: 'Do volunteers receive a certificate of completion?',
    answer: 'Yes, after completing a minimum of 20 hours or participating in key campaign initiatives, volunteers receive an official Verified Certificate of Service from InAmigos Foundation.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'How can corporate organizations partner with InAmigos Foundation?',
    answer: 'We collaborate with corporate partners under CSR initiatives for custom education, health, or environmental projects. Reach out via our contact form or CSR hotline.'
  }
];

export const IMPACT_STATS = [
  {
    id: 'stat-1',
    number: '15,000+',
    label: 'Children Supported',
    subtext: 'Primary & secondary students receiving books, tuition & guidance',
    iconName: 'GraduationCap'
  },
  {
    id: 'stat-2',
    number: '120+',
    label: 'Educational Centers',
    subtext: 'Active learning units across urban slums & rural hamlets',
    iconName: 'BookOpen'
  },
  {
    id: 'stat-3',
    number: '250,000+',
    label: 'Meals Distributed',
    subtext: 'Nutritious hot meals and monthly dry ration packages delivered',
    iconName: 'Utensils'
  },
  {
    id: 'stat-4',
    number: '1,200+',
    label: 'Active Volunteers',
    subtext: 'Passionate youth and professionals making daily change',
    iconName: 'Users'
  }
];
