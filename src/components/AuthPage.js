// AuthPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  switchText: {
    marginTop: '10px',
  },
};

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Signing in with:', email, password);
  };

  const handleSignUp = () => {
    console.log('Signing up with:', email, password);
  };

  return (
    <div style={styles.container}>
      <h1>Signin/Signup</h1>
      <div style={styles.formContainer}>
        <input
          type="email"
          placeholder="Email"
          style={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.actionButton} onClick={handleSignIn}>
          Sign In
        </button>
        <button style={styles.actionButton} onClick={handleSignUp}>
          Sign Up
        </button>
        <p style={styles.switchText}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
