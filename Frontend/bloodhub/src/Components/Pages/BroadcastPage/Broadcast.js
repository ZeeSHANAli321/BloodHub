import React, { useState, useEffect } from 'react';
import './Broadcast.css';
import { useOutletContext } from 'react-router-dom';
import ButtonT2 from 'Components/Atoms/Buttons/ButtonT2';
import { differenceInDays, format, addDays, parseISO } from 'date-fns';

export default function Broadcast() {
  const { user } = useOutletContext();
  const [canBroadcast,setCanBroadcast] = useState(null)
  const [timeRemaining,setTimeRemaining] = useState("0:0:0")
  const [broadcasting,setBroadcasting] = useState(false)
  const [success,setSuccess] = useState(false)
  const [failed,setFailed] = useState(false)
  const [successMsg,setSuccessMsg] = useState("")
  const [bloodGroup, setBloodGroup] = useState(user.bloodGroup);
  const [address, setAddress] = useState(user.address);
  const [requireUnit, setRequireUnit] = useState("");
  const [broadcastMessage, setBroadcastMessage] = useState("");

  

  useEffect(() => {
    
    if (user.broadcastList.length > 0) {
      const lastBroadcastId = user.broadcastList[user.broadcastList.length - 1];
  
      const fetchLastBroadcast = async () => {
        console.log("fetching Data");
        try {
          const response = await fetch(`http://localhost:8000/api/BroadcastModel/${lastBroadcastId}/`, {
            credentials: 'include'
          });
  
          if (!response.ok) {
            return { error: "Something unexpected happened." };
          }
  
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching data:", error);
          return { error: "Something unexpected happened." };
        }
      };
  
      
      const fetchData = async () => {
        const response = await fetchLastBroadcast();
        if (!response.error) {
          console.log("success");
      
          const date_time = parseISO(response.created_at);
      
          const formattedDate = format(date_time, 'yyyy-MM-dd HH:mm:ssXXX');
          const last_broadcast_date = new Date(formattedDate);
      
          const now = new Date();
      
          const day_difference = differenceInDays(now, last_broadcast_date);
      
          if (day_difference >= 3) {
            setCanBroadcast(true);
          } else {
            setCanBroadcast(false);
      
            const threeDaysLater = addDays(last_broadcast_date, 3);
            
            const intervalId = setInterval(() => {
              updateTimeRemaining(threeDaysLater);
            }, 1000);
            
            return () => clearInterval(intervalId);
          }
        }
      };
  
      fetchData();
    } else {
      setCanBroadcast(true);
    }
  }, []);

  const updateTimeRemaining = (threeDaysLater) => {
    const now = new Date();
    const timeRemaining = threeDaysLater - now;
    
    // Convert remaining time to hours, minutes, and seconds
    const hoursRemaining = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0');
    const minutesRemaining = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secondsRemaining = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
    
    setTimeRemaining(`${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`);
  };
  
  /* const sendNotification = async () => {
    const message="This is message",title="Bloodhub"
    fetch('http://localhost:8000/api/send_notification/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: "za77778800@gmail.com",message:message,title:title }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error sending notifications:', error));
  }
 */
 
  const broadCastNotification = async () => {

    const body = {
      bloodGroup:bloodGroup,
      requireUnit:requireUnit,
      address:address,
      msg:broadcastMessage,
      userId:user.emailId,
    }

    try {
        const response = await fetch('http://localhost:8000/api/broadcast_notification/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return { error: error.message }; 
    }
};

  const handleBroadcast = async () => {
    setBroadcasting(true)
    const response = await broadCastNotification()
    if (response.error) {
      console.error('Error sending broadcast notifications:', response.error);
      setFailed(true)
  } else {
      setSuccess(true);
      setSuccessMsg("Broadcast successfully to "+response.SUCCESS_COUNT+" Donors Based on Your Needs")
      console.log('Notification sent successfully:', response);
  }
  }
  return (
    <div className='container p-md-2 ' style={{marginBottom:"100px"}}>
      <div className='row'>
        <div className='col-auto mx-auto text-center'>
            <h1 className='main-title'>Broadcasting Blood Need</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-auto mx-auto text-center'>
            <p className='lead'>
            Welcome to our <span className='highlight-text'>Broadcast Page!</span> Here, you can easily fill out a short form to broadcast your blood-related needs. Whether you are in urgent need of blood or preparing for a future requirement, our broadcasting system ensures your request reaches the right people. Our advanced matching system will send your blood need to users who are suitable donors, based on their blood group and eligibility to donate. <br/>

            Please note that you can broadcast your need <span className='highlight-text'> only once every 3 days </span>to ensure fair access for all seekers. This efficient process helps save lives quickly and effectively, connecting those in need with those who can help.</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-auto col-sm-8 col-md-6 p-3 broadcast-form  mx-auto  '>
           <h3 className='text-center mb-3' style={{fontWeight:"bolder"}}>Broadcast Form</h3>
           <div className='broadcast-form-elements px-md-3'>
              <table>
                <tbody>
                  <tr >
                    <td><b>Blood Group</b></td>
                    <td>
                    <select className='w-100' value={bloodGroup} onChange={(e)=>{setBloodGroup(e.target.value)}}>
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
                    </td>
                  </tr>
                  <tr >
                    <td><b>Required Unit</b></td>
                    <td>
                        <input type="Number" value={requireUnit} onChange={(e)=>setRequireUnit(e.target.value)} />
                    </td>
                  </tr>
                  <tr >
                    <td><b>Address</b></td>
                    <td>
                        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </td>
                  </tr>
                  
                </tbody>
              </table>
              <div className=''>
                  <label htmlFor="Broadcast message" className='w-75 text-start'>Broadcast message</label>
                  <textarea
                      placeholder='Enter your Message here'
                      className='w-100'
                      rows="4"
                      value={broadcastMessage}
                      onChange={e=>setBroadcastMessage(e.target.value)}
                  />
              </div>
           </div>
           {canBroadcast?<>
            <div className='broadcast-button-container text-center p-2'>
                {broadcasting
                ?(!success? !failed?<span><i className="fa-solid fa-spinner text-success fa-spin-pulse fa-2xl"></i></span>:<span className='text-danger'>Error sending broadcast notifications</span> :<span className='text-success'>{successMsg}</span>)
                :(<ButtonT2 text="Broadcast" onClick={handleBroadcast}/>)
                }
            </div>
           </>:<>
            <div className='broadcast-button-container text-center p-2'>
                  <span>You can again , broadcast Your need after  <span className='highlight-text'>{timeRemaining}</span></span>
                 
              </div>
           </>}
           
        </div>
      </div>
    </div>
  );
}
