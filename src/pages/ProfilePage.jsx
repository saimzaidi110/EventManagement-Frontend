import React from 'react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <div className="flex items-center space-x-6">
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
            <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Active Member
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
            <p className="text-gray-600">
              Hello! I'm John, a software developer with a passion for creating clean and user-friendly applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Details</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>Location:</strong> New Delhi, India</li>
              <li><strong>Joined:</strong> Jan 2023</li>
              <li><strong>Role:</strong> Frontend Developer</li>
            </ul>
          </div>

          <div className="text-right">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
