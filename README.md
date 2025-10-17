# Pravaha Healthcare Management System - Next.js 14

**Pravaha - Your partner in Good Health!**

A modern healthcare management system built with Next.js 14, TypeScript, and Tailwind CSS, designed specifically for the Indian healthcare market.

## 🎯 Features

### 🇮🇳 India-Specific
- 100+ Medical Specialties (Ayurveda, Homeopathy, Unani)
- Indian Phone Validation (+91 format)
- INR Currency Formatting
- Multi-language Support (Hindi, English, Punjabi)
- Operating Cities: Chandigarh, Mohali, New Delhi

### 🏥 Healthcare Features
- **Patient Portal**: Doctor search, appointments, medical records
- **Doctor Dashboard**: Practice management, patient analytics
- **Admin Panel**: System monitoring, user management
- **Firebase Integration**: Authentication, Firestore, Storage

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.3
- **Backend**: Firebase (Auth, Firestore, Storage)
- **UI Components**: Custom components with Tailwind
- **Deployment**: Vercel, Netlify, or Firebase Hosting

## 📦 Installation

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Quick Start

```bash
# 1. Extract and navigate
cd pravaha-healthcare-nextjs

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**Your app will open at:** `http://localhost:3000`

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check  # Check TypeScript
```

## 🌟 Project Structure

```
pravaha-healthcare-nextjs/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/       # Dashboard routes
│   │   ├── patient/
│   │   ├── doctor/
│   │   └── admin/
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── auth/             # Auth components
├── lib/                   # Utilities
│   ├── firebase/         # Firebase config
│   └── utils/            # Helper functions
├── types/                 # TypeScript types
├── hooks/                 # Custom hooks
└── public/               # Static assets
```

## 🔥 Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Enable Storage
5. Copy your Firebase config
6. Update `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the 'out' folder to Netlify
```

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Deploy
firebase deploy
```

## 💰 Monetization

### Patient Plans
- **Free**: ₹0 - Basic features
- **Premium**: ₹500/month - All features

### Doctor Plans
- **Basic**: ₹2,000/month - 50 appointments
- **Professional**: ₹5,000/month - Unlimited appointments
- **Premium**: ₹10,000/month - All features


## 📱 Mobile Responsive

- Perfect mobile experience
- Touch-friendly interface
- PWA ready

## 🔒 Security

- Firebase Authentication
- Role-based access control
- Secure API routes
- Healthcare data protection

---

**Pravaha - Your partner in Good Health!** 🏥💙🇮🇳

*Built with Next.js 14 - The modern way to build React applications*
