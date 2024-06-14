import React from 'react'
import Logo from "Assets/images/No-Bg-logo2.png"
import Donor from "Assets/images/blooddonor.png"

export default function Header2( {className,id} ) {
  return (
    <>
    <section id={id} className={className} style={{background:"white",borderBottom:"5px solid black",boxShadow:"var(--box-shadow)",position:"fixed",width:"100%",zIndex:"2"} } >
        <div className='container py-1'>
            <div className='row'>
                <div className='col-md-6 col-8  '>
                    <div className="align-items-center d-inline-flex">
                        <img src={Logo} height="70px" width="70px" className="logoImage" alt="BloodHub Logo" />
                        <h1 className="logoName " >BLOODHUB</h1>
                    </div>
                </div>
                <div className='col-md-6  col-4 d-flex align-items-center justify-content-end '>
                    <div className='UserName d-md-block d-none text-end  ms-auto'>
                        <h3>Welcome <span className='text-danger me-3'>Zeeshan</span> </h3>
                    </div>
                    <div className='userProfileIcon ' style={{height:'50px',width:"50px",background:"var(--c-theme2)",borderRadius:"50%",overflow:"hidden",padding:"3px"}}>
                        <img style={{height:"100%"}} src={Donor} alt="User Profile " />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
