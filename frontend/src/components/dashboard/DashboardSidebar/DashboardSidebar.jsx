import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import {
  Home, MessageSquare, BookOpen, BookMarked, BookText,
  Mic, PenTool, Languages, CalendarCheck, Users,
  BarChart3, Trophy, Star, Folder, History,
  Settings, HelpCircle, ChevronDown, ChevronUp, Bot, X, CheckCircle2
} from 'lucide-react';
import './DashboardSidebar.css';
 
export default function DashboardSidebar({ isOpen, onClose }) {
  const location = useLocation(); 

  // ड्रपडाउन कुन-कुन खुला राख्ने भनेर ट्र्याक गर्न
  const [openDropdowns, setOpenDropdowns] = useState({
    'Learn Nepali': false,
    'Classroom': false,
    'Study Materials': false
  });

  const toggleDropdown = (menuName, e) => {
    e.preventDefault(); // पेज रिफ्रेस हुनबाट रोक्न
    setOpenDropdowns(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  // ठ्याक्कै फोटोमा भएजस्तै सम्पूर्ण मेनु लिस्ट
  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'AI Tutor Chat', icon: MessageSquare, path: '/ai-tutor' },
    { 
      name: 'Learn Nepali', 
      icon: BookOpen, 
      path: '/learn',
      subItems: [
        { name: 'Alphabets (वर्णमाला)', path: '/learn/alphabets' },
        { name: 'Vocabulary Basics', path: '/learn/basics' },
      ]
    },
    { name: 'Vocabulary', icon: BookMarked, path: '/vocabulary' },
    { name: 'Grammar', icon: BookText, path: '/grammar' },
    { name: 'Speaking Practice', icon: Mic, path: '/speaking' },
    { name: 'Writing Practice', icon: PenTool, path: '/writing' },
    { name: 'Translation Tool', icon: Languages, path: '/translation' },
    { name: 'Daily Challenge', icon: CalendarCheck, path: '/challenge' },
    { 
      name: 'Classroom', 
      icon: Users, 
      path: '/classroom',
      subItems: [
        { name: 'My Classes', path: '/classroom/my-classes' },
        { name: 'Live Sessions', path: '/classroom/live' },
      ]
    },
    { name: 'Progress', icon: BarChart3, path: '/progress' },
    { name: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
    { name: 'Achievements', icon: Star, path: '/achievements' },
    { 
      name: 'Study Materials', 
      icon: Folder, 
      path: '/materials',
      subItems: [
        { name: 'PDF Notes', path: '/materials/pdf' },
        { name: 'Audio Lessons', path: '/materials/audio' },
      ]
    },
    { name: 'History', icon: History, path: '/history' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Help & Support', icon: HelpCircle, path: '/support' },
  ];

  // यदि प्रयोगकर्ता सब-मेनुको URL मा छ भने ड्रपडाउन आफैं खुला राख्ने लजिक
  useEffect(() => {
    navItems.forEach(item => {
      if (item.subItems && item.subItems.some(sub => location.pathname.includes(sub.path))) {
        setOpenDropdowns(prev => ({ ...prev, [item.name]: true }));
      }
    });
  }, [location.pathname]);
 
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && <div className="sidebar__overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
 
        {/* Top Logo Section */}
        <div>
          <div className="sidebar__top">
            <div className="sidebar__brand">
              <div className="sidebar__logo">
                <Bot />
              </div>
              <div>
                <h1 className="sidebar__title">AI Nepali</h1>
                <p className="sidebar__subtitle">Learning Assistant</p>
              </div>
            </div>
            <button onClick={onClose} className="sidebar__close-btn">
              <X />
            </button>
          </div>
 
          {/* Navigation Items */}
          <nav className="sidebar__nav">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const hasSubmenu = Boolean(item.subItems);
              const isDropdownOpen = openDropdowns[item.name];
              
              // मेन लिङ्क वा त्यसको सब-लिङ्क एक्टिभ हुँदा रङ फेर्न
              const isActive = location.pathname === item.path || 
                (hasSubmenu && item.subItems.some(sub => location.pathname === sub.path));
 
              return (
                <div key={index} className="sidebar__nav-item-wrapper">
                  <Link
                    to={hasSubmenu ? '#' : item.path}
                    onClick={(e) => {
                      if (hasSubmenu) {
                        toggleDropdown(item.name, e);
                      } else {
                        onClose();
                      }
                    }}
                    className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
                  >
                    <div className="sidebar__link-content">
                      <Icon className="sidebar__link-icon" />
                      <span>{item.name}</span>
                    </div>
                    
                    {/* ड्रपडाउनको एरो (Chevron) */}
                    {hasSubmenu && (
                      isDropdownOpen ? 
                        <ChevronUp className="sidebar__chevron" /> : 
                        <ChevronDown className="sidebar__chevron" />
                    )}
                  </Link>

                  {/* Sub-menu items render */}
                  {hasSubmenu && isDropdownOpen && (
                    <div className="sidebar__submenu">
                      {item.subItems.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          onClick={onClose}
                          className={`sidebar__sub-link ${location.pathname === sub.path ? 'sidebar__sub-link--active' : ''}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
 
        {/* Bottom Premium Card */}
        <div className="sidebar__bottom">
          <div className="sidebar__upgrade">
            <h4 className="sidebar__upgrade-title">
              Upgrade to Premium <span className="sidebar__upgrade-sparkle">✨</span>
            </h4>
            <ul className="sidebar__upgrade-list">
              <li><CheckCircle2 className="sidebar__upgrade-check" /> Unlimited AI Chat</li>
              <li><CheckCircle2 className="sidebar__upgrade-check" /> PDF Upload (50MB)</li>
              <li><CheckCircle2 className="sidebar__upgrade-check" /> Advanced Analytics</li>
              <li><CheckCircle2 className="sidebar__upgrade-check" /> Ad-free Experience</li>
            </ul>
            <button className="sidebar__upgrade-btn">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}