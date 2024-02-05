import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  productDetail: {
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: '300px',
    objectFit: 'contain',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  productName: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  price: {
    fontSize: '20px',
    color: '#333',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  description: {
    fontSize: '16px',
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

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDoc = await firestore.collection('products').doc(productId).get();
        if (productDoc.exists) {
          setProduct({ productId, ...productDoc.data() });
        } else {
          // Handle case when the product with the given ID doesn't exist
          console.log('Product not found');
        }
      } catch (error) {
        alert(`Error getting product details: ${error.message}`);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div style={styles.container}>
      {product ? (
        <div style={styles.productDetail}>
          <img src={product.image} alt={product.name} style={styles.productImage} />
          <h2 style={styles.productName}>{product.name}</h2>
          <p style={styles.price}>${product.price}</p>
          <p style={styles.description}>{product.description}</p>
          <button onClick={() => alert('Add to Cart functionality can be implemented here')}>
            Add to Cart
          </button>
          <br />
          <button onClick={() => alert('Buy Now functionality can be implemented here')}>
            Buy Now
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
