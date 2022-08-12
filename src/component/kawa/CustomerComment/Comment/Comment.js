import React, { useEffect, useState } from 'react';
import './Comment.css';
import './CommentCard.css';
import Title from '../Title/index';
import axios from 'axios';
import { COMMENT_MAIN } from './../../../../config/ajax-path';
// import clsx from 'clsx';
import { fetchComment } from '../../../../api/comment';
import { useQuery } from '../../../../hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchC from '../SearchC/index';
import getCommentItem from '../api/getCommentItem';

const Comment = () => {
    // 從資料庫抓資料
    // 抓ajax-path這隻檔案的路由=>COMMENT_MAIN
    const [totalComment, setTotalComment] = useState([]);
    // 從抓出來的資料做篩選
    const [commentToShow, setCommentToShow] = useState([totalComment]);
    const [ratingStarArray, setratingStarArray] = useState([]);

    // const [searchComment, setSearchComment] = useState([]);
    // const [searchCommentAgain, setSearchCommentAgain] = useState([]);
    // const [inputText, setInputText] = useState('');

    const getData = () => {
        fetch(COMMENT_MAIN, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((obj) => {
                console.log(obj);
                setTotalComment(obj);
                // setSearchComment(obj);
                // setSearchCommentAgain(obj);
            });
    };

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
        // console.log('newtotalComment', newtotalComment);
        setCommentToShow(newtotalComment);
        console.log(getPicURL(e.target.getAttribute('value'))); //3.png
    };

    //抓圖片
    const getPicURL = (starRate) => {
        if (+starRate === 5) {
            return '/index_images/star5.png';
        } else if (+starRate === 4) {
            return '/index_images/star4.png';
        } else if (+starRate === 3) {
            return '/index_images/star3.png';
        } else if (+starRate === 2) {
            return '/index_images/star2.png';
        } else {
            return '/index_images/star1.png';
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

    // 按讚 預設是0
    // const [clickLikes, setClickLikes] = useState(clickLikes);
    // const clickLikes = totalComment.likes

    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------

    const navigate = useNavigate();
    const [data, setData] = useState({});
    const query = useQuery();
    const page = query['page'] || 1;
    const type = query['type'];
    const search = query['search'];

    const member_info = JSON.parse(localStorage.getItem('auth')) || {};
    const userId = member_info.customer_id;

    let orderBy = query['orderBy'] || 'sid'; // 這個我沒有
    let order = query['order'] || 'DESC'; //time 這邊要去node看，取同樣的名字 //DESC大到小 ，預設呈現

    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedOption, setSelectedOption] = useState(null);

    //這邊是取後端的東西，並且拿前端ㄉ東西給後端
    const getProduct = async (page, order, search) => {
        const data = await fetchComment(page, order, search);
        if (data && data.rows) {
            console.log(data);
            setData(data);
        }
    };

    useEffect(() => {
        getProduct(page, order, search);
    }, [page, order, search]);

    useEffect(() => {
        const { value: priceOrder } = selectedOption ?? {};
        let order;
        switch (priceOrder) {
            case '1': {
                order = 'ASC';
                break;
            }
            case '2': {
                order = 'DESC';
                break;
            }
            default: {
                break;
            }
        }

        // q是紀錄原本的網址的樣子(複製原本的資料)，再加新的(EX:篩選、搜尋)
        const q = {
            ...query,
            orderBy,
            order,
        };

        if (query.orderBy !== orderBy || query.order !== order) {
            // order = priceOrder === '1' ? 'ASC' : 'DESC'
            setSearchParams(q);
            // 這邊塞回去，url網址才會變更
        }
    }, [selectedOption]);

    // -------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------
    //SearchP_copy/index.js

    return (
        <>
            <div className="container">
                {/* ----------------- Title ----------------- */}
                <Title />
                {/* ----------------- 搜尋 ----------------- */}
                {/* <div className="CommentSearch_area d-flex justify-content-center m-5">
                    <input type="text" placeholder="TEST..." />
                    <button className="">搜尋</button>
                </div> */}

                <SearchC />
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
                        <select name="" id="">
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
                                            src={`./member_imgs/${v.profile_img}`}
                                            alt=""
                                        />
                                    </div>
                                    {/* ----------- */}
                                    <div>
                                        {/* <ReactStars {...firstExample} /> */}
                                        {/* {!isNaN(starnum) && (
                                            <ReactStars
                                                size={30}
                                                value={starnum}
                                                edit={false}
                                                isHalf
                                            />
                                        )} */}
                                        {/* <StarRating ratingStarArray={ratingStarArray} index={i} /> */}
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
                                        <hr />
                                        <p className="CommentProductItem">
                                            評論項目: {v.product_name}
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
                {/* <div>
                    <Pages info={info} setInfo={setInfo} />
                </div> */}
            </div>
        </>
    );
};

export default Comment;
