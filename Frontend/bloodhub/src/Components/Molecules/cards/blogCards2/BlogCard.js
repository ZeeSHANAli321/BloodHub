// src/Box.js
import React from 'react';
import './BlogCards.css';

const BlogCard = ({ image, title }) => {
  return (
    <div className="box">
      <div className="box-image">
        <img src={image} alt={title} />
      </div>
      <div className="box-title">{title}</div>
    </div>
  );
};

export default BlogCard;
