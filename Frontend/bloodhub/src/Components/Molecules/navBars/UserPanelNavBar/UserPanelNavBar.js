import React from 'react'
import "./UserPanelNavBar.css"
import { Link } from 'react-router-dom'
import broadcast from "Assets/images/broadcast.png"
import map from "Assets/images/map.png"
import messanger from "Assets/images/messenger.png"
import logo from "Assets/images/No-Bg-logo2.png"
import bell from "Assets/images/bell.png"   
export default function UserPanelNavBar({id,canBroadcast}) {
  return (
    <div id={id} className='UserPanelNavBar  mx-auto py-2 px-3' style={{border:"2px solid black",borderRadius:"20px"}}>
        <div className='navElementsContainer d-flex list-unstyled justify-content-around'>
                <li><Link to="chat" style={{textDecoration:"none"}}>
                    <img src={messanger} style={{height:"30px"}} alt="chat" />
                </Link></li>
                
                <li><Link to="map" style={{textDecoration:"none"}}>
                    <img src={map} style={{height:"30px"}} alt="map" />
                </Link></li>
                
                <li><Link to="/userPanelHome" style={{textDecoration:"none"}}>
                    <img src={logo} style={{height:"60px"}} alt="Home" />
                </Link></li>
                
                <li title='Notifications'><Link to="Notifications" style={{textDecoration:"none"}}>
                    <img src={bell} style={{height:"30px"}} alt="Notifications" />
                </Link></li>
                
                <li title='Broadcast'><Link to={canBroadcast?"Broadcast":"noBroadcast"} style={{textDecoration:"none"}}>
                    <img src={broadcast} style={{height:"30px"}} alt="BroadCast" />
                </Link></li>
                
            
        </div>
    </div>
  )
}
