import React from "react";
import "./header.css";
import Logo from "../../../Assets/images/No-Bg-logo2.png";
import  { useState } from 'react';
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as Rlink ,Element } from "react-scroll";
import ButtonT1 from "Components/Atoms/Buttons/ButtonT1";

export default function Header({ type,id }) {
  const BtnStyle = {
    color:"red",
    borderColor: "red",
    fontWeight: "bold",
  };
  const homeBtnStyle = {
    color: "black",
    borderColor: "red",
    fontWeight: "bold",
    background:'white',
  };
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
  return (<>
 {type === 'home' ? <>
 <div id={id} className="header homeHeader nav overflow-hidden" style={navStyle}>
      <div className="navBarContainer container-lg" >
        <div className=" d-lg-flex flex-row justify-content-between align-items-center ">
          <div className="w-auto w-md-100 w-lg-auto text-md-center d-flex align-items-center justify-content-between">
            <Link to="/" style={{textDecoration:"none"}}>
            <div className="align-items-center d-inline-flex">
              <img src={Logo} height="70px" width="70px" className="logoImage" alt="BloodHub Logo" />
              <h1 className="logoName homeLogoname">BLOODHUB</h1>
            </div>
            </Link>
            <div className="hamContainer d-md-none">
            <MenuIcon fontSize="large" style={{color:'white'}} onClick={()=>{isActiveNav?setIsActiveNav(false):setIsActiveNav(true)}} />
            </div>
          </div>

          <div className="  d-md-flex justify-content-center  " style={navList}>
            <ul className="nav homeNav mb-1 ">
              <li className="navItems"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Home</Link></li>
              <li className="navItems"><Rlink to="whoWeAre" smooth={true} duration={100} offset={-90}  style={{textDecoration:"none",color:"inherit"}}>Who we are </Rlink></li>
              <li className="navItems"><Link to="/Blogs" style={{textDecoration:"none",color:"inherit"}}>Blogs</Link></li>
              <li className="navItems"><Rlink to="howItWork" smooth={true} duration={100} offset={-90}  style={{textDecoration:"none",color:"inherit"}}>How it works</Rlink></li>
              <li className="navItems"><Rlink to="contact" smooth={true} duration={100} offset={-90}  style={{textDecoration:"none",color:"inherit"}}>Contact</Rlink></li>
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
            <MenuIcon fontSize="large" onClick={()=>{isActiveNav?setIsActiveNav(false):setIsActiveNav(true)}} />
            </div>
          </div>

          <div className="  d-md-flex justify-content-center  " style={navList}>
            <ul className="nav mb-1 ">
            <li className="navItems"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Home</Link></li>
              <li className="navItems"><Rlink to="whoWeAre" smooth={true} duration={100} offset={-90}  style={{textDecoration:"none",color:"inherit"}}>Who we are </Rlink></li>
              <li className="navItems"><Link to="/Blogs" style={{textDecoration:"none",color:"inherit"}}>Blogs</Link></li>
              <li className="navItems"><Rlink to="howItWork" smooth={true} duration={100} offset={-90}  style={{textDecoration:"none",color:"inherit"}}>How it works</Rlink></li>
              <li className="navItems"><Rlink to="contact" smooth={true} duration={100} offset={-90}  style={{textDecoration:"none",color:"inherit"}}>Contact</Rlink></li>
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

