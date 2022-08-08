import React, { useEffect, useState } from 'react';
import Meassage from './Message/Message';

const MessageScroll = (props) => {
    const [messages, setMessaages] = useState([]);
    const [showBottomBar, setShowBottomBar] = useState(true);

    useEffect(() => {
        setShowBottomBar(true);
        fetch('/get-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ limitNum: 10 }),
        })
            .then((res) => res.json())
            .then((comments) => {
                setMessaages(comments);
            });
    }, []);

    return (
        <>
            <Meassage
                user="Dummy User1"
                editable={false}
                meassage="Dummy Message"
                likes={25}
            />

            {/* {messages.map(message)=>{
        <Meassage key={message._id} useKey={message._id} 
        user={message.user} editable={message.editable}
      message={message.message} likes={message.likes}
      replies={message.replies}
        />
      }} */}

            {/* <div className="bottomBar">
        <div className="loader"></div>
      </div> */}
            {messages.length > 9 && showBottomBar ? (
                <div className="bottomBar">
                    <div className="loader"></div>
                </div>
            ) : null}
        </>
    );
};

export default MessageScroll;
