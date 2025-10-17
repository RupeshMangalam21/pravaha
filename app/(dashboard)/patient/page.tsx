'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function PatientDashboard() {
  const quickActions = [
    {
      title: 'Find Doctors',
      description: 'Search for healthcare professionals',
      icon: '🔍',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'My Appointments',
      description: 'View and manage appointments',
      icon: '📅',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Medical Records',
      description: 'Access your medical history',
      icon: '📄',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'My Profile',
      description: 'Update your information',
      icon: '👤',
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <div className="min-h-screen health-gradient">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <span className="text-3xl">🏥</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Pravaha</h1>
              <p className="text-gray-600">Your partner in Good Health!</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline">Sign Out</Button>
          </Link>
        </div>

        {/* Welcome */}
        <Card className="bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-100 border-0 shadow-lg mb-8">
          <div className="flex items-center space-x-6">
            <div className="bg-white p-4 rounded-full shadow-md">
              <span className="text-4xl">👋</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome back!
              </h2>
              <p className="text-gray-600 text-lg">
                How can we help you with your health today?
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} hover>
              <div className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center mb-4`}>
                <span className="text-2xl">{action.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 text-lg">{action.title}</h4>
              <p className="text-sm text-gray-600">{action.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}