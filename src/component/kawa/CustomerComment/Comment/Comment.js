import React, { useRef, useEffect, useState } from 'react';
import './Comment.css';
import './CommentCard.css';
import Title from '../Title/index';
// import axios from 'axios';//
import {
    COMMENT_MAIN,
    COMMENT_SEARCHNAME,
    COMMENT_CHECKLIKE,
    COMMENT_ALLLIKE,
} from './../../../../config/ajax-path';
// import clsx from 'clsx';
import { fetchComment } from '../../../../api/comment';
import { useQuery } from '../../../../hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';

// import SearchC from '../SearchC/index';
// import getCommentItem from '../api/getCommentItem';

const Comment = () => {
    // 從資料庫抓資料
    // 抓ajax-path這隻檔案的路由=>COMMENT_MAIN
    const [totalComment, setTotalComment] = useState([]);
    // 從抓出來的資料做篩選
    const [commentToShow, setCommentToShow] = useState([totalComment]);
    const [ratingStarArray, setratingStarArray] = useState([]);
    const [count, setCount] = useState(0);
    const member_info_id = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')).customer_id
        : 500000000;

    const getData = () => {
        fetch(COMMENT_MAIN, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((obj) => {
                // console.log(obj);
                setTotalComment(obj);
            });
    };

    const changeRow = () => {
        const newArray = [...commentToShow];
        newArray.reverse();
        // console.log(commentToShow);
        // console.log(newArray);
        setCommentToShow(newArray);
    };
    const getData1 = () => {
        fetch(COMMENT_MAIN, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((obj) => {
                // console.log(obj);
                // setTotalComment(obj);
                setCommentToShow(obj);
            });
    };

    const likeChange = (sid) => {
        const packageToSend = {
            customer_id: member_info_id,
            comment_sid: sid,
        };
        fetch(COMMENT_CHECKLIKE, {
            method: 'POST',
            body: JSON.stringify(packageToSend),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((r) => r.json())
            .then((obj) => {
                setCount(count + 1);
                console.log(obj);
                // setTotalComment(obj);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setCommentToShow(totalComment);
    }, []);

    useEffect(() => {
        getData1();
    }, [count]);

    useEffect(() => {
        const newratingStarArray = totalComment.map((v) => {
            return v.rating;
        });
        setratingStarArray(newratingStarArray);
    }, [totalComment]);

    // 1~5星的筆數
    const commentFilter = (e) => {
        const newtotalComment = totalComment.filter((v) => {
            return +v.rating === +e.target.getAttribute('value');
            // data-value
        });
        // console.log('newtotalComment', newtotalComment);
        setCommentToShow(newtotalComment);
        console.log(getPicURL(e.target.getAttribute('value'))); //3.png
    };

    //抓圖片
    const getPicURL = (starRate) => {
        if (+starRate === 5) {
            return '/images/index_images/star5.png';
        } else if (+starRate === 4) {
            return '/images/index_images/star4.png';
        } else if (+starRate === 3) {
            return '/images/index_images/star3.png';
        } else if (+starRate === 2) {
            return '/images/index_images/star2.png';
        } else {
            return '/images/index_images/star1.png';
        }
    };
    // console.log(getPicURL(5));

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

    //按讚
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    // ---------------------------------------------------------------
    const inputRef = useRef();
    // const dispatch = useDispatch();
    const query = useQuery();
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState();
    const search = query['search'];

    const handleChange = (e) => {
        const value = e.target.value;
        // console.log(value);
        setValue(value);
    };

    const handleRootClicked = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const clickSearchFunction = (name) => {
        const readyToSend = { product_name: name };
        fetch(COMMENT_SEARCHNAME, {
            method: 'POST',
            body: JSON.stringify(readyToSend),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((r) => r.json())
            .then((obj) => {
                setCommentToShow(obj);
                console.log(obj);
            });
    };

    const handleIconClicked = (e) => {
        // e.stopPropagation();
        console.log('click on icon');

        const q = {
            ...query,
            page: 1,
            search: value,
        };
        // clickSearchFunction();
        setSearchParams(q);
        // api/Comment.js會幫我處理搜尋or篩選出來的東西，
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const q = {
                ...query,
                page: 1,
                search: value,
            };

            setSearchParams(q);
            // dispatch(clearHashTag());
        }
    };
    useEffect(() => {
        if (search) {
            setValue(search);
            // 渲染的地方 ↑ useeffect
            // 有搜尋的話就渲染
        }
    }, [search]);

    return (
        <>
            <div className="container">
                {/* ----------------- Title ----------------- */}
                <Title className="Comment_Title" />
                {/* ----------------- 搜尋 ----------------- */}
                <div
                    className="CommentSearch_area d-flex justify-content-center m-5"
                    onClick={handleRootClicked}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="水蜜桃 鮭魚 和牛..."
                        value={value}
                        // ↑要補上的
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className=""
                        onClick={(e) => {
                            handleIconClicked();
                            clickSearchFunction(value);
                        }}
                    >
                        搜尋
                    </button>
                </div>

                {/* --------------- 熱門關鍵字 ---------------*/}
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
                        <select
                            name=""
                            id=""
                            onChange={() => {
                                changeRow();
                            }}
                        >
                            <option value="1">由新到舊</option>
                            <option value="2">由舊到新</option>
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
                            getPicURL(e.target.getAttribute('value'));
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

                <div className="CommentCard_Area d-flex flex-wrap">
                    {commentToShow.map((v, i) => {
                        const createdAt = new Date(
                            v.created_at
                        ).toLocaleString();

                        return (
                            <div
                                className="CommentCard_section col-sm-6 col-12"
                                key={i}
                            >
                                <div className="CommentProductItem">
                                    {v.product_name}
                                </div>

                                <div className="CommentCard d-flex">
                                    {/* ----------- */}
                                    <div className="CommentCard_imgwrap col-3">
                                        <img
                                            src={`./images/member_images/${v.profile_img}`}
                                            alt=""
                                        />
                                    </div>
                                    {/* ----------- */}
                                    <div className="col-9">
                                        <img
                                            src={getPicURL(+v.rating)}
                                            // getPicURL(e.target.getAttribute('value'))

                                            style={{ width: '100px' }}
                                            alt=""
                                        />
                                        <div className="d-flex">
                                            <p className="CommentCardAccount pe-3">
                                                {v.account}
                                            </p>
                                            <p className="CommentCardTime">
                                                {createdAt}
                                            </p>
                                        </div>

                                        <p className="CommentContext">
                                            {v.comment}
                                        </p>

                                        <div className="likes_area d-flex mt-3">
                                            <i
                                                className="likes_icons fas fa-thumbs-up"
                                                onClick={() => {
                                                    likeChange(v.comment_sid);
                                                    handleClick();
                                                }}
                                            ></i>
                                            <div className="likes_number">
                                                {v.likes}
                                            </div>
                                        </div>
                                        {/* <span className="likes-counter">{`Like | ${v.likes}`}</span> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <div>
                    <Pages info={info} setInfo={setInfo} />
                </div> */}
            </div>
        </>
    );
};

export default Comment;
