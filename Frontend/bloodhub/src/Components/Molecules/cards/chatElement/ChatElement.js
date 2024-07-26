import React from 'react'
import "./chatElement.css"
function ChatElement({chat}) {
  return (
    <>
        <div className='Chat-element py-1 d-flex '>
            <div className='chat-profile-pic'>
                <img src={chat.logo} height={"100%"} width='100%' />
            </div>
            <div className='chat-info'>
                <div className='chat-head '>
                    <b>{chat.name}</b>
                    <span className='chat-date'>{chat.date}</span>
                </div>
                <div className='chat-desc'>
                    <p className='chat-last-msg'>{chat.description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatElement