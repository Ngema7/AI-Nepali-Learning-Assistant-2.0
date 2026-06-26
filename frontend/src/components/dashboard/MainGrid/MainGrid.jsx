import React from 'react';
import { CheckCircle2, ArrowUpRight, Calendar, ArrowRight } from 'lucide-react';
import './MainGrid.css';

export default function MainGrid() {
  // अटो-अपडेट र डायनामिक बनाउन लिडरबोर्ड डाटा एरे
  const leaderboardData = [
    { rank: 1, name: 'Sagar Rai', xp: '5,420 XP', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop' },
    { rank: 2, name: 'Anisha Gurung', xp: '4,980 XP', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop' },
    { rank: 3, name: 'Bibek Karki', xp: '4,310 XP', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop' },
    { rank: 4, name: 'Sujan Tamang', xp: '3,870 XP', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop' },
    { rank: 5, name: 'Pragya Thapa', xp: '3,640 XP', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop' },
  ];

  // साप्ताहिक ग्राफ डाटा
  const weeklyGraph = [
    { day: 'Mon', h: '40%' }, { day: 'Tue', h: '65%' }, 
    { day: 'Wed', h: '85%' }, { day: 'Thu', h: '50%' }, 
    { day: 'Fri', h: '100%' }, { day: 'Sat', h: '30%' }, 
    { day: 'Sun', h: '55%' }
  ];

  return (
    <div className="db-three-col-grid">
      
      {/* COLUMN 1: GOALS & WEEKLY OVERVIEW */}
      <div className="grid-column">
        {/* Today's Goal */}
        <div className="content-card">
          <div className="card-header">
            <h4>Today's Goal</h4>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="goal-list">
            <div className="goal-item">
              <div className="goal-item-left">
                <CheckCircle2 size={16} className="check-done" />
                <span>MCQ Completed</span>
              </div>
              <span className="goal-status font-bold">7 / 10</span>
            </div>
            <div className="progress-line-bar purple-fill"><div style={{ width: '70%' }} /></div>

            <div className="goal-item m-top-15">
              <div className="goal-item-left">
                <CheckCircle2 size={16} className="check-done" />
                <span>Study Time</span>
              </div>
              <span className="goal-status font-bold">45 / 60 mins</span>
            </div>
            <div className="progress-line-bar green-fill"><div style={{ width: '75%' }} /></div>
          </div>
          <p className="card-footer-text">✨ Great job! You are doing awesome! 🎉</p>
        </div>

        {/* Weekly Graph */}
        <div className="content-card m-top-20">
          <div className="card-header">
            <div>
              <h4>This Week Overview</h4>
              <h3 className="graph-time">12h 45m <span className="graph-trend"><ArrowUpRight size={14}/> 36%</span></h3>
            </div>
            <span className="compare-text">vs Last Week</span>
          </div>
          <div className="db-chart-container">
            {weeklyGraph.map((b, i) => (
              <div key={i} className="chart-bar-wrapper">
                <div className="chart-bar-fill" style={{ height: b.h }} />
                <span className="chart-day-label">{b.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COLUMN 2: CALENDAR & TASKS */}
      <div className="grid-column">
        {/* Calendar */}
        <div className="content-card">
          <h4>Study Streak Calendar</h4>
          <div className="calendar-grid-header">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
          <div className="calendar-grid-days">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`calendar-day-circle ${i === 5 ? 'streak-missed' : 'streak-hit'}`}>
                {i === 5 ? '६' : '✓'}
              </div>
            ))}
          </div>
          <div className="calendar-legend">
            <span><span className="dot hit" /> Completed</span>
            <span><span className="dot streak" /> Streak</span>
            <span><span className="dot missed" /> Missed</span>
          </div>
          <p className="best-streak-pill">🔥 Best Streak: 21 Days</p>
        </div>

        {/* Upcoming Tasks */}
        <div className="content-card m-top-20">
          <h4>Upcoming Tasks</h4>
          <div className="task-list">
            <div className="task-card-item">
              <Calendar size={16} className="task-icon text-green" />
              <div>
                <h6>Science Quiz - Chapter 3</h6>
                <p>Today, 5:00 PM</p>
              </div>
            </div>
            <div className="task-card-item">
              <Calendar size={16} className="task-icon text-blue" />
              <div>
                <h6>Math Exercise 2.2</h6>
                <p>Tomorrow, 10:00 AM</p>
              </div>
            </div>
          </div>
          <button className="view-tasks-btn">View All Tasks <ArrowRight size={14} /></button>
        </div>
      </div>

      {/* COLUMN 3: LEADERBOARD */}
      <div className="grid-column">
        <div className="content-card">
          <div className="card-header">
            <h4>Leaderboard</h4>
            <select className="db-select-dropdown">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
          <div className="leaderboard-list">
            {leaderboardData.map((user, idx) => (
              <div key={idx} className="leader-row">
                <div className="leader-user-left">
                  <span className={`rank-num rank-${user.rank}`}>{user.rank}</span>
                  <img src={user.avatar} alt={user.name} className="leader-avatar" />
                  <span className="leader-name">{user.name}</span>
                </div>
                <span className="leader-xp font-bold">{user.xp}</span>
              </div>
            ))}
            
            {/* Active Current User (Ngema Sherpa) */}
            <div className="leader-row current-user-row">
              <div className="leader-user-left">
                <span className="rank-num">12</span>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="You" className="leader-avatar" />
                <span className="leader-name font-bold">Ngema Sherpa (You)</span>
              </div>
              <span className="leader-xp font-bold">3,200 XP</span>
            </div>
          </div>
          <button className="view-full-lb">View Full Leaderboard <ArrowRight size={14} /></button>
        </div>
      </div>

    </div>
  );
}