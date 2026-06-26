import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const featuresData = [
    { id: 1, icon: "/landingAssets/ai-chat.png", title: "AI Chat Tutor", desc: "जुनसुकै विषयको प्रश्न तुरुन्तै सोध्नुहोस् र सेकेन्डमै बुझ्नुहोस्।" },
    { id: 2, icon: "/landingAssets/quiz-generator.png", title: "Quiz Generator", desc: "परीक्षा तयारीको लागि Auto MCQ र विशेष नमुना प्रश्नहरू बनाउनुहोस्।" },
    { id: 3, icon: "/landingAssets/smart-notes.png", title: "Smart Notes", desc: "लामो च्याप्टरलाई छोटो, सजिलो र बुझिने एआई नोटमा बदल्नुहोस्।" },
    { id: 4, icon: "/landingAssets/voice-tutor.png", title: "Voice Support", desc: "टाइप नगरी बोलेरै प्रश्न सोध्न र Voice मा उत्तर सुर्न मिल्ने।" },
    { id: 5, icon: "/landingAssets/pdf-learning.png", title: "PDF Learning", desc: "आफ्नो PDF वा किताब अपलोड गरी सिधै एआईसँग प्रश्नोत्तर गर्नुहोस्।" },
    { id: 6, icon: "/landingAssets/trophy.png", title: "Practice Zone", desc: "Mock Test, दैनिक MCQ अभ्यास र आफ्ना गल्तीहरू सुधार्ने ठाउँ।" },
    { id: 7, icon: "/landingAssets/analytics.png", title: "Analytics & Tracking", desc: "तपाईं कुन विषयमा बलियो वा कमजोर हुनुहुन्छ, विस्तृत ग्राफ र विश्लेषण।" },
    { id: 8, icon: "/landingAssets/dashboard-card.png", title: "Rewards & XP", desc: "पढ्दै जाँदा XP कमाउनुहोस्, प्रिमियम Badge र Level बढाउनुहोस्।" },
    { id: 9, icon: "/landingAssets/calendar.png", title: "Study Planner", desc: "एआईले तपाईंको दैनिक पढ्ने क्षमता अनुसारको तालिका बनाइदिनेछ।" }
  ];

  // सुरुमा बिचको कार्डलाई Active बनाउन (जस्तै: इन्डेक्स ४)
  const [activeIndex, setActiveIndex] = useState(4);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : featuresData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < featuresData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        
        {/* Header */}
        <div className="features-header">
          <h2 className="features-main-title">
            Powerful Features for <span className="purple-gradient-text">Smart Learning</span>
          </h2>
        </div>

        {/* Stacked Cards Wrapper */}
        <div className="features-stack-wrapper">
          <div className="features-cards-container">
            {featuresData.map((feature, index) => {
              // Active कार्ड भन्दा कति टाढा छ हिसाब गर्ने (इमेजको जस्तै बाङ्गो बनाउन)
              const offset = index - activeIndex;
              let cardClass = "stack-card";
              
              if (offset === 0) cardClass += " card-active";
              else if (offset === -1) cardClass += " card-left-1";
              else if (offset === -2) cardClass += " card-left-2";
              else if (offset === 1) cardClass += " card-right-1";
              else if (offset === 2) cardClass += " card-right-2";
              else if (offset < -2) cardClass += " card-hidden-left";
              else if (offset > 2) cardClass += " card-hidden-right";

              return (
                <div key={feature.id} className={cardClass}>
                  <div className="card-top-row">
                    <img src={feature.icon} alt={feature.title} className="card-avatar" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-quote-title">"{feature.title}"</h3>
                    <p className="card-author-desc">— {feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Same to Same Exact Bottom Buttons */}
        <div className="exact-buttons-container">
          <button className="exact-btn" onClick={handlePrev}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="exact-btn" onClick={handleNext}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;