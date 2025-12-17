import React from 'react';
import { Link } from 'react-router-dom';

export const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-[#1A1A1A] bg-[#F7EDE1] min-h-screen flex items-center justify-center pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-black">
          <div className="mb-6">
            <div className="w-20 h-20 bg-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-black">
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-black uppercase mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Thank you for your order. We've received your order and will begin processing it right away.
            You'll receive a confirmation email shortly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-[#CCFF00] text-black font-bold py-3 px-8 rounded-full border-2 border-black hover:bg-white transition-colors uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="bg-[#FF6B00] text-white font-bold py-3 px-8 rounded-full border-2 border-black hover:bg-orange-600 transition-colors uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
