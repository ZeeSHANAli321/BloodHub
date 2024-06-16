import React, { useEffect, useState } from 'react';
import BlogCard from 'Components/Molecules/cards/blogCards2/BlogCard';
import './BlogSections.css';

const BlogSections = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blogs/'); 
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);



  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item" >
          <BlogCard
            image={blog.image}
            title={blog.title}
            blogUrl={blog.id}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogSections;
