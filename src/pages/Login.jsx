import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHexagon, FiLogIn } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    if (email && password) {
      navigate('/posts');
    }
  };

  return (
    <div className="login-container animate-fade-in">
      <div className="glass-panel login-card">
        <h1 className="title" style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>Welcome Back</h1>
        <p className="subtitle" style={{ marginBottom: '2rem' }}>Enter your details to access your account</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label className="form-label">Password</label>
             </div>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            <FiLogIn /> Sign In
          </button>
        </form>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--primary-hover)', textDecoration: 'none', fontWeight: 500 }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
