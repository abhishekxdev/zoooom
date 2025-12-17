import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 p-4">
      <div className="max-w-6xl mx-auto bg-[#CCFF00] rounded-full px-4 sm:px-6 py-2 md:py-3 flex items-center justify-between border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-tighter text-black uppercase">
            Zoooom
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-bold text-sm tracking-wide">
          <a href="#products" className="hover:underline">PRODUCTS</a>
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#works" className="hover:underline">HOW IT WORKS</a>
          <a href="#reviews" className="hover:underline">REVIEWS</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full border border-black transition-transform transform hover:scale-105">
            TRY ZOOOOM
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 sm:top-20 left-4 right-4 bg-[#FFF8E1] rounded-2xl border-2 border-black p-4 sm:p-6 shadow-xl flex flex-col space-y-3 sm:space-y-4 items-center font-bold z-50 text-sm sm:text-base">
          <a href="#products" onClick={() => setIsOpen(false)}>PRODUCTS</a>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#works" onClick={() => setIsOpen(false)}>HOW IT WORKS</a>
          <a href="#reviews" onClick={() => setIsOpen(false)}>REVIEWS</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <button className="bg-[#FF6B00] text-white font-bold py-2 px-6 rounded-full w-full text-sm sm:text-base">
            TRY ZOOOOM
          </button>
        </div>
      )}
    </nav>
  );
};