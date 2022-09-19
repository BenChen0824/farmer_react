import React, { useEffect, useState } from 'react';
import Title from './../../lil/Title/index';
import { Link, useLocation } from 'react-router-dom';
import './Recipesearch.css';

function Recipesrecommend() {
    // const [isShow, setIsShow] = useState(true);

    return (
        <>
            <div>
                <p className="titlewordinsearch">
                    <Title zh={'今日推薦食譜'} eg={'Recipes Recommend'} />
                </p>
            </div>
            <div className="recipeinfoinsearch">
                <div className="recommendlistinsearch">
                    <div className="recipephotoinsearch">
                        <Link to={`/recipe/each/18`}>
                            <img
                                src="/images/dishimages/b0fd632a003a439d13eef6fef4027a0a.jpg"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="recipeblockinsearch">
                        <Link
                            to={`/recipe/each/18`}
                            className="linkinrecipesearch"
                        >
                            <p>紙包檸檬鮭魚菲力</p>
                        </Link>

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
                            <p className="iconinsearchp">14</p>
                        </div>

                        <hr className="hrlineinsearch" />

                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">約 20 分鐘</p>
                        </div>
                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">約 600 大卡</p>
                        </div>
                    </div>
                </div>

                {/* 分隔線 */}

                <div className="recommendlistinsearch">
                    <div className="recipephotoinsearch">
                        <Link to={`/recipe/each/17`}>
                            <img
                                src="/images/dishimages/b161f75f968c10be8f35001b502d14c0.jpg"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="recipeblockinsearch">
                        <Link
                            to={`/recipe/each/17`}
                            className="linkinrecipesearch"
                        >
                            <p>煎蛋湯</p>
                        </Link>

                        <div className="iconmanagementinsearch">
                            <button className="buttoninsearch">
                                <img
                                    src="/images/heart.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">22</p>
                            <button className="buttoninsearch">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconinsearch"
                                />
                            </button>
                            <p className="iconinsearchp">11</p>
                        </div>

                        <hr className="hrlineinsearch" />

                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/clock.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">約 10 分鐘</p>
                        </div>
                        <div className="iconmanagementinsearch">
                            <img
                                src="/images/heat.svg"
                                alt=""
                                className="iconinsearch"
                            />
                            <p className="iconinsearchp">約 500 大卡</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recipesrecommend;
