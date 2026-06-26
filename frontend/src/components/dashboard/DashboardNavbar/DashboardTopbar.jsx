import React from 'react';
import './DashboardTopbar.css';
import { Menu, Flame, ChevronDown, Bell, Zap } from 'lucide-react';

export default function DashboardTopbar({ onMenuClick }) {
  return (
    <header className="db-topbar">
      {/* Left Section: Mobile Toggler & Greeting */}
      <div className="db-topbar-left">
        <button onClick={onMenuClick} className="db-menu-btn" aria-label="Open Side Panel">
          <Menu size={22} />
        </button>
        <div className="db-greeting">
          <h1>
            नमस्ते, Ngema Sherpa! <span className="wave-emoji">👋</span>
          </h1>
          <p>आज के सिक्न चाहनुहुन्छ?</p>
        </div>
      </div>

      {/* Right Section: Badges, Notification & User Profile */}
      <div className="db-topbar-right">
        
        {/* 1. Streak Badge (With Fire Glow) */}
        <div className="badge-streak">
          <div className="flame-icon-wrapper">
            <Flame size={15} className="flame-icon" />
          </div>
          <div className="streak-info">
            <span className="streak-count">7</span>
            <span className="streak-label">Day Streak</span>
          </div>
        </div>

        {/* 2. Level Component (Exact Match to your Design) */}
        <div className="badge-level">
          <div className="level-icon-wrapper">
            <Zap size={14} className="level-bolt" />
          </div>
          <div className="level-details">
            <div className="level-header">
              <span className="level-text">Level 12</span>
              <span className="xp-text">XP 3200 / 4500</span>
            </div>
            <div className="level-progress-bar">
              <div className="level-progress-fill" style={{ width: '71%' }} />
            </div>
          </div>
        </div>

        <div className="db-divider" />

        {/* 3. Notification Bell with Count Badge */}
        <button className="db-notif-btn" aria-label="Notifications">
          <Bell size={19} />
          <span className="notif-badge">3</span>
        </button>

        {/* 4. Profile Dropdown Trigger */}
        <button className="db-avatar-btn">
          <div className="avatar-wrapper">
            <img 
              className="db-avatar-img" 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Ngema Sherpa" 
            />
            <span className="status-dot online"></span>
          </div>
          <div className="avatar-info">
            <span className="avatar-name">Ngema Sherpa</span>
            <span className="avatar-role">Student</span>
          </div>
          <ChevronDown size={14} className="avatar-chevron" />
        </button>

      </div>
    </header>
  );
}