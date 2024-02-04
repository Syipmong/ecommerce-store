import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './prods';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  product: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  productDescription: {
    fontSize: '14px',
    color: '#555',
  },
  button: {
    padding: '10px',
    width: '100%',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  shortDescription: {
    maxHeight: '80px', 
    overflow: 'hidden',
  },
};


export default function StorePage() {
  return (
    <div style={styles.container}>
      <h1>Our Products</h1>
      <div style={styles.productsContainer}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.product}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.shortDescription}>{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <button style={styles.button}>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}