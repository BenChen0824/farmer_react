import React, { useState, useEffect, useRef } from 'react';
import './Comment.css';
import './CommentCard.css';
import axios from 'axios';
import { COMMENT_MAIN } from './../../../../config/ajax-path';
import ReactStars from 'react-rating-stars-component';
// import { getCommentItem } from '../../api/comment'
// import Pages from '../Pages/index';

const Comment = () => {
    // 從資料庫抓資料
    // 抓ajax-path這隻檔案的路由=>COMMENT_MAIN
    const [totalComment, setTotalComment] = useState([]);
    // 從抓出來的資料做篩選
    const [commentToShow, setCommentToShow] = useState([totalComment]);
    //   console.log(totalComment)
    const [ratingStarArray, setratingStarArray] = useState([]);

    //info頁籤的鉤子
    const [info, setInfo] = useState(0);

    // const mountRef = useRef(false);

    const getData = () => {
        fetch(COMMENT_MAIN, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((obj) => {
                setTotalComment(obj);
            });
    };

    // useEffect(() => {
    //     if (mountRef.current) {
    //         mountRef.current = true;
    //     } else {
    //         setCommentToShow(totalComment);
    //     }
    //     getData();
    // }, [totalComment]);

    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        setCommentToShow(totalComment);
    }, []);

    useEffect(() => {
        const newratingStarArray = totalComment.map((v) => {
            return v.rating;
        });
        setratingStarArray(newratingStarArray);
    }, [totalComment]);

    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------

    // 1~5星的筆數
    const commentFilter = (e) => {
        const newtotalComment = totalComment.filter((v) => {
            return +v.rating === +e.target.getAttribute('value');
            // data-value
        });
        console.log(newtotalComment);
        setCommentToShow(newtotalComment);
    };

    const allstarComment = totalComment.filter((v) => {
        return +v.rating;
    });

    const fivestarComment = totalComment.filter((v) => {
        return +v.rating === 5;
    });
    const fourstarComment = totalComment.filter((v) => {
        return +v.rating === 4;
    });
    const threestarComment = totalComment.filter((v) => {
        return +v.rating === 3;
    });
    const twostarComment = totalComment.filter((v) => {
        return +v.rating === 2;
    });
    const onestarComment = totalComment.filter((v) => {
        return +v.rating === 1;
    });

    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------

    const starsTotal = totalComment.map((v, i) => {
        const arr = +v.rating;
        return arr;
    });
    //   console.log('starsTotal', starsTotal)

    const average = starsTotal.reduce((a, b) => a + b, 0) / starsTotal.length;
    // console.log('average', average); //3.9245283018867925
    const averageNum = Math.round(average);

    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------

    return (
        <>
            <div className="container">
                <h1 className="text-center">Title</h1>
                <h2>總評價為{!isNaN(averageNum) && averageNum}</h2>
                {!isNaN(averageNum) && (
                    <ReactStars
                        size={30}
                        value={averageNum}
                        edit={false}
                        isHalf
                    />
                )}
                <h2>{starsTotal.length}篇評論</h2>

                {/* ----------------- 搜尋 ----------------- */}
                <div className="CommentSearch_area d-flex justify-content-center m-5">
                    <input type="text" className="" />
                    <button className="">搜尋</button>
                </div>

                {/* ----------------- 熱門關鍵字 -----------------*/}
                {/*  ----------------- 顯示  ----------------- */}
                <div className="HotSearch_and_Time_area">
                    <div className="CommentHotSearch d-flex">
                        <p>熱門關鍵字:</p>
                        <div className="HotSearchBtn">蘋果</div>
                        <div className="HotSearchBtn">西瓜</div>
                        <div className="HotSearchBtn">日本和牛</div>
                    </div>

                    <div className="CommentTimeSearch d-flex">
                        <p>顯示:</p>
                        <select name="" id="">
                            <option value="">由新到舊</option>
                            <option value="">由舊到新</option>
                        </select>
                    </div>
                </div>

                {/* ----------------- 評價按鈕 -----------------*/}
                <h2 className="d-sm-none">評價</h2>
                <div className="d-flex justify-content-center m-5 ">
                    <div
                        className="starRating_btn"
                        onClick={(e) => {
                            // console.log(e.target.getAttribute('value'))
                            setCommentToShow(totalComment);
                        }}
                    >
                        全部({allstarComment.length})
                    </div>
                    <div
                        className="starRating_btn"
                        value={5}
                        onClick={(e) => {
                            // console.log(e.target.getAttribute('value'))
                            commentFilter(e);
                        }}
                    >
                        五顆星({fivestarComment.length})
                    </div>

                    <div
                        className="starRating_btn"
                        value={4}
                        onClick={(e) => {
                            // console.log(e.target.getAttribute('value'))
                            commentFilter(e);
                        }}
                    >
                        四顆星({fourstarComment.length})
                    </div>
                    <div
                        className="starRating_btn"
                        value={3}
                        onClick={(e) => {
                            // console.log(e.target.getAttribute('value'))
                            commentFilter(e);
                        }}
                    >
                        三顆星({threestarComment.length})
                    </div>
                    <div
                        className="starRating_btn"
                        value={2}
                        onClick={(e) => {
                            // console.log(e.target.getAttribute('value'))
                            commentFilter(e);
                        }}
                    >
                        二顆星({twostarComment.length})
                    </div>
                    <div
                        className="starRating_btn"
                        value={1}
                        onClick={(e) => {
                            // console.log(e.target.getAttribute('value'))
                            commentFilter(e);
                        }}
                    >
                        一顆星({onestarComment.length})
                    </div>
                </div>

                {/* --------------------------------------------------------- */}
                {/* --------------------------------------------------------- */}

                <div className="CommentCard_Area d-flex flex-wrap">
                    {commentToShow.map((v, i) => {
                        const createdAt = new Date(
                            v.created_at
                        ).toLocaleString();

                        // 將資料庫的rating字串抓出來，並轉換成數字
                        // 轉換完帶入套件的value中

                        const starnum = +v.rating;
                        const firstExample = {
                            size: 30,
                            value: `${starnum}`,
                            edit: false,
                            isHalf: true,
                        };

                        return (
                            <div className="col-sm-6 col-12" key={i}>
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
                                        {/* <ReactStars {...firstExample} /> */}
                                        {!isNaN(starnum) && (
                                            <ReactStars
                                                size={30}
                                                value={starnum}
                                                edit={false}
                                                isHalf
                                            />
                                        )}
                                        {/* <StarRating ratingStarArray={ratingStarArray} index={i} /> */}
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

                                        <div className="d-flex">
                                            <i className="fas fa-thumbs-up"></i>
                                            <div>{v.likes}</div>
                                        </div>
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

                {/* <div>
                    <Pages info={info} setInfo={setInfo} />
                </div> */}
            </div>
        </>
    );
};

export default Comment;
