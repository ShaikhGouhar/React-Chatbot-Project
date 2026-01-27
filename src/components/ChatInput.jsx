import { useState } from 'react'
import {Chatbot } from 'supersimpledev'
import spinner from '../assets/loading-spinner.gif';
import './ChatInput.css'
import dayjs from 'dayjs'

export function ChatInput({chatMessages,setChatMessages}) {
      const [isLoading,setLoading] = useState(false);
      const [inputText,setInputText] = useState('');

      function saveInputText(event){
        setInputText(event.target.value);  //everytime we type it get caught by saveInputText and save in inputText
      }

      
      async function sendMessage(){  
        if(isLoading || inputText==='') { 
          return;
        }

        setLoading(true);
        setInputText('');
        const newChatMessages = [
            ...chatMessages,  //(spread operator)copy the array as react 
            {                 //work best for modificationwith copy
              message:inputText,
              sender : 'user',
              id : crypto.randomUUID(),
              time : dayjs().valueOf()
            }
          ]
         setChatMessages(newChatMessages);
         

         setChatMessages(
             [
                 ...newChatMessages,  //(spread operator)copy the array as react 
                 {                 //work best for modificationwith copy
                    message: <img className="loadingImage" src={spinner} alt="spinner" />,
                    sender : 'Robot',
                    id : crypto.randomUUID(),
                    time:dayjs().valueOf()
                }
            ]
            
        );
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages(
          [
            ...newChatMessages,  //(spread operator)copy the array as react 
            {                 //work best for modificationwith copy
              message: response,
              sender : 'Robot',
              id : crypto.randomUUID(),
              time:dayjs().valueOf()
            }
          ]
        );

        setInputText('');  //set array to empty but not html
        setLoading(false);
      }
    
      function handleKeyDown(events){
        if(events.key ==='Enter'){
          sendMessage();
        }
        if(events.key ==='Escape'){
          setInputText('')
        }
      }
      function ClearData(){
        localStorage.clear();
        setChatMessages([]);
      }
      return (
        //to remove extra div use <></> fragment
        <div className="chat-input-container">
          <input
            placeholder="Send a message to Chatbot"
            size="30"
            onChange = {saveInputText}
            value = {inputText}   //control input
            onKeyDown={handleKeyDown}
            className = "input"
          /> 
          <button
          onClick={sendMessage} className="send-btn">Send</button>
          <button className='clear-btn' onClick={ClearData}> Clear</button>
        </div>
      );
    }