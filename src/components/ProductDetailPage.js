// ProductDetailPage.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {ProductProvider, useProduct } from './ProductContext';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  productDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px', // Adjust the maxWidth as needed
    width: '70%', // Adjust the width as needed
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  longDescription: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  buySection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buyButton: {
    padding: '10px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
  },
  addToCartButton: {
    padding: '10px',
    backgroundColor: '#f39c12',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
  },
  quantityInput: {
    padding: '8px',
    width: '60px',
    textAlign: 'center',
    borderRadius: '5px',
  },
  backButton: {
    padding: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const products = [
  {
    id: 1,
    name: 'Product 1',
    
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
  },
  // products will be added dynamically
];

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {setProduct} = useProduct();

  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    // Handle the case where the product is not found
    return <p>Product not found</p>;
  }

  const goBack = () => {
    setProduct(null);
    navigate('/store');
  };

  const handleBuyClick = () => {
    // Handle the buy button click
    setProduct(product);
    navigate(`/store/${productId}/purchase`);
  }

  const handleAddToCartClick = () => {
    // Handle the add to cart button click
    alert(`Adding ${product.name} to cart`)
  }

  return (
    <ProductProvider>
    <div style={styles.container}>
       <div style={styles.productDetail}>
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <h2 style={styles.productName}>{product.name}</h2>
          <p style={styles.longDescription}>{product.description}</p>
        </div>
        <div>
          <button style={styles.buyButton} onClick={handleBuyClick}>Buy</button>
          <button style={styles.addToCartButton} onClick={handleAddToCartClick}>Add to Cart</button>
          <input type="number" style={styles.quantityInput} defaultValue="1" min="1" />
        </div>
        <button style={styles.backButton} onClick={goBack}>
          Back to Store
        </button>
      </div>
    </div>
    </ProductProvider>
  );
}
