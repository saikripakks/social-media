import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHexagon, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/';

  if (isLogin) return null;

  return (
    <nav className="navbar">
      <Link to="/posts" className="nav-brand">
        <FiHexagon className="login-logo" style={{ fontSize: '1.8rem', margin: 0 }} />
        <span>Kripzart</span>
      </Link>

      <div className="nav-links">
        <Link to="/posts" className={`nav-link ${location.pathname === '/posts' ? 'active' : ''}`}>
          Feed
        </Link>
        <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FiLogOut /> Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
