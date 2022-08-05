import React, { useEffect, useState } from 'react';
import { RECIPE_GET_LIST } from './../../../config/recipe-ajax-path';
import { Link, useLocation } from 'react-router-dom';
import './Recipesearch.css';
import Pagination from './Pagination';

function Recipesearch() {
    const [inputText, setInputText] = useState('');

    const [data, setData] = useState({});
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    const getPageData = async (event, gotoPage) => {
        if (event) {
            event.preventDefault();
        }
        console.log({ gotoPage });

        const r = await fetch(`${RECIPE_GET_LIST}?page=${gotoPage}`);
        const obj = await r.json();
        console.log(obj);
        setData(obj);
    };

    useEffect(() => {
        getPageData(null, +usp.get('page') || 1);
    }, [location]);

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
                            <div className="iconinsearchp">
                                <p>10</p>
                            </div>
                            <button className="buttoninsearch">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <div className="iconinsearchp">
                                <p>10</p>
                            </div>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">10</p>
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
                            <p className="iconinsearchp">20</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="/images/heat.svg"
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
                {data && data.totalPages ? (
                    <Pagination page={data.page} totalPages={data.totalPages} />
                ) : null}

                {console.log({ data })}
                {data && data.rows
                    ? data.rows.map((row) => (
                          <div className="recommendlist">
                              {/* <a href="./"> */}
                              <div className="recipephoto">
                                  <img src="/images/dishimage.jpg" alt="" />
                              </div>
                              {/* </a> */}
                              <div className="recipeblock">
                                  {/* <a href="./"> */}
                                  <p>{row.recipes_name}</p>
                                  {/* </a> */}
                                  <div className="iconmanagement">
                                      <button className="buttoninsearch">
                                          <img
                                              src="/images/heart.svg"
                                              alt=""
                                              className="iconinsearch"
                                          />
                                      </button>
                                      <p className="iconinsearchp">
                                          {row.recipes_collection}
                                      </p>
                                      <button className="buttoninsearch">
                                          <img
                                              src="/images/good.svg"
                                              alt=""
                                              className="iconinsearch"
                                          />
                                      </button>
                                      <p className="iconinsearchp">
                                          {row.recipes_like}
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
                                          {row.recipes_time_cost}
                                      </p>
                                  </div>
                                  <div className="iconmanagement">
                                      <img
                                          src="/images/heat.svg"
                                          alt=""
                                          className="iconinsearch"
                                      />
                                      <p className="iconinsearchp">
                                          {row.recipes_calories}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}

                <div className="recommendlist">
                    {/* <a href="./"> */}
                    <div className="recipephoto">
                        <img src="/images/dishimage.jpg" alt="" />
                    </div>
                    {/* <a /> */}
                    <div className="recipeblock">
                        {/* <a href="./"> */}
                        <p>日式黃金炸蝦</p>
                        {/* <a /> */}
                        <div className="iconmanagement">
                            <button className="buttoninsearch">
                                <img
                                    src="/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">30</p>
                            <button className="buttoninsearch">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">30</p>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">30</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">30</p>
                        </div>
                    </div>
                </div>

                {/* 分隔線 */}

                <div className="recommendlist">
                    {/* <a href="./"> */}
                    <div className="recipephoto">
                        <img src="/images/dishimage.jpg" alt="" />
                    </div>
                    {/* <a /> */}
                    <div className="recipeblock">
                        {/* <a href="./"> */}
                        <p>日式黃金炸蝦</p>
                        {/* <a /> */}
                        <div className="iconmanagement">
                            <button className="buttoninsearch">
                                <img
                                    src="/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">40</p>
                            <button className="buttoninsearch">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">40</p>
                        </div>

                        <hr className="hrline" />

                        <div className="iconmanagement">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">40</p>
                        </div>
                        <div className="iconmanagement">
                            <img
                                src="/images/heat.svg"
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
