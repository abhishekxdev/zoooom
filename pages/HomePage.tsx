import React from 'react';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { Ingredients } from '../components/Ingredients';
import { VarietyPack } from '../components/VarietyPack';
import { Testimonials } from '../components/Testimonials';
import { Locator } from '../components/FAQ';
import { Promo } from '../components/Promo';
import { FAQSection } from '../components/FAQ';
import { FooterSection } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <main>
        <Products />
        <About />
        <Ingredients />
        <VarietyPack />
        <Testimonials />
        <Locator />
        <Promo />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  );
};
