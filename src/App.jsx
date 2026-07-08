import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ListView from './pages/ListView';
import DetailView from './pages/DetailView';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<ListView />} />
        <Route path="/posts/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}

export default App;
