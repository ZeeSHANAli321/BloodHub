import React from 'react'
import "./UserPanelBase.css"
import { Outlet } from 'react-router-dom';
import Header2 from 'Components/Molecules/navBars/Header2/Header2'
import UserPanelNavBar from 'Components/Molecules/navBars/UserPanelNavBar/UserPanelNavBar'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchUser,GetData } from 'Services/FetchData';
import { getMessaging, getToken } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBnc91I-geh5tktZOI8cee-On3l7lMLUj4",
    authDomain: "bloodhub-8eabb.firebaseapp.com",
    projectId: "bloodhub-8eabb",
    storageBucket: "bloodhub-8eabb.appspot.com",
    messagingSenderId: "50863312358",
    appId: "1:50863312358:web:8fea02e579e47ed9fb5a27"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default function UserPanelBase() {
    let navigation = useNavigate()
    const [user,setUser] = useState(null)
    const [showNotification,setShowNotification] = useState(false)
    const [token, setToken] = useState(null);
    const [ignore,setIgnore] = useState(false);
    const [notificationPermission, setNotificationPermission] = useState(null);
    const BloodBanks = GetData(`http://localhost:8000/api/BloodBank/`)
    const BloodDrives = GetData(`http://localhost:8000/api/BloodDrive/`)
    const Donors = GetData("http://localhost:8000/api/donor/");
    const Seeker = GetData("http://localhost:8000/api/seeker/");
    useEffect(() => {
        fetchUser().then((user)=>{
            if(user){
                setUser(user)
            }else{
                navigation("/Error")
            }
        })
    }, [navigation]);

    useEffect(()=>{
        const permission = Notification.permission;
        setNotificationPermission(permission);

        const timer = setTimeout(() => {
          setShowNotification(true);
      }, 2000); 

     
      return () => clearTimeout(timer);
    },[])

    const requestPermission = async () => {
        console.log("requisting Permission")
        console.log(app)
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            setNotificationPermission(Notification.permission)
            const messaging = getMessaging(app);
            console.log(messaging)
            const token = await getToken(messaging, { vapidKey: 'BHTXLxF79fzWdJsCvbG8PuhO9E8jZnZQx7-Pa3YA3sRDJsU0K3Il9RUWCqvJJFRXtgofsOIuu7YpVXUYdKmj-F4' });
            console.log("Device Token : " , token)
            setToken(token);
            // Send the token to your Django backend
            fetch('http://localhost:8000/api/save_token/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ device_token: token, user: user.emailId }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error('Error saving token:', error));
          } else {
            console.log('Permission denied');
          }
        } catch (error) {
          console.error('Error requesting permission:', error);
        }
      };

console.log(BloodDrives)


  return (
    <>
    {user?<>

    <div className='mainContainer'>
        <div className='headContainer'>
        {notificationPermission === 'default' && !ignore && showNotification && (
                <div className='notification-msg py-1 bg-warning'>
                    <div className='container d-flex justify-content-between align-items-center'>
                        <span style={{ fontWeight: "bold" }}>
                            Allow Notification to Get Seekers Blood request or other important Notifications
                        </span>
                        <div className='d-flex align-items-center'>
                            <button
                                onClick={requestPermission}
                                className='bg-white text-dark'
                                style={{ borderColor: "red", fontWeight: "bolder", padding: "3px 10px", borderRadius: "5px" }}
                            >
                                Allow
                            </button>
                            <i
                                className='fa-solid fa-xmark fa-lg ms-3 cursor-pointer'
                                onClick={() => setIgnore(true)}
                            ></i>
                        </div>
                    </div>
                </div>
            )}
             
            <Header2 id="header" userName={user.firstName} userType={user.type} />
           

        </div>
        <div className='bodyContainer '>
            <Outlet context={{user,Donors,Seeker,BloodBanks,BloodDrives}} />
        </div>
    </div>
    
    {/* Absolute Components */}
    <UserPanelNavBar id="userPanelNav" canBroadcast={
      user.type.toUpperCase() === "DONOR"?false:true
    } />

    </>:<>


    </>}
    </>
  )
}