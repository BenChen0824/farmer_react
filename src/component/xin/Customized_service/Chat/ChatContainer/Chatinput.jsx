import React, { useState } from 'react';
// import 'emoji-mart/css/emoji-mart.css';
// import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const ChatInput = ({ message, setMessage, sendMessage }) => {
    const [showEmoji, setShowEmoji] = useState(false);
    const handleEmojiShow = () => {
        setShowEmoji((v) => !v);
    };
    const handleEmojiSelect = (e) => {
        setMessage((message) => (message += e.native));
    };
    return (
        <div className="mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block chat-input">
            <div className="input-group flex-fill ">
                <input
                    type="text"
                    className="form-control xin-btn-nofocus"
                    name="message"
                    value={message}
                    placeholder="請輸入訊息"
                    onChange={({ currentTarget: input }) =>
                        setMessage(input.value)
                    }
                    onKeyPress={(e) =>
                        e.code === 'Enter' ? sendMessage() : null
                    }
                />
                <button
                    className="btn xin-btn-nofocus"
                    type="button"
                    onClick={handleEmojiShow}
                >
                    <img
                        src="/images/emojiIcon.png"
                        alt="emoji"
                        className="emojistyle"
                    />
                </button>
                <button
                    className="btn btn-info xin-btn-nofocus"
                    onClick={() => sendMessage()}
                >
                    送出
                </button>
            </div>
            <div>
                {showEmoji && (
                    <div className="emoji-area">
                        <Picker
                            onEmojiSelect={handleEmojiSelect}
                            emojiSize={20}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatInput;
