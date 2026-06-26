import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Socials */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">🤖</span>
            <div className="logo-text">
              <h3>AI Nepali</h3>
              <p>Learning Assistant</p>
            </div>
          </div>
          <p className="brand-desc">
            विद्यार्थीलाई बन्छ सहज, <br />
            रातोदिन १ गराउँदै एआई सँग, <br />
            सुख र प्रगति सधैं।
          </p>
          
          {/* Animated FontAwesome Social Links */}
          <div className="social-links">
            <a href="#facebook" className="social-icon fb" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#instagram" className="social-icon ig" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#youtube" className="social-icon yt" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#linkedin" className="social-icon ln" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#subjects">Subjects</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Important */}
        <div className="footer-col">
          <h4>Important</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Support & Apps */}
        <div className="footer-col app-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
          
          <div className="footer-apps">
            <h4>Download App</h4>
            <a href="#playstore" className="f-app-badge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
            <a href="#appstore" className="f-app-badge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="footer-bottom">
        <p>© 2026 AI-Nepali-Learning-Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
}