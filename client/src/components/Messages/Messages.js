import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message.js';

import "./Messages.css";



const Messages = ({messages , name}) => (
 <ScrollToBottom className='messsages'>
     {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
 </ScrollToBottom>
);

export default Messages;
