import React, { useEffect, useState } from 'react';
import { RECIPE_GET_LIST } from './../../../config/recipe-ajax-path';
import { Link, useLocation } from 'react-router-dom';
import './Recipesearch.css';
import Pagination from './Pagination';
import axios from 'axios';

function Recipesearch() {
    const [inputText, setInputText] = useState('');

    const [data, setData] = useState({});
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    // const getPageData = async (event, gotoPage) => {
    //     if (event) {
    //         event.preventDefault();
    //     }
    //     console.log({ gotoPage });

    //     const r = await fetch(`${RECIPE_GET_LIST}?page=${gotoPage}`);
    //     const obj = await r.json();
    //     console.log(obj);
    //     setData(obj);
    // };

    // useEffect(() => {
    //     getPageData(null, +usp.get('page') || 1);
    // }, [location]);

    const [recipe, setRecipe] = useState([]);
    const [recipeDisplay, setRecipeDisplay] = useState([]);

    async function getRecipe() {
        const r = await fetch('http://localhost:3600/recipe/recipe');
        const obj = await r.json();
        setRecipe(obj);
        setRecipeDisplay(obj);
    }

    useEffect(() => {
        getRecipe();
    }, []);

    // useEffect(() => {
    //     axios.get('http://localhost:3600/recipe/recipe').then((res) => {
    //         console.log(456456,res.data);
    //     });
    // }, []);

    return (
        <>
            <div className="searching">
                <div id="inputText">
                    <p className="subtitleword">搜尋食譜</p>
                    <input
                        type="text"
                        value={inputText}
                        className="searchinput"
                        onChange={(e) => {
                            setInputText(e.target.value);
                        }}
                    />
                    <p className="subtitleword">熱門關鍵字：日式、炸蝦、雞腿</p>
                    <a href="/recipe/popup">
                        <div></div>
                        <button
                            type="button"
                            class="btn btn-dark"
                            style={{ margin: 5 }}
                        >
                            進階搜尋
                        </button>
                    </a>
                    <button
                        type="button"
                        class="btn btn-dark"
                        style={{ margin: 5 }}
                    >
                        搜尋
                    </button>
                </div>
            </div>

            <div>
                <p className="titleword">今日食譜推薦 ／ Recipes Recommend</p>
            </div>
            <div className="recommend">
                <div className="recommendlist">
                    {/* <a href="./"> */}
                    <div className="recipephoto">
                        <img src="/images/dishimage.jpg" alt="" />
                    </div>
                    {/* </a> */}

                    <div className="recipeblock">
                        {/* <a href="./">> */}
                        <p>日式黃金炸蝦</p>
                        {/* </a> */}

                        <div className="iconmanagement">
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

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">10 分鐘</p>
                        </div>
                        <div className="iconmanagement">
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

                <div className="recommendlist">
                    {/* <a href="./"> */}
                    <div className="recipephoto">
                        <img src="/images/dishimage.jpg" alt="" />
                    </div>
                    {/* </a> */}
                    <div className="recipeblock">
                        {/* <a href="./"> */}
                        <p>日式黃金炸蝦</p>
                        {/* </a> */}

                        <div className="iconmanagement">
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

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">20 分鐘</p>
                        </div>
                        <div className="iconmanagement">
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
                <p className="titleword">食譜列表 ／ Recipes List</p>
            </div>

            {/* <div className="recommend "> */}
            <div className="w-100 d-flex justify-content-center flex-wrap">
                {recipeDisplay.map((v, i) => {
                    return (
                        <div
                            className="recommendlist d-flex justify-content-center col-6"
                            key={v.recipes_sid}
                        >
                            {/* <a href="./"> */}
                            <div className="recipephoto">
                                <Link to={`/recipe/each/${v.recipes_sid}`}>
                                    <img
                                        src={`/dishimages/${v.recipes_img}`}
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* <a /> */}
                            <div className="recipeblock">
                                {/* <a href="./"> */}
                                <p>{v.recipes_name}</p>
                                {/* <a /> */}
                                <div className="iconmanagement">
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

                                <hr className="hrline" />

                                <div className="iconmanagement">
                                    <img
                                        src="/images/clock.svg"
                                        alt=""
                                        className="iconinsearch"
                                    />
                                    <p className="iconinsearchp">
                                        {v.recipes_time_cost} 分鐘
                                    </p>
                                </div>
                                <div className="iconmanagement">
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
            <div className="pa">
                <Pagination />
            </div>
        </>
    );
}

export default Recipesearch;

/* {data && data.rows
            ? data.rows.map((row) => (
                <tr key={'mm' + row.sid}>
                <th scope="row">{row.sid}</th>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.mobile}</td>
                </tr>
            ))
            : null} */

// const runClock = () => {
//   const now = new Date();
//   sec_hand.style.transform = `rotate(${now.getSeconds() * 6 + now.getMilliseconds() * 0.006}deg)`;

//   min_hand.style.transform = `rotate(${now.getMinutes() * 6 + now.getSeconds() * 0.1}deg)`;

//   hour_hand.style.transform = `rotate(${now.getHours() * 30 + now.getMinutes() * 0.5}deg)`;

//   setTimeout(runClock, 50);
// };
// runClock();

// style={{ height: 40, width: 40 }}
