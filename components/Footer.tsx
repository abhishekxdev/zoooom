import React, { useState } from 'react';
import { Instagram, Twitter } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-[#FF6B00]">
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Form Section */}
          <div className="flex flex-col justify-center items-center text-center">
           <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#CCFF00] uppercase mb-3 md:mb-4 px-4">Try Zoooom</h2>
           
           {isSubmitted ? (
             <div className="w-full max-w-sm px-4">
               <div className="bg-[#CCFF00] text-black font-bold py-6 md:py-8 px-6 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <p className="text-2xl md:text-3xl uppercase mb-2">Thank You!</p>
                 <p className="text-lg md:text-xl">Thank you for signing up</p>
               </div>
             </div>
           ) : (
             <>
               <p className="text-white font-bold uppercase text-xs sm:text-sm mb-6 md:mb-8 tracking-wide px-4">
                 Sign up now and get a bonus: <span className="text-[#CCFF00]">10% OFF</span> <br/> your next order!
               </p>

               <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-3 md:gap-4 px-4">
                 <input type="text" placeholder="Jane Doe" className="w-full p-3 md:p-4 rounded-full border-2 border-white bg-white/90 focus:outline-none focus:border-black font-bold text-center placeholder-gray-400 text-sm md:text-base" />
                 <input type="tel" placeholder="Your Phone" className="w-full p-3 md:p-4 rounded-full border-2 border-white bg-white/90 focus:outline-none focus:border-black font-bold text-center placeholder-gray-400 text-sm md:text-base" />
                 <input type="email" placeholder="Your Email" className="w-full p-3 md:p-4 rounded-full border-2 border-white bg-white/90 focus:outline-none focus:border-black font-bold text-center placeholder-gray-400 text-sm md:text-base" />
                 <button type="submit" className="w-full bg-[#CCFF00] text-black font-bold py-3 md:py-4 rounded-full border-2 border-black uppercase mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm md:text-base">
                   Sign up now
                 </button>
               </form>
             </>
           )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#CCFF00] py-10 px-6 border-t-4 border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start">
             <h2 className="font-display text-3xl md:text-5xl uppercase leading-none mb-1">Zoo</h2>
             <h2 className="font-display text-3xl md:text-5xl uppercase leading-none mb-1">oom</h2>
           </div>

           <div className="flex flex-wrap justify-center gap-3 md:gap-6 font-bold text-xs sm:text-sm uppercase tracking-wide">
             <a href="#" className="hover:underline">About</a>
             <a href="#" className="hover:underline">Products</a>
             <a href="#" className="hover:underline">How it works</a>
             <a href="#" className="hover:underline">Reviews</a>
             <a href="#" className="hover:underline">Where to find</a>
             <a href="#" className="hover:underline">FAQ</a>
           </div>

           <div className="text-center md:text-right">
             <p className="font-display text-base md:text-xl uppercase mb-2">Join us on social <br/> media!</p>
             <div className="flex justify-center md:justify-end gap-3 md:gap-4">
               <a href="#" className="flex items-center gap-1 font-bold hover:text-white transition-colors text-sm md:text-base"><Instagram size={16} className="md:w-[18px] md:h-[18px]" /> insta</a>
               <a href="#" className="flex items-center gap-1 font-bold hover:text-white transition-colors text-sm md:text-base"><Twitter size={16} className="md:w-[18px] md:h-[18px]" /> twitter</a>
             </div>
           </div>
        </div>

        <div className="container mx-auto mt-10 pt-4 border-t-2 border-black flex flex-col md:flex-row justify-between text-xs font-bold uppercase opacity-60">
           <div className="flex gap-4 mb-2 md:mb-0">
             <span>Terms of Service</span>
             <span>Privacy Policy</span>
           </div>
           <span>By Roman's design</span>
        </div>
      </div>
    </footer>
  );
};