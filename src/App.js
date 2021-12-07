import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);

  return (
    <section className="main">
      <Header />
      {blogs.map((blog) => (
        <BlogCard {...blog} key={blog.id} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
