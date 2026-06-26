import React from 'react';
import { Calendar, RefreshCw, BookOpen, Clock, Flame, Shield, ArrowRight, CloudLightning } from 'lucide-react';
import './DashboardBottom.css';

export default function DashboardBottom() {
  // १. Achievements Badges Data
  const badges = [
    { id: 1, img: "🟢", title: "पहिलो पाठ", desc: "Complete", color: "green" },
    { id: 2, img: "🔥", title: "7 दिन Streak", desc: "Achiever", color: "orange" },
    { id: 3, img: "📘", title: "100 Notes", desc: "Create 100 notes", color: "blue" },
    { id: 4, img: "⭐", title: "1000 XP", desc: "Earn 1000 XP", color: "purple" },
  ];

  // २. AI Recommendations Data
  const recommendations = [
    { id: 1, title: "10 MCQ on Cell Structure", sub: "Based on your weak areas", icon: <Calendar size={16} />, color: "blue" },
    { id: 2, title: "Nepali Grammar Practice", sub: "Improve your language skills", icon: <BookOpen size={16} />, color: "red" },
    { id: 3, title: "Newton's Law Revision", sub: "Quick revision for better scores", icon: <RefreshCw size={16} />, color: "green" },
  ];

  // ३. Recent Activity Data
  const activities = [
    { id: 1, text: "Photosynthesis को नोट डाउनलोड गर्नुभयो", time: "2 minutes ago", xp: "+20 XP", icon: <BookOpen size={14} />, color: "blue" },
    { id: 2, text: "Cell Structure Quiz पूरा गर्नुभयो", time: "35 minutes ago", xp: "+15 XP", icon: <Calendar size={14} />, color: "green" },
    { id: 3, text: "Smart Notes: Newton's Law पढ्नुभयो", time: "1 hour ago", xp: "+25 XP", icon: <Clock size={14} />, color: "purple" },
    { id: 4, text: "Daily Challenge पूरा गर्नुभयो", time: "2 hours ago", xp: "+50 XP", icon: <Flame size={14} />, color: "orange" },
  ];

  return (
    <div className="db-bottom-wrapper">
      {/* ३-कलम ग्रिड लेआउट */}
      <div className="db-bottom-grid">
        
        {/* COLUMN 1: ACHIEVEMENTS */}
        <div className="bottom-card">
          <div className="card-header-row">
            <h4>Achievements</h4>
            <button className="text-link-btn">View All</button>
          </div>
          <div className="badges-flex-container">
            {badges.map((b) => (
              <div key={b.id} className="badge-item-box">
                <div className={`badge-graphic-icon ${b.color}`}>{b.img}</div>
                <h6>{b.title}</h6>
                <p>{b.desc}</p>
              </div>
            ))}
            <div className="badge-item-box more-badges">
              <div className="more-circle">+12</div>
              <p>More Badges</p>
            </div>
          </div>
        </div>

        {/* COLUMN 2: AI RECOMMENDATIONS */}
        <div className="bottom-card">
          <div className="card-header-row">
            <h4>AI Recommendations</h4>
          </div>
          <div className="recommendations-list">
            {recommendations.map((r) => (
              <div key={r.id} className="rec-item">
                <div className="rec-left">
                  <div className={`rec-icon-box ${r.color}`}>{r.icon}</div>
                  <div>
                    <h6>{r.title}</h6>
                    <p>{r.sub}</p>
                  </div>
                </div>
                <button className="start-action-btn">Start</button>
              </div>
            ))}
          </div>
          <button className="view-all-rec-btn">
            View All Recommendations <ArrowRight size={14} />
          </button>
        </div>

        {/* COLUMN 3: RECENT ACTIVITY */}
        <div className="bottom-card">
          <div className="card-header-row">
            <h4>Recent Activity</h4>
            <button className="text-link-btn">View All</button>
          </div>
          <div className="activity-list">
            {activities.map((a) => (
              <div key={a.id} className="activity-item">
                <div className="act-left">
                  <div className={`act-icon-dot ${a.color}`}>{a.icon}</div>
                  <div>
                    <h6>{a.text}</h6>
                    <p>{a.time}</p>
                  </div>
                </div>
                <span className="act-xp-green">{a.xp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* मुनिको निलो रङको क्लाउड ब्यानर / ALERT BAR */}
      <div className="bottom-cloud-notice-bar">
        <div className="notice-content">
          <span>☁️</span>
          <p>तपाईंको प्रगति स्वचालित रूपमा सुरक्षित छ। जुनसुकै डिभाइसबाट लगइन गरेर सिक्न जारी राख्नुहोस् !</p>
        </div>
      </div>
    </div>
  );
}