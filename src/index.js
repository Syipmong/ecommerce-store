// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './components/ProductContext';

ReactDOM.render(
    <ProductProvider>
      <App />
    </ProductProvider>,
  document.getElementById('root')
);
