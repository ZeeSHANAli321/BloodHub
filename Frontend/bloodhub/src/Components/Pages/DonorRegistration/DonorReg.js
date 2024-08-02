import React from 'react'
import "./DonorReg.css"
import Header from 'Components/Molecules/navBars/header'
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import FormContainer from 'Components/Molecules/cards/formContainer/FormContainer';
import Footer from 'Components/Molecules/footer/footer'
import Blooddonor from 'Assets/images/blooddonor.png';
import { useEffect,useState } from 'react'
import { getHeight } from 'Utils/util'
import { Link } from 'react-router-dom';





export default function DonorReg() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on mount
      }, []);
    const becomeAdonorSectionDesc = `"Be a hero in someone's story. Donate blood, save a life, and leave an everlasting legacy of compassion and hope."`;
    const [width, setWidth] = useState(window.innerWidth);

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [emailId,setEmailId] = useState("");
    const [bloodGroup,setBloodGroup] = useState("");
    const [dob,setDOB] = useState("");
    const [gender,setGender] = useState("");
    const [diesease,setDiesease] = useState("");
    const [pinCode,setPinCode] = useState("");
    const [address,setAddress] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [isRegistered,setIsRegistered] = useState(false);
    
    let [failedRegMsg,setFailedRegMsg] = useState((<></>));

    function submitForm(){
        //console.log(JSON.stringify({firstName,lastName,mobileNo,emailId,bloodGroup,dob,gender,diesease,pinCode,address,password,confirmPassword}))
        const userData = {
            "firstName": firstName,
            "lastName": lastName,
            "mobileNo":  parseInt(mobileNo,10),
            "emailId": emailId,
            "pincode": pinCode,
            "bloodGroup": bloodGroup,
            "dateOfBirth": dob,
            "Gender": gender,
            "address": address,
            "any_blood_related_disease": diesease,
            "complete_address": address,
            "password": password,
            "confirm_password": confirmPassword
        }
        console.log(JSON.stringify(userData))
        fetch('http://127.0.0.1:8000/api/donor/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userData)                
            
        }).then((responce)=>{
            if (responce.ok) {
                setIsRegistered(true)
            }else{
                setIsRegistered(false);
                setFailedRegMsg(<b className='text-danger'>Failed to register</b>)
            }
        })
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
        const donorRegSection = document.querySelector('.donorRegSection');
        donorRegSection.style.setProperty('padding-top', `${getHeight('header')+30}px`, 'important');
    }, [width]);

     const formElements=(<>
    <div className='container'>
         <div className='inputContainer'>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="FirstName" className=' w-75 text-start'>First Name</label>
                <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} className='w-75' />
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Last Name" className=' w-75 text-start'>Last Name</label>
                <input type="text" className='w-75' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Mobile No " className=' w-75 text-start'>Mobile No </label>
                <input type="text" className='w-75' value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}} />
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Email Id" className=' w-75 text-start'>Email Id</label>
                <input type="text" className='w-75' value={emailId} onChange={(e)=>{setEmailId(e.target.value)}} />
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Blood Group" className=' w-75 text-start'>Blood Group</label>
                <select className='w-75' value={bloodGroup} onChange={(e)=>{setBloodGroup(e.target.value)}}>
                    <option value="" >Select Group </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B+">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Date of Birth" className=' w-75 text-start'>Date of Birth</label>
                <input type="date" className='w-75' value={dob} onChange={(e)=>{setDOB(e.target.value)}} />
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Gender" className=' w-75 text-start'>Gender</label>
                <select className='w-75' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                    <option value="" >Select Gender</option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Other">Whatever other you identified as</option>
                </select>
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Any Blood Related diesease" className=' w-75 text-start'>Any Blood Related diesease</label>
                <input type="text" className='w-75' value={diesease} onChange={(e)=>{setDiesease(e.target.value)}} />
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Pin Code " className=' w-75 text-start'>Pin Code </label>
                <input type="text" className='w-75' value={pinCode} onChange={(e)=>{setPinCode(e.target.value)}}/>
            </div>
            <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Address " className=' w-75 text-start'>Address </label>
                <input type="text" className='w-75' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
            </div>
            <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Password " className=' w-75 text-start'>Password </label>
                <input type="text" className='w-75' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                <label htmlFor="Confirm Password " className=' w-75 text-start'>Confirm Password </label>
                <input type="text" className='w-75' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
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
                 <FormContainer btnTxt=" Register " FormHeading="Register as a Donor" FormElements={formElements} onClick={submitForm} formMsg={isRegistered?(<b className='py-2 text-success '>You are successfully Registered, Go to <Link className='text-decoration-none text ' to="/Login">Login </Link>.</b>):failedRegMsg}/>
            </div>
        </div>
        <Footer color="white"/>
    </>
  )
}
