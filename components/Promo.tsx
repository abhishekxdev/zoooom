import React from 'react';

export const Promo: React.FC = () => {
  return (
    <section className="bg-[#5D3FD3] py-12 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white uppercase mb-4 md:mb-6 px-4">
          Order now and get a bonus: <br />
          <span className="text-[#CCFF00]">10% OFF</span> your next order
        </h2>
        <button className="bg-[#CCFF00] text-black font-bold py-2 md:py-3 px-6 md:px-10 rounded-full hover:bg-white transition-colors uppercase border-2 border-transparent hover:border-black text-sm md:text-base">
          Buy Now
        </button>
      </div>
      
      {/* Decorative slices */}
      <img src="/12.png" alt="Kiwi" className="absolute -left-6 md:-left-10 bottom-0 w-12 h-12 md:w-24 md:h-24 opacity-80 animate-spin-slow hidden sm:block" />
      <img src="/10.png" alt="Orange" className="absolute -right-6 md:-right-10 top-0 w-12 h-12 md:w-24 md:h-24 opacity-80 animate-bounce hidden sm:block" />
    </section>
  );
};