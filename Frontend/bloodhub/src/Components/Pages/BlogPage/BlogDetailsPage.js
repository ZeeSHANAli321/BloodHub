import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'Components/Molecules/navBars/header';
import Footer from 'Components/Molecules/footer/footer';
import './BlogDetailsPage.css';
import BlogBlocks from '../../Molecules/cards/blogCards/blogBlocks'
import { GetData } from 'Services/FetchData';



const BlogDetailsPage = () => {
  
  const id  = useParams();
  const blog = GetData(`http://localhost:8000/api/blogs/${id.id}/`);
  const blogs = GetData('http://localhost:8000/api/blogs/')
  
  if (!blog) {
    return <div>Blog post not found</div>;
  }
  

  return (
    <>
      <Header id="header" />
      <section className="blog-details">
        <div className="blog-details-content">
          <h1>{blog.title}</h1>
          <div className='blog-details-contents-img'>
            <img src={blog.image} alt={blog.title} />
            <hr className='horizontalLine'></hr>
          </div>
          <div className="blog-details-description">
            <p>{blog.description}</p>
          </div>
        </div>
      </section>
      
      <section className="blog sectionPadding">
      <hr className='horizontalLine'></hr>
        <div className="container">
            <div className="row">
            <h2 className='blogSectionHead'>WHAT TO READ NEXT</h2>
            </div>
            <div className="row sectionDisc">

            </div>
            <div className="row blogBlockContainer d-flex justify-content-center">
                {
                    blogs.slice(-4).map((blog) => (
                        <BlogBlocks blogUrl={blog.id} img={blog.image} title={blog.title} key={blog.id} />
                    ))
                }
                
            </div>
        </div>
    </section>
      <Footer color="var(--c-theme2)"/>
    </>
  );
};

export default BlogDetailsPage;
