// AdminPage.js
import React, { useState } from 'react';
import { firestore } from '../../firebase';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  formContainer: {
    maxWidth: '400px',
    margin: '0 auto',
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
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handleAddProduct = async () => {

    try {

      const docRef = await firestore.collection('products').add(productData);
      // eslint-disable-next-line no-unused-vars
      const productId = docRef.id;
      alert('Product added successfully!');
      // You can clear the form or perform other actions after successful addition
    } catch (error) {
      alert(`Error adding product: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Admin Page</h1>
      <div style={styles.formContainer}>
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
    </div>
  );
};

export default AdminPage;
