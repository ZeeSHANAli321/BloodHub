// src/Pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import './BlogPage.css';
import Header from 'Components/Molecules/navBars/header';
import Footer from 'Components/Molecules/footer/footer';
import BlogSections from 'Components/Molecules/Sections/BlogSections';
import { getHeight } from 'Utils/util';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount
  }, []);
  const [width, setWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  if(isScrolled){
    console.log("scrolled")
  }
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const donorRegSection = document.querySelector('.herocontainer');
    donorRegSection.style.setProperty('padding-top', `${getHeight('header')}px`, 'important');
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header id="header" />
      <section className="herocontainer">
        <div className="HeroDiv">
          <h1 className="Text">BLOGS</h1>
        </div>
      </section>
      <div className="App">
        <BlogSections />
      </div>
      <Footer color="var(--c-theme2)" />
    </>
  );
};

export default BlogPage;
