import { useNavigate } from 'react-router-dom'
import Icon from '../../components/common/Icon.jsx'
import Button from '../../components/common/Button.jsx'
import ProgressChart from '../../components/charts/ProgressChart.jsx'
import { user, stats, achievements } from '../../data/dummyData.js'
import './Profile.css'

export default function Profile() {
  const navigate = useNavigate()
  const xpPercent = Math.round((user.xp / user.xpToNextLevel) * 100)
  const earned = achievements.filter((a) => a.earned)

  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile</h1>
          <p className="section-subtitle">Manage your account and view your learning identity.</p>
        </div>
        <div className="page-header-actions">
          <Button variant="secondary" icon={<Icon name="edit" size={15} />} onClick={() => navigate('/settings')}>
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="profile-hero glass-card slide-up">
        <div className="profile-hero-avatar">{user.avatar}</div>
        <div className="profile-hero-info">
          <h2>{user.name}</h2>
          <p><Icon name="mail" size={14} /> {user.email}</p>
          <div className="profile-hero-badges">
            <span className="badge badge-primary">Level {user.level}</span>
            <span className="badge badge-warning"><Icon name="flame" size={12} /> {user.streak} day streak</span>
            <span className="badge badge-neutral">{user.plan} Plan</span>
          </div>
        </div>
        <div className="profile-hero-ring">
          <ProgressChart percent={xpPercent} size={90} strokeWidth={8} label="to next level" />
        </div>
      </div>

      <div className="stats-grid stagger">
        {stats.map((s) => (
          <div className="profile-mini-stat surface-card" key={s.id}>
            <span style={{ color: s.color }}><Icon name={s.icon} size={18} /></span>
            <div>
              <p className="profile-mini-stat-value">{s.value}</p>
              <p className="profile-mini-stat-label">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-two-col">
        <div className="section-panel">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Badges Earned</h2>
          <div className="profile-badges-grid">
            {earned.map((a) => (
              <div className="profile-badge" key={a.id}>
                <Icon name={a.icon} size={20} />
                <span>{a.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-panel">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Account</h2>
          <div className="profile-account-list">
            <button className="profile-account-row" onClick={() => navigate('/settings')}>
              <Icon name="settings" size={17} /> Account Settings <Icon name="chevron-right" size={15} className="profile-account-chevron" />
            </button>
            <button className="profile-account-row" onClick={() => navigate('/history')}>
              <Icon name="clock" size={17} /> Activity History <Icon name="chevron-right" size={15} className="profile-account-chevron" />
            </button>
            <button className="profile-account-row" onClick={() => navigate('/rewards')}>
              <Icon name="award" size={17} /> Rewards & Achievements <Icon name="chevron-right" size={15} className="profile-account-chevron" />
            </button>
            <button className="profile-account-row" onClick={() => navigate('/help')}>
              <Icon name="help" size={17} /> Help & Support <Icon name="chevron-right" size={15} className="profile-account-chevron" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
