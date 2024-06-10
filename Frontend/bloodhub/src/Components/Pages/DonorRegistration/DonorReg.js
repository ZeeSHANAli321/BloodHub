import React from 'react'
import "./DonorReg.css"
import Header from 'Components/Molecules/navBars/header'
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import FormContainer from 'Components/Molecules/cards/formContainer/FormContainer';
import Footer from 'Components/Molecules/footer/footer'
import Blooddonor from 'Assets/images/blooddonor.png';
import { useEffect,useState } from 'react'
import { getHeight } from 'Utils/util'




export default function DonorReg() {
    const becomeAdonorSectionDesc = `"Be a hero in someone's story. Donate blood, save a life, and leave an everlasting legacy of compassion and hope."`;
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
        const donorRegSection = document.querySelector('.donorRegSection');
        donorRegSection.style.setProperty('padding-top', `${getHeight('header')+30}px`, 'important');
    }, [width]);

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
           
            
         </div>
    </div>
    </>);
    
    return (
    <>
        <Header id="header"/>
        <SectionT2 className="donorRegSection"  sectionHead="Become a Donor" sectionDesc={becomeAdonorSectionDesc} sectionImgSrc={Blooddonor} varColor="--c-theme" />
        <div className="container-fluid py-4">
            <div className='row m-auto'>
                 <FormContainer FormHeading="Register as a Donor" FormElements={formElements} />
            </div>
        </div>
        <Footer />
    </>
  )
}
