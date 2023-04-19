import React from 'react';

function Message() {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://images.squarespace-cdn.com/content/v1/55db3b44e4b01e5be14cad77/1657893813325-56Q5M5A6GELA24XFRKUU/Screenshot+2022-07-15+at+16.03.18.png?format=1500w" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.squarespace-cdn.com/content/v1/55db3b44e4b01e5be14cad77/1657893813325-56Q5M5A6GELA24XFRKUU/Screenshot+2022-07-15+at+16.03.18.png?format=1500w" alt="" />
            </div>
        </div>
    );
}

export default Message;