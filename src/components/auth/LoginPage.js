// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history('/store'); // Redirect to store page after login
    } catch (error) {
      alert(`Error logging in: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
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
        <button style={styles.actionButton} onClick={handleLogin}>
          Login
        </button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;