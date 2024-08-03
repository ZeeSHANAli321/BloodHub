import React from 'react'
import "./ErrorPage.css"
import YouCant from 'Assets/images/robot.png'
import { Link } from 'react-router-dom'
export default function ErrorPage() {
  return (
    <div className='error-body '>
          <div className='error-container flex-column p-3'>
              <div className='display-3'><span className='highlight-text'>Oops!</span> Your Session not found...</div>
              <img src={YouCant} alt="" style={{height:"300px"}} />
              <div className='lead pb-3'> It is due to your Session might be expired or someting unexpected has happened which cause this error.</div>
              <div className='lead'> Please Goto <Link to={"/Login"} className='highlight-text'>Login</Link> Page and again Login to reset your Session.</div>

          </div>
    </div>
    
  )
}
