// src/Grid.js
import React, { useEffect, useState } from 'react';
import BlogCard from '../cards/blogCards2/BlogCard';
import './BlogSections.css';

const Grid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/blog-posts/')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid">
      {items.map((item) => (
        <BlogCard key={item.id} image={item.image} title={item.title}  />
      ))}
    </div>
  );
};

export default Grid;
