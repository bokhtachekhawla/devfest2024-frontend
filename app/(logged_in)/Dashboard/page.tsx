// page.tsx
import React from 'react'
import { DashboardProps } from '../../../types/index'
import DashboardClient from './components/DashboardClient'

export default function Dashboard({ user }: DashboardProps) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden"> {/* Remove overflow scroll from here */}
      <DashboardClient user={user} />
    </div>
  )
}
