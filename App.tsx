import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Ingredients } from './components/Ingredients';
import { VarietyPack } from './components/VarietyPack';
import { Testimonials } from './components/Testimonials';
import { Locator, FAQSection } from './components/FAQ'; // Locator and FAQSection are exported from same file for simplicity here
import { Promo } from './components/Promo';
import { FooterSection } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-[#1A1A1A] overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      <Navbar />
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
    </div>
  );
}

export default App;