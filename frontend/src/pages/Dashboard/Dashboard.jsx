import React, { useState } from 'react';
import './Dashboard.css';

// Component Imports
import DashboardSidebar from '../../components/dashboard/DashboardSidebar/DashboardSidebar.jsx';
import DashboardTopbar from "../../components/dashboard/dashboardNavbar/DashboardTopbar.jsx";

// ग्रिड कम्पोनेन्टहरू (StatsGrid पनि थपिएको छ)
import StatsGrid from '../../components/dashboard/StatsGrid/StatsGrid.jsx';
import MainGrid from '../../components/dashboard/MainGrid/MainGrid.jsx';
import ToolsGrid from '../../components/dashboard/ToolsGrid/ToolsGrid.jsx';
import DashboardBottom from '../../components/dashboard/DashboardBottom/DashboardBottom.jsx';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="db-container">
      {/* Mobile Drawer Overlay Backdrop */}
      {isSidebarOpen && (
        <div className="db-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* 1. SIDEBAR CALL */}
      <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* VIEWPORT CONTROLLER WRAPPER */}
      <div className="db-main-wrapper">
        
        {/* 2. FIXED TOPBAR CALL */}
        <DashboardTopbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* 3. SCROLLABLE INNER PAGE DASHBOARD CONTENT */}
        <main className="db-content-body">
          
          {/* यहाँ तीनवटै प्रिमियम विजेटहरू कल गरियो */}
          <StatsGrid />
          <MainGrid />
          <ToolsGrid />
          <DashboardBottom />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;