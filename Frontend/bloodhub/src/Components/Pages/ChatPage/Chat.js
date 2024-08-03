import React, { useEffect, useState,useRef } from 'react'
import "./Chat.css"
import logo from "Assets/images/No-Bg-logo2.png"
import ChatElement from 'Components/Molecules/cards/chatElement/ChatElement';
import ChatBase from 'Components/Molecules/cards/ChatBase/ChatBase';
import { useOutletContext } from 'react-router-dom';
import { getChatBase } from './ChatFunctions';
/* const data = [
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
]; */
/* const chatdata = [
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
]; */

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
    //console.log(user)
    const chatListRef = useRef(null);
    const [chatListCollapsed,setChatListCollapsed] = useState(false)
    const [chatbases,setChatbases] = useState([]);
    const [chatbase,setChatBase] = useState(null)
    //const chatbase = chatdata;

    useEffect(()=>{
      if(chatListRef.current){
        if (chatListCollapsed) {
          chatListRef.current.classList.add("collapsed");
      } else {
          chatListRef.current.classList.remove("collapsed");
      }
        
      }
    },[chatListCollapsed])

    //Funcunalities 
    useEffect(()=>{
      const getChats = async () => {
        const chats = await getChatBase(user.ChatBases)
        setChatbases(chats);
      }
      getChats()
    },[user.ChatBases])

  const changeChatBase = (chat) => {
      setChatBase(chat)
      const screenWidth = window.screen.width;
      if(screenWidth<="549.99"){
        setChatListCollapsed(true)
      }
  }
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
                      <ChatElement key={index} chat={chat} onClick={()=>{changeChatBase(chat)}} />
                    ))
                  }
                </div>
              </div>
              <div className='chat-base'>
                {chatbase?(
                  <ChatBase chatBase={chatbase} collapsed={chatListCollapsed} chatBarIcon={<ChatBarIcon  collapsed={chatListCollapsed} setChatListCollapsed={setChatListCollapsed} />}/>
                ):(
                  <div className='no-cb text-center'>
                    <div className='no-cb-logo-container '>
                      <img src={logo} height={"100%"} width={"100%"} /> 
                    </div>
                    <span className='display-4'>Select any Chat to start chating.</span>
                    <div className='no-cb-chat-bar'>
                      {chatListCollapsed?
                      <ChatBarIcon collapsed={chatListCollapsed} setChatListCollapsed={setChatListCollapsed} />
                      :<></>
                      }
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
        <div className='margin-box-bottom'></div>
      </div>
    </>
  )
}
