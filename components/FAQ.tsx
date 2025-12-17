import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, X } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-2 border-black rounded-2xl mb-4 bg-white/90 overflow-hidden">
      <button 
        className="w-full p-4 md:p-6 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="font-bold text-sm md:text-base uppercase tracking-wide pr-4">{question}</span>
        {isOpen ? <X size={20} /> : <Plus size={20} />}
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 p-4 md:p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <p className="text-sm md:text-base text-gray-700 font-medium">{answer}</p>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FF99CC] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-200 uppercase mb-2 leading-none">
              You ask,
            </h2>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black uppercase mb-6 md:mb-8 leading-none">
              We Answer!
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            {FAQS.map((faq, index) => (
              <AccordionItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Locator: React.FC = () => {
  return (
    <section className="bg-[#FFF8E1] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black uppercase mb-8 md:mb-16 px-4">
          Where to find <span className="text-[#FF6B00]">Zoooom</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Map */}
          <div className="w-full md:w-1/2">
             <h3 className="font-display text-2xl md:text-3xl text-[#5D3FD3] text-center mb-3 md:mb-4 uppercase">In Stores</h3>
             <p className="text-center text-xs md:text-sm font-bold uppercase mb-4 md:mb-6 px-4">Find Zoooom at selected organic shops, cafes, and supermarkets near you.</p>
             <div className="rounded-[2rem] border-2 border-black overflow-hidden shadow-lg h-48 sm:h-64 md:h-80 bg-gray-200 relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19373.850341600766!2d77.7152047558962!3d12.981251397431723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765980503777!5m2!1sen!2sin" 
                 width="600" 
                 height="450" 
                 style={{ border: 0, width: '100%', height: '100%' }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="w-full h-full"
               />
             </div>
          </div>

          {/* Online */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-0">
             <h3 className="font-display text-2xl md:text-3xl text-[#5D3FD3] text-center mb-3 md:mb-4 uppercase">Order Online</h3>
             <p className="text-center text-xs md:text-sm font-bold uppercase mb-6 md:mb-8 max-w-xs px-4">Shop our full range and enjoy fresh kombucha whenever you want</p>
             <button className="bg-[#CCFF00] text-black font-bold py-2 md:py-3 px-6 md:px-10 rounded-full border-2 border-black hover:bg-white transition-colors uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-sm md:text-base">
               Order Now
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};