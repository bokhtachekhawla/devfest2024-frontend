// components/layout/Layout.tsx
"use client"
import React, { useState } from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Bell, Search } from 'lucide-react'
import Image from 'next/image'

interface LayoutProps {
    children: React.ReactNode
    user: {
        name: string
        role: 'manager' | 'operator'
    }
}

export default function Structure({ children , user  }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true) // Pour gérer l'ouverture du sidebar
    const [activeTab, setActiveTab] = useState('') // Control active tab

    return (
        <div className="flex h-screen bg-gray-100 w-full">
            <Sidebar
                            isOpen={sidebarOpen}
                            toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
                            setActiveTab={(tab: string) => setActiveTab(tab)}
            />
            <main className="flex-1 overflow-y-auto">
                <div className="flex justify-between items-center w-full bg-white p-7">
                        <h2 className="text-3xl font-semibold text-gray-800">{activeTab}</h2>
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
                            <button type='button' title='profile' className="ml-4 flex items-center bg-white p-1 rounded-full shadow">
                                <Image 
                                src="/blank-profile-picture.png" 
                                 height={32}
                                 width={32} 
                                 alt="User" 
                                 className="h-8 w-8 rounded-full"
                                 />
                                {/* <ChevronDown className="h-4 w-4 ml-2 text-gray-500" /> */}
                            </button>
                        </div>
                </div>
                <div className="container mx-auto px-6 py-4 ">
                        {children}
                </div>
            </main>
        </div>
    )
}
