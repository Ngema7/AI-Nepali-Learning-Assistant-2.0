import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Stats.css';

// ScrollTrigger लाई दर्ता गर्ने
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  const statsData = [
    { id: 1, icon: "👥", targetValue: 10000, suffix: "+", label: "Happy Students" },
    { id: 2, icon: "👤", targetValue: 500, suffix: "+", label: "Daily Active Users" },
    { id: 3, icon: "📝", targetValue: 50000, suffix: "+", label: "Questions Solved" },
    { id: 4, icon: "⭐", targetValue: 4.8, suffix: "/5", label: "Average Rating", isDecimal: true },
    { id: 5, icon: "🕒", targetValue: 24, suffix: "/7", label: "AI Support", isStatic: true } // २४/७ काउन्टर गर्नु पर्दैन
  ];

  useEffect(() => {
    // एनिमेसन १: पूरा ग्रिड र कार्डहरू स्मुथली फेड-इन हुने
    gsap.fromTo(gridRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%', // ८५% मा स्क्रोल हुनासाथ सुरु हुने
          toggleActions: 'play none none none'
        }
      }
    );

    // एनिमेसन २: नम्बरहरू सररर बढेर काउन्ट-अप हुने (Apple Style)
    statsData.forEach((stat, index) => {
      if (stat.isStatic) return; // Static लाई छोडिदिने

      const targetEl = document.getElementById(`count-${stat.id}`);
      if (!targetEl) return;

      const obj = { value: 0 };

      gsap.to(obj, {
        value: stat.targetValue,
        duration: 2, // २ सेकेन्ड सम्म नम्बर बढ्ने
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        onUpdate: () => {
          // डेसिमल (Rating) हो भने १ स्थान सम्म मात्र देखाउने, नत्र राउन्ड नम्बर देखाउने
          if (stat.isDecimal) {
            targetEl.innerText = obj.value.toFixed(1) + stat.suffix;
          } else {
            targetEl.innerText = Math.floor(obj.value).toLocaleString() + stat.suffix;
          }
        }
      });
    });
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-grid" ref={gridRef}>
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className="stat-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="stat-icon-wrapper">
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <div className="stat-info">
                {/* एनिमेसनका लागि यहाँ ID र प्रारम्भिक टेक्स्ट मिलाइएको छ */}
                <h3 className="stat-value" id={`count-${stat.id}`}>
                  {stat.isStatic ? "24/7" : `0${stat.suffix}`}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;