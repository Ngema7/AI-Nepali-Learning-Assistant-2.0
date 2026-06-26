import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AiChatTutor.css';

// ScrollTrigger दर्ता गर्ने
gsap.registerPlugin(ScrollTrigger);

const AiChatTutor = () => {
  const sectionRef = useRef(null);
  const infoSideRef = useRef(null);
  const chatWindowRef = useRef(null);
  const userMsgRef = useRef(null);
  const aiMsgRef = useRef(null);

  useEffect(() => {
    // मुख्य टाइमलाइन - जुन स्क्रोल गरेपछि मात्र ट्रिगर हुन्छ
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%', // Lenis सँग स्मुथ ट्युनिङका लागि
        toggleActions: 'play none none none'
      }
    });

    // १. देबायाँपट्टिको कन्टेन्ट फेड-इन गराउने
    tl.fromTo(infoSideRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );

    // २. पूरा च्याट बक्सलाई पप-अप गराउने
    tl.fromTo(chatWindowRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power4.out' },
      "-=0.4"
    );

    // ३. च्याट भित्रको Live Simulation इफेक्ट (पहिले युजरको म्यासेज पप हुने)
    tl.fromTo(userMsgRef.current,
      { opacity: 0, y: 15, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
    );

    // ४. एआईले टाइप गरेर उत्तर दिए जस्तो गराउन थोरै डिले (Delay) पछि एआई म्यासेज आउने
    tl.fromTo(aiMsgRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      "+=0.4" // हल्का पज/डिले इफेक्ट
    );

  }, []);

  return (
    <section className="chat-tutor-section" id="ai-chat" ref={sectionRef}>
      <div className="chat-tutor-container">
        
        {/* Left Side: Information */}
        <div className="chat-info-side" ref={infoSideRef}>
          <h2 className="chat-main-title">AI Chat Tutor</h2>
          <h3 className="chat-sub-title">तपाईंको Personal AI Teacher सबै समस्याको साधन</h3>
          
          <ul className="chat-features-list">
            <li className="chat-feature-item">
              <span className="check-icon">✓</span>
              <p>जुनै पनि प्रश्न सोध्नुहोस्</p>
            </li>
            <li className="chat-feature-item">
              <span className="check-icon">✓</span>
              <p>Instant र राम्रो उत्तर पाउनुहोस्</p>
            </li>
            <li className="chat-feature-item">
              <span className="check-icon">✓</span>
              <p>नेपाली र English दुवैमा</p>
            </li>
            <li className="chat-feature-item">
              <span className="check-icon">✓</span>
              <p>सबै विषयहरूको लागि</p>
            </li>
          </ul>
        </div>

        {/* Right Side: Premium Live Chat Mockup */}
        <div className="chat-mockup-side">
          <div className="chat-window" ref={chatWindowRef}>
            
            {/* Sidebar inside Chat Window */}
            <div className="chat-window-sidebar">
              <button className="new-chat-btn">+ New Chat</button>
              <div className="history-section">
                <span className="history-label">Today</span>
                <div className="history-item active">Photosynthesis के हो?</div>
                <div className="history-item">Newton's First Law</div>
                <div className="history-item">Nepal को राजधानी</div>
                <div className="history-item">Quadratic Equation</div>
                <span className="history-label">Yesterday</span>
                <div className="history-item">Water Cycle</div>
              </div>
            </div>

            {/* Main Chat Interface */}
            <div className="chat-window-main">
              <div className="chat-messages-container">
                
                {/* User Message (Ref थपिएको छ) */}
                <div className="msg-row user-row" ref={userMsgRef}>
                  <div className="msg-box user-msg">
                    Photosynthesis के हो?
                    <span className="msg-time">10:20 AM</span>
                  </div>
                </div>

                {/* AI Response (Ref थपिएको छ) */}
                <div className="msg-row ai-row" ref={aiMsgRef}>
                  <div className="ai-avatar-circle">🤖</div>
                  <div className="msg-box ai-msg">
                    <p><strong>Photosynthesis (प्रकाश संश्लेषण)</strong> एउटा यस्तो प्रक्रिया हो, जसको मद्दतले हरियो बिरुवाहरूले सूर्यको प्रकाश, पानी र Carbon Dioxide को प्रयोग गरी आफ्नो खाना (Glucose) बनाउँछन्।</p>
                    <p>यस प्रक्रियामा Chlorophyll (क्लोरोफिल) को मुख्य भूमिका हुन्छ जसले सूर्यको प्रकाशलाई सोस्छ र अक्सिजन बाहिर फाल्दछ।</p>
                    <span className="msg-time">10:21 AM</span>
                  </div>
                </div>

              </div>

              {/* Chat Input Bar */}
              <div className="chat-input-wrapper">
                <input type="text" placeholder="Type a message..." className="chat-input-field" disabled />
                <button className="chat-send-btn">→</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AiChatTutor;