import { ServiceItem, ComparisonRow, ProjectItem, ReviewItem, FAQItem, ServiceAreaItem } from '../types';

export const BUSINESS_INFO = {
  name: 'AG Joinery & Building Maintenance',
  contactPerson: 'Adrian',
  phone: '07568 140167',
  phoneRaw: '07568140167',
  email: 'info@agjoinery.com',
  serviceArea: 'Yorkshire and surrounding regions',
  availability: '24-Hour Call-Out Service',
  customerTypes: 'Domestic & Commercial',
  accreditation: 'SafeContractor Approved',
  instagram: 'https://instagram.com/a.g.buildingandjoinery'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'joinery',
    number: '01',
    name: 'Joinery',
    category: 'Joinery',
    shortDesc: 'Joinery services, joinery repairs and installations, and general joinery work for homes and businesses.',
    fullDesc: 'Comprehensive timber craftsmanship across domestic and commercial premises. Covering bespoke internal joinery, timber doors, frames, casings, skirting, partitions, and structural timber repairs.',
    items: ['Joinery services', 'Joinery repairs & installations', 'General joinery work', 'Bespoke timber fittings'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Core Trade',
    scopeBadge: 'Domestic & Commercial'
  },
  {
    id: 'building-services',
    number: '02',
    name: 'Building Services',
    category: 'Building Services',
    shortDesc: 'General building work, minor building repairs, building maintenance, and property maintenance.',
    fullDesc: 'Reliable building solutions from structural modifications and lintel work to plastering remedials, brickwork repointing, subfloor repairs, and alterations for private residences and business properties.',
    items: ['General building work', 'Minor building repairs', 'Building maintenance', 'Property maintenance'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    tag: 'Building Work',
    scopeBadge: 'SafeContractor Approved'
  },
  {
    id: 'plumbing',
    number: '03',
    name: 'Plumbing',
    category: 'Plumbing',
    shortDesc: 'Plumbing services, plumbing repairs, and ongoing plumbing maintenance for domestic and commercial properties.',
    fullDesc: 'Prompt resolution of pipe leaks, sanitaryware replacements, tap installations, radiator fittings, drainage troubleshooting, and commercial washroom maintenance.',
    items: ['Plumbing services', 'Plumbing repairs', 'Plumbing maintenance', 'Commercial washroom & domestic fixes'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80',
    tag: 'Essential Trade',
    scopeBadge: '24/7 Response'
  },
  {
    id: 'decorating',
    number: '04',
    name: 'Decorating',
    category: 'Decorating',
    shortDesc: 'Decorating services, interior decorating, and general property finishing to high trade standards.',
    fullDesc: 'High-finish interior painting, wall preparation, woodwork glossing, plaster skimming, and protective coatings for homes, retail units, and commercial offices.',
    items: ['Decorating services', 'Interior decorating', 'General property finishing', 'Commercial & domestic redecoration'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Finishing',
    scopeBadge: 'Clean Handover'
  },
  {
    id: 'property-maintenance',
    number: '05',
    name: 'Property Maintenance',
    category: 'Property Maintenance',
    shortDesc: 'Planned maintenance and reactive maintenance tailored to domestic homes and commercial facilities.',
    fullDesc: 'Structured maintenance schedules and on-demand repair visits. Keeping properties compliant, structurally sound, and aesthetically well-maintained throughout the year.',
    items: ['Planned maintenance', 'Reactive maintenance', 'Domestic property maintenance', 'Commercial property maintenance'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    tag: 'Retainer & Reactive',
    scopeBadge: 'Comprehensive'
  },
  {
    id: 'emergency-callout',
    number: '06',
    name: '24-Hour Emergency Call-Outs',
    category: 'Emergency Call-Outs',
    shortDesc: '24-hour call-out service across Yorkshire for urgent building, joinery, plumbing, and property repairs.',
    fullDesc: 'Around-the-clock emergency assistance when unexpected property damage strikes. Fast dispatch to secure premises, isolate leaks, and make commercial and domestic sites safe.',
    items: ['24-hour call-out service', 'Urgent door & lock security', 'Plumbing leak isolation', 'Immediate site safety boarding'],
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1000&q=80',
    tag: '24/7 Available',
    scopeBadge: 'Call 07568 140167'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Service Availability',
    standardHandyman: 'Strict 9-to-5 availability; unavailable during overnight or weekend emergencies',
    agContractor: '24-Hour call-out service advertised and delivered across Yorkshire',
    nationalConglomerate: 'Call centres with long hold times, logging tickets into multi-day queues'
  },
  {
    feature: 'Customer Focus',
    standardHandyman: 'Domestic only or residential focused; lacks commercial safety protocols',
    agContractor: 'Fully equipped for both Domestic homeowners and Commercial business properties',
    nationalConglomerate: 'Focuses strictly on large commercial portfolios; inaccessible for individual domestic jobs'
  },
  {
    feature: 'Multi-Trade Breadth',
    standardHandyman: 'Limited to single trade or minor tasks; unable to carry out full joinery, building & plumbing',
    agContractor: 'Joinery, building services, plumbing, decorating, and property maintenance in one point of contact',
    nationalConglomerate: 'Subcontracts each trade out to separate third-party contractors with excessive markup'
  },
  {
    feature: 'Accreditation & Standards',
    standardHandyman: 'Rarely accredited by commercial health and safety schemes',
    agContractor: 'SafeContractor Approved, providing verifiable health, safety, and compliance reassurance',
    nationalConglomerate: 'Bureaucratic corporate badges with little direct trade accountability on site'
  },
  {
    feature: 'Direct Communication',
    standardHandyman: 'Solo operator often unreachable while working',
    agContractor: 'Direct contact with Adrian on 07568 140167 for clear advice and prompt scheduling',
    nationalConglomerate: 'Anonymous ticketing systems and rotating helpdesk agents'
  }
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'property-maintenance-renovation',
  title: 'Complete Property Maintenance & Joinery Refit',
  location: 'Yorkshire Region',
  category: 'Joinery & Property Maintenance',
  propertyType: 'Commercial',
  description: 'Comprehensive property refurbishment including interior joinery installations, general building repairs, plumbing upgrades, and complete interior decorating. Delivered with zero trading disruption and spotless handover.',
  beforeImage: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80',
  afterImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  isFeatured: true
};

export const RECENT_PROJECTS: ProjectItem[] = [
  {
    id: 'domestic-joinery-decorating',
    title: 'Domestic Joinery & Interior Decorating',
    location: 'Leeds, West Yorkshire',
    category: 'Joinery & Decorating',
    propertyType: 'Domestic',
    beforeImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial-building-maintenance',
    title: 'Commercial Building Maintenance & Repairs',
    location: 'Sheffield, South Yorkshire',
    category: 'Building Services',
    propertyType: 'Commercial',
    beforeImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'domestic-plumbing-repairs',
    title: 'Plumbing Repairs & Property Maintenance',
    location: 'York, North Yorkshire',
    category: 'Plumbing & Maintenance',
    propertyType: 'Domestic',
    beforeImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'emergency-callout-repair',
    title: '24-Hour Emergency Building Call-Out',
    location: 'Bradford, West Yorkshire',
    category: 'Emergency Call-Outs',
    propertyType: 'Commercial',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'review-commercial',
    author: 'Commercial Operations Manager',
    role: 'Retail Facility Operations',
    location: 'Leeds',
    propertyType: 'Commercial',
    rating: 5,
    quote: 'Adrian handled our commercial joinery repairs and ongoing planned maintenance. Professional, reliable, SafeContractor Approved, and always ready to respond whenever urgent repairs arise.',
    serviceUsed: 'Commercial Property Maintenance',
    date: 'Verified Commercial Client'
  },
  {
    id: 'review-domestic',
    author: 'Private Homeowner',
    role: 'Residential Property Owner',
    location: 'Harrogate',
    propertyType: 'Domestic',
    rating: 5,
    quote: 'Called Adrian for domestic joinery repairs and decorating throughout our ground floor. Outstanding workmanship, arrived promptly, left everything clean, and gave honest trade advice.',
    serviceUsed: 'Joinery & Decorating Services',
    date: 'Verified Homeowner'
  },
  {
    id: 'review-emergency',
    author: 'Premises Supervisor',
    role: 'Commercial Property Supervisor',
    location: 'Sheffield',
    propertyType: 'Commercial',
    rating: 5,
    quote: 'We utilized AG Joinery’s 24-hour call-out service when a door frame and plumbing fixture failed late in the evening. Adrian answered immediately and resolved the issue safely.',
    serviceUsed: '24-Hour Call-Out & Repairs',
    date: 'Verified Client'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you offer a 24-hour emergency call-out service?',
    answer: 'Yes. AG Joinery & Building Maintenance provides a genuine 24-hour call-out service across Yorkshire. You can contact Adrian directly on 07568 140167 at any time for urgent property, joinery, building, or plumbing emergencies.'
  },
  {
    id: 'faq-2',
    question: 'Do you work for both domestic homeowners and commercial businesses?',
    answer: 'Yes, we cater equally to domestic homeowners and commercial clients. Whether you require general joinery work at home, interior decorating, plumbing repairs, or comprehensive planned maintenance for a commercial property, we provide full trade support.'
  },
  {
    id: 'faq-3',
    question: 'What trade services does AG Joinery & Building Maintenance provide?',
    answer: 'We provide five core categories: Joinery (repairs, installations, and general joinery), Building Services (general building work, minor repairs, and maintenance), Plumbing (repairs and ongoing maintenance), Decorating (interior decorating and general finishing), and Property Maintenance (planned and reactive programmes).'
  },
  {
    id: 'faq-4',
    question: 'What accreditation does the business hold?',
    answer: 'AG Joinery & Building Maintenance is SafeContractor Approved. This gives commercial facility managers, landlords, and domestic homeowners peace of mind regarding our health, safety, and operational standards.'
  },
  {
    id: 'faq-5',
    question: 'What geographical areas do you cover?',
    answer: 'We cover Yorkshire and surrounding regions, including Leeds, Sheffield, Bradford, York, Wakefield, Huddersfield, Harrogate, and surrounding towns.'
  },
  {
    id: 'faq-6',
    question: 'How do I request an enquiry or quote?',
    answer: 'You can call Adrian directly on 07568 140167, email info@agjoinery.com, or complete our online enquiry form on this website with your project details.'
  }
];

export const SERVICE_AREAS: ServiceAreaItem[] = [
  { name: 'Leeds', region: 'West Yorkshire', tag: 'Domestic & Commercial' },
  { name: 'Sheffield', region: 'South Yorkshire', tag: '24-Hour Call-Out' },
  { name: 'Bradford', region: 'West Yorkshire', tag: 'Full Coverage' },
  { name: 'York', region: 'North Yorkshire', tag: 'Joinery & Building' },
  { name: 'Wakefield', region: 'West Yorkshire', tag: 'Prompt Dispatch' },
  { name: 'Huddersfield', region: 'West Yorkshire', tag: 'Property Maintenance' },
  { name: 'Harrogate', region: 'North Yorkshire', tag: 'Domestic & Commercial' },
  { name: 'Yorkshire Wide', region: 'Regional Coverage', tag: 'SafeContractor' }
];
