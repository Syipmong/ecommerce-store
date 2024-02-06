// AdminPage.js
import React, { useState } from 'react';
import { firestore } from '../../firebase';


const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  dashboard: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  formContainer: {
    width: '400px',
    margin: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  actionButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const AdminPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    productCode: '',
    price: '',
    description: '',
    image: '',
    sellerName: '',
    sellerPhone: '',
    sellerEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input is numeric and has exactly 6 digits for productCode
    if (name === 'productCode' && !/^\d{0,6}$/.test(value)) {
      return;
    }

    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddProduct = async () => {
    try {
      // Generate a 6-digit numeric product code
      const productCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Include product code in product data
      const dataToAdd = { ...productData, productCode };

      // Add product data to Firestore
      await firestore.collection('products').add(dataToAdd);
      alert("Product added successfully!")
    } catch (error) {
      alert(`Error adding product: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      <div style={styles.dashboard}>
        <div style={styles.formContainer}>
          <h2>Add Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            style={styles.inputField}
            value={productData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Product Code (6 digits)"
            name="productCode"
            style={styles.inputField}
            value={productData.productCode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            style={styles.inputField}
            value={productData.price}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Description"
            name="description"
            style={styles.inputField}
            value={productData.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            style={styles.inputField}
            value={productData.image}
            onChange={handleInputChange}
          />
          <button style={styles.actionButton} onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
        <div style={styles.formContainer}>
          <h2>Seller Information</h2>
          <input
            type="text"
            placeholder="Seller Name"
            name="sellerName"
            style={styles.inputField}
            value={productData.sellerName}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            placeholder="Seller Phone"
            name="sellerPhone"
            style={styles.inputField}
            value={productData.sellerPhone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Seller Email"
            name="sellerEmail"
            style={styles.inputField}
            value={productData.sellerEmail}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;