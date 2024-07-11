import React from 'react'
import "./UserProfile.css"
import { useEffect,useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from 'Services/FetchData';
import { getHeight } from 'Utils/util';
import Header2 from 'Components/Molecules/navBars/Header2/Header2'
import ProfileCard from 'Components/Molecules/cards/profileCard/ProfileCard';
import UserPanelNavBar from 'Components/Molecules/navBars/UserPanelNavBar/UserPanelNavBar';

export default function UserProfile() {
    const [width, setWidth] = useState(window.innerWidth);
    const [user,setUser] = useState(null)
    let navigation = useNavigate()
    const gettingUser = useCallback(()=>{
        fetchUser().then((user)=>{
            if(user){
                setUser(user)
            }else{
                navigation("/Error")
            }
        })
    },[navigation])
    
    useEffect(() => {
        gettingUser()
    }, [navigation,gettingUser]);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(user){
            const donorRegSection = document.querySelector('.firstSection');
            donorRegSection.style.setProperty('padding-top', `${getHeight('header')+30}px`, 'important');

        }
    }, [width,user]);
  return (
    <>
    {user?<>

        <Header2 id="header" userName={user.firstName}/>
        <div style={{height:"120vh"}} className='firstSection'>
            <ProfileCard user={user} updateUser={gettingUser} user_id={user.id}/>
        </div>
        <UserPanelNavBar id="userPanelNav"/>

    </>:<></>}

    
    </>
  )
}
