import React from 'react'
import "./ChatBase.css"
import MessageCard from '../MessageCard/MessageCard'
import { useRef,useEffect,useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { postView } from 'Services/FetchData'

function ChatBase({chatBase,chatBarIcon,setChatBase,collapsed}) {
    const {Donors,user,Seeker} = useOutletContext();
    const chat_users = chatBase.name.split("+")
    const senderId = chat_users[0]===user.uId?chat_users[1]:chat_users[0]
    const [messgae,setMessage] = useState('')
    const [sender,setSender] = useState({});

    const chatBody = useRef(null);

    useEffect(()=>{
        if (chatBody.current) {
            chatBody.current.scrollTop = chatBody.current.scrollHeight;
        }
    },[chatBase],)

    useEffect(()=>{
        const combined_users = [...Donors,...Seeker];
        const sender_user = combined_users.find(e => e.uId === senderId);
        setSender(sender_user || {}); 
    },[Donors,Seeker,chatBase,senderId])
    const sendMsg = async () => {
        console.log('msg called ')
        setMessage('')
        const data= {
            'msg_text':messgae,
            'msg_from':user.uId,
            'msg_to':sender.uId,
            'name':chatBase.name
        }
        console.log('msg called ',data)
        console.log('msg called ',chatBase.name)
        console.log('chaatbase length',chatBase.messages.length)
        //create new chatbase with both user and add msg 
        
        if(chatBase.messages.length === 0){
            await postView(data,`http://127.0.0.1:8000/api/initilise_Chatbase/`)
            .then(data => {
                if(data){
                    console.log("successfully created new chatbase and updated it with new msg  ")
                    console.log(data)
                    setChatBase(data.chatBase)

                }else{
                    console.log("some eror cause not to send notification",data)
                }
            })
        }
        else{
        // just add msg to chatbase
        await postView(data,`http://127.0.0.1:8000/api/send_msg/`)
        .then(data => {
            if(data){
                console.log("successfully added new msg ")
                console.log(data)
                setChatBase(data.chatBase)

                /* const upDatedChatbase = getChatBase */
            }else{
                console.log("some eror cause not to send message",data)
            }
        })
        }
    }
    const sendByEnter = (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed:');
          // Add your logic here
          sendMsg()
          event.preventDefault();
        }
      };
  return (
    <>
        <div className='Chat-base-container d-flex flex-column'>
            <div className='chat-base-header p-1 px-3 d-flex justify-content-start align-items-center'>
                {collapsed?(chatBarIcon):(<></>)}
                <div className='chat-profile-pic'>
                    <img src={sender.dp} alt='Profile pic' height={"100%"} width='100%' />
                </div>
                <div className='d-flex flex-column ms-2'>
                <b className='chat-base-user-name pb-0'>{sender.firstName+" "+sender.lastName}</b>
                <small>{sender.emailId}</small>
                </div>
            </div>

            <div className='chat-base-body p-3 d-flex flex-column overflow-auto' ref={chatBody}>
                {chatBase.messages.length > 0
                ?chatBase.messages.map((msg, index) => (
                    <MessageCard key={index} msg={msg} />
                ))
                :
                (<div className='h-100 w-100 d-flex align-items-center justify-content-center'>
                        <div>Send a Message to start Chating</div>
                </div>)
                
                }
                
            </div>

            <div className='chat-base-input p-1 px-3 d-flex justify-content-start align-items-center'>
                <div className='cb-input'>
                    <textarea onKeyDown={sendByEnter} rows="1" placeholder='Type your Message' value={messgae} onChange={(e)=>setMessage(e.target.value)}/>
                </div>
                <div className='cb-send-button' onClick={sendMsg}>
                    <i className="fa-regular fa-lg fa-paper-plane"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatBase