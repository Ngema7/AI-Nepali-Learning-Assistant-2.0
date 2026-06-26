import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: "Susmita",
    grade: "Grade 10",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    text: "“AI Chat Tutor ले मलाई अप्ठ्यारो विषयहरू बुझ्न धेरै सजिलो बनायो, एकदमै उपयोगी App!”"
  },
  {
    name: "Bibek",
    grade: "Grade 12",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "“Quiz र Practice गरेर मेरो Exam मा 90% भन्दा बढी मार्क्स आयो, धन्यवाद AI Nepali!”"
  },
  {
    name: "Aayush",
    grade: "Grade 11",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    text: "“Notes एकदमै सफा छन्, छोटा र मीठा। मेरो Daily Study बानी नै बस्यो!”"
  },
  {
    name: "Saman Malik",
    grade: "Customer Support Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    text: "“The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.”"
  },
  {
    name: "Omar Raza",
    grade: "CEO",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    text: "“This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.”"
  },
  {
    name: "Farhan Siddiqui",
    grade: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    text: "“Our business functions improved with a user-friendly design and positive customer feedback.”"
  }
];

// रिभ्युहरूलाई ३ वटा कोलममा बाँड्ने र Infinite Loop को लागि Double गर्ने
const col1 = [...reviews, ...reviews];
const col2 = [...reviews.reverse(), ...reviews]; // फरक देखाउन reverse गरिएको
const col3 = [...reviews.slice(2), ...reviews, ...reviews.slice(0,2)]; 

export default function Testimonials() {
  const renderCard = (review, index) => (
    <div key={index} className="testimonial-card">
      <p className="t-text-msg">{review.text}</p>
      <div className="t-card-footer">
        <img src={review.avatar} alt={review.name} className="t-avatar" />
        <div className="t-user-info">
          <span className="t-user-name">{review.name}</span>
          <span className="t-user-grade">{review.grade}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials-section">
      <h2 className="t-section-title">What Students Say</h2>
      
      <div className="testimonials-container-vertical">
        
        {/* Column 1 - Down Scroll */}
        <div className="t-column col-down-fast">
          <div className="t-track">
            {col1.map((review, i) => renderCard(review, i))}
          </div>
        </div>

        {/* Column 2 - Down Scroll (Slower/Offset) */}
        <div className="t-column col-down-slow hide-on-mobile">
          <div className="t-track">
            {col2.map((review, i) => renderCard(review, i))}
          </div>
        </div>

        {/* Column 3 - Down Scroll */}
        <div className="t-column col-down-normal hide-on-tablet">
          <div className="t-track">
            {col3.map((review, i) => renderCard(review, i))}
          </div>
        </div>

      </div>
    </section>
  );
}