import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-[#FF99CC] min-h-screen flex items-center justify-center pt-24 md:pt-28 overflow-hidden hero-fade-in"
      style={{}}
    >
      {/* Top Right Image */}
      <img 
        src="/topright.png" 
        alt="Top Right" 
        className="absolute -right-8 md:-right-16 z-20 scale-75 md:scale-150 hidden sm:block hero-fade-in-delay-1"
        style={{
          left: '1376px',
          top: '-104px',
          right: '-40px'
        }}
      />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-yellow-300 rounded-full opacity-50 blur-xl animate-pulse hero-fade-in-delay-2"></div>
      <div className="absolute bottom-1/4 right-4 md:right-10 w-24 md:w-48 h-24 md:h-48 bg-purple-300 rounded-full opacity-50 blur-xl hero-fade-in-delay-2"></div>

      <div className="container mx-auto px-4 text-center z-10 flex flex-col items-center">
        {/* Big Title */}
        <div className="relative">
          <img 
            src="/1.png" 
            alt="Top Left" 
            className="absolute z-10 scale-[0.25] sm:scale-[0.3] md:scale-75 hidden sm:block hero-fade-in-delay-2"
            style={{
              left: '-126px',
              top: '-227px',
              transform: 'translateX(-50%)',
              marginLeft: 'clamp(-150px, -20vw, -200px)'
            }}
          />
          <h1 className="font-display text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-none text-white tracking-tighter drop-shadow-lg select-none px-2 hero-fade-in-delay-3">
            ZOOOOM
          </h1>
          <img 
            src="/10.png" 
            alt="Bottom Right" 
            className="absolute z-10 scale-[0.25] sm:scale-[0.3] md:scale-75 hidden sm:block hero-fade-in-delay-4"
            style={{
              left: '442px',
              top: '7px',
              transform: 'translateX(-50%)',
              marginLeft: 'clamp(100px, 15vw, 150px)',
              paddingLeft: '10px',
              paddingRight: '10px'
            }}
          />
        </div>
        
        <h2 className="font-black text-xl sm:text-2xl md:text-3xl text-black mt-4 max-w-2xl uppercase font-display tracking-wide px-4 hero-fade-in-delay-5">
          The energy of nature <br /> in every bottle
        </h2>

        <Link 
          to="/products"
          className="inline-block bg-[#5D3FD3] text-white text-base md:text-lg lg:text-xl font-bold py-3 md:py-4 px-8 md:px-12 rounded-full shadow-[0px_10px_20px_rgba(93,63,211,0.4)] hover:bg-[#4a32a8] transition-all transform hover:-translate-y-1 mt-4 hero-fade-in-delay-6"
        >
          Buy Now
        </Link>
      </div>

    </section>
  );
};