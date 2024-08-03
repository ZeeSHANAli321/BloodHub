import React from 'react'
import "./UserDetail.css"
import InfoCard from '../cards/inFoCard/InfoCard'
function UserDetail({user}) {
  const bgColor = "#F5F5F5";
  return (
    <div>
        <div className='row py-2'>
                <div className='col d-flex w-100 justify-content-center ' >
                    <InfoCard style={{background:bgColor}} className={"curve-left"} title={"Blood Type"} fa_icon_class={"fa-solid fa-user"} value={user.bloodGroup}/>
                    <InfoCard style={{background:bgColor}} title={`Blood ${ user.type.toUpperCase() === "DONOR"?"Donated":"Seeked"}`} value={'300ml'} fa_icon_class={"fa-solid fa-droplet "}/>
                    <InfoCard style={{background:bgColor}} title={"Donation Eligibility"} value={"Eligible"} fa_icon_class={"fa-solid fa-check "}/>
                    <InfoCard style={{background:bgColor}} className={"curve-right"} title={"Pending Donations"} fa_icon_class={"fa-regular fa-hourglass-half"} value={"3"}/>
                </div>
        </div>
    </div>
  )
}

export default UserDetail