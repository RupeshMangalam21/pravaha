export const INDIAN_STATES = [
  { code: 'CH', name: 'Chandigarh' },
  { code: 'PB', name: 'Punjab' },
  { code: 'DL', name: 'Delhi' },
  { code: 'HR', name: 'Haryana' },  
  { code: 'UP', name: 'Uttar Pradesh' },
  { code: 'MH', name: 'Maharashtra' },
  { code: 'KA', name: 'Karnataka' },
  { code: 'TN', name: 'Tamil Nadu' }
];

export const INDIAN_MEDICAL_SPECIALTIES = [
  'General Practice / Family Medicine',
  'Internal Medicine',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Orthopedics',
  'Gynecology & Obstetrics',
  'Neurology',
  'Psychiatry',
  'Ophthalmology',
  'ENT (Otorhinolaryngology)',
  'Gastroenterology',
  'Ayurveda',
  'Homeopathy',
  'Unani Medicine',
  'Dentistry'
];

export const formatIndianCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatIndianPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/[\s-+()]/g, '');

  if (cleaned.length === 10) {
    return `+91-${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
  } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
    const number = cleaned.slice(2);
    return `+91-${number.slice(0, 5)}-${number.slice(5)}`;
  }

  return phone;
};