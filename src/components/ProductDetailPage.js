// ProductDetailPage.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {ProductProvider, useProduct } from './ProductContext';
import productsData from './prods';


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



export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {setProduct, updateQuantity} = useProduct();

  const product = productsData.find((p) => p.id.toString() === productId);

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
    const quantityInput = document.getElementById('quantityInput');
    const quantityValue = quantityInput ? parseInt(quantityInput.value, 10) : 1;
    updateQuantity(quantityValue);
    navigate(`/store/${productId}/purchase`);
}


// const handleAddToCartClick = () => {
//   // Handle the add to cart button click
//   const quantityInput = document.getElementById('quantityInput');
//   const quantityValue = quantityInput ? parseInt(quantityInput.value, 10) : 1;
//   // You can update the cart or perform other actions with the quantityValue
//   alert(`Adding ${quantityValue} ${product.name}(s) to cart`);
// };

  return (
    <ProductProvider>
    <div style={styles.container}>
       <div style={styles.productDetail}>
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <h2 style={styles.productName}>{product.name}</h2>
          <p style={styles.priceTag}>Price: {product.price}</p>
          <p style={styles.longDescription}>{product.productDetail}</p>
        </div>
        <div>
          <button style={styles.buyButton} onClick={handleBuyClick}>Buy</button>
          {/* <button style={styles.addToCartButton} onClick={handleAddToCartClick}>Add to Cart</button> */}
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
