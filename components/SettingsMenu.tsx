import React from 'react';
import { FiLock, FiInfo, FiLogOut, FiTrash2 } from 'react-icons/fi';

export const SettingsMenu: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-6 w-full">
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <FiLock className="text-purple_button" />
          <a href="/change-password" className="text-purple_button font-semibold">Change Password</a>
        </li>
        <li className="flex items-center space-x-2">
          <FiLogOut className="text-purple_button" />
          <a href="/logout" className="text-purple_button font-semibold">Disconnect</a>
        </li>
        <li className="flex items-center space-x-2">
          <FiTrash2 className="text-red-500" />
          <a href="/delete-account" className="text-red-500 font-semibold">Delete account</a>
        </li>
      </ul>
    </div>
  );
};
