import React from 'react';
import { Link } from 'react-router-dom';

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
    objectFit: 'cover',
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


export default function StorePage() {
  return (
    <div style={styles.container}>
      <h1>Our Products</h1>
      <div style={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} style={styles.product}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <button style={styles.button}>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}