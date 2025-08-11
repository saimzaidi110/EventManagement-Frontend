import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="profile" className="hover:text-gray-300">Profile</Link></li>
        <li><Link to="users" className="hover:text-gray-300">Users</Link></li>
        <li><Link to="createevent" className="hover:text-gray-300">CreateEvent</Link></li>
        <li><Link to="events" className="hover:text-gray-300">Expo & Events</Link></li>
        <li><Link to="exhibitorrequestlist" className="hover:text-gray-300">Exhibitor Request</Link></li>
        <li><Link to="setting" className="hover:text-gray-300">Settings</Link></li>
        <li><Link to="help" className="hover:text-gray-300">Help</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
