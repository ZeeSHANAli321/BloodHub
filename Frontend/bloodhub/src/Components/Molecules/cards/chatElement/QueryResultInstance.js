import React from 'react'
import { useOutletContext } from 'react-router-dom'

function QueryResultInstance({filterd_user,setChatBase,setChatListCollapsed}) {
    const {user} = useOutletContext()

    const  updateChatBase = () => {
        const tempChatBase = {
            "name":`${user.uId}+${filterd_user.uId}`,
            "messages":[]
        }
        setChatBase(tempChatBase)
        const screenWidth = window.screen.width;
        if(screenWidth<="549.99"){
            setChatListCollapsed(true)
        }
    }

  return (

    <div className='Chat-element cursor-pointer py-1 d-flex ' onClick={updateChatBase}>
            <div className='chat-profile-pic'>
                <img src={filterd_user.dp} alt='Sender profile' height={"100%"} width='100%' />
            </div>
            <div className='chat-info ms-1'>
                <div className='chat-head '>
                    <b>{filterd_user.firstName+" "+filterd_user.lastName}</b>
                </div>
                <div className='chat-desc'>
                    <p className='chat-last-msg'>Click here to start Chating</p>
                </div>
            </div>
    </div>
  )
}

export default QueryResultInstance