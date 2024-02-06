// ProductContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Your authentication methods (signup, login, logout) can be defined here
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Context value containing both product and authentication related data and methods
  const value = {
    selectedProduct,
    setProduct: setSelectedProduct,
    quantity,
    updateQuantity: setQuantity,
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <ProductContext.Provider value={value}>
      {!loading && children}
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
