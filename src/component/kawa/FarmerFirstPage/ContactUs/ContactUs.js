import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//     function sendEmail() {}

//     return (
//         <>
//             <div className="ContactUs_section">
//                 <h2 className="mb-5">訂閱我們</h2>

//                 <div className="ContactUs_input_area">
//                     <input placeholder="請輸入信箱" />
//                     <button onSubmit={sendEmail}>送出</button>
//                 </div>1
//             </div>
//         </>
//     );
// };

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'kawa',
                'template_dq55ygg',
                form.current,
                '56_l3kJvCZE4gQUlM'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log('message send');
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        // <form ref={form} onSubmit={sendEmail}>
        //   <label>Name</label>
        //   <input type="text" name="user_name" />
        //   <label>Email</label>
        //   <input type="email" name="user_email" />
        //   <label>Message</label>
        //   <textarea name="message" />
        //   <input type="submit" value="Send" />
        // </form>

        <form ref={form} onSubmit={sendEmail}>
            <div className="ContactUs_section">
                <h2 className="mb-3">訂閱我們</h2>
                <h5 className="mb-5">已追蹤更多消息!</h5>

                <div className="ContactUs_input_area">
                    <input placeholder="請輸入信箱......" name="message" />
                    <input type="submit" value="送出" className="sendButton" />
                </div>
            </div>
        </form>
    );
};

export default ContactUs;
