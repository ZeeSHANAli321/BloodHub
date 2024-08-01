import React from 'react'
import "./Header2.css"
import Logo from "Assets/images/No-Bg-logo2.png"
import Donor from "Assets/images/blooddonor.png"
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
const CustomToast = ({ closeToast }) => {
    let nevigate = useNavigate();
    const Logout = () => {
        console.log("Logged out");
        sessionStorage.clear()
        nevigate("/")
        closeToast(); 
    };

    return (
        <div>
            <p style={{ marginRight: '5px' }}>Are you sure you want to logout?</p>
            <button
                onClick={Logout}
                className='bg-white text-dark'
                style={{ borderColor: "red", fontWeight: "bolder", padding: "2px 10px", borderRadius: "5px" }}
            >
                Yes
            </button>
            <button
                onClick={()=>{closeToast()}}
                className='bg-white text-dark ms-2'
                style={{ borderColor: "green", fontWeight: "bolder", padding: "2px 10px", borderRadius: "5px" }}
            >
                No
            </button>
        </div>
    );
};

export default function Header2( {className,id,userName,userType} ) {
    const logOutToast = ()=> {
        console.log("TOast launched")
        toast(<CustomToast />);
    };
  return (
    <>
    <section id={id} className={className} style={{background:"white",borderBottom:"5px solid black",boxShadow:"var(--box-shadow)",width:"100%",zIndex:"2"} } >
        <div className='container py-1'>
            <div className='row'>
                <div className='col-md-6 col-8  '>
                    <div className="align-items-center d-inline-flex">
                        <img src={Logo} height="70px" width="70px" className="logoImage" alt="BloodHub Logo" />
                        <h1 className="logoName " >BLOODHUB</h1>
                    </div>
                </div>
                <div className='col-md-6  col-4 d-flex align-items-center justify-content-end '>
                    <div className='UserType d-none d-sm-block  text-end  ms-auto'>
                        <span className=' me-3'>{userType}</span>
                    </div>
                    
                    <div className='UserName d-md-block d-none text-end  '>
                        <h3>Welcome <span className='text-danger me-3'>{userName}</span> </h3>
                    </div>
                    <div className='userProfileIcon ' style={{height:'50px',width:"50px",background:"var(--c-theme2)",borderRadius:"50%",overflow:"hidden",padding:"3px"}}>
                       <Link to={"profile"} > <img style={{height:"100%"}} src={Donor} alt="User Profile " /></Link>
                    </div>
                    <div className='LogOut d-sm-block ms-2 text-danger cursor-pointer   text-end ' title='Log-out' onClick={logOutToast}>
                        <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
