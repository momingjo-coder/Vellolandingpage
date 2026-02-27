import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Checklist } from './components/Checklist';
import { Services } from './components/Services';
import { SupportProcess } from './components/SupportProcess';
import { TalentPool } from './components/TalentPool';
import { Verification } from './components/Verification';
import { Process } from './components/Process';
import { CTABlock } from './components/CTABlock';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { StrategicValue } from './components/StrategicValue';
import { TechStackMarquee } from './components/TechStackMarquee';
import { Footer } from './components/Footer';

import { FixedChat } from './components/FixedChat';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (!element) return;

      e.preventDefault();
      const navHeight = 64;
      const y = element.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF8F5] via-[#E4F6F2] to-[#F7FAFF]">
      <Navigation scrolled={scrolled} />

      <FixedChat />

      <main id="top" className="pt-[92px]">
        <Hero />
        <PainPoints />
        <Checklist />
        <Services />
        <SupportProcess />
        <StrategicValue />
        <TalentPool />
        <TechStackMarquee />
        <Verification />
        <Process />
        <CTABlock />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}