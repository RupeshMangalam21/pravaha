'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { formatIndianCurrency } from '@/lib/utils/indiaSpecific'

export default function DoctorDashboard() {
  const todayStats = [
    { title: "Today's Appointments", value: '8', icon: '📅', color: 'bg-blue-100 text-blue-600' },
    { title: 'Total Patients', value: '156', icon: '👥', color: 'bg-green-100 text-green-600' },
    { title: 'Monthly Revenue', value: formatIndianCurrency(45000), icon: '💰', color: 'bg-purple-100 text-purple-600' },
    { title: 'Average Rating', value: '4.8', icon: '⭐', color: 'bg-yellow-100 text-yellow-600' },
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
              <p className="text-gray-600">Doctor Dashboard</p>
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
              <span className="text-4xl">👨‍⚕️</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome, Doctor!
              </h2>
              <p className="text-gray-600 text-lg">
                Ready to provide excellent healthcare today?
              </p>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todayStats.map((stat, index) => (
            <Card key={index}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}