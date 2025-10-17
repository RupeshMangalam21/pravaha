import Link from 'next/link'
import { 
  HeartIcon, 
  CalendarDaysIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const features = [
    {
      icon: CalendarDaysIcon,
      title: 'Easy Appointment Scheduling',
      description: 'Book, reschedule, or cancel appointments with just a few clicks across India.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Digital Medical Records',
      description: 'Securely store and access your medical history, prescriptions, and reports.'
    },
    {
      icon: UserGroupIcon,
      title: 'Find Specialists',
      description: 'Discover qualified doctors and specialists including Ayurveda, Homeopathy.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Compliant',
      description: 'Your medical data is protected with enterprise-grade security standards.'
    }
  ]

  return (
    <div className="min-h-screen health-gradient">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HeartIcon className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-gray-900">Pravaha</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-primary-600 transition-colors">
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <span className="text-4xl">🏥</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your partner in
            <span className="text-primary-600 block">Good Health!</span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect patients with healthcare professionals through India's most comprehensive 
            healthcare management platform. Starting with Chandigarh, Mohali, and New Delhi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/register?role=patient"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-lg transition-colors text-lg"
            >
              I'm a Patient
            </Link>
            <Link 
              href="/register?role=doctor"
              className="bg-white hover:bg-gray-50 text-primary-600 font-medium py-4 px-8 rounded-lg border-2 border-primary-600 transition-colors text-lg"
            >
              I'm a Healthcare Professional
            </Link>
          </div>

          {/* Success Indicator */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-green-600 text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Next.js System Running!
              </h3>
              <p className="text-gray-600 mb-4">
                Complete healthcare management system for India
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-semibold text-primary-600">🇮🇳</div>
                  <div>Made for India</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">🏥</div>
                  <div>100+ Specialties</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600">💙</div>
                  <div>Secure & Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need for better healthcare
          </h3>
          <p className="text-lg text-gray-600">
            Streamlined tools for patients and healthcare providers across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Cities */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Now Available in Major Indian Cities
            </h3>
            <p className="text-lg text-gray-600">
              Starting our healthcare revolution in North India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { city: 'Chandigarh', state: 'Union Territory', icon: '🏛️' },
              { city: 'Mohali', state: 'Punjab', icon: '🏢' },
              { city: 'New Delhi', state: 'National Capital', icon: '🏛️' }
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{city.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{city.city}</h4>
                <p className="text-gray-600">{city.state}</p>
                <div className="mt-4 flex items-center justify-center text-sm text-green-600">
                  <CheckIcon className="h-4 w-4 mr-1" />
                  Now Available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HeartIcon className="h-6 w-6" />
                <span className="text-xl font-bold">Pravaha</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your partner in Good Health! Connecting patients with healthcare professionals across India.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">For Patients</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/register?role=patient" className="hover:text-white">Find Doctors</Link></li>
                <li><Link href="/register?role=patient" className="hover:text-white">Book Appointments</Link></li>
                <li><Link href="/register?role=patient" className="hover:text-white">Medical Records</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">For Doctors</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/register?role=doctor" className="hover:text-white">Join Platform</Link></li>
                <li><Link href="/register?role=doctor" className="hover:text-white">Manage Practice</Link></li>
                <li><Link href="/register?role=doctor" className="hover:text-white">Analytics</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pravaha Healthcare. All rights reserved. Made with ❤️ for India 🇮🇳</p>
          </div>
        </div>
      </footer>
    </div>
  )
}