import React from 'react';
import { GraduationCap, Flame, Trophy, Clock, Target } from 'lucide-react';
import './StatsGrid.css';

export default function StatsGrid() {
  // अटो-अपडेट वा API कनेक्ट गर्न सजिलो हुने गरी डाटा एरे बनाइएको छ
  const statsData = [
    {
      id: 1,
      label: 'Total XP',
      value: '3,200',
      trend: '+280 this week',
      isPositive: true,
      theme: 'purple',
      icon: <GraduationCap size={22} />
    },
    {
      id: 2,
      label: 'Current Streak',
      value: '7 Days',
      subText: 'Best: 21 Days',
      theme: 'orange',
      icon: <Flame size={22} />
    },
    {
      id: 3,
      label: 'Your Rank (Monthly)',
      value: '#12',
      subText: 'Top 8% of learners',
      theme: 'green',
      icon: <Trophy size={22} />
    },
    {
      id: 4,
      label: 'Total Study Time',
      value: '12h 45m',
      trend: '+18% this week',
      isPositive: true,
      theme: 'blue',
      icon: <Clock size={22} />
    },
    {
      id: 5,
      label: 'Daily Goal',
      value: '70%',
      subText: '7/10 Completed',
      theme: 'pink',
      icon: <Target size={22} />
    }
  ];

  return (
    <div className="db-stats-grid">
      {statsData.map((stat) => (
        <div key={stat.id} className={`stat-card ${stat.theme}`}>
          <div className="stat-icon-bg">
            {stat.icon}
          </div>
          <div className="stat-info">
            <span className="stat-label">{stat.label}</span>
            <h3 className="stat-value">{stat.value}</h3>
            
            {stat.trend ? (
              <span className={`stat-trend ${stat.isPositive ? 'positive' : 'negative'}`}>
                {stat.trend}
              </span>
            ) : (
              <span className="stat-subtext">{stat.subText}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}