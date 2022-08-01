import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <div className="ContactUs_section">
                <h2 className="mb-5">訂閱我們</h2>

                <div className="ContactUs_input_area">
                    <input placeholder="請輸入信箱" />
                    <button>送出</button>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
