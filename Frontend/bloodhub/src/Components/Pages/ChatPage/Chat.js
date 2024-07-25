<<<<<<< HEAD
import React, { useEffect, useState,useRef } from 'react'
import "./Chat.css"
import BloodDonor from "Assets/images/blooddonor.png"
import ChatElement from 'Components/Molecules/cards/chatElement/ChatElement';
import ChatBase from 'Components/Molecules/cards/ChatBase/ChatBase';
import { useOutletContext } from 'react-router-dom';
const data = [
  { id:1,
    logo:BloodDonor,
    name:"Broadcast msg  ",
    date:"20/20/2020",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos officia deserunt tempore modi laboriosam a distinctio ab."
  },
  { id:2,
    logo:BloodDonor,
    name:"Chat msg  ",
    date:"20/20/2020",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos officia deserunt tempore modi laboriosam a distinctio ab."
  },
  { id:3,
    logo:BloodDonor,
    name:"THis is name ",
    date:"20/20/2020",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos offic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, temporibus nostrum dignissimos officia deserunt tempore modi laboriosam a distinctio ab."
  }
];
const chatdata = [
  {
    id:1,
    msg:"Hi i am trying to make my chat base ",
    by:"me",
    date:"01-01-2001",
    time:"12am",
    status:'read'
  },
  {
    id:2,
    msg:"Good made it  ",
    by:"you",
    date:"01-01-2001",
    time:"12:11am",
    status:'read'

  },
  {
    id:3,
    msg:"OK, I will try my best",
    by:"me",
    date:"01-01-2001",
    time:"12:12am",
    status:'pending'
  },
  {
    id:4,
    msg:"Good Luck Hero  ",
    by:"you",
    date:"01-01-2001",
    time:"12:13am",
    status:'send'
  },
];
const ChatBarIcon = ({collapsed,setChatListCollapsed})=>{
  const toggleChatList = () => {
    if(collapsed){
      setChatListCollapsed(false)
    }else{
      setChatListCollapsed(true)
    }
  }
  return(<>
    <i className="fa-solid fa-bars fa-xl me-2 cursor-pointer" onClick={toggleChatList}></i>
  </>)
}
export default function Chat() {
    const {Donors,Seeker,user} = useOutletContext();
    const chatListRef = useRef(null);
    const [chatListCollapsed,setChatListCollapsed] = useState(false)
    const chatbases = data;
    const chatbase = chatdata;

    useEffect(()=>{
      if(chatListRef.current){
        if (chatListCollapsed) {
          chatListRef.current.classList.add("collapsed");
      } else {
          chatListRef.current.classList.remove("collapsed");
      }
        
      }
    },[chatListCollapsed])
  return (
    <>
      <div className='chat-container'>
        <div className='chat overflow-hidden'>
          <div className='chat-box '>
              <div className='chat-list p-3 ' ref={chatListRef}>
                <div className='chat-function'>
                  <div className='header-function'>
                    <h3>Chats</h3>
                    {
                      chatListCollapsed?(<></>):(<ChatBarIcon collapsed={chatListCollapsed} setChatListCollapsed={setChatListCollapsed} />)
                    }
                    
                  </div>
                  <div className='chat-search-box w-100'>
                    
                    <i className="fa-solid fa-magnifying-glass fa-lg p-1"></i>
                    

                    <div className='chat-search-input'>
                        <input type='text'placeholder='Search Users'/>
                    </div>
                    
                  </div>

                </div>
                <hr key={"hr1"} style={{margin:".5rem 0px"}}/>

                <div className='chat-elements-container'>
                  {
                    chatbases.map((chat,index)=>(
                      <ChatElement key={index} chat={chat} />
                    ))
                  }
                </div>
              </div>
              <div className='chat-base'>
                  <ChatBase chatBase={chatbase} collapsed={chatListCollapsed} chatBarIcon={<ChatBarIcon  collapsed={chatListCollapsed} setChatListCollapsed={setChatListCollapsed} />} userName={"Gaurav "}/>
              </div>
          </div>
        </div>
        <div className='margin-box-bottom'></div>
      </div>
=======
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

>>>>>>> 74adefbcd49cfd5b286f1236fdd16d657ffda096
    </>
  )
}
