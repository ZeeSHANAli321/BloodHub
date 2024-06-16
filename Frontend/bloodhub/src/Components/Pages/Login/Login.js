import React, { useEffect, useState } from 'react';
import Header from 'Components/Molecules/navBars/header';
import login from 'Assets/images/log-in.png';
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import FormContainer from 'Components/Molecules/cards/formContainer/FormContainer';
import { getHeight } from 'Utils/util';
import './Login.css'; // Assuming this is your CSS file for Login component
import Footer from 'Components/Molecules/footer/footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let nevigate = useNavigate()
  const [width, setWidth] = useState(window.innerWidth);
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [type,setType] = useState("Donor")
  
  const [formMsg,setFormMsg] = useState(<b className='text-dark'>If not Registered click <Link style={{textDecoration:"none"}} to={"/donorRegistration"}>here .</Link></b>)

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
            <td><input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} /></td>
          </tr>
          <tr>
            <td><label> Password</label></td>
            <td><input type='text'value={pass} onChange={(e)=>{setPass(e.target.value)}} /></td>
          </tr>
          <tr>
            <td><label>Type </label></td>
            <td><select value={type} onChange={(e)=>{setType(e.target.value)}}>
                <option value="Donor">Donor</option>
                <option value="Seeker" >Seeker</option>
                </select></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  let loginData = {
    'userEmail':email,
    'password':pass,
    'isDonor':type==='Donor'?true:false
  }
  function subMitForm() {
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (data.status === 'success') {
        setFormMsg(<b className='text-success'>{data.message}</b>)

        sessionStorage.clear()
        sessionStorage.setItem('user_id',data.user.emailId)
        sessionStorage.setItem('user_pass',data.user.password)
        sessionStorage.setItem('user_type',JSON.stringify(type==='Donor'?true:false))

        return (nevigate("/userPanelHome"))
      } else {
        console.log("not done", data.message);
        setFormMsg(<b className='text-danger'>{data.message}</b>)
      }
    }).catch((error) => {
      console.error("Error:", error);
      setFormMsg(error)
    });
  }
  

  return (
    <>
      <Header id="header" />
      <SectionT2 imgStyle={{display:"none"}} className="heroSection" sectionHead="Login as a Donor/Seeker" sectionDesc="Your donation today can create a brighter tomorrow for someone in need." varColor="--c-theme" />
      <section>
        <div className='container py-3'>
          <div className='row'>
            <div className='col-md-6 imgContainerDiv d-none d-sm-flex d-flex align-items-center justify-content-center'>
              <div className='loginImgContainer'>
                <img src={login} alt="login sticker" style={{ height: "300px" }} />
              </div>
            </div>
            <div className='col-md-6  d-flex align-items-center'>
              <div className='loginFormContainer w-100'>
                <FormContainer formMsg={formMsg} onClick={subMitForm} btnTxt="Login" FormHeading="Login" FormElements={loginElements} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
