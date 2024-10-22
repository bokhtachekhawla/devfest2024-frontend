// components/layout/Layout.tsx
"use client"
import React, { useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true) // Pour gérer l'ouverture du sidebar

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
              isOpen={sidebarOpen}
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)} setActiveTab={function (): void {
                  throw new Error('Function not implemented.')
              } }      />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
