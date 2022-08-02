import React from 'react';
import { useState } from 'react';
import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Popup() {
    const [timecost, setTimecost] = useState('');
    const [calories, setCalories] = useState('');

    const [recipestype, setRecipestype] = useState('');
    const recipestypeOptions = [
        '台灣料理',
        '中華料理',
        '日式料理',
        '韓式料理',
        '南洋料理',
        '歐式料理',
        '美式料理',
        '其他',
    ];

    // select，料理難易度
    const [recipesdegree, setRecipesdegree] = useState('');
    const recipesdegreeOptions = [
        '新手輕鬆入門',
        '餐廳廚師料理',
        '米其林名廚作品',
    ];

    return (
        <>
            <h2 className="recipetitle">進階搜尋 ／ Search By Information</h2>
            <div>
                <section id="recipesname" className="form">
                    <input
                        type="text"
                        className="time"
                        value={timecost}
                        placeholder="請輸入時間"
                        onChange={(e) => {
                            setTimecost(e.target.value);
                        }}
                    />
                </section>

                {/* 分隔線 */}

                <section id="calories" className="form">
                    <input
                        type="text"
                        className="time"
                        value={calories}
                        placeholder="請輸入熱量"
                        onChange={(e) => {
                            setCalories(e.target.value);
                        }}
                    />
                </section>

                {/* 分隔線 */}

                <section id="select" className="form">
                    <select
                        className="time"
                        value={recipestype}
                        onChange={(e) => {
                            setRecipestype(e.target.value);
                        }}
                    >
                        <option value="">請選擇料理類型</option>
                        {recipestypeOptions.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                </section>

                {/* 分隔線 */}

                <section id="select" className="form">
                    <select
                        className="time"
                        value={recipesdegree}
                        onChange={(e) => {
                            setRecipesdegree(e.target.value);
                        }}
                    >
                        <option value="">請選擇料理難易度</option>
                        {recipesdegreeOptions.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                </section>
            </div>

            <div className="buttom">
                <button className="searchbuttom">搜尋</button>
            </div>

            <h2 className="center">食材搜尋 ／ Search By Ingredient</h2>
            <div className="ia">
                <button
                    type="button"
                    classc="btn btn-dark"
                    className="ingredient"
                >
                    <img
                        src="/images/vegetable.png"
                        style={{ height: 30, width: 30 }}
                        alt=""
                    />
                    蔬菜
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>

                <button
                    type="button"
                    classc="btn btn-dark"
                    className="ingredient"
                >
                    <img
                        src="/images/fruit.png"
                        style={{ height: 30, width: 30 }}
                        alt=""
                    />
                    水果
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>

                <button
                    type="button"
                    classc="btn btn-dark"
                    className="ingredient"
                >
                    <img
                        src="/images/seafood.png"
                        style={{ height: 30, width: 30 }}
                        alt=""
                    />
                    海鮮
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button
                    type="button"
                    classc="btn btn-dark"
                    className="ingredient"
                >
                    <img
                        src="/images/meat.png"
                        style={{ height: 30, width: 30 }}
                        alt=""
                    />
                    肉類
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button
                    type="button"
                    classc="btn btn-dark"
                    className="ingredient"
                >
                    <img
                        src="/images/egg.png"
                        style={{ height: 30, width: 30 }}
                        alt=""
                    />
                    蛋
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button
                    type="button"
                    classc="btn btn-dark"
                    className="ingredient"
                >
                    <img
                        src="/images/cereals.png"
                        style={{ height: 30, width: 30 }}
                        alt=""
                    />
                    穀物
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </>
    );
}

export default Popup;
