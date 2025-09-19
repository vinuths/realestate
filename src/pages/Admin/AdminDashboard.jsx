import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('admin_logged_in');
    navigate('/admin');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          padding: '40px 35px',
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            color: '#5a4d9d',
            fontWeight: '700',
            fontSize: '2.4rem',
            marginBottom: '10px',
            letterSpacing: '1.2px',
          }}
        >
          Welcome, Admin
        </h2>
        <p
          style={{
            color: '#666',
            fontSize: '1rem',
            marginBottom: '30px',
          }}
        >
          Manage your projects and settings from here.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '35px' }}>
          <Link
            to="/admin/add"
            style={{
              padding: '14px 20px',
              backgroundColor: '#5a4d9d',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(90, 77, 157, 0.6)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#483d8b')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#5a4d9d')}
          >
            Add New Project
          </Link>

          <Link
            to="/admin/projects"
            style={{
              padding: '14px 20px',
              backgroundColor: '#764ba2',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(118, 75, 162, 0.6)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#5a3d91')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#764ba2')}
          >
            View Projects
          </Link>
        </div>

        <button
          onClick={logout}
          style={{
            padding: '12px 0',
            width: '100%',
            backgroundColor: '#d9534f',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: '700',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(217, 83, 79, 0.6)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#c9302c')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#d9534f')}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
