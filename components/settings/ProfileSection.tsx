import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import api from "@/lib/axios";

interface User {
  id: number;
  full_name: string;
  email: string;
  gender: string;
  created_at: string;
  updated_at: string;
}

export const ProfileSection: React.FC = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [searchResults, setSearchResults] = useState<any>(null);
    const [profilePicture, setProfilePicture] = useState('/blank-profile-picture.png');
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        email: '',
    });

    const [newEmployer, setNewEmployer] = useState({
        full_name: '',
        gender: '',
        email: '',
        password: '',
        role: 'manager',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('user');
            if (!userId) {
                setError('User ID not found in localStorage');
                setIsLoading(false);
                return;
            }

            try {
                const response = await api.get(`/api/users/${userId}`);
                const userData = response.data.data;
                setUser(userData);
                setFormData({
                    fullName: userData.full_name,
                    gender: userData.gender,
                    email: userData.email,
                });
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Failed to fetch user data. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

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

    const handleAddEmployer = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/users', newEmployer);
            const newUser = response.data.data;
            console.log('New user created:', newUser);
            // Reset the form
            setNewEmployer({
                full_name: '',
                gender: '',
                email: '',
                password: '',
                role: 'manager',
            });
            // Close the add form
            setShowAddForm(false);
            // You might want to update the UI to show the new user or provide feedback
        } catch (err) {
            console.error('Error creating new user:', err);
            setError('Failed to create new user. Please try again later.');
        }
    };

    const generatePassword = () => {
        const randomPassword = Math.random().toString(36).slice(-8);
        setNewEmployer((prev) => ({ ...prev, password: randomPassword }));
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleAddForm = () => setShowAddForm(!showAddForm);

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

    const handleSave = async () => {
        if (!user) return;

        try {
            const response = await api.put(`/api/users/${user.id}`, {
                full_name: formData.fullName,
                gender: formData.gender,
                email: formData.email,
            });

            if (response.status === 200) {
                setUser(response.data.data);
                setIsEditable(false);
            }
        } catch (err) {
            console.error('Error updating user data:', err);
            setError('Failed to update user data. Please try again later.');
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <>
            <div className="bg-white rounded-lg shadow p-4 sm:p-6 w-full relative">
                <button
                    className="absolute top-3 right-3 bg-purple_button text-white px-2 py-1 rounded"
                    onClick={() => isEditable ? handleSave() : setIsEditable(true)}
                >
                    {isEditable ? 'Save' : 'Edit'}
                </button>

                <div className="flex flex-col items-center mb-4 sm:mb-6">
                    <Image
                        src={profilePicture}
                        alt="Profile"
                        className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mb-4"
                        width={96}
                        height={96}
                    />

                    <h3 className="text-xl sm:text-2xl font-semibold text-purple_logo text-center">{formData.fullName}</h3>
                </div>

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
                        <label className="text-sm font-semibold text-black block mb-1">Created At</label>
                        <input
                            type="text"
                            name="createdAt"
                            className="border p-2 rounded-md w-full"
                            value={new Date(user.created_at).toLocaleString()}
                            readOnly={true}
                            title="Created At"
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
                                <FaPlus />
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
                                            type={showPassword ? 'text' : 'password'}
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
                                            className="bg-gray-500 text-white px-3 py-2 rounded-md ml-2"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
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
                            <form className="space-y-4" onSubmit={handleAddEmployer}>
                                <div>
                                    <label className="block text-sm font-semibold">Full Name</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.full_name}
                                        onChange={handleNewEmployerChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Gender</label>
                                    <select
                                        name="gender"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.gender}
                                        onChange={handleNewEmployerChange}
                                        required
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Email</label>
                                
                                    <input
                                        type="email"
                                        name="email"
                                        className="border p-2 rounded-md w-full"
                                        value={newEmployer.email}
                                        onChange={handleNewEmployerChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Password</label>
                                    <div className="flex items-center">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            className="border p-2 rounded-md flex-grow"
                                            value={newEmployer.password}
                                            onChange={handleNewEmployerChange}
                                            title="Password"
                                            placeholder="Enter your password"
                                            required
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
                                            className="bg-gray-500 text-white px-3 py-2 rounded-md ml-2"
                                            onClick={togglePasswordVisibility}
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
                                        onChange={handleNewEmployerChange}
                                        required
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