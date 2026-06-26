import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './HowItWorks.css';

// ScrollTrigger दर्ता गर्ने
gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const badgeRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    // १. यो सेक्सनका लागि मात्र Lenis Smooth Scroll सुरु गर्ने
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Lenis र GSAP लाई लिंक गर्ने जादु
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // २. स्क्रोल एनिमेसन टाइमलाइन
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // हेडलाइन र बिवरण आउने एनिमेसन
    tl.fromTo(textRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    )
    // डाउनलोड बटनहरू एकपछि अर्को गर्दै पप हुने
    .fromTo(badgeRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.15, ease: 'back.out(1.7)' },
      "-=0.3"
    )
    // मोबाइल इमेज बिस्तारै तलबाट माथि सर्ने
    .fromTo(mediaRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' },
      "-=0.6"
    );

    // ३. निरन्तर हावामा तैरिरहने एनिमेसन (Infinite Floating Effect)
    const floatAnim = gsap.to(mediaRef.current, {
      y: -12,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });

    // कम्पोनेन्ट अनमाउन्ट हुँदा क्लिनअप गर्ने
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      floatAnim.kill();
    };
  }, []);

  return (
    <section className="how-it-works" ref={sectionRef}>
      <div className="how-container">
        
        {/* Left Side: Content & App Badges */}
        <div className="how-content">
          <div ref={textRef}>
            <h2 className="how-title">Learn Anytime, Anywhere</h2>
            <p className="how-description">
              मेरो मोबाइल App डाउनलोड गरेर घरमै बसी सजिलै र 
              कुनै पनि बेला, जहाँ भए पनि सिक्नुहोस्।
            </p>
          </div>
          
          <div className="download-badges" ref={badgeRef}>
            <a href="#google-play" className="badge-btn">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
              />
            </a>
            <a href="#app-store" className="badge-btn">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
              />
            </a>
          </div>
        </div>

        {/* Right Side: Mockup Image */}
        <div className="how-media" ref={mediaRef}>
          <img 
            src="/landingAssets/HowItWork.png" 
            alt="App Mockups" 
            className="mockups-img" 
          />
        </div>

      </div>
    </section>
  );
}