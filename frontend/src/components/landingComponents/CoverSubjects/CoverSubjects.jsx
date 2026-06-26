import React from 'react';
import './CoverSubjects.css';

const subjects = [
  { name: 'Science', icon: '🧪', color: '#eef2ff' },
  { name: 'Mathematics', icon: '🧮', color: '#f0fdf4' },
  { name: 'English', icon: '📙', color: '#fff7ed' },
  { name: 'Nepali', icon: '📕', color: '#fff1f2' },
  { name: 'Social Studies', icon: '🌍', color: '#ecfdf5' },
  { name: 'Computer Science', icon: '💻', color: '#f5f3ff' },
  { name: 'Physics', icon: '⚛️', color: '#f0f9ff' },
  { name: 'Chemistry', icon: '🧪', color: '#fff1f2' }
];

export default function Features() {
  return (
    <section id='subjects' className="subjects-section">
      <h2 className="section-title">All Subjects Covered</h2>
      
      {/* मुख्य एनिमेसन कन्टेनर */}
      <div className="marquee-container">
        <div className="marquee-track">
          
          {/* पहिलो सेट */}
          {subjects.map((subject, index) => (
            <div key={`first-${index}`} className="subject-card">
              <div className="icon-wrapper" style={{ backgroundColor: subject.color }}>
                <span className="subject-icon">{subject.icon}</span>
              </div>
              <p className="subject-name">{subject.name}</p>
            </div>
          ))}

          {/* दोस्रो सेट (Infinite Loop सम्भव बनाउनका लागि दुरुस्तै कपि) */}
          {subjects.map((subject, index) => (
            <div key={`second-${index}`} className="subject-card">
              <div className="icon-wrapper" style={{ backgroundColor: subject.color }}>
                <span className="subject-icon">{subject.icon}</span>
              </div>
              <p className="subject-name">{subject.name}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}