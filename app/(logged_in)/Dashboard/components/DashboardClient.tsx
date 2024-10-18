'use client'
import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { StatCard } from './StatCard'
import { ChartCard } from './ChartComponent'
import { STAT_CARDS, CHART_CARDS, SIDEBAR_ITEMS } from '../../../../constants/index'
import { DashboardProps } from '../../../../types/index'
import { Bell, Search, ChevronDown } from 'lucide-react'
export default function DashboardClient({ user }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('Dashboard') // Control active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {STAT_CARDS.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CHART_CARDS.map((card, index) => (
                <ChartCard key={index} {...card} />
              ))}
            </div>
          </div>
        )
      case 'Machine Monitoring':
        return <div>Machine Monitoring Content</div>
      case 'Production Metrics':
        return <div>Production Metrics Content</div>
      // Add cases for other tabs here
      default:
        return <div>Select a tab to view content</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        setActiveTab={setActiveTab} // Pass function to handle active tab
      />
      <main className="flex-1 overflow-y-auto bg-gray-100"> {/* Handles scrolling here */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center w-full mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center">
              <div className="relative">
                <input type="text" placeholder="Search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <button type="button" title="Notifications" className="ml-4 bg-white p-2 rounded-full shadow">
                <Bell className="h-6 w-6 text-gray-500" />
              </button>
              <button className="ml-4 flex items-center bg-white p-2 rounded-full shadow">
                <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
                <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
              </button>
            </div>
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
