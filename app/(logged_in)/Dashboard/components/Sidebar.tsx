import React from 'react';
import { SidebarProps } from '../../../../types/index';
import { SIDEBAR_ITEMS } from '../../../../constants/index';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, setActiveTab }) => {
  return (
    <aside
      className={`bg-white  transition-all duration-500 ease-in-out transform ${isOpen ? 'w-64' : 'w-20'} flex flex-col overflow-y-auto custom-scrollbar`}
    >
      <div className="p-5  flex justify-between items-center relative">
        {/* Logo Section */}
        <div className={`flex items-center justify-center transform transition-all duration-500 ${isOpen ? 'w-full' : 'p-5'}`}>
          <Image
            src='/logo.png'
            alt="Logo"
            className={`transition-all duration-500 transform ${isOpen ? 'opacity-100' : 'opacity-0 scale-0'}`}
            width={isOpen ? 100 : 0}  // Dynamically resize the logo
            height={isOpen ? 100 : 0}
          />
        <button
          onClick={toggleSidebar}
          className={`absolute transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-300 ${isOpen ? 'rotate-0 top-1/2 right-2' : 'rotate-180 top-1/2 '} `}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 p-4 space-y-1">
        <ul className="space-y-4">
          {SIDEBAR_ITEMS.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => setActiveTab(item.name)} // Set active tab on click
                className={`relative flex items-center px-3 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-purple_button hover:text-white ${isOpen ? 'justify-start' : 'justify-center'} text-gray-700`}
              >
                <item.icon size={24} className="text-purple_logo" />
                
                {/* Tooltip when sidebar is collapsed */}
                {!isOpen && (
                  <span className="absolute left-full ml-4 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </span>
                )}

                {/* Display item name when sidebar is open */}
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

      {/* Footer */}
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
