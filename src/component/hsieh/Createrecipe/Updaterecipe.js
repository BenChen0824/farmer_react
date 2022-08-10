import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Createrecipe.css';
import axios from 'axios';

function Updaterecipe() {
    const [updaterecipe, setUpdaterecipe] = useState({
        recipes_sid: '',
        recipes_name: '',
        recipes_time_cost: '',
        recipes_portion: '',
        recipes_calories: '',
        recipes_type: '',
        recipes_cooking_degree: '',
        recipes_ingredient: '',
        recipes_cooking_method: '',
        recipes_description: '',
        recipes_img: '',
        cooking_create_member_Id: '',
        recipes_collection: '',
        recipes_like: '',
        created_at: '',
    });

    async function updateeachrecipe(recipes_sid) {
        const r = await fetch(
            `http://localhost:3600/recipe/each/${recipes_sid}`
        );
        const obj = await r.json();
        setUpdaterecipe(obj);
        console.log(updaterecipe);
    }

    const params = useParams();
    useEffect(() => {
        updateeachrecipe(params.recipes_sid);
        window.scrollTo({ top: 0, behavior: 'instant' }); // 調整往下滑
    }, [params.recipes_sid]);

    // 更改食譜名稱
    const [updateRecipesname, setUpdateRecipesname] = useState('');

    // 料理簡介
    const [updateDescription, setUpdateDescription] = useState('');

    // 烹調時間
    // const [updateTimecost, setUpdateTimecost] = useState('');
    const [timecost, setTimecost] = useState('');

    // 料理熱量
    const [calories, setCalories] = useState('');

    // 料理份量
    const [portion, setPortion] = useState('');
    const portionOptions = ['1', '2', '3', '4', '5'];

    // select，料理類型
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

    // 料理食材
    const [ingredient, setIngredient] = useState('');

    // 食材分量
    const [unit, setUnit] = useState('');

    // 料理步驟
    const [step, setStep] = useState('');

    return (
        <>
            <h2 className="createrecipetitle">修改食譜 ／ Update Recipes</h2>
            <hr className="hrincreaterecipe" />
            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">食譜名稱</label>
                <section id="updaterecipe">
                    <input
                        type="text"
                        className="dataform1increate"
                        value={updaterecipe.recipes_name}
                        placeholder="請輸入食譜名稱"
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    />
                </section>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理簡介 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">料理簡介</label>
                <div>
                    <section id="updateDupdaterecipeescription">
                        <textarea
                            className="dataform1increate"
                            value={updaterecipe.recipes_description}
                            cols="30"
                            rows="5"
                            onChange={(e) => {
                                setUpdaterecipe(e.target.value);
                            }}
                        />
                    </section>
                    <label className="dataform1increate">
                        {/* 剩餘 {100 - updaterecipe.recipes_description.length} 字 */}
                    </label>
                </div>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理花費時間 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">花費時間</label>
                <label className="breakpointtitle1">約</label>
                <section id="updaterecipe">
                    <input
                        className="dataform2increate"
                        type="text"
                        value={updaterecipe.recipes_time_cost}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    />
                </section>
                <label className="breakpointtitle2">分鐘</label>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理熱量 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">料理熱量</label>
                <label className="breakpointtitle1">約</label>
                <section id="updaterecipe">
                    <input
                        className="dataform2increate"
                        type="text"
                        value={updaterecipe.recipes_calories}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    />
                </section>
                <label className="breakpointtitle2">大卡</label>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理份量 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">料理份量</label>
                <label className="breakpointtitle1">約</label>
                <section id="updaterecipe">
                    <select
                        className="dataform2increate"
                        value={updaterecipe.recipes_portion}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    >
                        <option value="">請選擇</option>
                        {portionOptions.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                </section>
                <label className="breakpointtitle2">人份</label>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理類型 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">料理類型</label>
                <section id="updaterecipe">
                    <select
                        className="dataform1increate"
                        value={updaterecipe.recipes_type}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    >
                        <option value="">請選擇</option>
                        {recipestypeOptions.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                </section>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理難易 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">料理難易</label>
                <section id="updaterecipe">
                    <select
                        className="dataform1increate"
                        value={updaterecipe.recipes_cooking_degree}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    >
                        <option value="">請選擇</option>
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

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下食材 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">使用食材</label>
            </div>

            <div className="eachdataincreaterecipe">
                <div>
                    <div className="ingredientandstep">
                        <section id="updaterecipe">
                            <input
                                type="text"
                                className="ingredientuse"
                                value={updaterecipe.recipes_ingredient}
                                placeholder="請輸入食材"
                                onChange={(e) => {
                                    setUpdaterecipe(e.target.value);
                                }}
                            />
                        </section>

                        <button className="buttonincreate">
                            <img
                                src="/images/trashcan.svg"
                                alt=""
                                className="iconincreate"
                            />
                        </button>
                    </div>

                    {/* 分隔線 */}

                    <div className="ingredientandstep">
                        <section id="updaterecipe">
                            <input
                                type="text"
                                className="ingredientuse"
                                value={updaterecipe.recipes_ingredient}
                                placeholder="請輸入食材"
                                onChange={(e) => {
                                    setUpdaterecipe(e.target.value);
                                }}
                            />
                        </section>

                        <button className="buttonincreate">
                            <img
                                src="/images/trashcan.svg"
                                alt=""
                                className="iconincreate"
                            />
                        </button>
                    </div>

                    {/* 分隔線 */}

                    <div className="ingredientandstep">
                        <section id="updaterecipe">
                            <input
                                type="text"
                                className="ingredientuse"
                                value={updaterecipe.recipes_ingredient}
                                placeholder="請輸入食材"
                                onChange={(e) => {
                                    setUpdaterecipe(e.target.value);
                                }}
                            />
                        </section>

                        <button className="buttonincreate">
                            <img
                                src="/images/trashcan.svg"
                                alt=""
                                className="iconincreate"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下料理步驟 */}

            <div className="eachdataincreaterecipe">
                <label className="datanameincreaterecipe">料理步驟</label>
            </div>

            <div className="eachdataincreaterecipe">
                <div>
                    <div className="ingredientandstep">
                        <div className="redballincreate">1</div>
                        <section id="updaterecipe">
                            <textarea
                                className="dataform1increate"
                                value={updaterecipe.recipes_cooking_method}
                                placeholder="步驟1"
                                onChange={(e) => {
                                    setUpdaterecipe(e.target.value);
                                }}
                            />
                        </section>
                    </div>

                    {/* 分隔線 */}

                    <div className="ingredientandstep">
                        <div className="redballincreate">2</div>
                        <section id="updaterecipe">
                            <textarea
                                className="dataform1increate"
                                value={updaterecipe.recipes_cooking_method}
                                placeholder="步驟2"
                                onChange={(e) => {
                                    setUpdaterecipe(e.target.value);
                                }}
                            />
                        </section>

                        <button className="buttonincreate">
                            <img
                                src="/images/move.svg"
                                alt=""
                                className="iconincreate"
                            />
                        </button>
                    </div>

                    {/* 分隔線 */}

                    <div className="ingredientandstep">
                        <div className="redballincreate">3</div>
                        <section id="updaterecipe">
                            <textarea
                                className="dataform1increate"
                                value={updaterecipe.recipes_cooking_method}
                                placeholder="步驟3"
                                onChange={(e) => {
                                    setUpdaterecipe(e.target.value);
                                }}
                            />
                        </section>
                    </div>
                </div>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下照片 */}

            <div className="photoareaincreate">
                <button className="buttonincreate">
                    <img
                        src="/images/camera.svg"
                        alt=""
                        className="iconincreate"
                    />
                </button>

                <div className="photouploadincreate">
                    <form style={{ display: 'none' }}>
                        <input
                            id="inputData"
                            name="file"
                            type="file"
                            accept="image/*"
                        />
                    </form>
                    <img
                        className="shoephotoincreate"
                        src={`/dishimages/${updaterecipe.recipes_img}`}
                        alt=""
                    />
                </div>
            </div>
            <div className="buttonintextalign">
                <label>請選擇照片</label>
            </div>

            <hr className="hrincreaterecipe" />
            {/* 分隔線，以下完成按鈕 */}

            <div className="buttonintextalign">
                <button className="finishincreate">
                    修改食譜
                    <img
                        src="/images/pen.svg"
                        alt=""
                        className="crudincreate"
                    />
                </button>
            </div>
        </>
    );
}

// onClick={()}

export default Updaterecipe;
