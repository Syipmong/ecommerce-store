import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductProvider, useProduct } from './ProductContext';
import { firestore } from '../firebase';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  productDetail: {
    display: 'flex',
    maxWidth: '800px',
    width: '70%',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '400px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px 0 0 8px',
  },
  detailsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  productName: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  priceTag: {
    fontSize: '24px',
    color: '#333',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  buySection: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '20px',
  },
  buyButton: {
    padding: '15px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '10px 0',
    fontSize: '18px',
  },
  quantityInput: {
    padding: '10px',
    width: '60px',
    textAlign: 'center',
    borderRadius: '8px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  backButton: {
    padding: '15px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  longDescription: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
};

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { currentUser, setProduct, updateQuantity } = useProduct();
  const [product, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDoc = await firestore.collection('products').doc(productId).get();
        if (productDoc.exists) {
          setProductDetails(productDoc.data());
        } else {
          console.error('Product not found in Firestore');
        }
      } catch (error) {
        console.error(`Error fetching product details: ${error.message}`);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const goBack = () => {
    setProduct(null);
    navigate('/store');
  };

  const handleBuyClick = () => {
    if (!currentUser) {
      // If user is not authenticated, redirect to login page
      navigate('/login');
      return;
    }

    // Proceed with the purchase
    setProduct(product);
    const quantityInput = document.getElementById('quantityInput');
    const quantityValue = quantityInput ? parseInt(quantityInput.value, 10) : 1;
    updateQuantity(quantityValue);
    navigate(`/store/${productId}/purchase`);
  };

  return (
    <ProductProvider>
      <div style={styles.container}>
        {product ? (
          <div style={styles.productDetail}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <div style={styles.detailsContainer}>
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.priceTag}>Price: ${product.price}</p>
              <div style={styles.buySection}>
                <button style={styles.buyButton} onClick={handleBuyClick}>
                  Buy
                </button>
                <input type="number" style={styles.quantityInput} defaultValue="1" min="1" />
              </div>
              <p style={styles.longDescription}>{product.description}</p>
              <button style={styles.backButton} onClick={goBack}>
                Back to Store
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </ProductProvider>
  );
}
