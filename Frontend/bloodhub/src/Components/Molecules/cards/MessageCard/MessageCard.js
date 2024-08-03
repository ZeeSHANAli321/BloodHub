import React, { useEffect, useState } from 'react'
import "./MessageCard.css"
import { useOutletContext } from 'react-router-dom'
import { format, parseISO } from 'date-fns';

function MessageCard({msg}) {
    const {user} = useOutletContext();
    const [formattedtime,setFormattedTime] = useState(null)
    const me = user.emailId;
    const dateTimeString = msg.dateTime;
    useEffect(()=>{
        if(dateTimeString) {
            const date_time = parseISO(dateTimeString);
            const msgTime = format(date_time, 'h:mm aaa');
            setFormattedTime(msgTime);
        } else {
            console.warn('Invalid dateTimeString:', dateTimeString);
        }
    },[dateTimeString])
    console.log(formattedtime)
  return (
    <div className='Message-box-container w-100 d-flex align-items-center pb-2'style={{justifyContent:msg.msg_from === me ? "end" : "start" }} >
         <div className='Message-box  px-md-3'>
            {msg.msg_from !== me?(
            <>
             <div className='Message-card msg-start p-2 '>
                <div>
                    {msg.text}     
                </div>
                <div className='Message_time'>
                <span className='time lead'>{formattedtime}</span>
                </div>
            </div>
            
            </>   
            ):(
            <div className='Message-card msg-end p-2'>
                {msg.text}
                <div className='Message_time_status text-end'>
                    <span className='time'>{formattedtime}</span>
                    <span className='ms-1 Message-status'>
                    {
                    /* msg.status === 'pending' ? (
                        <i className="fa-solid fa-spinner text-success fa-spin-pulse fa-xs"></i>
                    ) : ( */
                        msg.status === 'saved' ? (
                            <i className="fa-solid fa-check fa-xs text-primary"></i>
                        ) : (
                            <i className="fa-solid fa-check-double fa-xs text-primary"></i>
                        )
                    }
                    </span>
                </div>
            </div>   
            )}
            
        </div>
    </div>
  )
}

export default MessageCard