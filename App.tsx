import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { FloatingCartIcon } from './components/FloatingCartIcon';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="font-sans antialiased text-[#1A1A1A] overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
          <Cart />
          <FloatingCartIcon />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;