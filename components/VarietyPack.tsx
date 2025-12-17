import React from 'react';
import { Citrus, ShieldCheck, Smile } from 'lucide-react';

export const VarietyPack: React.FC = () => {
  return (
    <section className="bg-[#E0B0FF] py-20 px-4 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-transparent md:bg-white/10 rounded-[3rem] p-0 md:p-12 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/2 relative z-10">
               <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black uppercase mb-4 md:mb-6 leading-[0.9]">
                 Try the entire <br />
                 <span className="text-white">Zoooom</span> Line!
               </h2>
               
               <div className="flex gap-3 md:gap-4 items-start mb-6 md:mb-8">
                 <img src="/6.png" alt="Can" className="w-16 sm:w-24 md:w-32 rounded-lg transform -rotate-6 flex-shrink-0" />
                 <p className="font-medium text-black max-w-xs pt-2 md:pt-4 text-xs sm:text-sm md:text-base">
                   Want to experience the variety of flavors and benefits of kombucha? Our tasting kit is the perfect choice for those who want to familiarize themselves with the Zoooom range.
                 </p>
               </div>

               <div className="flex gap-4 md:gap-8">
                 <div className="flex flex-col items-center">
                   <div className="bg-white p-2 md:p-3 rounded-full border border-black mb-1 md:mb-2"><Citrus size={16} className="md:w-5 md:h-5 text-red-500" /></div>
                   <span className="text-[8px] md:text-[10px] font-bold uppercase">Digestion</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <div className="bg-white p-2 md:p-3 rounded-full border border-black mb-1 md:mb-2"><ShieldCheck size={16} className="md:w-5 md:h-5 text-orange-500" /></div>
                   <span className="text-[8px] md:text-[10px] font-bold uppercase">Immunity</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <div className="bg-white p-2 md:p-3 rounded-full border border-black mb-1 md:mb-2"><Smile size={16} className="md:w-5 md:h-5 text-yellow-500" /></div>
                   <span className="text-[8px] md:text-[10px] font-bold uppercase">Probiotics</span>
                 </div>
               </div>
            </div>

            <div className="w-full md:w-1/2 relative flex justify-center items-center h-[300px] md:h-[400px]">
               {/* Abstract Shapes */}
               <div className="absolute top-10 right-10 w-24 md:w-48 h-24 md:h-48 bg-[#CCFF00] rounded-full mix-blend-multiply filter blur-sm"></div>
               <div className="absolute bottom-10 left-10 w-32 md:w-64 h-16 md:h-32 bg-pink-400 rounded-t-full rounded-b-lg mix-blend-multiply"></div>
               
               <div className="relative z-10 bg-[#D2B48C] w-48 h-48 md:w-64 md:h-64 border-2 md:border-4 border-black flex items-center justify-center transform rotate-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                  <img src="/8.jpeg" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" alt="Box" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};