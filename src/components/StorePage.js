import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  product: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    marginBottom: '10px',
  },
};

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    image: 'product2.jpg',
  },
  // products will be added dynamically
];

export default function StorePage() {
  return (
    <div style={styles.container}>
      <h1>Our Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={styles.product}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
