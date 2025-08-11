import React from "react";
import Sidebar from "../component/dashboardcomponents/sidebar";
import Navbar from "../component/dashboardcomponents/DashboardNavbar";
import { Outlet } from "react-router-dom";

function MainDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-64"> {/* ml-64 to offset fixed sidebar */}
        <Navbar />
        <main className="flex-1 bg-gray-100 overflow-y-auto h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainDashboard;
