import React from 'react'
import "./ChatBase.css"
import MessageCard from '../MessageCard/MessageCard'
import { useRef,useEffect,useState } from 'react'
import { useOutletContext } from 'react-router-dom'
function ChatBase({chatBase,chatBarIcon,collapsed}) {
    const {Donors,Seeker} = useOutletContext();
    const senderId = chatBase.name.split("+")[1]
    const [sender,setSender] = useState({});

    const chatBody = useRef(null);
    useEffect(()=>{
        if (chatBody.current) {
            chatBody.current.scrollTop = chatBody.current.scrollHeight;
        }
    },[chatBase])

    useEffect(()=>{
        const combined_users = [...Donors,...Seeker];
        const sender_user = combined_users.find(e => e.emailId === senderId);
        setSender(sender_user || {}); 
    },[Donors,Seeker,chatBase])
    
  return (
    <>
        <div className='Chat-base-container d-flex flex-column'>
            <div className='chat-base-header p-1 px-3 d-flex justify-content-start align-items-center'>
                {collapsed?(chatBarIcon):(<></>)}
                <div className='chat-profile-pic'>
                    <img src={sender.dp} alt='Profile pic' height={"100%"} width='100%' />
                </div>
                <b className='chat-base-user-name ms-2'>{sender.firstName+" "+sender.lastName}</b>
            </div>
            <div className='chat-base-body p-3 d-flex flex-column overflow-auto' ref={chatBody}>
                {chatBase.messages.map((msg, index) => (
                    <MessageCard key={index} msg={msg} />
                ))}
            </div>
            <div className='chat-base-input p-1 px-3 d-flex justify-content-start align-items-center'>
                <div className='cb-input'>
                    <textarea rows="1" placeholder='Type your Message'/>
                </div>
                <div className='cb-send-button'>
                    <i className="fa-regular fa-lg fa-paper-plane"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatBase