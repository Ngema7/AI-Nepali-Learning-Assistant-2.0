import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProblemsSolution.css';

// ScrollTrigger लाई दर्ता गर्ने
gsap.registerPlugin(ScrollTrigger);

const ProblemsSolution = () => {
  const sectionRef = useRef(null);
  const probBoxRef = useRef(null);
  const solBoxRef = useRef(null);
  const badgeRef = useRef(null);

  const problems = [
    "Notes बुझ्न गाह्रो हुने",
    "Homework र प्रश्न समाधान गर्न गाह्रो",
    "Quiz र Practice को कमी",
    "English भाषा Resources उपलब्ध",
    "Personal Teacher नहुँदा अलमल्ल हुनु"
  ];

  const solutions = [
    "AI Chat Tutor - जुनसुकै पनि प्रश्नको उत्तर",
    "Quiz Generator - Auto MCQ बनाउने",
    "Smart Notes - छोटो, सजिलो र बुझिने",
    "Voice Tutor - बोलेर प्रश्न सोध्ने, बोलेरै उत्तर सुन्नुहोस्",
    "PDF Learning - PDF बाट निचोड र प्रश्न सोध्नुहोस्",
    "Progress Tracking - आफ्नो प्रगति आफैं ट्र्याक गर्नुहोस्"
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%', // सेक्सन स्क्रिनको ७५% मा आउनासाथ सुरु हुने
        toggleActions: 'play none none none'
      }
    });

    // १. दुवै बाकस र बीचको ब्याजलाई सुरुमा भित्र्याउने
    tl.fromTo(probBoxRef.current, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(solBoxRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      "-=0.6" // दुवै बाकस सँगै एनिमेट गराउन
    )
    .fromTo(badgeRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      "-=0.4"
    );

    // २. बाकस भित्रका बुँदाहरू (prob-item र sol-item) लस्करै आउने
    tl.fromTo('.prob-item',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power1.out' },
      "-=0.2"
    )
    .fromTo('.sol-item',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power1.out' },
      "-=0.3"
    );

  }, []);

  return (
    <section className="prob-sol-section" id="solutions" ref={sectionRef}>
      <div className="prob-sol-container">
        
        {/* Left Side: Problems Box */}
        <div className="prob-box" ref={probBoxRef}>
          <h3 className="prob-title">विद्यार्थीका प्रमुख समस्याहरू</h3>
          <ul className="prob-list">
            {problems.map((prob, index) => (
              <li key={index} className="prob-item">
                <span className="prob-icon">✕</span>
                <p>{prob}</p>
              </li>
            ))}
          </ul>
          
          {/* Section Student Image Overlay */}
          <div className="prob-image-container">
            <img 
              src="/landingAssets/image.png" 
              alt="Confused Student" 
              className="student-illustration" 
            />
          </div>
        </div>

        {/* Center AI Badge Animation Effect */}
        <div className="center-glow-wrapper" ref={badgeRef}>
          <div className="center-ai-badge">
            <span className="ai-badge-text">AI</span>
          </div>
        </div>

        {/* Right Side: Solutions Box */}
        <div className="sol-box" ref={solBoxRef}>
          <h3 className="sol-title">हाम्रो समाधान</h3>
          <ul className="sol-list">
            {solutions.map((sol, index) => (
              <li key={index} className="sol-item">
                <span className="sol-icon">✓</span>
                <p>{sol}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProblemsSolution;