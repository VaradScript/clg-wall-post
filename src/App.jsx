import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import About from './pages/About';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addPost = (post) => {
    setPosts([{ ...post, id: Date.now(), date: new Date().toLocaleString() }, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post =>
    post.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      <nav className="main-nav">
        <div className="nav-brand">NITTE Wall</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Post</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home posts={filteredPosts} deletePost={deletePost} />} />
          <Route path="/add" element={<AddPost addPost={addPost} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;