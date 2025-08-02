import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back 👋</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h3 className="text-gray-600">Total Users</h3>
          <p className="text-2xl font-bold text-gray-800">1,234</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h3 className="text-gray-600">Active Sessions</h3>
          <p className="text-2xl font-bold text-gray-800">98</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h3 className="text-gray-600">Support Tickets</h3>
          <p className="text-2xl font-bold text-gray-800">17</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-600">
          <li>✅ John updated his profile</li>
          <li>📥 New user registered</li>
          <li>🔔 Notification settings changed</li>
        </ul>
      </div>
    </div>
  );
}
