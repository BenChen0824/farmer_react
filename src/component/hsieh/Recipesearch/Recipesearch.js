import React, { useEffect, useState } from 'react';
// import { RECIPE_GET_LIST } from './../../../config/recipe-ajax-path';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Recipesearch.css';
import './Leftsidemenu.css';
import Pagination from './Pagination';
import Popup from './Popup';
import axios from 'axios';

function Recipesearch() {
    const [ButtonPop, setButtonPop] = useState(false);

    const [inputText, setInputText] = useState('');

    const [data, setData] = useState({});
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    const [recipe, setRecipe] = useState([]);
    const [recipeDisplay, setRecipeDisplay] = useState([]);
    const [recipeDisplayAgain, setRecipeDisplayAgain] = useState([]);

    const navigate = useNavigate();

    async function getRecipe() {
        const r = await fetch('http://localhost:3600/recipe/recipe');
        const obj = await r.json();
        setRecipe(obj);
        setRecipeDisplay(obj);
        setRecipeDisplayAgain(obj);
    }

    useEffect(() => {
        getRecipe();
    }, []);
    // 獲取食譜資訊

    // useEffect(() => {
    //     axios.get('http://localhost:3600/recipe/recipe').then((res) => {
    //         console.log(456456,res.data);
    //     });
    // }, []);

    // function tocreate {
    //     return ( XXX === 正確 ? navigate('/recipe/createrecipe', { replace: true }); : alert('請先登入'));
    // }

    return (
        <>
            <div className="menuincreate">
                <Link to={`/recipe/createrecipe`}>
                    <button
                        className="leftsidebutton"
                        // onClick={tocreate}
                        // TODO：身分判別式
                    >
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link>
                <br />
                {/* <Link to={`/recipe/createrecipe`}>
                    <button className="leftsidebutton">
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link> */}
                {/* <br /> */}
                {/* <Link to={`/recipe/createrecipe`}>
                    <button className="leftsidebutton">
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link> */}
            </div>
            <div className="hsiehsearching">
                <div id="inputText">
                    <p className="subtitlewordinsearch">搜尋食譜</p>
                    <input
                        type="text"
                        value={inputText}
                        className="searchinput"
                        onChange={(e) => {
                            setInputText(e.target.value);
                        }}
                    />
                    <p className="subtitlewordinsearch">
                        熱門關鍵字：日式、炸蝦、雞腿
                    </p>
                    <button
                        type="button"
                        className="btn btn-dark"
                        style={{ margin: 5 }}
                        onClick={() => {
                            const data = recipeDisplayAgain.filter((v, i) => {
                                return v.recipes_name.includes(inputText);
                            });
                            setRecipeDisplay(data);
                        }}
                    >
                        搜尋
                    </button>

                    <button
                        type="button"
                        className="btn btn-dark"
                        style={{ margin: 5 }}
                        onClick={() => setButtonPop(true)}
                    >
                        進階搜尋
                    </button>
                    <Popup
                        className="popuptosearch"
                        trigger={ButtonPop}
                        setButtonPop={setButtonPop}
                    />
                </div>
            </div>

            <div>
                <p className="titlewordinsearch">
                    今日食譜推薦 ／ Recipes Recommend
                </p>
            </div>
            <div className="w-100 d-flex flex-wrap">
                <div className="recommendlistinsearch d-flex justify-content-center">
                    {/* <a href="./"> */}
                    <div className="recipephotoinsearch">
                        <img src="/images/dishimage.jpg" alt="" />
                    </div>
                    {/* </a> */}

                    <div className="recipeblockinsearch">
                        {/* <a href="./">> */}
                        <p>日式黃金炸蝦</p>
                        {/* </a> */}

                        <div className="iconmanagementinsearch">
                            <button className="buttoninsearch">
                                <img
                                    src="/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">10</p>
                            <button className="buttoninsearch">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">10</p>
                        </div>

                        <hr className="hrlineinsearch" />

                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">10 分鐘</p>
                        </div>
                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">約 100 大卡</p>
                        </div>
                    </div>
                </div>

                {/* 分隔線 */}

                <div className="recommendlistinsearch d-flex justify-content-center">
                    {/* <a href="./"> */}
                    <div className="recipephotoinsearch">
                        <img src="/images/dishimage.jpg" alt="" />
                    </div>
                    {/* </a> */}
                    <div className="recipeblockinsearch">
                        {/* <a href="./"> */}
                        <p>日式黃金炸蝦</p>
                        {/* </a> */}

                        <div className="iconmanagementinsearch">
                            <button className="buttoninsearch">
                                <img
                                    src="/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">20</p>
                            <button className="buttoninsearch">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">20</p>
                        </div>

                        <hr className="hrlineinsearch" />

                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">20 分鐘</p>
                        </div>
                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">約 200 大卡</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 分隔線 */}

            <div>
                <p className="titlewordinsearch">食譜列表 ／ Recipes List</p>
            </div>

            <div className="w-100 d-flex flex-wrap">
                {recipeDisplay.map((v, i) => {
                    return (
                        <div
                            className="recommendlistinsearch d-flex justify-content-center"
                            key={v.recipes_sid}
                        >
                            <div className="recipephotoinsearch">
                                <Link to={`/recipe/each/${v.recipes_sid}`}>
                                    <img
                                        src={`/dishimages/${v.recipes_img}`}
                                        alt=""
                                    />
                                </Link>
                            </div>

                            <div className="recipeblockinsearch">
                                <Link
                                    to={`/recipe/each/${v.recipes_sid}`}
                                    className="linkinrecipesearch"
                                >
                                    <p>{v.recipes_name}</p>
                                </Link>
                                <div className="iconmanagementinsearch">
                                    <button className="buttoninsearch">
                                        <img
                                            src="/images/heart.svg"
                                            alt=""
                                            className="iconinsearch"
                                        />
                                    </button>
                                    <p className="iconinsearchp">
                                        {v.recipes_collection}
                                    </p>
                                    <button className="buttoninsearch">
                                        <img
                                            src="/images/good.svg"
                                            alt=""
                                            className="iconinsearch"
                                        />
                                    </button>
                                    <p className="iconinsearchp">
                                        {v.recipes_like}
                                    </p>
                                </div>

                                <hr className="hrlineinsearch" />

                                <div className="iconmanagementinsearch">
                                    <img
                                        src="/images/clock.svg"
                                        alt=""
                                        className="iconinsearch"
                                    />
                                    <p className="iconinsearchp">
                                        約 {v.recipes_time_cost} 分鐘
                                    </p>
                                </div>
                                <div className="iconmanagementinsearch">
                                    <img
                                        src="/images/heat.svg"
                                        alt=""
                                        className="iconinsearch"
                                    />
                                    <p className="iconinsearchp">
                                        約 {v.recipes_calories} 大卡
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* 分隔線 */}
            </div>
            <div className="paginationinsearch">
                {/* {data && data.totalPages ? ( */}
                {/* <Pagination page={data.page} totalPages={data.totalPages} /> */}
                {/* ) : null} */}
            </div>
        </>
    );
}

export default Recipesearch;

// function Recommend1 () {
//   const today = new Date();
//   const tgm = today.getMilliseconds();
//   const dataquantity = 總資料數量?
//   const firstdish = Math.round(tgm % (dataquantity / 2))
// }
// Recommend1 ();

// function Recommend2 () {
//   const today = new Date();
//   const tgm = today.getMilliseconds();
//   const dataquantity = 總資料數量?
//   const seconddish = Math.round((tgm % (dataquantity / 2)) +(dataquantity / 2) +1)
// }
// Recommend2 ();

// const runClock = () => {
//   const now = new Date();
//   sec_hand.style.transform = `rotate(${now.getSeconds() * 6 + now.getMilliseconds() * 0.006}deg)`;

//   min_hand.style.transform = `rotate(${now.getMinutes() * 6 + now.getSeconds() * 0.1}deg)`;

//   hour_hand.style.transform = `rotate(${now.getHours() * 30 + now.getMinutes() * 0.5}deg)`;

//   setTimeout(runClock, 50);
// };
// runClock();

// https://github.com/mfee-react/react-bs5-router6

// https://github.com/mfee-react/react-bs5-router6/blob/main/src/pages/StudentSelfPagination.js

// https://ithelp.ithome.com.tw/articles/10187146
