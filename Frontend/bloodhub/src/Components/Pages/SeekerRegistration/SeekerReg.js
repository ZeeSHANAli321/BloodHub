import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./SeekerReg.css";
import Header from 'Components/Molecules/navBars/header';
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import FormContainer from 'Components/Molecules/cards/formContainer/FormContainer';
import Footer from 'Components/Molecules/footer/footer';
import Seeker from 'Assets/images/seeker.png';
import { getHeight } from 'Utils/util';

export default function SeekerReg() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on mount
      }, []);
    const [width, setWidth] = useState(window.innerWidth);
    const [toBroadcast, setToBroadcast] = useState(false);
    const [broadcastMessage, setBroadcastMessage] = useState("");

    const handleToggle = (e) => setToBroadcast(e.target.checked);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [emailId, setEmailId] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [disease, setDisease] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [requireUnit, setRequireUnit] = useState("");
    const [purpose, setPurpose] = useState("");
    const [whenNeeded, setWhenNeeded] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [failedRegMsg, setFailedRegMsg] = useState(<></>);


    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setMobileNo("");
        setEmailId("");
        setBloodGroup("");
        setDOB("");
        setGender("");
        setDisease("");
        setPinCode("");
        setAddress("");
        setPassword("");
        setConfirmPassword("");
        setRequireUnit("");
        setPurpose("");
        setWhenNeeded("");
        setHospitalName("");
        setToBroadcast(false);
        setBroadcastMessage("");
    };

    function submitForm() {
        const userData = {
            firstName,
            lastName,
            mobileNo: parseInt(mobileNo, 10),
            emailId,
            pincode: pinCode,
            bloodGroup,
            dateOfBirth: dob,
            Gender: gender,
            any_blood_related_disease: disease,
            complete_address: address,
            password,
            confirm_password: confirmPassword,
            required_unit: parseInt(requireUnit, 10),
            purpose,
            when_Needed: whenNeeded,
            hospital_name: hospitalName,
            want_to_broadcast: toBroadcast,
            broadcast_message: toBroadcast ? broadcastMessage : "",
        };

        fetch('http://127.0.0.1:8000/api/seeker/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((response) => {
            if (response.ok) {
                setIsRegistered(true);
                resetForm();
            } else {
                setIsRegistered(false);
                setFailedRegMsg(<b className='text-danger'>Failed to register</b>);
            }
        });
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const donorRegSection = document.querySelector('.SeekerRegistration');
        donorRegSection.style.setProperty('padding-top', `${getHeight('header') + 30}px`, 'important');
    }, [width]);

    const becomeASeekerSectionDesc = `"Seeking blood isn't a sign of weakness; it's a courageous step towards life, hope, and a chance to write a new chapter of resilience."`;
    const formElements = (
        <>
            <div className='container'>
                <div className='inputContainer'>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="FirstName" className='w-75 text-start'>First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Last Name" className='w-75 text-start'>Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Mobile No" className='w-75 text-start'>Mobile No</label>
                        <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Email Id" className='w-75 text-start'>Email Id</label>
                        <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Blood Group" className='w-75 text-start'>Blood Group</label>
                        <select className='w-75' value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                            <option value="">Select Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Date of Birth" className='w-75 text-start'>Date of Birth</label>
                        <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Gender" className='w-75 text-start'>Gender</label>
                        <select className='w-75' value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Any Blood Related Disease" className='w-75 text-start'>Any Blood Related Disease</label>
                        <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Pin Code" className='w-75 text-start'>Pin Code</label>
                        <input type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Address" className='w-75 text-start'>Address</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Password" className='w-75 text-start'>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Confirm Password" className='w-75 text-start'>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Required Unit" className='w-75 text-start'>Required Unit</label>
                        <input type="number" value={requireUnit} onChange={(e) => setRequireUnit(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Purpose" className='w-75 text-start'>Purpose</label>
                        <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="When Needed" className='w-75 text-start'>When Needed</label>
                        <input type="date" value={whenNeeded} onChange={(e) => setWhenNeeded(e.target.value)} className='w-75' />
                    </div>
                    <div className='inputElements pb-md-3 d-flex flex-column align-items-center justify-content center'>
                        <label htmlFor="Hospital Name" className='w-75 text-start'>Hospital Name</label>
                        <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} className='w-75' />
                    </div>
                </div>
                <div className='BroadcastSection px-md-5 m-auto align-items-center justify-content-between'>
                    <div className='option d-flex m-auto align-items-center justify-content-between'>
                        <div className='inputElements broadCardOption ms-md-3 d-flex'>
                            <input id='toBroadcast' onChange={handleToggle} checked={toBroadcast} type="checkbox" style={{ fontSize: "1.5rem" }} />
                            <label htmlFor="CheckBox" className='ms-3 text-start'>Want to broadcast your need?</label>
                        </div>
                        <div className='broadcastInfo position-relative d-flex align-items-center justify-content-center me-md-3'>
                            <i className="fa-solid fa-circle-question" style={{ fontSize: "1.5rem" }}></i>
                            <div className='infoDialogBox'>
                                <small>
                                    With this enabled your request will be broadcasted to all the donors instantly with your broadcast message and limited information.
                                </small>
                            </div>
                        </div>
                    </div>
                    {toBroadcast && (
                        <div className='broadcastMsg inputElements px-5'>
                            <label htmlFor="Broadcast message" className='w-75 text-start'>Broadcast message</label>
                            <textarea
                                placeholder='Enter your Message here'
                                className='w-100'
                                rows="4"
                                value={broadcastMessage}
                                onChange={(e) => setBroadcastMessage(e.target.value)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    return (
        <>
            <Header id="header" />
            <SectionT2 className="SeekerRegistration" sectionHead="Become a Seeker" sectionDesc={becomeASeekerSectionDesc} sectionImgSrc={Seeker} varColor="--c-theme" />
            <div className="container-fluid py-4">
                <div className='row m-auto'>
                    <FormContainer btnTxt="Register" FormHeading="Register as a Seeker" FormElements={formElements} onClick={submitForm} formMsg={isRegistered ? (<b className='py-2 text-success '>You are successfully Registered, Go to <Link className='text-decoration-none' to="/Login">Login</Link>.</b>) : failedRegMsg} />
                </div>
            </div>
            <Footer color="white" />
        </>
    );
}
