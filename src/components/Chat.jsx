import React, { useContext } from "react";
import Messages from './Messages';
import Input from './Input';
import { auth } from "../firebase"
import { signOut } from "firebase/auth"
import { ChatContext } from "../context/ChatContext";

function Chat() {
    const { data } = useContext(ChatContext);

    return (
        <div className='chat'>
            <div className="chatInfo">
            <span>{data.user?.displayName}</span>
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