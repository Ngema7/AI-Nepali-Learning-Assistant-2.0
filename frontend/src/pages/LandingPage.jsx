import React from 'react';
import Navbar from '../components/landingComponents/Navbar/Navbar';
import Hero from '../components/landingComponents/Hero/Hero';
import Stats from '../components/landingComponents/Stats/Stats';
import ProblemsSolution from '../components/landingComponents/ProblemsSolution/ProblemsSolution';
import Features from '../components/landingComponents/Features/Features';

import AiChatTutor from '../components/landingComponents/AiChatTutor/AiChatTutor';
import CoverSubjects from "../components/landingComponents/CoverSubjects/CoverSubjects";
import HowItWorks from '../components/landingComponents/HowItWorks/HowItWorks';
import AnalyticsGamification from '../components/landingComponents/AnalyticsGamification/AnalyticsGamification';
import Pricing from '../components/landingComponents/Pricing/Pricing';
import Testimonials from '../components/landingComponents/Testimonials/Testimonials';
import FAQ from '../components/landingComponents/FAQ/FAQ';
import CTA from '../components/landingComponents/CTA/CTA';
import Footer from '../components/landingComponents/Footer/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
        <Hero />
        <Stats />
        <ProblemsSolution />
        <Features />
        <AiChatTutor />
        <CoverSubjects />
        <HowItWorks />
        <AnalyticsGamification />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      <Footer />
    </>
  );
}