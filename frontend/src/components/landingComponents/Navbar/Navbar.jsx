import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom'; // थप गरिएको
import photo from "../../../assets/image.png"; // स्ट्रक्चर अनुसार पाथ मिलाइएको (वा पुरानाे इमेज राख्न सक्नुहुन्छ)
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const actionsRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(navbarRef.current, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
    tl.fromTo(logoRef.current, 
      { x: -15, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
      "-=0.3"
    );
    tl.fromTo(menuItemsRef.current, 
      { y: -10, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' },
      "-=0.2"
    );
    tl.fromTo(actionsRef.current, 
      { scale: 0.95, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' },
      "-=0.2"
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'solutions', 'subjects', 'pricing', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    if (isMenuOpen) setIsMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-logo" ref={logoRef}>
          <img src={photo} className="logo-img" alt="Logo" />
          <div className="logo-text">
            <span className="brand-name">AI Nepali</span>
            <span className="brand-tagline">Learning Assistant</span>
          </div>
        </div>

        <ul className="nav-menu-desktop">
          {['home', 'features', 'solutions', 'subjects', 'pricing', 'about'].map((item, index) => (
            <li key={item} ref={(el) => (menuItemsRef.current[index] = el)}>
              <a 
                href={`#${item}`} 
                className={`nav-links ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('about', 'About Us')}
              </a>
            </li>
          ))}
        </ul>

        {/* Link Component हरू थपिएको ताकि बटन थिच्दा सिधै /login वा /register पेज खुलोस् */}
        <div className="navbar-actions" ref={actionsRef}>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="cta-btn">Get Started</Link>
          
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      
      <div className={`sidebar-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleMenu}>&times;</button>
        </div>
        
        <ul className="sidebar-links">
          {['home', 'features', 'solutions', 'subjects', 'pricing', 'about'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                onClick={(e) => handleNavLinkClick(e, item)} 
                className={`sidebar-item ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('about', 'About Us')}
              </a>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <Link to="/login" className="sidebar-login-btn" onClick={toggleMenu}>Login</Link>
          <Link to="/register" className="sidebar-cta-btn" onClick={toggleMenu}>Get Started Free</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;