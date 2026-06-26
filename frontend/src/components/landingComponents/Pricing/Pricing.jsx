import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Pricing.css';

// GSAP मा ScrollTrigger plugin register गर्ने
gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.pricing-card');
    const title = sectionRef.current.querySelector('.pricing-main-title');

    // १. टाइटलको लागि Smooth Fade Down एनिमेसन
    gsap.fromTo(title, 
      { opacity: 0, y: -30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        scrollTrigger: {
          trigger: title,
          start: "top 85%", 
          toggleActions: "play none none reverse"
        }
      }
    );

    // २. कार्डहरूको लागि Staggered Pop-up र Bounce इफेक्ट
    gsap.fromTo(cards,
      { 
        opacity: 0, 
        y: 60, 
        scale: 0.95 
      },
      {
        opacity: 1,
        y: 0,
        // Pro Plan (Most Popular) कार्डलाई मात्र १.०५ गुणा ठुलो (Highlight) बनाउने
        scale: (index, target) => target.classList.contains('pro-card') ? 1.05 : 1,
        duration: 0.8,
        stagger: 0.15, // एउटा कार्ड पछि अर्को आउने ग्याप (टाइम)
        ease: "back.out(1.4)", // प्रिमियम हल्का bouncy इफेक्ट
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%", // स्क्रिनको ७५% मा ग्रिड आइपुग्दा एनिमेसन सुरु हुने
          toggleActions: "play none none reverse"
        }
      }
    );

    // कम्पोनेन्ट अनमाउन्ट हुँदा एनिमेसनहरू किल (clean) गर्ने
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id='pricing' className="pricing-section" ref={sectionRef}>
      <h2 className="pricing-main-title">Choose Your Plan</h2>
      
      <div className="pricing-grid" ref={gridRef}>
        
        {/* Card 1: Free Plan */}
        <div className="pricing-card">
          <h3 className="plan-name">Free Plan</h3>
          <div className="plan-price">रु ० <span className="price-period">/ सधैंका लागि</span></div>
          
          <ul className="plan-features">
            <li><span className="check-icon">✓</span> AI Chat (Limited)</li>
            <li><span className="check-icon">✓</span> 10 Quiz per Day</li>
            <li><span className="check-icon">✓</span> Smart Notes Access</li>
            <li><span className="check-icon">✓</span> Basic Progress Tracking</li>
          </ul>
          
          <button className="plan-btn free-btn">Get Started</button>
        </div>

        {/* Card 2: Pro Plan (Highlighted) */}
        <div className="pricing-card pro-card">
          <div className="popular-badge">Most Popular</div>
          <h3 className="plan-name">Pro Plan</h3>
          <div className="plan-price">रु ४९९ <span className="price-period">/ महिना</span></div>
          
          <ul className="plan-features">
            <li><span className="check-icon">✓</span> Unlimited AI Chat</li>
            <li><span className="check-icon">✓</span> Unlimited Quiz</li>
            <li><span className="check-icon">✓</span> PDF Learning</li>
            <li><span className="check-icon">✓</span> Voice Tutor</li>
            <li><span className="check-icon">✓</span> Advanced Analytics</li>
            <li><span className="check-icon">✓</span> Priority Support</li>
          </ul>
          
          <button className="plan-btn pro-btn">Get Pro Now</button>
        </div>

        {/* Card 3: Premium Plan */}
        <div className="pricing-card">
          <h3 className="plan-name">Premium Plan</h3>
          <div className="plan-price">रु ९९९ <span className="price-period">/ महिना</span></div>
          
          <ul className="plan-features">
            <li><span className="check-icon">✓</span> Everything in Pro</li>
            <li><span className="check-icon">✓</span> Homework Solver</li>
            <li><span className="check-icon">✓</span> OCR Scanner</li>
            <li><span className="check-icon">✓</span> Ad-free Experience</li>
            <li><span className="check-icon">✓</span> Offline Access</li>
          </ul>
          
          <button className="plan-btn premium-btn">Get Premium Now</button>
        </div>

      </div>
    </section>
  );
}