import React from 'react'
import "./UserDetail.css"
import InfoCard from '../cards/inFoCard/InfoCard'
import CanBroadcast from 'Components/Atoms/CanBroadcast';
/* import {CanBroadcast} from 'Utils/util'
 */function UserDetail({user}) {
  const bgColor = "#F5F5F5";
  const isDonor = user.type.toUpperCase() === "DONOR";
  console.log(user.bloodDonated)
  return (
    <div>
        <div className='row py-2'>
                <div className='col d-flex w-100 justify-content-center ' >
                    <InfoCard style={{background:bgColor}} className={"curve-left"} title={"Blood Type"} fa_icon_class={"fa-solid fa-user"} value={user.bloodGroup}/>
                    <InfoCard style={{background:bgColor}} title={`Blood ${ isDonor?"Donated":"Seeked"}`} value={isDonor?user.totalBloodDonated+ " ml":user.bloodSeeked+" ml"} fa_icon_class={"fa-solid fa-droplet "}/>
                    <InfoCard style={{background:bgColor}} title={`${isDonor?"Donation":"Broadcast"} Eligibility`} value={isDonor?(user.eligible?"Eligible":"Not-Eligible"):(<CanBroadcast seeker={user}/>)} fa_icon_class={"fa-solid fa-check "}/>
                    <InfoCard style={{background:bgColor}} className={"curve-right"} title={"Pending Donations"} fa_icon_class={"fa-regular fa-hourglass-half"} value={"3"}/>
                </div>
        </div>
    </div>
  )
}

export default UserDetail