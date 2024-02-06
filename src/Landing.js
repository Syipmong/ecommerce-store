import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundImage: 'url("src/assets/shopping.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  featuredProducts: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredProduct: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  featuredProductsHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '20px',
  },
  footer: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#34495e',
    color: 'white',
  },
};

export default function Landing() {
  return (
    <div style={styles.container}>
      <Navbar/>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to Amina Store</h1>
        <p style={styles.paragraph}>Simplifying purchases and making them easier for you.</p>
        <Link to="/store">
          <button style={styles.button}>Shop Now</button>
        </Link>
      </div>

      <div style={styles.featuredProducts}>
        <div style={styles.featuredProduct}>
          {/* Featured Product 1 */}
          <img src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12766623-1744897139190294.jpg" alt="Product 1" style={{ width: '100%', marginBottom: '10px' }} />
          {/* <h3>Body Moisturizer</h3> */}
          {/* <p>Description of Product 1</p> */}
        </div>
        <div style={styles.featuredProduct}>
          {/* Featured Product 2 */}
          <img src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13442792-1424913539756896.jpg" alt="Product 2" style={{ width: '100%', marginBottom: '10px' }} />
          {/* <h3>Skin Care Lotion</h3> */}
          {/* <p>Description of Product 2</p> */}
        </div>
        
      </div>

      <div style={styles.footer}>
        <p>&copy; 2024 Amina Store. All rights reserved.</p>
      </div>
    </div>
  );
}
