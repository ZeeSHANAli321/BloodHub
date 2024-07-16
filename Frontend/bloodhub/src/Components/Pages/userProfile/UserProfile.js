import React from 'react'
import "./UserProfile.css"
import { useEffect,useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from 'Services/FetchData';
import ProfileCard from 'Components/Molecules/cards/profileCard/ProfileCard';

export default function UserProfile() {
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

  return (
    <>
    {user?<>
        <div  className='profileCardContainer pt-5' style={{marginBottom:"100px"}}>
            <ProfileCard user={user} updateUser={gettingUser} user_id={user.id}/>
        </div>
    </>:<></>}

    
    </>
  )
}
