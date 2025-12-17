import React from 'react';
import { BENEFITS } from '../constants';

export const About: React.FC = () => {
  return (
    <>
      {/* Introduction */}
      <section id="about" className="bg-[#FF6B00] py-20 px-4 overflow-hidden relative">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFF8E1] uppercase leading-tight mb-8 md:mb-12 px-4">
            Zoooom is a naturally fermented tea that fills you with energy and health.
          </h2>

          <div className="flex justify-center items-center gap-4 mb-12 relative">
             <div className="relative">
               <img 
                 src="/1.png" 
                 alt="Top Left" 
                 className="absolute z-10 scale-[0.3] md:scale-[0.6] hidden sm:block"
                 style={{
                   left: '50%',
                   top: '-30px',
                   transform: 'translateX(-50%) rotate(50deg)',
                   marginLeft: '-120px',
                   height: 'auto',
                   maxHeight: '150px'
                 }}
               />
               <img src="/11.png" className="w-48 sm:w-72 md:w-96 transform -rotate-12 relative z-0" alt="Can Left" style={{ height: 'auto', maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
               <img 
                 src="/10.png" 
                 alt="Bottom Right" 
                 className="absolute z-10 scale-[0.3] md:scale-[0.6] hidden sm:block"
                 style={{
                   left: '50%',
                   top: '10px',
                   transform: 'translateX(-50%)',
                   marginLeft: '120px',
                   maxHeight: '150px'
                 }}
               />
             </div>
          </div>

          <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white uppercase mb-6 md:mb-8 px-4">
            Each sip is a combination of ancient traditions and modern technology.
          </h3>

          <button className="bg-[#CCFF00] text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-full border-2 border-black hover:bg-white transition-colors uppercase text-sm md:text-base">
            How it works
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#FFF8E1] py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center relative">
              <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-pink-300 rounded-full blur-2xl opacity-50"></div>
              <img src="/2.png" alt="Benefits Can" className="relative z-10 w-32 sm:w-48 md:w-64 transform rotate-6" style={{ width: 'auto', maxWidth: '100%', height: 'auto' }} />
              <img src="/3.png" alt="New" className="absolute w-12 md:w-24 h-12 md:h-24 hidden sm:block" style={{ left: '50%', top: '-20px', transform: 'translateX(-50%)', marginLeft: '60px' }} />
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black uppercase mb-8 md:mb-12 leading-none px-4">
                The incredible <span className="text-[#FF6B00]">benefits</span> of <br /> our kombucha
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BENEFITS.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.id} className="flex flex-col items-center text-center">
                      <div className="bg-white p-6 rounded-full shadow-lg mb-4">
                        <Icon size={40} className={benefit.color} />
                      </div>
                      <p className="font-bold text-black uppercase text-sm md:text-base leading-tight">
                        {benefit.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};