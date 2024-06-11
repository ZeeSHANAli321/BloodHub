import React from 'react'
import "./BlogPage.css"
import Header from 'Components/Molecules/navBars/header'
import Footer from 'Components/Molecules/footer/footer'
// import BlogImage from 'Assets/images/BlogImage'
import { useEffect,useState } from 'react'
import { getHeight } from 'Utils/util'
import Grid from 'Components/Molecules/Sections/BlogSections'




export default function BlogPage() {
  const [width, setWidth] = useState(window.innerWidth);  
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Header  id="header"/>
        <section className='herocontainer'>
          <div className='HeroDiv'>
            <h1 className='Text'>BLOGS</h1>
          </div>
        </section>
        <div className="App">
          <Grid />
        </div>
        <Footer color="White"/>
    </>
  )
}
