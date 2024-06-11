import React from 'react'
import "./SeekerReg.css"
import Header from 'Components/Molecules/navBars/header'
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import FormContainer from 'Components/Molecules/cards/formContainer/FormContainer';
import Footer from 'Components/Molecules/footer/footer'
import Seeker from 'Assets/images/seeker.png';
import { useEffect,useState } from 'react'
import { getHeight } from 'Utils/util'



export default function SeekerReg() {
    const [width, setWidth] = useState(window.innerWidth);
    const [toBraodcast,setToBroadcast] = useState(false);
    const handleTogle = (e) => {
        setToBroadcast(e.target.value);
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
        const donorRegSection = document.querySelector('.SeekerRegistration');
        donorRegSection.style.setProperty('padding-top', `${getHeight('header')+30}px`, 'important');
    }, [width]);

    useEffect(()=>{
        console.log(toBraodcast) 
    },[toBraodcast]);

    const becomeASeekerSectionDesc = `"Seeking blood isn't a sign of weakness; it's a courageous step towards life, hope, and a chance to write a new chapter of resilience."`;
    const formElements=(<>
        <div className='container'>
             <div className='inputContainer'>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="FirstName" className=' w-75 text-start'>First Name</label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Last Name" className=' w-75 text-start'>Last Name</label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Mobile No " className=' w-75 text-start'>Mobile No </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Email Id" className=' w-75 text-start'>Email Id</label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Blood Group" className=' w-75 text-start'>Blood Group</label>
                    <select className='w-75'>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Date of Birth" className=' w-75 text-start'>Date of Birth</label>
                    <input type="date" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Gender" className=' w-75 text-start'>Gender</label>
                    <select className='w-75'>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Whatever other you identified as">Whatever other you identified as</option>
                    </select>
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Any Blood Related diesease" className=' w-75 text-start'>Any Blood Related diesease</label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Pin Code " className=' w-75 text-start'>Pin Code </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Address " className=' w-75 text-start'>Address </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Password " className=' w-75 text-start'>Password </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Confirm Password " className=' w-75 text-start'>Confirm Password </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Required unit  " className=' w-75 text-start'>Required unit  </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Purpose " className=' w-75 text-start'>Purpose </label>
                    <input type="text" className='w-75' />
                </div>
                <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="When needed" className=' w-75 text-start'>When needed</label>
                    <input type="date" className='w-75' />
                </div>
                <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                    <label htmlFor="Hospital Name" className=' w-75 text-start'>Hospital Name</label>
                    <input type="text" className='w-75' />
                </div>
             </div>
             <div className='BroadcastSection  px-md-5 m-auto align-items-center justify-content-between'>
                <div className='option d-flex  m-auto align-items-center justify-content-between'>
                    <div className=' inputElements broadCardOption ms-md-3 d-flex'>
                        <input id='toBraodcast' onClick={handleTogle} value={toBraodcast} type="checkbox" style={{fontSize:"1.5rem"}}/>
                        <label htmlFor="CheckBox"   className='ms-3 text-start'>Want to braodcast your need ?</label>
                    </div>
                    <div className='broadcastInfo position-relative d-flex align-items-center justify-content-center me-md-3'>
                        <i className="fa-solid fa-circle-question" style={{fontSize:"1.5rem"}}></i>
                    <div className='infoDialogBox'>
                        <small>
                            With this enabled your request will be braodcasted to all the donors instantly with your braodcast message and limited informations
                        </small>
                    </div>
                    </div>
                </div>
                <div className='broadcastMsg inputElements px-5'>
                    <label htmlFor="Broadcast message " className=' w-75 text-start'>Broadcast message </label>
                    <input type="text" className='w-100' />
                </div>
             </div>
        </div>
        </>);
  return (
    <>
    <Header id="header"/>
        <SectionT2 className="SeekerRegistration"  sectionHead="Become a Seeker" sectionDesc={becomeASeekerSectionDesc} sectionImgSrc={Seeker} varColor="--c-theme" />
        <div className="container-fluid py-4">
            <div className='row m-auto'>
                 <FormContainer FormHeading="Register as a Seeker" FormElements={formElements} />
            </div>
        </div>
        <Footer color="white"/>
    </>
  )
}
