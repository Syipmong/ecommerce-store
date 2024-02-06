import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './NavBar';

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
  productCode: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '5px',
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
  loading: {
    fontSize: '20px',
    marginTop: '20px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  pageButton: {
    padding: '10px',
    margin: '5px 5px',
    marginBottom: '50px',
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  loadingSpinner: {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite', // Ensure animation is properly defined
    margin: '20px auto',
  },
  // Define the CSS animation
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = await firestore.collection('products').get();
        const productsData = productCollection.docs.map((doc) => ({
          productId: doc.id,
          productCode: uuidv4(),
          ...doc.data(),
        }));
        setProducts(productsData);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (err) {
        alert(`Error getting products ${err.message}`);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredProducts = currentItems.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={styles.container}>
      <Navbar/>
      <h1>Our Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        style={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <div style={styles.loadingSpinner} /> 
      ) : (
        <React.Fragment>
          <div style={styles.pagination}>
            {pageNumbers.map((number) => (
              <div
                key={number}
                style={styles.pageButton}
                onClick={() => paginate(number)}
              >
                {number}
              </div>
            ))}
          </div>
          <div style={styles.productsContainer}>
            {filteredProducts.map((product) => (
              <div key={product.productId} style={styles.product}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productCode}>Code: {product.productCode}</p> {/* Display product code */}
                <p style={styles.price}>${product.price}</p>
                <Link to={`/store/product/${product.productId}`}>
                  <button style={styles.button}>View Product</button>
                </Link>
              </div>
            ))}
          </div>
          <div style={styles.pagination}>
            {pageNumbers.map((number) => (
              <div
                key={number}
                style={styles.pageButton}
                onClick={() => paginate(number)}
              >
                {number}
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
