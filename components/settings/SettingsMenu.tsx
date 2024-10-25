import React, { useState } from 'react';
import { FiLock, FiInfo, FiLogOut, FiTrash2 } from 'react-icons/fi';
import api from '@/lib/axios';

export const SettingsMenu: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Retrieve user_id from local storage
  const userId = localStorage.getItem('user');

  const handleLogout = async () => {
    try {
      await api.post(`/api/auth/logout/${userId}`);
      localStorage.removeItem('user'); // Remove user from local storage
      // Redirect or handle successful logout here
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleChangePassword = async () => {
    try {
      await api.post('/api/auth/change-password', {
        email,
        current_password: currentPassword,
        new_password: newPassword,
      });
      setShowChangePasswordModal(false)
      
      // Handle successful password change here
    } catch (error) {
      console.error("Password change failed:", error);
    }
  };

  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setNewPassword(randomPassword);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow p-6 w-full">
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <FiLock className="text-purple_button" />
          <button onClick={() => setShowChangePasswordModal(true)} className="text-purple_button font-semibold">
            Change Password
          </button>
        </li>
        <li className="flex items-center space-x-2">
          <FiLogOut className="text-purple_button" />
          <button onClick={() => setShowLogoutModal(true)} className="text-purple_button font-semibold">
            Disconnect
          </button>
        </li>
        <li className="flex items-center space-x-2">
          <FiTrash2 className="text-red-500" />
          <a href="/delete-account" className="text-red-500 font-semibold">Delete account</a>
        </li>
      </ul>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
            <p>Are you sure you want to disconnect?</p>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="modal">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full mb-4"
              placeholder="Enter your email"
              required
            />
            
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full mb-4"
              placeholder="Current Password"
              required
            />

            <div className="flex items-center space-x-2 mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border px-3 py-2 rounded-lg w-full"
                placeholder="New Password"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="text-blue-500">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            
            <button
              onClick={generatePassword}
              className="bg-purple_button text-white px-4 py-2 rounded mb-4"
            >
              Generate Password
            </button>
            
            <div className="flex justify-end space-x-4">
              <button
                className="bg-purple_button text-white px-4 py-2 rounded"
                onClick={handleChangePassword}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setShowChangePasswordModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
