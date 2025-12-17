import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const allowedImages = ['/5.png', '/7.png', '/9.png'];

  const getProductImage = (id: number) => {
    return allowedImages[(id - 1) % allowedImages.length];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission here
    clearCart();
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7EDE1] pt-32 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#CCFF00] text-black font-bold py-3 px-6 rounded-full border-2 border-black hover:bg-white transition-colors uppercase"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-[#1A1A1A] bg-[#F7EDE1] min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black hover:text-gray-600 mb-6 font-bold"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl md:text-5xl text-black uppercase mb-8">
              Checkout
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-black">
                <h2 className="font-display text-2xl md:text-3xl text-black uppercase mb-6">
                  Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold uppercase mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-black">
                <h2 className="font-display text-2xl md:text-3xl text-black uppercase mb-6">
                  Payment Method
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-lg border-2 font-bold uppercase transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#FF6B00] bg-[#FF6B00] text-white'
                        : 'border-black bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 rounded-lg border-2 font-bold uppercase transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-[#FF6B00] bg-[#FF6B00] text-white'
                        : 'border-black bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    PayPal
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`p-4 rounded-lg border-2 font-bold uppercase transition-all ${
                      paymentMethod === 'apple'
                        ? 'border-[#FF6B00] bg-[#FF6B00] text-white'
                        : 'border-black bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    Apple Pay
                  </button>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold uppercase mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase mb-2">Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="w-full p-3 rounded-lg border-2 border-black focus:outline-none focus:border-[#FF6B00]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal/Apple Pay Message */}
                {(paymentMethod === 'paypal' || paymentMethod === 'apple') && (
                  <div className="bg-[#CCFF00] p-6 rounded-lg border-2 border-black">
                    <p className="font-bold text-black">
                      You will be redirected to {paymentMethod === 'paypal' ? 'PayPal' : 'Apple Pay'} to complete your payment.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#CCFF00] text-black font-bold py-4 px-6 rounded-full border-2 border-black uppercase text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Complete Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-black sticky top-24">
              <h2 className="font-display text-2xl md:text-3xl text-black uppercase mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size || 'default'}`} className="flex gap-3 pb-4 border-b border-gray-300">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 rounded-lg overflow-hidden"
                        style={{ background: '#FFB6D9' }}
                      >
                        <img
                          src={getProductImage(item.id)}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black text-sm uppercase">{item.name}</h3>
                      {item.size && <p className="text-xs text-gray-600">{item.size}</p>}
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="font-bold text-black">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-black">
                  <span className="font-bold">Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black">
                  <span className="font-bold">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-black border-t-2 border-black pt-3">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
