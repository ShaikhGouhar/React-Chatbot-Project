import { useState,useEffect} from 'react'
import {Chatbot } from 'supersimpledev';
import {ChatInput} from './components/ChatInput.jsx'
import ChatMessages  from './components/ChatMessages.jsx';
import './App.css'

   
    //selecting profile images
 

    

  function App() {//lifting from chatMessages      
      const [isLoading,setLoading] = useState();    //as we take it from node modules no need to write react.useStaet
//adding responses
     
      useEffect(()=>{
         Chatbot.addResponses({
          'goodbye':`goodbye have a great day`,
          'give me a unique id':function(){
            return `sure here is the unique id; ${crypto.randomUUID()}`
          },
          'when was u created':`I was born on 10th December 2025`
          
         })
      },[])
    const [chatMessages,setChatMessages] = useState([])
          {                 //work best for modificationwith copy


      return (
        <div className="app-container">
          {chatMessages.length === 0 && (<p>Welcome to chatbot project! Send a message using textbox below</p>)}
          <ChatMessages 
          chatMessages = {chatMessages} />
          <ChatInput 
          chatMessages = {chatMessages}
          setChatMessages = {setChatMessages}
          isLoading = {isLoading}
          setLoading = {setLoading}
          />
          
        </div>
      );
    }
  }


export default App
