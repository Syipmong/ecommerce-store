// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navbar: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#2ecc71',
    transition: 'background-color 0.3s ease',
  },
  activeLink: {
    backgroundColor: '#2ecc71',
  },
};

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <NavLink to="/" style={styles.logo}>Dr. Amina Store</NavLink>
      <div style={styles.navLinks}>
        <NavLink exact to="/store" style={styles.link} activeStyle={styles.activeLink}>Store</NavLink>
        <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>Home</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
