import React from 'react';
import { SidebarProps } from '@/types/index';
import { SIDEBAR_ITEMS } from '@/constants/index';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, setActiveTab }) => {
  return (
    <aside
      className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-24'} flex flex-col overflow-y-auto`}
    >
      <div className="p-4 border-b flex justify-between items-center relative">
        <div
          className={`flex items-center justify-center ${isOpen ? 'w-full' : 'w-20'}`}>
          <Image
            src='/logo.png'
            alt="Logo"
            className={`transition-all duration-300 ${isOpen ? 'w-32' : 'hidden'}`}
            width={isOpen ? 128 : 0}
            height={isOpen ? 128 : 0}
          />
        </div>
        <button
          onClick={toggleSidebar}
          className={`absolute right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 ${isOpen ? 'top-1/2' : 'top-1/2 m-auto'}`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <ul className="space-y-4">
          {SIDEBAR_ITEMS.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => setActiveTab(item.name)} // Set active tab on click
                className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-purple_button hover:text-white ${isOpen ? 'justify-start' : 'justify-center'} text-gray-700`}
              >
                <item.icon size={24} className="text-purple_logo" />
                {isOpen && (
                  <span className="ml-4 font-semibold text-black">
                    {item.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>


      <footer className="p-4 text-center">
        {isOpen && (
          <p className="text-sm text-gray-500">
            © 2024 Your Brand
          </p>
        )}
      </footer>
    </aside>
  );
};
