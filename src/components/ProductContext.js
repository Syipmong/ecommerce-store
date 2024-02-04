// ProductContext.js

import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const setProduct = (product) => {
    setSelectedProduct(product);
  };

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, setProduct, quantity, updateQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
