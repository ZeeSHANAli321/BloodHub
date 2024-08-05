import React, { useEffect, useState,useRef } from 'react'
import "./Chat.css"
import logo from "Assets/images/No-Bg-logo2.png"
import ChatElement from 'Components/Molecules/cards/chatElement/ChatElement';
import ChatBase from 'Components/Molecules/cards/ChatBase/ChatBase';
import { useOutletContext } from 'react-router-dom';
import { getChatBase,getSortedChatBase } from './ChatFunctions';
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
    //const totalUsers = [...Donors,...Seeker].filter((u)=>!(u.emailId === user.emailId && u.type === user.type))   
    const [newUsers,setNewUsers] = useState([])
    const chatListRef = useRef(null);
    const [chatListCollapsed,setChatListCollapsed] = useState(false)
    const [chatbases,setChatbases] = useState([]);
    const [chatbase,setChatBase] = useState(null);
    const [notSelectedChats,setNotSelectedChats] = useState([])
    const [query,setQuery] = useState('');
    const [selectedChat,setSelectedChat] = useState(null)

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
        const sortedChatBase = getSortedChatBase(chats);
        setChatbases(sortedChatBase);
        setNotSelectedChats(sortedChatBase)

      }
      getChats()
    },[user.ChatBases])
    
    const changeChatBase = (chat) => {
        setChatBase(chat)
        setSelectedChat(chat)
        
        //setNotSelectedChats(chatbases.filter((cb)=> cb.name !== selectedChat.name))
    }
    useEffect(()=>{
      if(chatbases && selectedChat){
        console.log("Selected chat : ",selectedChat)

        const notSelected = chatbases.filter((chat) => chat.name !== selectedChat.name)
        setNotSelectedChats(notSelected)
      }
      else{
        console.log("Selected chat : ",selectedChat)
      }
    },[selectedChat,chatbases])

    useEffect(()=>{
      const screenWidth = window.innerWidth;
      if(screenWidth<=549.99){
        setChatListCollapsed(true)
      }
    },[chatbase])

    //Getting Streamed Data 
    useEffect(()=>{
      let chatBaseStreamData = null
      if(user.uId){
          const encodedName = encodeURIComponent(user.uId);//DOash@gmail.com+SEmaddy@gmail.com type fo name 
          chatBaseStreamData = new EventSource(`http://localhost:8000/api/stream_ChatBases/${encodedName}/`);
          console.log("Streamed Data " ,chatBaseStreamData)
          chatBaseStreamData.onmessage = (event) => {

              const data = JSON.parse(event.data);
              setChatbases(getSortedChatBase(data));
              setChatBase(prevChatBase => {
                if (prevChatBase) {
                  console.log("prevChatBase :",prevChatBase)
                  if(prevChatBase.messages.length > 0){
                    const updatedChatBase = data.find(chat => chat.name === prevChatBase.name);
                    console.log("UPdated Chat base : ",updatedChatBase)
                    return updatedChatBase || null; 
                  }else{
                    return prevChatBase
                  }
                    
                }
                console.log("prevChatBase WHeN no prev :",prevChatBase)
                return prevChatBase; 
            });

          };
      }
      
      return () => {
          if(chatBaseStreamData){
              chatBaseStreamData.close(); // Cleanup on component unmount
          }
      };

    },[user.uId])

    useEffect(() => {
      const allUsers = [...Donors,...Seeker].filter((u)=>!(u.emailId === user.emailId && u.type === user.type))   
      const otherUsers = allUsers.filter((user) =>
        !chatbases.some((cb) => cb.name.includes(user.uId))
      );
      setNewUsers(otherUsers);
    }, [chatbases,Donors,Seeker,user.type,user.emailId]);
    
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
                  {selectedChat && (
                    <ChatElement chat={selectedChat} className={"selectedChat"} />
                  )}
                {query === '' ? (
                    notSelectedChats.length > 0 ? (
                      notSelectedChats.map((chat, index) => (
                        <ChatElement key={index} chat={chat} onClick={() => { changeChatBase(chat); }} />
                      ))
                    ) : (
                      <div className='text-center'>No Chats to Display</div>
                    )
                  ) : (
                    <>
                      
                      {chatbases.length > 0 &&(<>

                        <small>From Your Chats</small><br/>
                        { chatbases
                          .filter((item) =>
                            item.name.toLowerCase().includes(query.toLowerCase()) ||
                            item.name.toLowerCase().includes(query.toLowerCase())
                          )
                          .map((chat, index) => (
                            <ChatElement key={index} chat={chat} onClick={() => { changeChatBase(chat); }} />
                          ))}</>)}

                      <small>Global User's</small>
                      {newUsers
                        .filter((item) =>
                          item.firstName.toLowerCase().includes(query.toLowerCase()) ||
                          item.lastName.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((U, index) => (
                          <QueryResultInstance
                            key={index}
                            filterd_user={U}
                            setChatBase={setChatBase}
                            setChatListCollapsed={setChatListCollapsed}
                          />
                        ))}
                    </>
                  )}

                                    
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
