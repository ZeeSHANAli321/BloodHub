import React from "react";
import "../../styles/footer.css";
import Logo from "../../images/No-Bg-logo2.png";
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footer position-relative ">
          <div className="waveSvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#FFABAB"
                fillOpacity="1"
                d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
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
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mx-auto d-inline-flex justify-content-center">
                    <ul className="d-inline-flex footerLinks  ">
                        <li>Privacy Policy</li>
                        <li>Terms and Condition </li>
                        <li>About Us</li>
                        <li>Contact Us</li>
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
                <span >Designed and Develop by Group Alpha</span>
                </div>
              </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}
