// src/cards/blogCards2/BlogCard.js
import React from 'react';
import './BlogCards.css';

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
