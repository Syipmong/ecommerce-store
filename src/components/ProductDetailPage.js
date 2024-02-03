// ProductDetailPage.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  productDetail: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  productDescription: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
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
      description: 'Description of Product 1',
      image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg',
    },
    // products will be added dynamically
  ];

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    // Handle the case where the product is not found
    return <p>Product not found</p>;
  }

  const goBack = () => {
    navigate('/store');
  };

  return (
    <div style={styles.container}>
      <div style={styles.productDetail}>
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <h2 style={styles.productName}>{product.name}</h2>
        <p style={styles.productDescription}>{product.description}</p>
        <button style={styles.backButton} onClick={goBack}>
          Back to Store
        </button>
      </div>
    </div>
  );
}
