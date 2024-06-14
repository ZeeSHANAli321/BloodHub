import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from 'Components/Molecules/cards/blogCards2/BlogCard';
import './BlogSections.css';

const BlogSections = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blog-posts/'); 
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleImageClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item" onClick={() => handleImageClick(blog.id)}>
          <BlogCard
            image={blog.image}
            title={blog.title}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogSections;
