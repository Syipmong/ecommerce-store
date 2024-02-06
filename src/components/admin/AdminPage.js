// AdminPage.js
import React, { useState } from 'react';
import { firestore, storage } from '../../firebase';

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
    price: '',
    description: '',
    image: null, // Store the image file object
    sellerName: '',
    sellerPhone: '',
    sellerEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductData((prevData) => ({ ...prevData, image: imageFile }));
  };

  const handleAddProduct = async () => {
    try {
      // Generate a unique product code
      const productCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Upload image to Firebase Storage with product code as filename
      const imageRef = storage.ref(`images/${productCode}`);
      await imageRef.put(productData.image);

      // Get the download URL of the uploaded image
      const imageUrl = await imageRef.getDownloadURL();

      // Include product code and image URL in product data
      const dataToAdd = {
        ...productData,
        productCode,
        image: imageUrl,
      };

      // Add product data to Firestore with product code as document name
      await firestore.collection('products').doc(productCode).set(dataToAdd);

      alert('Product added successfully!');
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
            type="file"
            accept="image/*"
            name="image"
            style={styles.inputField}
            onChange={handleImageChange}
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