import React from "react";
import "./header.css";
import Logo from "../../../Assets/images/No-Bg-logo2.png";
import  { useState,useEffect } from 'react';
import { Link,useLocation } from "react-router-dom";
import ButtonT1 from "Components/Atoms/Buttons/ButtonT1";

export default function Header({ type,id }) {
 
  const [isActiveNav,setIsActiveNav]=useState(false);
  

  const navStyle = {
    height: isActiveNav ? '100vh' : 'auto',
    background: isActiveNav?'var(--c-theme)':'transparent',
  };
  const navStyle2 ={
    height: isActiveNav ? '100vh' : 'auto',
    background: isActiveNav?'var(--c-theme)':'white',
  }
  const navList = {
    display: isActiveNav ? 'block' : 'none',
  }

  const location = useLocation();
  const offset = 90
  useEffect(() => {
    const hash = location.hash;
    
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const yOffset = -offset;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        
      }
      //window.scrollBy(0, -offset);
    }
  }, [location]);

  return (<>
 {type === 'home' ? <>
 <div id={id} className="header homeHeader nav overflow-hidden" style={navStyle}>
      <div className="navBarContainer container-lg" >
        <div className=" d-lg-flex flex-row justify-content-between align-items-center ">
          <div className="w-auto w-md-100 w-lg-auto text-md-center d-flex align-items-center justify-content-between">

            {/* Logo and image container */}
            <Link className="logoImageContainer" to="/" style={{textDecoration:"none"}}>
                <div className="align-items-center d-inline-flex">
                  <img src={Logo} height="70px" width="70px" className="logoImage" alt="BloodHub Logo" />
                  <h1 className="logoName homeLogoname">BLOODHUB</h1>
                </div>
            </Link>

            <div className="hamContainer d-md-none">
                <i className="fa-solid fa-bars fa-2xs" style={{color:'white'}} onClick={()=>{isActiveNav?setIsActiveNav(false):setIsActiveNav(true)}}></i>
            </div>

          </div>

          <div className="  d-md-flex justify-content-center  " style={navList}>
            <ul className="nav homeNav mb-1 ">
              <li className="navItems" ><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Home</Link></li>
              <li className="navItems" ><Link to="/#whoWeAre"  style={{textDecoration:"none",color:"inherit"}}>Who we are </Link></li>
              <li className="navItems" ><Link to="/Blogs" style={{textDecoration:"none",color:"inherit"}}>Blogs</Link></li>
              <li className="navItems" ><Link to="/#howItWork" style={{textDecoration:"none",color:"inherit"}}>How it works</Link></li>
              <li className="navItems" ><Link to="/#contact"   style={{textDecoration:"none",color:"inherit"}}>Contact</Link></li>
              <li className="navItems">
                <ButtonT1 to="/Login" text=" Login "/>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
 </> : <>
 <div  id={id} className="header nav overflow-hidden" style={navStyle2} >
      <div className="navBarContainer container-lg" >
        <div className=" d-lg-flex flex-row justify-content-between align-items-center ">
          <div className="w-auto w-md-100 w-lg-auto text-md-center d-flex align-items-center justify-content-between">
          <Link to="/" style={{textDecoration:"none"}}>
            <div className="align-items-center d-inline-flex">
              <img src={Logo} height="70px" width="70px" className="logoImage" alt="BloodHub Logo" />
              <h1 className="logoName">BLOODHUB</h1>
            </div>
          </Link>
            <div className="hamContainer d-md-none">
            <i className="fa-solid fa-bars fa-2xs" onClick={()=>{isActiveNav?setIsActiveNav(false):setIsActiveNav(true)}}></i>
           </div>
          </div>

          <div className="  d-md-flex justify-content-center  " style={navList}>
            <ul className="nav mb-1 ">
            <li className="navItems" ><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Home</Link></li>
              <li className="navItems" ><Link to="/#whoWeAre"  style={{textDecoration:"none",color:"inherit"}}>Who we are </Link></li>
              <li className="navItems" ><Link to="/Blogs" style={{textDecoration:"none",color:"inherit"}}>Blogs</Link></li>
              <li className="navItems" ><Link to="/#howItWork" style={{textDecoration:"none",color:"inherit"}}>How it works</Link></li>
              <li className="navItems" ><Link to="/#contact"   style={{textDecoration:"none",color:"inherit"}}>Contact</Link></li>
              <li className="navItems">
                <ButtonT1 to="/Login" text=" Login "/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 </>}
    
   
    </>
  );
}

