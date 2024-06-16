// src/cards/blogCards2/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCards.css';

const BlogCard = ({ image, title, description,blogUrl }) => {
  
  return (
    <div className="blog-card">
      <Link style={{textDecoration:"none",color:"inherit"}} to={`/blogs/${blogUrl}`}>
        <div className="blog-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="blog-card-content">
          <h2 className="blog-card-title">{title}</h2>
          <p className="blog-card-description">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
