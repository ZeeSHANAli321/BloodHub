<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import "./Notifications.css"
import BloodDonor from "Assets/images/blooddonor.png"
import broadcast from "Assets/images/broadcast.png"
import { useNavigate } from 'react-router-dom'
const data = [
  { id:1,
    logo:BloodDonor,
    title:"Broadcast msg  ",
    date:"20/20/2020",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos officia deserunt tempore modi laboriosam a distinctio ab."
  },
  { id:2,
    logo:BloodDonor,
    title:"Chat msg  ",
    date:"20/20/2020",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos officia deserunt tempore modi laboriosam a distinctio ab."
  },
  { id:3,
    logo:BloodDonor,
    title:"THis is title ",
    date:"20/20/2020",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos offic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos officia deserunt tempore modi laboriosam a distinctio ab."
  }
];

export default function Notifications() {
  let navigation = useNavigate()
  const [Notification,SetNotification] = useState(data)

  useEffect(()=>{
    SetNotification(data)
  },[])

  const deleteNotification = (id) => {
    console.log("deleting",id)
    data.pop(id)
    console.log(data)
  }
  return (
    <>
      <div className='container text-center p-3' style={{marginBottom:"100px"}}>

        {
          Notification.map((notification) => (
            <div className='row' key={notification.id} >
              <div className='col-md-7 notification-card col-12 py-3 mx-auto d-flex '>
                  <div className='notification-logo-container '>
                      <img height="100%" width="100" src={notification.logo} alt='Notification-img'/>
                  </div>
                  <div className='notification-info-container  d-flex flex-column text-start ms-2' onClick={()=>{navigation("/")}}>
                      <b>{notification.title}</b>
                      <p>{notification.description}</p>
                      <small>{notification.date}</small>
                  </div>
                  <div className='notification-delete-container d-flex align-items-center text-danger justify-content-center ' onClick={()=>deleteNotification(notification.id)} >
                  <i class="fa-solid fa-trash-can fa-lg"></i>
                  </div>
              </div>
          </div>
          ))
        }   

      </div>
    </>
=======
import React from 'react'
import "./Notifications.css"
export default function Notifications() {
  return (
    <div>Notifications</div>
>>>>>>> 74adefbcd49cfd5b286f1236fdd16d657ffda096
  )
}
