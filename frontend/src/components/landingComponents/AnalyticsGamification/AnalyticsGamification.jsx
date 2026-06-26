import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AnalyticsGamification.css';

// ScrollTrigger दर्ता गर्ने
gsap.registerPlugin(ScrollTrigger);

export default function AnalyticsGamification() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const circleProgressRef = useRef(null);

  useEffect(() => {
    // १. मुख्य कन्टेनर स्क्रोल गर्दा दुवै कार्डहरू हल्का पप-अप गराउने
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%', // Lenis सँग स्मुथ रेन्डर हुनका लागि
        toggleActions: 'play none none none',
      }
    });

    mainTl.fromTo([leftCardRef.current, rightCardRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }
    );

    // २. बायाँपट्टिको Gamification फिचर लिस्टलाई Stagger एनिमेसन दिने
    mainTl.fromTo('.feature-item',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
      '-=0.3'
    );

    // ३. ड्यासबोर्डको Graph Bars लाई ० बाट सुरु गरेर 'Grow' गराउने म्याजिक एनिमेसन
    // CSS मा भएको इन्लाइन height लाई सुरक्षित राख्दै scaleY एनिमेट गर्ने
    gsap.fromTo('.actual-bar', 
      { scaleY: 0, transformOrigin: 'bottom center' },
      { 
        scaleY: 1, 
        duration: 1, 
        stagger: 0.08, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    );

    // ४. Circular Accuracy Progress Bar एनिमेसन (घुम्दै ८५% पुग्ने)
    // SVG strokeDashoffset लाई २४१.२ बाट घटाएर ३७.६ मा पुर्‍याउने
    gsap.fromTo(circleProgressRef.current,
      { strokeDashoffset: 251.2 },
      {
        strokeDashoffset: 37.6,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    );

  }, []);

  return (
    <section className="ag-section" ref={containerRef}>
      <div className="ag-container">
        
        {/* LEFT CARD: Gamification */}
        <div className="ag-card gamification-box" ref={leftCardRef}>
          <div className="gamification-left">
            <h3 className="ag-card-title">Gamification</h3>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="f-icon-circle xp-bg">
                  <span className="f-emoji">🪙</span>
                </div>
                <div className="f-text">
                  <h4>XP Points</h4>
                  <p>सिकेर XP कमाउनुहोस्</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="f-icon-circle streak-bg">
                  <span className="f-emoji">🔥</span>
                </div>
                <div className="f-text">
                  <h4>Streak</h4>
                  <p>सिकाई दिनहुँ जारी राख्नुहोस्</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="f-icon-circle badges-bg">
                  <span className="f-emoji">🏅</span>
                </div>
                <div className="f-text">
                  <h4>Badges</h4>
                  <p>उपलब्धिहरू हासिल गर्नुहोस्</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="f-icon-circle levels-bg">
                  <span className="f-emoji">📈</span>
                </div>
                <div className="f-text">
                  <h4>Levels</h4>
                  <p>लेबल बढाएर अगाडि बढ्नुहोस्</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trophy Graphic Area */}
          <div className="gamification-right">
            <div className="trophy-container">
              <div className="glow-effect"></div>
              <span className="real-trophy">🏆</span>
              <div className="lvl-badge-footer">
                <span className="lvl-title">Level 12</span>
                <span className="lvl-xp">XP 2500 / 3000</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Analytics & Insights */}
        <div className="ag-card analytics-box" ref={rightCardRef}>
          <h3 className="ag-card-title">Analytics & Insights</h3>
          
          <div className="analytics-layout">
            {/* Bar Chart Section */}
            <div className="dashboard-widget chart-widget">
              <span className="widget-label">Study Time (This Week)</span>
              <div className="big-stat-number">12h 45m</div>
              <p className="widget-subtext">कुल अध्ययन समय</p>
              
              <div className="main-bar-graph">
                <div className="graph-column"><div className="actual-bar" style={{height: '45%'}}></div><span className="day-lbl">Mon</span></div>
                <div className="graph-column"><div className="actual-bar" style={{height: '75%'}}></div><span className="day-lbl">Tue</span></div>
                <div className="graph-column"><div className="actual-bar" style={{height: '55%'}}></div><span className="day-lbl">Wed</span></div>
                <div className="graph-column"><div className="actual-bar active-bar" style={{height: '95%'}}></div><span className="day-lbl">Thu</span></div>
                <div className="graph-column"><div className="actual-bar" style={{height: '65%'}}></div><span className="day-lbl">Fri</span></div>
                <div className="graph-column"><div className="actual-bar" style={{height: '35%'}}></div><span className="day-lbl">Sat</span></div>
                <div className="graph-column"><div className="actual-bar" style={{height: '25%'}}></div><span className="day-lbl">Sun</span></div>
              </div>
            </div>

            {/* Circular Progress & Fire Streak */}
            <div className="dashboard-widget-column">
              
              {/* Quiz Accuracy Circle */}
              <div className="dashboard-widget circular-widget">
                <span className="widget-label">Quiz Accuracy</span>
                <div className="circle-wrap">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" className="circle-bg" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      className="circle-progress" 
                      ref={circleProgressRef}
                      strokeDasharray="251.2" 
                      style={{ strokeDashoffset: 251.2 }}
                    />
                  </svg>
                  <div className="circle-number">85%</div>
                </div>
              </div>

              {/* Fire Learning Streak */}
              <div className="dashboard-widget streak-widget">
                <span className="widget-label">Learning Streak</span>
                <div className="streak-fire-center">
                  <div className="animated-fire">🔥</div>
                  <div className="streak-num">7</div>
                  <p className="streak-days">Days</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}