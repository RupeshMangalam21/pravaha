'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function AdminPanel() {
  return (
    <div className="min-h-screen health-gradient">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <span className="text-3xl">🛡️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Pravaha Admin</h1>
              <p className="text-gray-600">System Management</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline">Sign Out</Button>
          </Link>
        </div>

        <Card>
          <div className="text-center py-12">
            <span className="text-6xl">🛡️</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
              Admin Panel
            </h2>
            <p className="text-gray-600">
              Manage the Pravaha healthcare platform
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}