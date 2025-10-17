import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pravaha - Your partner in Good Health!',
  description: 'Complete healthcare management system for India. Connect with doctors, manage appointments, and access medical records.',
  keywords: ['healthcare', 'India', 'doctors', 'appointments', 'medical records', 'Chandigarh', 'Mohali', 'Delhi'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}