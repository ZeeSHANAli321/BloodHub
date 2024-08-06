import React from "react";
import "./footer.css";
import Logo from "../../../Assets/images/No-Bg-logo2.png";
import { Link } from "react-router-dom";
export default function Footer({color}) {
  return (
    <>
      <div className="footerContainer">
        <div className="footer position-relative ">
          <div className="waveSvg" style={{background:`${color}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#FFABAB"
                fillOpacity="1"
                d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
            {/* <div className="waveSvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#FFABAB"
                fillOpacity="1"
                d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div> */}
          <div className="footerElements">
  
            <div className="container ">
              <div className="row">
                <div className="col-6">
                  <div className="align-items-center d-inline-flex">
                    <img
                      src={Logo}
                      height="70px"
                      width="70px"
                      className="logoImage"
                      alt="BloodHub Logo"
                    />
                    <h1 className="logoName  Logoname">BloodHub</h1>
                  </div>
                </div>
                <div className="col-6 d-inline-flex justify-content-end  align-items-center">
                    <div className="socials px-1 w-md-25 d-inline-flex justify-content-around align-items-center">
                    <Link to={"https://github.com/ZeeSHANAli321"} style={{textDecoration:"none",color:"black"}} ><i className="fa fa-instagram fa-2x cursor-pointer" aria-hidden="true"></i></Link>
                    <Link to={"https://github.com/ZeeSHANAli321"} style={{textDecoration:"none",color:"black"}} ><i className="fa fa-github fa-2x cursor-pointer" aria-hidden="true"></i></Link>
                    <Link to={"https://github.com/ZeeSHANAli321"} style={{textDecoration:"none",color:"black"}} ><i className="fa fa-facebook fa-2x cursor-pointer" aria-hidden="true"></i></Link>
                    <Link to={"https://github.com/ZeeSHANAli321"} style={{textDecoration:"none",color:"black"}} ><i className="fa fa-twitter fa-2x cursor-pointer" aria-hidden="true"></i></Link>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 mx-auto d-inline-flex justify-content-center">
                    <ul className="d-inline-flex footerLinks  ">
                        <li><Link to="/privacyPolicy" style={{textDecoration:"none",color:"black"}}>Privacy Policy</Link></li>
                        <li><Link to="/term" style={{textDecoration:"none",color:"black"}}>Terms and Condition</Link></li>
                        <li><Link to="/#whoWeAre" style={{textDecoration:"none",color:"black"}}>About Us</Link></li>
                        <li><Link to="/#contact" style={{textDecoration:"none",color:"black"}}>Contact Us</Link></li>
                    </ul>
                </div>
              </div>
             
              
            </div>
          </div>
          <div className="subFooter d-flex align-items-center">
                <div className="container">
                <div className="row   pb-1">
                <div className="col-6">
                    <span>@2024 BloodHub</span>
                </div>
                <div className="col-6 " style={{textAlign:'right'}}>
                <span >Designed and Develop by Group <span className="highlight-text">Alpha</span> </span>
                </div>
              </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}
