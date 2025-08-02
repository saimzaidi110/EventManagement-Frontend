import React from 'react';

export default function SettingPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6 max-w-2xl">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Account</h2>
          <p className="text-sm text-gray-500">Manage your account settings</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Email Notifications</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Manage
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Privacy Settings</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Change Password</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
