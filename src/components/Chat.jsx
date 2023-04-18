import React from 'react';
import More from "../img/more.png"

function Chat() {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={More} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Chat;