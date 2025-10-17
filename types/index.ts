export interface UserProfile {
  uid: string;
  email: string;
  role: 'patient' | 'doctor' | 'admin';
  profile: {
    firstName: string;
    lastName: string;
    avatar?: string;
    phone: string;
    dateOfBirth: Date;
    gender: 'male' | 'female' | 'other';
  };
  location: {
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  subscription: {
    tier: string;
    status: 'active' | 'inactive' | 'trial';
    expiresAt: Date;
    features: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface DoctorProfile {
  userId: string;
  professionalInfo: {
    specialty: string;
    subSpecialties: string[];
    experience: number;
    education: Array<{
      degree: string;
      institution: string;
      year: number;
    }>;
    languages: string[];
    registrationNumber: string;
  };
  practiceInfo: {
    clinicName?: string;
    clinicAddress: string;
    consultationFee: number;
  };
  ratings: {
    average: number;
    count: number;
  };
}

export type UserRole = 'patient' | 'doctor' | 'admin';