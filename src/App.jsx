import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroNad from './components/selerb-nad/HeroNad';
import SocialProofNad from './components/selerb-nad/SocialProofNad';
import ProblemNad from './components/selerb-nad/ProblemNad';
import BenefitsNad from './components/selerb-nad/BenefitsNad';
import IngredientsNad from './components/selerb-nad/IngredientsNad';
import HowToUseNad from './components/selerb-nad/HowToUseNad';
import TestimonialsNad from './components/selerb-nad/TestimonialsNad';
import FAQNad from './components/selerb-nad/FAQNad';
import CheckoutNad from './components/selerb-nad/CheckoutNad';

function App() {
  const scrollToCheckout = () => {
    const element = document.getElementById('checkout-nad');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBuyClick={scrollToCheckout} hideLinks={true} customTitle="SELERB NAD+" />
      
      <main className="pt-16">
        <HeroNad onBuyClick={scrollToCheckout} />
        <SocialProofNad />
        <ProblemNad onBuyClick={scrollToCheckout} />
        <BenefitsNad />
        <IngredientsNad />
        <HowToUseNad />
        <TestimonialsNad />
        <FAQNad />
        <CheckoutNad />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;