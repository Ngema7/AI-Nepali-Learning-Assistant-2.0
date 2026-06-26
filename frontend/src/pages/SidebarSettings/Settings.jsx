import React, { useState } from 'react';
import { User, Moon, Sun, Bell, Shield, Target, Camera, Globe, Save, Lock, Sliders, Eye } from 'lucide-react';
import './Setting.css';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('np');
  const [dailyGoal, setDailyGoal] = useState(60);

  return (
    <div className="st-page-wrapper animate-fade-in">
      
      {/* TOP HEADER */}
      <div className="st-header">
        <div>
          <h2>Settings & Preferences</h2>
          <p>आफ्नो प्रोफाइल, एकाउन्ट सेक्युरिटी र एप्लिकेसन सेटिङहरू व्यवस्थापन गर्नुहोस्।</p>
        </div>
        <button className="st-save-main-btn">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="st-layout-grid">
        
        {/* LEFT NAV TABS */}
        <aside className="st-nav-sidebar">
          <button 
            className={`st-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} /> Personal Profile
          </button>
          <button 
            className={`st-tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <Sliders size={18} /> Preferences & Theme
          </button>
          <button 
            className={`st-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} /> Password & Security
          </button>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className="st-content-panel">
          
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div className="st-tab-content animate-slide-up">
              <h3 className="st-section-title">Personal Profile</h3>
              
              <div className="st-avatar-uploader">
                <div className="st-avatar-ring">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" alt="User" />
                  <label className="st-camera-badge">
                    <Camera size={14} />
                    <input type="file" accept="image/*" hidden />
                  </label>
                </div>
                <div>
                  <h5>Profile Photo</h5>
                  <p>PNG or JPG. Max size of 2MB.</p>
                </div>
              </div>

              <div className="st-input-row">
                <div className="st-input-box">
                  <label>Full Name</label>
                  <input type="text" defaultValue="Ngema Sherpa" placeholder="Your full name" />
                </div>
                <div className="st-input-box">
                  <label>Email Address</label>
                  <input type="email" defaultValue="ngema.sherpa@example.com" placeholder="Email" />
                </div>
              </div>

              <hr className="st-divider" />
              
              <h3 className="st-section-title m-top-20"><Target size={18} /> Learning Goals</h3>
              
              <div className="st-input-box">
                <label>Daily Study Goal</label>
                <div className="st-range-container">
                  <input 
                    type="range" 
                    min="15" 
                    max="185" 
                    step="15" 
                    value={dailyGoal} 
                    onChange={(e) => setDailyGoal(Number(e.target.value))} 
                  />
                  <span className="st-range-badge">{dailyGoal} Mins / day</span>
                </div>
              </div>

              <div className="st-input-box m-top-15">
                <label>Target Class / Level</label>
                <select defaultValue="see">
                  <option value="see">Class 10 (SEE)</option>
                  <option value="plus2">Class 11 & 12 (+2)</option>
                  <option value="bachelor">Bachelor's Level</option>
                </select>
              </div>
            </div>
          )}

          {/* TAB 2: PREFERENCES */}
          {activeTab === 'preferences' && (
            <div className="st-tab-content animate-slide-up">
              <h3 className="st-section-title">Interface Settings</h3>
              
              <div className="st-toggle-card">
                <div className="st-toggle-meta">
                  <h5>Dark Mode (अध्यारो मोड)</h5>
                  <p>App को थिमलाई अध्यारो बनाएर आँखाको सुरक्षा गर्नुहोस्।</p>
                </div>
                <button 
                  className={`st-switch-bg ${darkMode ? 'on' : ''}`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <span className="st-switch-circle">
                    {darkMode ? <Moon size={10} /> : <Sun size={10} />}
                  </span>
                </button>
              </div>

              <div className="st-toggle-card m-top-15">
                <div className="st-toggle-meta">
                  <h5>System Notifications</h5>
                  <p>दैनिक हाजिरी, क्विज र नयाँ च्यालेन्जहरूको अलर्ट प्राप्त गर्नुहोस्।</p>
                </div>
                <input type="checkbox" defaultChecked className="st-native-toggle" />
              </div>

              <hr className="st-divider" />

              <h3 className="st-section-title m-top-20"><Globe size={18} /> Localization</h3>
              <div className="st-input-box">
                <label>Primary Language (मुख्य भाषा)</label>
                <div className="st-lang-group">
                  <button 
                    className={`st-lang-item ${language === 'np' ? 'active' : ''}`}
                    onClick={() => setLanguage('np')}
                  >
                    नेपाली (Nepali)
                  </button>
                  <button 
                    className={`st-lang-item ${language === 'en' ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SECURITY */}
          {activeTab === 'security' && (
            <div className="st-tab-content animate-slide-up">
              <h3 className="st-section-title">Update Password</h3>
              
              <div className="st-input-vertical-group">
                <div className="st-input-box">
                  <label>Current Password</label>
                  <div className="st-password-wrapper">
                    <input type="password" placeholder="••••••••" />
                    <Eye size={16} className="st-pass-eye" />
                  </div>
                </div>

                <div className="st-input-box m-top-15">
                  <label>New Password</label>
                  <div className="st-password-wrapper">
                    <input type="password" placeholder="Min. 8 characters" />
                    <Eye size={16} className="st-pass-eye" />
                  </div>
                </div>
              </div>

              <hr className="st-divider" />

              <h3 className="st-section-title danger-zone-title m-top-20"><Lock size={18} /> Danger Zone</h3>
              <div className="st-danger-box">
                <div>
                  <h5>Delete Account</h5>
                  <p>खाता स्थायी रूपमा हटाउँदा तपाईंको सबै प्रोग्रेस र स्कोरहरू नष्ट हुनेछन्।</p>
                </div>
                <button className="st-danger-btn">Delete Permanently</button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}