import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, isCartOpen, closeCart } = useCart();
  const allowedImages = ['/5.png', '/7.png', '/9.png'];

  if (!isCartOpen) return null;

  const getProductImage = (id: number) => {
    return allowedImages[(id - 1) % allowedImages.length];
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#F7EDE1] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
        {/* Cart Header */}
        <div className="sticky top-0 bg-[#F7EDE1] border-b-2 border-black p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl md:text-3xl text-black uppercase">Your Cart</h2>
            {getTotalItems() > 0 && (
              <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {getTotalItems()}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size || 'default'}`} className="flex gap-4 pb-6 border-b border-gray-300">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-20 h-20 rounded-lg overflow-hidden"
                      style={{ 
                        background: '#FFB6D9',
                      }}
                    >
                      <img
                        src={getProductImage(item.id)}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-black uppercase text-sm md:text-base mb-1">
                          {item.name}
                        </h3>
                        {item.size && (
                          <p className="text-xs text-gray-600">{item.size}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-gray-500 hover:text-black transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 border-2 border-black rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                          className="px-3 py-1 text-black font-bold hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-bold text-black min-w-[30px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                          className="px-3 py-1 text-black font-bold hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-bold text-black text-lg">
                        ${(item.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="sticky bottom-0 bg-[#F7EDE1] border-t-2 border-black p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-black uppercase text-lg">Total</span>
              <span className="font-bold text-black text-2xl">${getTotalPrice().toFixed(0)}</span>
            </div>
            <button
              onClick={() => {
                closeCart();
                navigate('/checkout');
              }}
              className="w-full bg-[#CCFF00] text-black font-bold py-4 rounded-lg border-2 border-black uppercase text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};
