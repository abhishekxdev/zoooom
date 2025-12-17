import React from 'react';
import { REVIEWS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="bg-[#FF6B00] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white text-center uppercase mb-8 md:mb-16 px-4">
          What people say <br /> <span className="text-[#CCFF00]">about Zoooom</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-[#FFF8E1] p-6 md:p-8 rounded-[2rem] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] flex flex-col justify-between">
              <div>
                 <h3 className="font-display text-lg md:text-xl uppercase text-[#5D3FD3] mb-3 md:mb-4">The best kombucha I've ever tried!</h3>
                 <p className="font-medium text-gray-800 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                   "{review.text}"
                 </p>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <img src={review.avatar} alt={review.author} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black object-cover flex-shrink-0" />
                <div>
                  <p className="font-bold text-black text-sm md:text-base">{review.author}</p>
                  <p className="text-xs text-gray-500 uppercase font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 bg-[#CCFF00] rounded-full border-2 border-black flex items-center justify-center hover:bg-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 bg-[#CCFF00] rounded-full border-2 border-black flex items-center justify-center hover:bg-white transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};