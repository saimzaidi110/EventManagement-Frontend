import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // User data fetch from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-600 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 animate-fade-in">
        {/* Header Section */}
        <div className="flex items-center space-x-6">
          <img
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-600 shadow-lg hover:scale-105 transition-transform duration-300"
            src={user.image || "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{user.username}</h2>
            <p className="text-gray-500">{user.email}</p>
            <span className="inline-block mt-3 bg-green-100 text-green-700 text-xs px-4 py-1 rounded-full">
              Active Member
            </span>
          </div>
        </div>

        {/* About & Details Section */}
        <div className="mt-10 space-y-8">
          {/* About */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600">
              {user.about ||
                "No description provided. You can edit your profile to add more details about yourself."}
            </p>
          </div>

          {/* Details */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Details</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Location:</strong> {user.location || "Not specified"}
              </li>
              <li>
                <strong>Joined:</strong> {user.joined || "Unknown"}
              </li>
              <li>
                <strong>Role:</strong> {user.role || "User"}
              </li>
            </ul>
          </div>

          {/* Edit Button */}
          <div className="text-right">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
