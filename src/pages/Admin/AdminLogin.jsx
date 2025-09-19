import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!username.trim()) errs.username = 'Username is required';
    if (!password) errs.password = 'Password is required';
    return Object.keys(errs).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) {
      setErrors(prev => ({ ...prev })); // force rerender to show errors
      return;
    }

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('admin_logged_in', 'true');
      navigate('/admin/dashboard');
    } else {
      setErrors({ form: 'Incorrect username or password' });
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Please contact admin@example.com to reset your password.');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '40px 35px',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          width: '100%',
          maxWidth: '400px',
          boxSizing: 'border-box',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            color: '#5a4d9d',
            marginBottom: '30px',
            fontWeight: '700',
            fontSize: '2rem',
            letterSpacing: '1.3px',
          }}
        >
          Admin Login
        </h2>

        {errors.form && (
          <div
            style={{
              marginBottom: '20px',
              color: '#d93025',
              fontWeight: '600',
              fontSize: '0.9rem',
            }}
          >
            {errors.form}
          </div>
        )}

        <div style={{ marginBottom: '22px', textAlign: 'left' }}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (errors.username) setErrors(prev => ({ ...prev, username: '' }));
            }}
            placeholder="Username"
            autoComplete="username"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '8px',
              border: errors.username ? '2px solid #d93025' : '1.8px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#5a4d9d')}
            onBlur={(e) => (e.target.style.borderColor = errors.username ? '#d93025' : '#ccc')}
          />
          {errors.username && (
            <small style={{ color: '#d93025', fontWeight: '600' }}>{errors.username}</small>
          )}
        </div>

        <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'left' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
            }}
            placeholder="Password"
            autoComplete="current-password"
            style={{
              width: '100%',
              padding: '14px 45px 14px 16px',
              borderRadius: '8px',
              border: errors.password ? '2px solid #d93025' : '1.8px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#5a4d9d')}
            onBlur={(e) => (e.target.style.borderColor = errors.password ? '#d93025' : '#ccc')}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            aria-label="Toggle password visibility"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#5a4d9d',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              userSelect: 'none',
              padding: '0',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && (
            <small style={{ color: '#d93025', fontWeight: '600' }}>{errors.password}</small>
          )}
        </div>

        <div
          style={{
            textAlign: 'right',
            marginBottom: '30px',
            fontSize: '0.9rem',
          }}
        >
          <a
            href="#!"
            onClick={handleForgotPassword}
            style={{
              color: '#5a4d9d',
              textDecoration: 'underline',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            title="Forgot Password"
          >
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#5a4d9d',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: '700',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(90, 77, 157, 0.6)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#483d8b')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#5a4d9d')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
