import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../contexts/CartContext';

export const Products: React.FC = () => {
  // Show only first 3 products
  const popularProducts = PRODUCTS.slice(0, 3);
  const { addToCart } = useCart();

  return (
    <section id="products" className="bg-[#FF6B00] py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#CCFF00] text-center mb-8 md:mb-12 uppercase drop-shadow-md px-4">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {popularProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-[2rem] p-6 flex flex-col items-center relative shadow-xl overflow-hidden group"
            >
              {/* Card Background Pattern */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: product.pattern,
                  backgroundSize: product.pattern.includes('url') ? 'cover' : undefined,
                  backgroundRepeat: product.pattern.includes('url') ? 'repeat' : undefined
                }}
              ></div>

              <div className="relative z-10 w-full flex flex-col items-center">
                 <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-32 sm:w-40 h-auto object-contain mb-4 md:mb-6 transition-transform duration-300 ${product.image === '/9.png' ? 'transform rotate-[20deg] group-hover:scale-110' : 'transform group-hover:scale-110'}`}
                />
                
                <h3 className="font-display text-xl md:text-2xl text-black uppercase mb-2 text-center px-2">{product.name}</h3>
                <p className="font-bold text-lg md:text-xl text-gray-700 mb-4 md:mb-6">${product.price}</p>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                  }}
                  className="w-full bg-[#5D3FD3] text-white font-bold py-3 rounded-full hover:bg-[#4a32a8] transition-colors border-2 border-transparent hover:border-black uppercase text-sm tracking-wider"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link 
            to="/products"
            className="inline-block bg-[#CCFF00] text-black font-bold py-3 md:py-4 px-6 md:px-10 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase text-sm md:text-base"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};