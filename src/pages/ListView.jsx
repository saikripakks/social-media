import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiMessageCircle, FiHeart } from 'react-icons/fi';

const ListView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data.slice(0, 20)); // Limit for better presentation
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container page-wrapper" style={{ justifyContent: 'center' }}>
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container page-wrapper">
        <div className="error-message">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container page-wrapper animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="title">Discover Feed</h1>
        <p className="subtitle">Explore the latest thoughts and ideas from the community</p>
      </div>

      <div className="post-grid">
        {posts.map(post => (
          <Link to={`/posts/${post.id}`} key={post.id} className="glass-panel post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.body}</p>
            
            <div className="post-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FiClock /> Just now
              </span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-hover)' }}>
                  <FiHeart /> {Math.floor(Math.random() * 50) + 1}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary-color)' }}>
                  <FiMessageCircle /> {Math.floor(Math.random() * 20) + 1}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListView;
