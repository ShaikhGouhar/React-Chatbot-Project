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
          'when was u created':`I was created on 10th December 2025 but since then many updation occured`,
          'tell me your tech stacks':`I am build using React`,
          'Hii':`Hello! Whats up?`,
          'How are you?':`I am just a bot but thanks for asking! How can I help you today?`,
          'What is your purpose?':`My purpose is to assist users with their queries and provide information as needed.`,
          'Can you tell me a joke?':`Sure! Why did the scarecrow win an award? Because he was outstanding in his field!`,
          'What is the capital of France?':`The capital of France is Paris.`,
          'Who is the CEO of Tesla?':`Elon Musk is the CEO of Tesla.`,
          
         })
      },[])

      const [chatMessages,setChatMessages] = useState(JSON.parse(localStorage.getItem('Messages') || '[]' ))
      useEffect(()=>{
        localStorage.setItem('Messages',JSON.stringify(chatMessages))
      },[chatMessages])
                       


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
  


export default App
