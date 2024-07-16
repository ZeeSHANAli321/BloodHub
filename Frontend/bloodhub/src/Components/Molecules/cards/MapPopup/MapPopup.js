import React from 'react'
import "./MapPopup.css"
import  BloodDonor  from "Assets/images/blooddonor.png"

export default function MapPopup({data,type,GetRouteButton,start,GetRecenterUser}) {
  return (
    <>
    <div className='d-flex popUpContainer text-center justify-content-center align-items-center flex-column'>
        <div className='pinLogoContainer mb-1'>
            <img style={{height:'100%',width:"100%"}} src={BloodDonor} alt={data.firstname + "s image"} />
        </div>
        <div className='pinInfo d-flex flex-column'>
            <span className=''> <b>{data.firstName+" "+data.lastName}</b> ({data.bloodGroup})</span>
            <small className='text-danger '>Blood {type}</small>
        </div>
        <div className='pinBtn
         d-flex '>
            <GetRouteButton start={{lat:start.lat,lng:start.lng}} end={{ lat: data.lat, lng: data.lng }} />
            <GetRecenterUser lat={data.lat} lng={data.lng} onclick={()=>{console.log("clicked")}} />
        </div>
        
    </div>

    </>
  )
}
