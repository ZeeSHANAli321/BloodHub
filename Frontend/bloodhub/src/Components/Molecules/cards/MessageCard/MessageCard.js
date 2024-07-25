import React from 'react'
import "./MessageCard.css"
import { useOutletContext } from 'react-router-dom'
function MessageCard({msg}) {
    const user = useOutletContext()
  return (
    <div className='Message-box-container w-100 d-flex align-items-center pb-2'style={{justifyContent:msg.by === "me" ? "end" : "start" }} >
        <div className='Message-box '>
            {msg.by !== "me"?(
            <>
             <div className='Message-card msg-start p-2 '>
                <div>
                    {msg.msg}     
                </div>
                <div className='Message_time'>
                <span>{msg.time}</span>
                </div>
            </div>
            
            </>   
            ):(
            <div className='Message-card msg-end p-2'>
                {msg.msg}
                <div className='Message_time_status text-end'>
                    <span>{msg.time}</span>
                    <span className='ms-1 Message-status'>
                    {msg.status === 'pending' ? (
                        <i className="fa-solid fa-spinner text-success fa-spin-pulse fa-xs"></i>
                    ) : (
                        msg.status === 'saved' ? (
                            <i className="fa-solid fa-check fa-xs text-primary"></i>
                        ) : (
                            <i className="fa-solid fa-check-double fa-xs text-primary"></i>
                        )
                    )}
                    </span>
                </div>
            </div>   
            )}
            
        </div>
    </div>
  )
}

export default MessageCard