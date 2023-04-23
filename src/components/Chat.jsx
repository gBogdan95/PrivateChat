import React from 'react';
import Messages from './Messages';
import Input from './Input';
import { auth } from "../firebase"
import { signOut } from "firebase/auth"

function Chat() {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="logout">
                <button onClick={()=>signOut(auth)}>Logout</button>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;