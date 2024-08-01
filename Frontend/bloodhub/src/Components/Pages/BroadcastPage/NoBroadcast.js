import React from 'react'
import "./Broadcast.js"
import notAllowed from "Assets/images/prohibition.png"
import { useNavigate } from 'react-router-dom'

export default function NoBroadcast() {
    const navigate = useNavigate()
    
  return (
    <div className='container pt-3'>
        <div className='row'>
            <div className='col-auto col-md-3 text-center text-md-end'>
                <div className='notAllowedImage'>
                    <img src={notAllowed} height={"200px"}/>
                </div>
            </div>
            <div className='col-auto col-md-8'>
                <div className='not-allowed-msg'>
                    <p className='display-3'>
                        <span className='highlight-text ' >Sorry</span>, Donor's can not send Broadcast Notification
                    </p>
                    <p className='lead'>
                        If you really in need of urgent blood , Then please <span className='highlight-text cursor-pointer' onClick={()=>{console.log("Redirect-to-seeker");navigate("/seekerRegistration")}} style={{textDecoration:"underline"}}>register</span> as a Seeker and then access this feature to broadcast your blood need.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
