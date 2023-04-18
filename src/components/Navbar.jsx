import React from 'react';

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">Private Chat</span>
            <div className="user">
                <img src="https://images.squarespace-cdn.com/content/v1/55db3b44e4b01e5be14cad77/1657893813325-56Q5M5A6GELA24XFRKUU/Screenshot+2022-07-15+at+16.03.18.png?format=1500w" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;