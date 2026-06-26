import React, { useEffect, useRef } from "react";
import photo from "../../../assets/image.png";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const trustRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // १. सफ्ट ब्याकग्राउन्ड एनिमेसन
    tl.fromTo(
      glowRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
    );

    // २. कन्टेन्टहरू माथि प्रिमियम तरिकाले फेड इन हुने
    tl.fromTo(
      [
        badgeRef.current,
        titleRef.current,
        subTitleRef.current,
        descRef.current,
      ],
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" },
      "-=1.2",
    );

    // ३. बटन र सोसल प्रुफ एकैसाथ स्मूथ आउने
    tl.fromTo(
      [actionsRef.current, trustRef.current],
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.4",
    );

    // ४. दायाँको मुख्य ड्यासबोर्ड इमेज र फ्लोटिङ कार्ड एनिमेसन
    tl.fromTo(
      imgWrapperRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    );

    tl.fromTo(
      cardRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.4)" },
      "-=0.2",
    );
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          <div className="badge-container" ref={badgeRef}>
            <span className="hero-badge">
              <span className="badge-pulse"></span> नयाँ पुस्ताको स्मार्ट सिकाई
            </span>
          </div>

          <h1 className="hero-title" ref={titleRef}>
            Smarter learning,
            <br />
            <span className="gradient-text">made personal.</span>
          </h1>

          <p className="hero-subtitle-nepali" ref={subTitleRef}>
            कठिन पाठ्यक्रम अब बुझ्न एकदमै सजिलो।
          </p>

          <p className="hero-description" ref={descRef}>
            AI नेपालीको साथमा जुनसुकै विषय २४/७ बुझ्नुहोस्, ओभरलोड विना आफ्नो
            गतिमा तयारी गर्नुहोस्।
          </p>

          <div className="hero-actions" ref={actionsRef}>
            <a href="#register" className="btn-primary">
              Start Learning Free
            </a>
            <button className="btn-secondary">
              See how it works <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Social Proof / Trust Banner */}
          <div className="hero-trust" ref={trustRef}>
            <div className="avatar-group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                className="trust-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                className="trust-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                className="trust-avatar"
              />
            </div>
            <div className="trust-text-block">
              <div>
                नेपालभरिका <span className="stat-bold">१०,०००+</span>{" "}
                विद्यार्थीद्वारा विश्वासिलो
              </div>
              <div>
                औसत रेटिङ <span className="stat-bold">★ 4.9/5</span> (उत्कृष्ट
                नतिजा)
              </div>
            </div>
          </div>
        </div>

        {/* Right Graphics Side */}
        <div className="hero-graphics">
          <div className="graphics-wrapper" ref={imgWrapperRef}>
            {/* Clean Premium Dashboard Preview */}
            <img
              src={photo}
              alt="AI Dashboard Interface"
              className="dashboard-img"
            />

            {/* Micro Interaction Card instead of old mobile overlay */}
            <div className="interactive-card" ref={cardRef}>
              <div className="card-icon">✓</div>
              <div className="card-info">
                <span className="card-title">Personalized Plan Ready</span>
                <span className="card-sub">Tailored to your weaknesses</span>
              </div>
            </div>

            {/* Premium Radial Ambient Glow */}
            <div className="glow-effect" ref={glowRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
