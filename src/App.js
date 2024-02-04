// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Landing';
import StorePage from '../src/components/StorePage';
import ProductDetailPage from './components/ProductDetailPage';
import PurchasePage from './components/PurchasePage';
import CartPage from './components/CartPage';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/store/:productId/purchase" element={<PurchasePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
