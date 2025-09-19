import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      background: 'linear-gradient(135deg, #002244, #005288)',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#ffffff',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '6px 0',
      position: 'relative',
    },
    activeLink: {
      borderBottom: '2px solid #f9dc5c',
    },
    adminLink: {
      backgroundColor: '#f9dc5c',
      color: '#002244',
      padding: '6px 12px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  // Custom link renderer for conditional styling
  const renderLink = (to, label, isAdmin = false) => (
    <NavLink
      to={to}
      end
      style={({ isActive }) =>
        isAdmin
          ? styles.adminLink
          : {
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            }
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header style={styles.navbar}>
      <div>
        <NavLink to="/" style={styles.logo}>
          🏠 RealtyCorp
        </NavLink>
      </div>
      <nav style={styles.navLinks}>
        {renderLink('/', 'Home')}
        {renderLink('/projects', 'Projects')}
        {renderLink('/contact', 'Contact')}
        {renderLink('/admin', 'Admin', true)}
      </nav>
    </header>
  );
};

export default Navbar;
