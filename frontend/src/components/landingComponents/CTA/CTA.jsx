import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CTA.css';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const textElements = textRef.current.children;
    const actionElements = actionRef.current.children;

    // १. पूरा CTA Banner को लागि Smooth Scale & Fade-in एनिमेसन
    gsap.fromTo(banner,
      { 
        opacity: 0, 
        scale: 0.92,
        y: 40 
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: banner,
          start: "top 85%", // स्क्रिनको ८५% मा ब्यानर आइपुग्दा एनिमेसन सुरु हुने
          toggleActions: "play none none reverse"
        }
      }
    );

    // २. देब्रे पट्टिको Text Elements को लागि Slide-in
    gsap.fromTo(textElements,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // ३. दाहिने पट्टिको Button र Robot को लागि Pop-up
    gsap.fromTo(actionElements,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: banner,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Clean up triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-banner" ref={bannerRef}>
        
        {/* Left Side: Headings */}
        <div className="cta-text-side" ref={textRef}>
          <h2 className="cta-main-title">
            Ready To Learn Smarter <br />
            with Your AI Teacher?
          </h2>
          <p className="cta-subtitle">
            आजै जोडिनुहोस् र आफ्नो सिकाई यात्रा उत्कृष्ट बनाउनुहोस्!
          </p>
        </div>

        {/* Center/Right Side: Action Button & Robot Graphic */}
        <div className="cta-action-side" ref={actionRef}>
          <button className="cta-btn">
            Get Started Free <span className="cta-arrow">→</span>
          </button>
          
          {/* Right Side: Cute AI Robot Image */}
          <div className="cta-robot-wrapper">
            <img 
              src="https://img.freepik.com/free-vector/cute-robot-holding-clipboard-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5383.jpg" 
              alt="AI Teacher Robot" 
              className="cta-robot-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}