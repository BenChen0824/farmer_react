import React, { useState, useEffect, useRef } from 'react';
import './Comment.css';
import './CommentCard.css';
import axios from 'axios';
// import CommentCard from './CommentCard';
import { COMMENT_MAIN } from './../../../../config/ajax-path';
import ReactStars from 'react-rating-stars-component';
import { getCommentItem } from './../api/comment';

const Comment = () => {
    //抓資料
    // 抓ajax-path這隻檔案的路由=>COMMENT_MAIN
    const [totalComment, setTotalComment] = useState([]);
    console.log(totalComment);
    const [ratingStarArray, setratingStarArray] = useState([]);
    const [totalProduct, setTotalProduct] = useState([]);
    const [starCount, setStarCount] = useState('');

    const getData = () => {
        fetch(COMMENT_MAIN, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((obj) => {
                setTotalComment(obj);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const newratingStarArray = totalComment.map((v) => {
            return v.rating;
        });
        setratingStarArray(newratingStarArray);
    }, [totalComment]);
    // console.log('ratingStarArray', ratingStarArray)
    // console.log('totalComment', totalComment)
    // console.log('getCommentItem', getCommentItem.sid)

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
    const fivestarComment = totalComment.filter((v) => {
        return +v.rating === 5;
    });
    console.log(fivestarComment);
    //抓全部資料
    // const getComment = async () => {
    //   axios
    //     .get('http://localhost:3600/comment/comment', {
    //       likes: 10,
    //       comment_sid: 10,
    //     })
    //     .then((result) => console.log(result.data))
    // }

    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------
    // 算出平均值
    // 1.先算出總比數的總和，再除以總比數的平均值
    // 2. 成功後再去依照產品sid去撈要計算的項目，算出最後的平均值

    // Total Stars
    const starsTotal = totalComment.map((v, i) => {
        const arr = +v.rating;
        return arr;
    });
    // console.log('starsTotal', starsTotal);

    const average = starsTotal.reduce((a, b) => a + b, 0) / starsTotal.length;
    // console.log('average', average); //3.9245283018867925
    const averageNum = Math.round(average);
    // 將平均數放入星星顯示
    // const averageStar = {
    //   size: 30,
    //   // value: `${average}`,
    //   // value: 3,
    //   value: `${averageNum}`,
    //   edit: false,
    //   isHalf: true,
    // }

    // console.log('Math.round(average)', Math.round(average)); //4
    // console.log('Math.round(average)', typeof Math.round(average)); //Number
    // -------------------------------------------------------------------------------------------------

    function starRating() {
        axios
            .get('http://localhost:3600/comment/comment', {
                star: 10,
                comment_sid: 10,
            })
            .then((result) => console.log(result.data));
    }
    const likeIcon = useRef();
    const numLikes = useRef();

    // 按讚(愛心) 53分左右
    let toggleLike = false;
    let likes = 0;
    const likeComment = () => {
        toggleLike = !toggleLike;
        if (toggleLike) {
            likes++;
            likeIcon.current.style.color = 'blue';
        } else {
            likes--;
            likeIcon.current.style.color = 'gray';
        }
        numLikes.current.innerHTML = likes;
    };

    return (
        <>
            <div className="container">
                <h1 className="text-center">Title</h1>
                <h2>總評價為{!isNaN(averageNum) && averageNum}</h2>
                {/* <ReactStars {...averageStar}  */}
                {!isNaN(averageNum) && (
                    <ReactStars
                        size={30}
                        value={averageNum}
                        edit={false}
                        isHalf
                    />
                )}
                {/* ----------------- 搜尋 ----------------- */}
                <div className="CommentSearch_area d-flex justify-content-center m-5">
                    <input type="text" className="" />
                    <button className="">搜尋</button>
                </div>
                {/* ----------------- 熱門搜尋 -----------------*/}
                <div className="CommentHotSearch d-flex justify-content-center m-5">
                    <p>熱門搜尋:</p>
                    <p>蘋果</p>
                    <p>西瓜</p>
                    <p>葡萄</p>
                    <p>日本和牛</p>
                </div>
                {/*  ----------------- 時間  ----------------- */}
                <div className="CommentTimeSearch d-flex">
                    <p>時間:</p>
                    <select name="" id="">
                        <option value="">所有時間</option>
                        <option value="">一週內</option>
                        <option value="">一個月內</option>
                        <option value="">半年內</option>
                    </select>
                </div>
                {/* ----------------- 評價 -----------------*/}
                <h2 className="d-sm-none">評價</h2>
                {/* 括號內塞資料庫資料 */}
                <div className="d-flex justify-content-center m-5 ">
                    <div
                        className="starRating_btn"
                        value={starRating}
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
                <div className="CommentCard_Area d-flex flex-wrap">
                    {totalComment.map((v, i) => {
                        const createdAt = new Date(
                            v.created_at
                        ).toLocaleString();
                        const starnum = +v.rating; //將資料庫的rating字串抓出來，並轉換成數字
                        {
                            /* console.log(starnum); */
                        }

                        const firstExample = {
                            size: 30,
                            value: `${starnum}`,
                            edit: false,
                            isHalf: true,
                        };

                        return (
                            <div className="col-6" key={i}>
                                {/* <CommentCard
                    account={totalComment.account}
                    comment={totalComment.comment}
                    likes={25}
                  /> */}
                                <div className="CommentCard d-flex">
                                    {/* ----------- */}
                                    <div className="CommentCard_imgwrap me-3">
                                        <img
                                            src="./images/avatar_cat.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* ----------- */}
                                    <div>
                                        <ReactStars {...firstExample} />
                                        {/* <StarRating ratingStarArray={ratingStarArray} index={i} /> */}
                                        {/* <Test2 /> */}
                                        <div className="d-flex">
                                            <p className="CommentCardAccount pe-3">
                                                {v.account}
                                            </p>
                                            <p className="CommentCardTime">
                                                {createdAt}{' '}
                                            </p>
                                        </div>

                                        <p className="CommentContext">
                                            {v.comment}
                                        </p>
                                        <hr />
                                        <p className="CommentProductItem">
                                            評論項目: 產品名稱
                                        </p>
                                        <i
                                            className="fas fa-thumbs-up"
                                            ref={likeIcon}
                                            onClick={likeComment}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="Card_Area"> */}
                {/* <SubMessage user="HAPPY" message=" this is a pen." likes={21} /> */}
                {/* <TopCommentsBox autoFocus={false} /> */}
                {/* <MessageScroll /> */}
                {/* </div> */}
            </div>
        </>
    );
};

export default Comment;
