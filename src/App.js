import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  return (
    <section className="main">
      <Header />
      <Footer />
    </section>
  );
}

export default App;
