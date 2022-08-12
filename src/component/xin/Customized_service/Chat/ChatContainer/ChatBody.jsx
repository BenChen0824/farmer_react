import React, { useEffect, useRef } from 'react';
import Uploadimages from './hooks/Uploadimages';
const ChatBody = ({ user, messages }) => {
    const scroll = useRef();
    //滾動到最後訊息
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="position-relative overflow-auto chat-height ">
            <div className="p-4 d-flex flex-column">
                {messages.map((message, index) => {
                    return message.type === 'userStatus' ? (
                        <div key={index} className="text-center"></div>
                    ) : (
                        <div
                            key={index}
                            className={
                                message.userId === user.userId
                                    ? 'chat-message-right mb-4 xin-bg-color bg-gradient rounded'
                                    : 'chat-message-left mb-4 bg-light rounded'
                            }
                        >
                            <div
                                className="flex-shrink-1  py-2 px-3 ml-3"
                                // ref={scroll}
                            >
                                {message.message.includes('http') ? (
                                    <a href={message.message}>
                                        {message.message}
                                    </a>
                                ) : (
                                    message.message
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChatBody;
