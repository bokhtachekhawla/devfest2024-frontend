import React, { useState } from 'react';
import { ProfileSectionProps } from '@/types/index'; // Adjust the path accordingly
import Image from 'next/image'; // Adjust the path accordingly
import {FaPlus } from 'react-icons/fa'; // Import necessary icons

export const ProfileSection: React.FC<ProfileSectionProps> = ({ fullName, gender, email, role }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [searchResults, setSearchResults] = useState<any>(null);
    const [profilePicture, setProfilePicture] = useState('/blank-profile-picture.png'); // Default profile picture path

    // Local state for managing the inputs when editing
    const [formData, setFormData] = useState({
        fullName,
        gender,
        email,
        role
    });

    // State for new employer form
    const [newEmployer, setNewEmployer] = useState({
        fullName: '',
        gender: '',
        email: '',
        password: '',
        role: 'manager', // default value
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleNewEmployerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewEmployer({
            ...newEmployer,
            [name]: value,
        });
    };

    const generatePassword = () => {
        const randomPassword = Math.random().toString(36).slice(-8);
        setNewEmployer((prev) => ({ ...prev, password: randomPassword }));
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleAddForm = () => setShowAddForm(!showAddForm);

    // Handle search and profile picture upload
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === 'john') {
            setSearchResults({
                fullName: 'John Doe',
                gender: 'Male',
                email: 'john.doe@example.com',
                password: 'password123',
                role: 'manager',
            });
        } else {
            setSearchResults(null);
        }
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <>
            <div className="bg-white rounded-lg shadow p-4 sm:p-6 w-full relative">
                <button
                    className="absolute top-3 right-3 bg-purple_button text-white px-2 py-1 rounded"
                    onClick={() => setIsEditable(!isEditable)}
                >
                    {isEditable ? 'Save' : 'Edit'}
                </button>

                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                    <Image
                        src={profilePicture} // Dynamic profile picture
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
                            name="fullName"
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
                            name="gender"
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
                            name="email"
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
                            name="role"
                            className="border p-2 rounded-md w-full"
                            value={formData.role}
                            readOnly={true}
                            title="Role"
                            placeholder="Enter your role"
                        />
                    </div>
                </div>
            </div>

            {/* Employer Management Button */}
            <div className="mt-6 flex justify-center w-full">
                <button
                    className="bg-purple_button text-white py-2 px-6 rounded-md w-full sm:max-w-xs"
                    onClick={toggleModal}
                >
                    Employers Management
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:max-w-lg">
                        <div className="flex justify-between items-center mb-4">
                            <button onClick={toggleModal} className="text-gray-500">Back</button>
                            <h2 className="text-xl font-semibold">Employers Management</h2>
                            <button onClick={toggleModal} className="text-gray-500">X</button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center mb-4">
                            <input
                                type="text"
                                placeholder="Search Managers/Operators"
                                className="border p-2 rounded-md w-full"
                                onChange={handleSearch}
                            />
                            <button
                                className="bg-purple_button text-white p-2 rounded-md ml-2"
                                onClick={toggleAddForm}
                            >
                                -<FaPlus />
                            </button>
                        </div>

                        {/* Display Search Results or Form */}
                        {searchResults ? (
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="border p-2 rounded-md w-full"
                                        value={searchResults.fullName}
                                        readOnly={!isEditable}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        className="border p-2 rounded-md w-full"
                                        value={searchResults.gender}
                                        readOnly={!isEditable}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="border p-2 rounded-md w-full"
                                        value={searchResults.email}
                                        readOnly={!isEditable}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Password</label>
                                    <div className="flex items-center">
                                        <input
                                            type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                            name="password"
                                            className="border p-2 rounded-md flex-grow"
                                            value={newEmployer.password}
                                            onChange={handleNewEmployerChange}
                                            title="Password"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            className="bg-blue-500 text-white px-3 py-2 rounded-md"
                                            onClick={generatePassword}
                                        >
                                            Generate
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-gray-500 text-white px-3 py-2 rounded-md ml-2" // Styling for the show/hide button
                                            onClick={togglePasswordVisibility} // Toggle function for password visibility
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                             {/* // Button text based on visibility state */}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold">Role</label>
                                    <input
                                        type="text"
                                        name="role"
                                        className="border p-2 rounded-md w-full"
                                        value={searchResults.role}
                                        readOnly={!isEditable}
                                    />
                                </div>
                                {isEditable && (
                                    <div className="flex space-x-2">
                                        <button className="bg-purple_button text-white px-4 py-2 rounded-md">
                                            Save
                                        </button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </form>
                        ) : showAddForm ? (
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.fullName}
                                        onChange={handleNewEmployerChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.gender}
                                        onChange={handleNewEmployerChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.email}
                                        onChange={handleNewEmployerChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Password</label>
                                    <div className="flex items-center">
                                        <input
                                            type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                            name="password"
                                            className="border p-2 rounded-md flex-grow"
                                            value={newEmployer.password}
                                            onChange={handleNewEmployerChange}
                                            title="Password"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            className="bg-blue-500 text-white px-3 py-2 rounded-md"
                                            onClick={generatePassword}
                                        >
                                            Generate
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-gray-500 text-white px-3 py-2 rounded-md ml-2" // Styling for the show/hide button
                                            onClick={togglePasswordVisibility} // Toggle function for password visibility
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="role" className="block text-sm font-semibold">Role</label>
                                    <select
                                        id="role"
                                        name="role"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.role}
                                        onChange={handleNewEmployerChange as React.ChangeEventHandler<HTMLSelectElement>}
                                    >
                                        <option value="manager">Manager</option>
                                        <option value="operator">Operator</option>
                                    </select>
                                </div>
                                <button className="bg-purple_button text-white px-4 py-2 rounded-md" type="submit">
                                    Add Employer
                                </button>
                            </form>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
};
