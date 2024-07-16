import React from 'react'
import "./UserPanelBase.css"
import { Outlet } from 'react-router-dom';
import Header2 from 'Components/Molecules/navBars/Header2/Header2'
import UserPanelNavBar from 'Components/Molecules/navBars/UserPanelNavBar/UserPanelNavBar'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchUser,GetData } from 'Services/FetchData';

export default function UserPanelBase() {
    let navigation = useNavigate()
    const [user,setUser] = useState(null)
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


  return (
    <>
    {user?<>

    <div className='mainContainer'>
        <div className='headContainer'>
            <Header2 id="header" userName={user.firstName}/>
        </div>
        <div className='bodyContainer '>
            <Outlet context={{user,Donors,Seeker}} />
        </div>
    </div>
    
    {/* Absolute Components */}
    <UserPanelNavBar id="userPanelNav"/>

    </>:<>


    </>}
    </>
  )
}