import { useState } from 'react';
import React from 'react';
import './Recipesearch.css';
import dish from './../pic/image/1.dishimage.jpg';
import Pagination from './Pagination';

function Recipesearch() {
    const [inputText, setInputText] = useState('');

    return (
        <>
            <div className="searching">
                <div id="inputText">
                    <p className="subtitleword">食譜名稱</p>
                    <input
                        type="text"
                        value={inputText}
                        className="searchinput"
                        onChange={(e) => {
                            setInputText(e.target.value);
                        }}
                    />
                    <p className="subtitleword">熱門關鍵字：日式、炸蝦、雞腿</p>
                    <button
                        type="button"
                        class="btn btn-dark"
                        style={{ margin: 5 }}
                    >
                        進階搜尋
                    </button>
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
                    <div className="recipephoto">
                        <img src={dish} alt="" />
                    </div>
                    <div className="recipeblock">
                        <p>日式黃金炸蝦</p>
                        <div className="iconmanagement">
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">10</p>
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">10</p>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">10</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">10</p>
                        </div>
                    </div>
                </div>

                {/* 分隔線 */}

                <div className="recommendlist">
                    <div className="recipephoto">
                        <img src={dish} alt="" />
                    </div>
                    <div className="recipeblock">
                        <p>日式黃金炸蝦</p>
                        <div className="iconmanagement">
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">20</p>
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">20</p>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">20</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/heart.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">20</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 分隔線 */}

            <div>
                <p className="titleword">食譜列表 ／ Recipes List</p>
            </div>
            <div className="recommend">
                <div className="recommendlist">
                    <div className="recipephoto">
                        <img src={dish} alt="" />
                    </div>
                    <div className="recipeblock">
                        <p>日式黃金炸蝦</p>
                        <div className="iconmanagement">
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">30</p>
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">30</p>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">30</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">30</p>
                        </div>
                    </div>
                </div>

                {/* 分隔線 */}

                <div className="recommendlist">
                    <div className="recipephoto">
                        <img src={dish} alt="" />
                    </div>
                    <div className="recipeblock">
                        <p>日式黃金炸蝦</p>
                        <div className="iconmanagement">
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">40</p>
                            <button className="buttoninsearch">
                                <img
                                    src="http://localhost:3000/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">40</p>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">40</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="http://localhost:3000/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">40</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pa">
                <Pagination />
            </div>
        </>
    );
}

export default Recipesearch;

// {data && data.rows
//   ? data.rows.map((row) => (
//       <tr key={'mm' + row.sid}>
//         <th scope="row">{row.sid}</th>
//         <td>{row.name}</td>
//         <td>{row.email}</td>
//         <td>{row.mobile}</td>
//       </tr>
//     ))
//   : null}

// const runClock = () => {
//   const now = new Date();
//   sec_hand.style.transform = `rotate(${now.getSeconds() * 6 + now.getMilliseconds() * 0.006}deg)`;

//   min_hand.style.transform = `rotate(${now.getMinutes() * 6 + now.getSeconds() * 0.1}deg)`;

//   hour_hand.style.transform = `rotate(${now.getHours() * 30 + now.getMinutes() * 0.5}deg)`;

//   setTimeout(runClock, 50);
// };
// runClock();

// style={{ height: 40, width: 40 }}
