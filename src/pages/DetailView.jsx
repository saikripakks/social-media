import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiCalendar, FiShare2, FiBookmark } from 'react-icons/fi';

const DetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error('Post not found');
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="container page-wrapper" style={{ justifyContent: 'center' }}>
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container page-wrapper">
        <button onClick={() => navigate('/posts')} className="btn btn-secondary back-button" style={{ width: 'fit-content' }}>
          <FiArrowLeft /> Back to Feed
        </button>
        <div className="error-message">Error: {error || 'Post not found'}</div>
      </div>
    );
  }

  return (
    <div className="container page-wrapper animate-fade-in detail-container">
      <button onClick={() => navigate('/posts')} className="btn btn-secondary back-button">
        <FiArrowLeft /> Back to Feed
      </button>

      <div className="glass-panel detail-card">
        <div className="detail-header">
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(123, 44, 191, 0.2)', color: '#e0c3fc', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FiUser /> Author {post.userId}
            </span>
            <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FiCalendar /> Published Today
            </span>
          </div>
          
          <h1 className="detail-title">{post.title}</h1>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
              <FiShare2 />
            </button>
            <button className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
              <FiBookmark />
            </button>
          </div>
        </div>

        <div className="detail-body">
          {post.body.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1.5rem' }}>
              {paragraph.charAt(0).toUpperCase() + paragraph.slice(1)}
              {/* Add some dummy content to make it look longer since JSONPlaceholder data is short */}
              {index === 0 && ' This is an expanded thought exploring the nuances of the topic. In a real-world scenario, this would be a much longer article delving into various aspects, presenting arguments, and concluding with a summary.'}
            </p>
          ))}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '12px', border: '1px dashed var(--glass-border)' }}>
            <h3 style={{ color: '#e0c3fc', marginBottom: '1rem' }}>Author's Note</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Thank you for reading this piece. If you found it valuable, consider sharing it with your network. More content coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
