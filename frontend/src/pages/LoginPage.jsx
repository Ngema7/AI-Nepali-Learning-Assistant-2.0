import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard'); // लगइन सफल भएपछि ड्यासबोर्डमा पठाउने
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f4f7f6', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>स्वागत छ | Welcome</h2>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '20px' }}>Log in to your AI Nepali Assistant</p>
        
        {error && <div style={{ color: 'red', background: '#ffebee', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="demo@gmail.com" required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
            Log In
          </button>
        </form>

        <div style={{ marginTop: '20px', background: '#f0fdf4', padding: '12px', borderRadius: '6px', border: '1px dashed #10b981', fontSize: '13px' }}>
          <strong style={{ color: '#15803d' }}>Demo Account Details:</strong><br />
          Email: <span style={{ fontFamily: 'monospace' }}>demo@gmail.com</span><br />
          Password: <span style={{ fontFamily: 'monospace' }}>password123</span>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          Don't have an account? <Link to="/register" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;