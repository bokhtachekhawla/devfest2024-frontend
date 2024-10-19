import React, { useState } from 'react';
import { ProfileSectionProps } from '@/types/index'; // Adjust the path accordingly
import Image from 'next/image'; // Adjust the path accordingly

export const ProfileSection: React.FC<ProfileSectionProps> = ({ fullName, gender, email, role }) => {
  const [isEditable, setIsEditable] = useState(false);

  // Local state for managing the inputs when editing
  const [formData, setFormData] = useState({
    fullName,
    gender,
    email,
    role
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 w-full relative">
        {/* Edit button */}
        <button
          className="absolute top-3 right-3 bg-purple_button text-white px-2 py-1 rounded"
          onClick={() => setIsEditable(!isEditable)}
        >
          {isEditable ? 'Save' : 'Edit'}
        </button>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <Image
            src="/blank-profile-picture.png" // Update with actual image path
            alt="Profile"
            className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mb-4"
            width={96}
            height={96}
          />
          <h3 className="text-xl sm:text-2xl font-semibold text-purple_logo text-center">{formData.fullName}</h3>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="w-full">
            <label className="text-sm font-semibold text-black block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName" // Add name to link with state
              className="border p-2 rounded-md w-full"
              value={formData.fullName}
              onChange={handleChange}
              readOnly={!isEditable}
              title="Full Name"
              placeholder="Enter your full name"
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-semibold text-black block mb-1">Gender</label>
            <input
              type="text"
              name="gender" // Add name to link with state
              className="border p-2 rounded-md w-full"
              value={formData.gender}
              onChange={handleChange}
              readOnly={!isEditable}
              title="Gender"
              placeholder="Enter your gender"
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-semibold text-black block mb-1">Email</label>
            <input
              type="email"
              name="email" // Add name to link with state
              className="border p-2 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
              readOnly={!isEditable}
              title="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-semibold text-black block mb-1">Role</label>
            <input
              type="text"
              name="role" // Add name to link with state
              className="border p-2 rounded-md w-full"
              value={formData.role}
              readOnly={true}
              title="Role"
              placeholder="Enter your role"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full mx-auto">
        <button className="bg-purple_button text-white py-2 px-6 rounded-md w-full sm:max-w-xs">Manage Manager</button>
        <button className="bg-purple_button text-white py-2 px-6 rounded-md w-full sm:max-w-xs">Manage Operator</button>
      </div>
    </>
  );
};
