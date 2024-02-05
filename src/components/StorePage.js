import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';

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
  price: {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  shortDescription: {
    maxHeight: '80px',
    overflow: 'hidden',
    marginBottom: '10px',
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
  searchInput: {
    padding: '8px',
    width: '100%',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = await firestore.collection('products').get();
        const productsData = productCollection.docs.map((doc) => ({
          productId : doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (err) {
        alert(`Error getting products ${err.message}`);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Our Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        style={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div style={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.product}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            {/* <p>{product.productId}</p> */}
            <p style={styles.price}>${product.price}</p>
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
