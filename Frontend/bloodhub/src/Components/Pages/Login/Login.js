import React, { useEffect, useState } from 'react';
import Header from 'Components/Molecules/navBars/header';
import login from 'Assets/images/log-in.png';
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import FormContainer from 'Components/Molecules/cards/formContainer/FormContainer';
import { getHeight } from 'Utils/util';
import './Login.css'; // Assuming this is your CSS file for Login component
import Footer from 'Components/Molecules/footer/footer';

export default function Login() {
  const [width, setWidth] = useState(window.innerWidth);

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
    const donorRegSection = document.querySelector('.heroSection');
    donorRegSection.style.setProperty('padding-top', `${getHeight('header') + 30}px`, 'important');
  }, [width]);

  const loginElements = (
    <div className='inputContainer text-start d-flex justify-content-center' style={{ background: "var(--c-formbg)" }}>
      <table className="customTable">
        <tbody>
          <tr>
            <td><label>Email id </label></td>
            <td><input type='text' /></td>
          </tr>
          <tr>
            <td><label> Password</label></td>
            <td><input type='text' /></td>
          </tr>
          <tr>
            <td><label>Type </label></td>
            <td><select>
                <option value="Donor">Donor</option>
                <option value="Seeker">Seeker</option>
                </select></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Header id="header" />
      <SectionT2 imgStyle={{display:"none"}} className="heroSection" sectionHead="Login as a Donor/Seeker" sectionDesc="Your donation today can create a brighter tomorrow for someone in need." varColor="--c-theme" />
      <section>
        <div className='container py-3'>
          <div className='row'>
            <div className='col-md-6 d-none d-sm-flex d-flex align-items-center justify-content-center'>
              <div className='loginImgContainer'>
                <img src={login} alt="login sticker" style={{ height: "300px" }} />
              </div>
            </div>
            <div className='col-md-6  d-flex align-items-center'>
              <div className='loginFormContainer w-100'>
                <FormContainer btnTxt="Login" FormHeading="Login" FormElements={loginElements} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
