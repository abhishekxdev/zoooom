import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export const FloatingCartIcon: React.FC = () => {
  const { getTotalItems, openCart } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 bg-[#FF6B00] rounded-full p-4 shadow-2xl hover:scale-110 transition-transform border-4 border-[#CCFF00] hover:border-[#b8e600] cursor-pointer"
      aria-label="Open cart"
    >
      <div className="relative">
        <ShoppingBag size={32} className="text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm border-2 border-black shadow-md">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
    </button>
  );
};
