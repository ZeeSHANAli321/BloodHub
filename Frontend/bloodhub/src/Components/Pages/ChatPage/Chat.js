import React from 'react'
import "./Chat.css"
import { useOutletContext } from 'react-router-dom';

export default function Chat() {
    const {Donors,Seeker,user} = useOutletContext();

  return (
    <>
    <h1 className='text-center pt-5 jomhuria' >Chat Section<small className='text-danger' style={{fontSize:"10px"}}>{Donors.length+","+Seeker.length}</small></h1>
    <p className=' text-center display-1 text-success' >{user.firstName +" "+user.lastName}'s</p>
    <p className=' text-center ' >(BaatChit Vibhag)</p>

    </>
  )
}
