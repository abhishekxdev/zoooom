import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../contexts/CartContext';
import { Promo } from '../components/Promo';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQ';
import { FooterSection } from '../components/Footer';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();

  const categories = ['all', 'soda', 'kombucha', 'energy'];
  const categoryLabels: { [key: string]: string } = {
    all: 'ALL PRODUCTS',
    soda: 'SODA',
    kombucha: 'KOMBUCHA',
    energy: 'ENERGY DRINKS'
  };

  const allowedImages = ['/5.png', '/7.png', '/9.png'];

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => {
        const product = p as any;
        return product.category === selectedCategory;
      });

  return (
    <div className="font-sans antialiased text-[#1A1A1A] overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {/* Products Section */}
      <section className="bg-[#FF99CC] py-20 px-4 pt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center mb-8 md:mb-12 uppercase">
            PRODUCTS
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base uppercase border-2 transition-all ${
                  selectedCategory === category
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00]'
                    : 'bg-transparent text-black border-[#CCFF00] hover:bg-[#CCFF00]'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => {
              const productImage = allowedImages[index % allowedImages.length];
              return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col group"
              >
                {/* Upper Section - Pink Background with Pattern */}
                <div 
                  className="relative flex items-center justify-center pt-8 pb-4 px-6"
                  style={{ 
                    background: product.pattern || '#FFB6D9',
                    backgroundSize: product.pattern?.includes('url') ? 'cover' : undefined,
                    backgroundRepeat: product.pattern?.includes('url') ? 'repeat' : undefined
                  }}
                >
                  <img 
                    src={productImage} 
                    alt={product.name}
                    className={`w-32 sm:w-40 h-auto object-contain transition-transform duration-300 ${
                      productImage === '/9.png' 
                        ? 'transform rotate-[15deg] group-hover:scale-110' 
                        : 'transform group-hover:scale-110'
                    }`}
                  />
                </div>

                {/* Lower Section - Beige Background with Details */}
                <div className="bg-[#F7EDE1] px-6 py-4 flex flex-col items-center flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-black uppercase mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="font-bold text-xl md:text-2xl text-black mb-6">
                    ${product.price}
                  </p>
                  
                  {/* Button with White and Blue Ribbon Effect */}
                  <div className="relative w-full mb-4 flex justify-center">
                    {/* White ribbon background layer (peeks out from underneath) */}
                    <div className="absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-[calc(100%+16px)] h-[calc(100%+8px)] bg-white rounded-lg z-0"></div>
                    {/* Purple/Blue button */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: productImage,
                        });
                      }}
                      className="relative w-full bg-[#5B41A0] text-white font-bold py-3 rounded-lg hover:bg-[#4a3590] transition-colors uppercase text-sm tracking-wider z-10"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <Promo />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
