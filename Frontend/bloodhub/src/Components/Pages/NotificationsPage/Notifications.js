import React, { useEffect, useState } from 'react'
import "./Notifications.css"
import BloodDonor from "Assets/images/blooddonor.png"
import empty from "Assets/images/empty-cart.png"
import { useNavigate, useOutletContext } from 'react-router-dom'
import { patchModel } from 'Services/FetchData'

export default function Notifications() {
  let navigation = useNavigate()  
  const { user } = useOutletContext();
  const [Notification,SetNotification] = useState([])
  const gettingNotifications = async (id) => {
    console.log("fetching Data");
    try {
      const response = await fetch(`http://localhost:8000/api/Notifications/${id}/`, {
        credentials: 'include'
      });

      if (!response.ok) {
        return { error: "Something unexpected happened.",id:id };
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: "Something unexpected happened." };
    }
  };

  useEffect(()=>{
    if(user.notifications.length > 0){
    const fetchNotifications = async ()=> {
      let fetchedNotification = []
      const userNotifications = user.notifications;
      console.log(userNotifications)

      const notificationPromises = userNotifications.map(async (id) => {
        const response = await gettingNotifications(id);
        if(response.error){
          return null
        }else{
          return {...response,...{id:id}};
        }

      });

      fetchedNotification = await Promise.all(notificationPromises);
      console.log(fetchedNotification)
      SetNotification(fetchedNotification.reverse())
      console.log("Notifications : " ,Notification)
    }  
    
    
    fetchNotifications()
  }
  },[user.notifications,user.notifications.length])

  const deleteNotification =async (id) => {
    console.log("deleting",id)
    const newData = Notification.filter(e=>e.id!==id)
    SetNotification(newData)
    const removeNotificationData = {
      id:id,
      userId:user.emailId,
      userType:user.type
    }
    const response = await fetch("http://localhost:8000/api/remove_notification/",{
      method:"POST",
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(removeNotificationData)
    })
    if (!response.ok) {
      console.log( { error: "Couldnt delete notification.",id:id });
    }
    const data = await response.json();
    console.log("successfully removed ",data)
    

  }

  const broadcastConrol = async (id,accept,N_id) => {
    try {
      const updateData = {
        'id':id,
        'accept':accept,
        'userId':user.id
      }
      
      const response = await fetch('http://127.0.0.1:8000/api/update_donors/', {
          method: 'POST',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateData)
      });

      const data = await response.json();

      if (data.status === 'success') {
          console.log("Updated Successfully ")
          patchModel({'status':accept?"Accepted":"Deny"},`http://localhost:8000/api/Notifications/${N_id}/`).then((data)=>{
            if(data){
              console.log("Notification Updated successfully")
              const newData = Notification.filter(e=>e.id!==N_id)
              SetNotification(newData)
            }
          })
          
      } else {
          console.log("not done", data);
          if(data.error === "Broadcast not found"){
            patchModel({'status':accept?"Accepted":"Deny"},`http://localhost:8000/api/Notifications/${N_id}/`).then((data)=>{
              if(data){
                console.log("denied invalid notification ")
                const newData = Notification.filter(e=>e.id!==N_id)
                SetNotification(newData)
              }
            })
          }
      }
      
  } catch (error) {
      console.error("Error:", error);
  }
  }
  return (
    <>
      <div className='container text-center p-3' style={{marginBottom:"100px"}}>
        {
          Notification.filter((N) => N.status === "Pending").length === 0?
          //Run when there is no notification
          <div className='row' >
              <div className='col-md-7 notification-card col-12 py-3 mx-auto d-flex '>
                  
                  <div className='notification-info-container  d-flex flex-column text-center ms-2'>
                    <div className='empty-icon-container text-center'>
                        <img height="100%" width="100" src={empty} alt='Notification-img'/>
                    </div>
                      <p className='display-3'>There is not any notificaitons</p>
                  </div>
                  
              </div>
          </div>
          :
          //Run when There is any notificaiton
          Notification.filter((notification) => notification.status === "Pending").map((notification) => (
            <div className='row' key={notification.id} >
              <div className='col-md-7 notification-card col-12 py-3 mx-auto d-flex '>
                  <div className='notification-logo-container '>
                      <img height="100%" width="100" src={notification.logo?notification.logo:BloodDonor} alt='Notification-img'/>
                  </div>
                  <div className='notification-info-container  d-flex flex-column text-start ms-2' >
                      <b onClick={()=>{navigation("/"+notification.page_url)}}>{notification.title}</b>
                      <p>{notification.description}</p>
                      <small>{notification.date}</small>
                      <div className='broadcast-controls py-1'>
                      {notification.type === "Broadcast" && (<>
                            <button
                                onClick={()=>{broadcastConrol(notification.broadcastId,true,notification.id)}}
                                className='bg-white text-dark me-1'
                                style={{ borderColor: "red", fontWeight: "bolder", padding: "3px 10px", borderRadius: "5px" }}
                            >
                                Accept Request 
                            </button>
                            <button
                                onClick={()=>{broadcastConrol(notification.broadcastId,false,notification.id)}}
                                className='bg-white text-danger'
                                style={{ borderColor: "red", fontWeight: "bolder", padding: "3px 10px", borderRadius: "5px" }}
                            >
                                Deny
                            </button>
                      </>)}
                      </div>
                      
                  </div>
                  <div className='notification-delete-container cursor-pointer d-flex align-items-center text-danger justify-content-center ' onClick={()=>deleteNotification(notification.id)} >
                      <i class="fa-solid fa-trash-can  fa-lg"></i>
                  </div>
                  <div className='notificationType text-center '>
                       <span >{notification.type}</span>
                   </div>
              </div>
              
          </div>
          ))
        }

        {/* {
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
                  <div className='notification-delete-container cursor-pointer d-flex align-items-center text-danger justify-content-center ' onClick={()=>deleteNotification(notification.id)} >
                  <i class="fa-solid fa-trash-can  fa-lg"></i>
                  </div>
              </div>
          </div>
          ))
        }  */}  

      </div>
    </>
  )
}
