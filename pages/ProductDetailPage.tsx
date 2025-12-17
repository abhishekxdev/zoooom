import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../contexts/CartContext';
import { Promo } from '../components/Promo';
import { Testimonials } from '../components/Testimonials';
import { FooterSection } from '../components/Footer';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === parseInt(id || '0'));
  const [selectedSize, setSelectedSize] = useState('330ml');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get similar products (first 3 products, excluding current)
  const similarProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  const allowedImages = ['/5.png', '/7.png', '/9.png'];

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = () => {
    if (product) {
      const productImage = allowedImages[(product.id - 1) % allowedImages.length];
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: productImage,
          size: selectedSize,
        });
      }
    }
  };

  // Get product image based on index
  const productImage = allowedImages[(product.id - 1) % allowedImages.length];

  return (
    <div className="font-sans antialiased text-[#1A1A1A] overflow-x-hidden selection:bg-[#CCFF00] selection:text-black bg-[#F7EDE1] min-h-screen">
      {/* Product Detail Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div 
                className="w-full max-w-md aspect-square rounded-2xl overflow-hidden relative"
                style={{ 
                  background: product.pattern || product.color,
                  backgroundSize: product.pattern?.includes('url') ? 'cover' : undefined,
                  backgroundRepeat: product.pattern?.includes('url') ? 'repeat' : undefined
                }}
              >
                <img 
                  src={productImage}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-black uppercase mb-6">
                {product.name}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                A refreshing splash of summer: juicy watermelon essence meets lively carbonation. 
                Light and crisp, this kombucha delivers a burst of natural flavor with every sip. 
                Perfect for those who crave a healthy alternative to traditional sodas.
              </p>

              <p className="font-bold text-4xl md:text-5xl text-black mb-8">
                ${product.price}
              </p>

              {/* Size Options */}
              <div className="mb-6">
                <p className="text-sm font-bold uppercase mb-3">Size</p>
                <div className="flex gap-3">
                  {['330ml', '500ml', '1L'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg font-bold border-2 transition-colors ${
                        selectedSize === size
                          ? 'bg-[#CCFF00] text-black border-[#CCFF00]'
                          : 'bg-white text-black border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center gap-4 bg-[#5B41A0] rounded-lg p-2">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3 bg-white rounded px-4 py-2">
                    <button
                      onClick={decreaseQuantity}
                      className="text-black font-bold text-xl hover:opacity-70"
                    >
                      -
                    </button>
                    <span className="font-bold text-black min-w-[30px] text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="text-black font-bold text-xl hover:opacity-70"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#CCFF00] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#b8e600] transition-colors uppercase"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-600 mr-2">We accept:</span>
                <div className="flex gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded border">Visa</span>
                  <span className="text-xs bg-white px-2 py-1 rounded border">Mastercard</span>
                  <span className="text-xs bg-white px-2 py-1 rounded border">Amex</span>
                  <span className="text-xs bg-white px-2 py-1 rounded border">Apple Pay</span>
                  <span className="text-xs bg-white px-2 py-1 rounded border">Google Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl text-black uppercase mb-8">
            DETAILS
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Our {product.name} is crafted using traditional fermentation methods combined with 
            modern brewing techniques. This unique kombucha is naturally fermented, creating a 
            balanced flavor profile that's both tart and slightly sweet. Packed with live probiotics 
            and antioxidants, it supports digestive health and overall wellness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ingredients + Storage */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-black uppercase mb-6">
                INGREDIENTS + STORAGE
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Filtered water, organic cane sugar, organic black tea</li>
                <li>• Mixed-berry purée (blackberries, raspberries, blueberries)</li>
                <li>• Organic basil leaves for aromatic depth</li>
                <li>• Live kombucha culture (SCOBY)</li>
                <li>• Natural flavors</li>
              </ul>
              <p className="mt-6 text-gray-700">
                <strong>Storage:</strong> Refrigerate at 35-40 °F (2-4 °C). Keep upright. 
                Consume by "Best By" date for optimal taste and probiotic benefits.
              </p>
            </div>

            {/* Bottle + Nutrition */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-black uppercase mb-6">
                BOTTLE + NUTRITION
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• 16 fl oz (473 ml) reusable glass bottle</li>
                <li>• Serving size: 1 bottle</li>
                <li>• Calories: 30 per serving</li>
                <li>• Probiotics: 1 billion CFU per serving</li>
                <li>• Sugar: 3 g per serving</li>
                <li>• Caffeine: 15 mg per serving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <Promo />

      {/* Similar Products Section */}
      <section className="bg-[#FF6B00] py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#CCFF00] text-center mb-12 uppercase">
            SIMILAR PRODUCTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {similarProducts.map((similarProduct, index) => {
              const similarImage = allowedImages[index % allowedImages.length];
              return (
                <Link 
                  key={similarProduct.id}
                  to={`/product/${similarProduct.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col group"
                >
                  {/* Upper Section - Background with Pattern */}
                  <div 
                    className="relative flex items-center justify-center pt-8 pb-4 px-6"
                    style={{ 
                      background: similarProduct.pattern || '#FFB6D9',
                      backgroundSize: similarProduct.pattern?.includes('url') ? 'cover' : undefined,
                      backgroundRepeat: similarProduct.pattern?.includes('url') ? 'repeat' : undefined
                    }}
                  >
                    <img 
                      src={similarImage}
                      alt={similarProduct.name}
                      className={`w-32 sm:w-40 h-auto object-contain transition-transform duration-300 ${
                        similarImage === '/9.png' 
                          ? 'transform rotate-[15deg] group-hover:scale-110' 
                          : 'transform group-hover:scale-110'
                      }`}
                    />
                  </div>

                  {/* Lower Section - Beige Background with Details */}
                  <div className="bg-[#F7EDE1] px-6 py-4 flex flex-col items-center flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-black uppercase mb-2 text-center">
                      {similarProduct.name}
                    </h3>
                    <p className="font-bold text-xl md:text-2xl text-black mb-6">
                      ${similarProduct.price}
                    </p>
                    
                    {/* Button with Blue Ribbon Effect */}
                    <div className="relative w-full mb-4 flex justify-center">
                      {/* Blue ribbon background layer */}
                      <div className="absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-[calc(100%+16px)] h-[calc(100%+8px)] bg-[#5B41A0] rounded-lg z-0"></div>
                      {/* White button */}
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const similarImage = allowedImages[(similarProduct.id - 1) % allowedImages.length];
                          addToCart({
                            id: similarProduct.id,
                            name: similarProduct.name,
                            price: similarProduct.price,
                            image: similarImage,
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

          <div className="text-center">
            <Link 
              to="/products"
              className="inline-block bg-[#CCFF00] text-black font-bold py-3 md:py-4 px-6 md:px-10 rounded-full border-2 border-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase text-sm md:text-base"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
