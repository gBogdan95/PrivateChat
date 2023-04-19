import React from 'react';
import More from "../img/more.png"
import Messages from './Messages';
import Input from './Input';

function Chat() {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;