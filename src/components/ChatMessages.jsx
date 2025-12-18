import { useRef,useEffect } from 'react'
import {ChatMessage} from './ChatMessage.jsx'
import './ChatMessages.css'


function ChatMessages({ chatMessages}) {
 
    const chatMessagesRef = useRef(null)   //1st initialize ref
    useEffect(()=>{
      const containerElem = chatMessagesRef.current;
      containerElem.scrollTop = containerElem.scrollHeight;
    },[chatMessages])   //will run only when chatMessages run
    // },[]) giving an empty array means useEffect runs only once     
      return (
        <div className="chat-messages-container" ref = {chatMessagesRef}>  
          
          {chatMessages.map((chatMessage) => { //in place of making a const array
            return ( 
              <>     
                                 {/* //we can directly insert in jsx   like this   */}
              <ChatMessage
                message = {chatMessage.message}
                sender = {chatMessage.sender}
                key = {chatMessage.id}
                time = {chatMessage.time}
              />
           
              </>
            );

          })}
        </div>
      )
    }

    export default ChatMessages;