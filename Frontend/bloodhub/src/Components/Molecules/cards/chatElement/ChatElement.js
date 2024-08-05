import React, { useEffect, useState } from 'react'
import "./chatElement.css"
import { format, parseISO } from 'date-fns';
import { useOutletContext } from 'react-router-dom';
function ChatElement({chat,onClick,className}) {

    const {Donors,user,Seeker} = useOutletContext();
    const [sender,setSender] = useState({});
    const [lastMsg, setLastMsg] = useState({});
    const chat_users = chat.name.split('+')
    const senderId = chat_users[0]===user.uId?chat_users[1]:chat_users[0]
    const [formattedDate,setFormattedDate] = useState(null)

    
    useEffect(() => {
        const combined_users = [...Donors,...Seeker];
        const sender_user = combined_users.find(e => e.uId === senderId);
        setSender(sender_user || {}); 
        setLastMsg(chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null);
        if(lastMsg.dateTime){
           const lastMsgDateTime = parseISO(lastMsg.dateTime);
           const dateTime_formatted = format(lastMsgDateTime,'yyyy-MM-dd')
            setFormattedDate(dateTime_formatted)
            console.log(formattedDate)
        }
        
    }, [Donors,Seeker,senderId,chat.messages,lastMsg.dateTime,formattedDate]);
    

  return (
    <>
        <div className={"Chat-element cursor-pointer py-1 d-flex "+className}  onClick={onClick}>
            <div className='chat-profile-pic'>
                <img src={sender.dp} alt='Sender profile' height={"100%"} width='100%' />
            </div>
            <div className='chat-info ms-1'>
                <div className='chat-head '>
                    <b>{sender.firstName+" "+sender.lastName}</b>
                    <span className='chat-date'>{formattedDate}</span>
                </div>
                <div className='chat-desc'>
                    <p className='chat-last-msg'>{lastMsg.text}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatElement