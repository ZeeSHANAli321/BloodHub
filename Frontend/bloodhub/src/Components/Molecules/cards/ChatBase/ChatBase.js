import React from 'react'
import "./ChatBase.css"
import BloodDonor from "Assets/images/blooddonor.png"
import MessageCard from '../MessageCard/MessageCard'
import { useRef,useEffect } from 'react'
function ChatBase({chatBase,userName,chatBarIcon,collapsed}) {
    const chatBody = useRef(null)
    useEffect(()=>{
        if (chatBody.current) {
            chatBody.current.scrollTop = chatBody.current.scrollHeight;
        }
    },[chatBase])
  return (
    <>
        <div className='Chat-base-container d-flex flex-column'>
            <div className='chat-base-header p-1 px-3 d-flex justify-content-start align-items-center'>
                {collapsed?(chatBarIcon):(<></>)}
                <div className='chat-profile-pic'>
                    <img src={BloodDonor} alt='Profile pic' height={"100%"} width='100%' />
                </div>
                <b className='chat-base-user-name ms-2'>{userName}</b>
            </div>
            <div className='chat-base-body p-3 d-flex flex-column overflow-auto' ref={chatBody}>
                {chatBase.map((msg, index) => (
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