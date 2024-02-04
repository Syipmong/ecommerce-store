// CartPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  cartItems: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '400px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  },
  cartItem: {
    marginBottom: '10px',
  },
  itemName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  itemQuantity: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  checkoutButton: {
    padding: '10px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart(); 

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      <div style={styles.cartItems}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <p style={styles.itemName}>{item.name}</p>
              <p style={styles.itemQuantity}>Quantity: 1</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div>
            <p>Total: ${calculateTotal()}</p>
            <Link to="/checkout">
              <button style={styles.checkoutButton}>Proceed to Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
