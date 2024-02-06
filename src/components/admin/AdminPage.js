// AdminPage.js
import React, { useState, useEffect } from 'react';
import { firestore, storage } from '../../firebase';
import Navbar from '../NavBar';

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
  productItem: {
    marginBottom: '20px',
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const AdminPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    sellerName: '',
    sellerPhone: '',
    sellerEmail: '',
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = await firestore.collection('products').get();
        const productsData = productCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
      const productCode = Math.floor(100000 + Math.random() * 900000).toString();
      const imageRef = storage.ref(`images/${productCode}`);
      await imageRef.put(productData.image);
      const imageUrl = await imageRef.getDownloadURL();
      const dataToAdd = {
        ...productData,
        productCode,
        image: imageUrl,
      };
      await firestore.collection('products').doc(productCode).set(dataToAdd);
      alert('Product added successfully!');
    } catch (error) {
      alert(`Error adding product: ${error.message}`);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await firestore.collection('products').doc(productId).delete();
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
      alert('Product deleted successfully!');
    } catch (error) {
      alert(`Error deleting product: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar/>
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
        <div>
          <h2>Products List</h2>
          {products.map((product) => (
            <div key={product.id} style={styles.productItem}>
              <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
              <div>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;