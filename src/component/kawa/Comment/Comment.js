import React, { useState } from 'react';
import './Comment.css';
import TopCommentsBox from './TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';
import Test from './Test';
import axios from 'axios';
import CommentCard from './CommentCard/CommentCard';

const Comment = () => {
    // const [backendData, setBackendData] = useState([])

    const [showStar5, setShowStar5] = useState(-1);
    // const [showStar4, setShowStar4] = useState(-1)
    // const [showStar3, setShowStar3] = useState(-1)
    // const [showStar2, setShowStar2] = useState(-1)
    // const [showStar1, setShowStar1] = useState(-1)

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ toggle
        setIsActive((current) => !current);

        // 👇️ or set to true
        setIsActive(true);
        // if (isActive) {
        //   setIsActive(true)
        // } else {
        //   setIsActive(false)
        // }
    };

    //抓全部資料
    const getComment = async () => {
        axios
            .get('http://localhost:3600/comment/comment', {
                likes: 10,
                comment_sid: 10,
            })
            .then((result) => console.log(result.data));
    };

    function likes() {
        axios
            .put('http://localhost:3600/comment/comment', {
                likes: 10,
                comment_sid: 10,
            })
            .then((result) => console.log(result.data));
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center">Title</h1>

                <div className="CommentSearch_area d-flex justify-content-center m-5">
                    <input type="text" className="" />
                    <button className="">搜尋</button>
                </div>

                <div className="CommentHotSearch d-flex justify-content-center m-5">
                    <p>熱門搜尋:</p>
                    <p>蘋果</p>
                    <p>西瓜</p>
                    <p>葡萄</p>
                    <p>日本和牛</p>
                </div>

                <div className="CommentTimeSearch d-flex">
                    <p>時間:</p>
                    <select name="" id="">
                        <option value="">所有時間</option>
                        <option value="">一週內</option>
                        <option value="">一個月內</option>
                        <option value="">半年內</option>
                    </select>
                </div>

                <h2>評價</h2>
                {/* 括號內塞資料庫資料 */}
                <div className="d-flex justify-content-center m-5 ">
                    <div
                        className="starRating_btn"
                        value={showStar5}
                        onClick={handleClick}
                        style={{
                            backgroundColor: isActive ? '#82CA35' : '',
                            color: isActive ? 'white' : '',
                            border: isActive ? '' : 'red',
                        }}
                    >
                        五顆星(10)
                    </div>
                    <div className="starRating_btn">四顆星(10)</div>
                    <div className="starRating_btn">三顆星(10)</div>
                    <div className="starRating_btn">二顆星(10)</div>
                    <div className="starRating_btn">一顆星(10)</div>
                </div>

                <div className="CommentCard_Area d-flex">
                    <CommentCard />
                    {/* <CommentCard /> */}
                </div>

                <div className="Card_Area">
                    {/* <SubMessage user="HAPPY" message=" this is a pen." likes={21} /> */}
                    <TopCommentsBox autoFocus={false} />
                    <MessageScroll />
                    <Test />
                </div>
            </div>
        </>
    );
};

export default Comment;
