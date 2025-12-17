import React from 'react';

export const Ingredients: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] bg-[#FFF8E1]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-[#FFF8E1] p-10 md:p-20 flex flex-col justify-center relative">
        <h2 className="font-display text-4xl md:text-6xl text-black uppercase mb-8">
          Only <span className="text-[#FF6B00]">Natural</span> Ingredients
        </h2>
        <p className="font-bold text-gray-600 mb-8 uppercase tracking-wide">
          Our kombucha has a simple and healthy ingredients:
        </p>
        
        <div className="bg-[#CCFF00] p-6 md:p-8 rounded-3xl border-2 border-black w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform">
          <img src="/patti.png" alt="Leaf" className="mb-2 md:mb-4 w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="font-display text-base md:text-xl uppercase text-center">Organic Tea</span>
        </div>

        {/* Floating Banner */}
        <div className="mt-8 md:mt-12 bg-[#5D3FD3] text-white p-4 md:p-6 rounded-2xl transform md:translate-x-20 shadow-xl relative z-10 border-l-4 md:border-l-8 border-[#FF99CC]">
           <h4 className="font-display text-xl md:text-2xl uppercase mb-2">Please Note!</h4>
           <p className="text-xs md:text-sm font-medium opacity-90">
             Sugar added to the drink undergoes a fermentation process and is completely absorbed by healthy bacteria.
           </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative bg-[#FFF8E1] overflow-hidden md:left-0 md:top-0">
        <img 
          src="/bowl.png" 
          alt="Fresh Fruits" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};