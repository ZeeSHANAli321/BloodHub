// src/Grid.js
import React from 'react';
import BlogCard from '../cards/blogCards2/BlogCard';
import BlogImage1 from "Assets/images/BlogImage1.png"
import BlogImage2 from "Assets/images/BlogImage2.png"
import BlogImage3 from "Assets/images/BlogImage3.png"
import BlogImage4 from "Assets/images/BlogImage4.png"
import BlogImage5 from "Assets/images/BlogImage5.png"
import BlogImage6 from "Assets/images/BlogImage6.png"

import './BlogSections.css';

const Grid = () => {
  const items = [
    { image: BlogImage1, title: 'How To Save Blood' },
    { image: BlogImage2, title: 'How To Save Blood' },
    { image: BlogImage3, title: 'How To Save Blood' },
    { image: BlogImage4, title: 'How To Save Blood' },
    { image: BlogImage5, title: 'How To Save Blood' },
    { image: BlogImage6, title: 'How To Save Blood' },
    { image: BlogImage4, title: 'How To Save Blood' },
    { image: BlogImage5, title: 'How To Save Blood' },
    { image: BlogImage6, title: 'How To Save Blood' },
  ];

  return (
    <div className="grid">
      {items.map((item, index) => (
        <BlogCard key={index} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default Grid;

