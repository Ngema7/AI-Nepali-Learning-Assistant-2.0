import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "AI Nepali Learning Assistant के हो?",
    answer: "यो नेपाली र अन्य विषयहरू आर्टिफिसियल इन्टेलिजेन्स (AI) को मद्दतले सजिलै, रमाइलो र व्यक्तिगत तरिकाले सिक्न मिल्ने आधुनिक लर्निङ प्लेटफर्म हो।"
  },
  {
    question: "यो App Free हो?",
    answer: "हो, यो एपमा 'Free Plan' उपलब्ध छ जसबाट दैनिक १० वटा क्विज र बेसिक एआई च्याट ट्युटरको सुविधाहरू निःशुल्क प्रयोग गर्न सकिन्छ।"
  },
  {
    question: "यो कुन कक्षाका लागि हो?",
    answer: "विशेषगरी कक्षा ८ देखि १२ सम्मका विद्यार्थीहरूका लागि यो अत्यन्तै उपयोगी छ, तर सिकाईलाई सहज बनाउन चाहने जोकोहीले पनि यसलाई प्रयोग गर्न सक्छन्।"
  },
  {
    question: "के यो नेपाली भाषामा उपलब्ध छ?",
    answer: "हो, यो विशेषगरी नेपाली विद्यार्थीहरूलाई लक्षित गरेर बनाइएको हुनाले यसको इन्टरफेस र एआई सिस्टमले नेपाली तथा अङ्ग्रेजी दुवै भाषा राम्रोसँग बुझ्छ।"
  },
  {
    question: "PDF Upload गर्न मिल्छ?",
    answer: "हो! प्रो र प्रिमियम प्लानमा तपाईंले आफ्नो किताब वा नोटको PDF अपलोड गरेर सिधै एआईसँग प्रश्न उत्तर गर्न र समरी निकाल्न सक्नुहुन्छ।"
  },
  {
    question: "Offline मा चल्छ?",
    answer: "प्रिमियम प्लानका प्रयोगकर्ताहरूले नोटहरू र मुख्य सुविधाहरू अफलाइन मोडमा सेभ गरेर इन्टरनेट नभएको बेला पनि पढ्न सक्नुहुन्छ।"
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // यदि पहिले नै खुला छ भने बन्द गर्ने
    } else {
      setActiveIndex(index); // नयाँ खोल्ने
    }
  };

  return (
    <section id='contact' className="faq-section">
      <h2 className="faq-main-title">Frequently Asked Questions</h2>
      
      <div className="faq-grid">
        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`faq-item ${isOpen ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-box">
                <span className="faq-question">{faq.question}</span>
                <span className="faq-arrow">▼</span>
              </div>
              <div className="faq-answer-box">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}