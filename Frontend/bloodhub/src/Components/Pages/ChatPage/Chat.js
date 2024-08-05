import React, { useEffect, useState,useRef } from 'react'
import "./Chat.css"
import logo from "Assets/images/No-Bg-logo2.png"
import ChatElement from 'Components/Molecules/cards/chatElement/ChatElement';
import ChatBase from 'Components/Molecules/cards/ChatBase/ChatBase';
import { useOutletContext } from 'react-router-dom';
import { getChatBase } from './ChatFunctions';
import QueryResultInstance from 'Components/Molecules/cards/chatElement/QueryResultInstance';


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
    const {user,Donors,Seeker} = useOutletContext();
    const totalUsers = [...Donors,...Seeker].filter((u)=>!(u.emailId === user.emailId && u.type === user.type))   
    
    const chatListRef = useRef(null);
    const [chatListCollapsed,setChatListCollapsed] = useState(false)
    const [chatbases,setChatbases] = useState([]);
    const [chatbase,setChatBase] = useState(null)
    const [query,setQuery] = useState('');

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
                        <input type='text'placeholder='Search Users' value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    </div>
                    
                  </div>

                </div>
                <hr key={"hr1"} style={{margin:".5rem 0px"}}/>
                <div className='chat-elements-container'>
                  {query === ''
                  ?
                    chatbases.length > 0 ?
                    chatbases.map((chat,index)=>(
                      <ChatElement key={index} chat={chat} onClick={()=>{changeChatBase(chat)}} />
                    )):(<div className='text-center'>No Chats to Display </div>)
                  
                  :
                    totalUsers.filter((item)=> item.firstName.toLowerCase().includes(query.toLowerCase()) || item.lastName.toLowerCase().includes(query.toLowerCase())).map((U,index)=>(
                      <QueryResultInstance key={index} filterd_user={U} setChatBase={setChatBase} setChatListCollapsed={setChatListCollapsed} />
                    ))
                  
                  }
                  
                </div>
              </div>
              <div className='chat-base'>
                {chatbase?(
                  <ChatBase chatBase={chatbase} setChatBase={setChatBase} collapsed={chatListCollapsed} chatBarIcon={<ChatBarIcon  collapsed={chatListCollapsed} setChatListCollapsed={setChatListCollapsed} />}/>
                ):(
                  <div className='no-cb text-center'>
                    <div className='no-cb-logo-container '>
                      <img src={logo} height={"100%"} width={"100%"} alt='Chat_logo'/> 
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
