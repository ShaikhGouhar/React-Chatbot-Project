import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';
import dayjs from 'dayjs';
export function ChatMessage({ message, sender,time }) { //replacing props is shortcut of below code


  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'}
    >
      {sender === 'Robot' && (<img className="chat-message-profile" src={RobotProfileImage} />)

      }
      <div className="chat-message-text">
        {message}
      <div className='chat-message-time'> 
        {dayjs(time).format('h:mma')}
      </div>
      </div>
      {sender === 'user' && (<img className="chat-message-profile" src={UserProfileImage} />)}
    </div>
  );
}