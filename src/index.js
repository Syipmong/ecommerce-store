// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './components/ProductContext';
import { CartProvider } from './components/CartContext';

ReactDOM.render(
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>,
  document.getElementById('root')
);
