import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Createrecipe.css';

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
    // const [updateTimecost, setUpdateTimecost] = useState('');
    const [calories, setCalories] = useState('');

    // 料理份量
    // const [updatePortion, setUpdatePortion] = useState('');
    // const updatePortionOptions = ['1人分', '2人分', '3人分', '4人分', '5人分以上'];
    const [portion, setPortion] = useState('');
    const portionOptions = ['1', '2', '3', '4', '5'];

    // select，料理類型
    //const [updateRecipestype, setUpdateRecipestype] = useState('');
    //const UpdateRecipestypeOptions = [
    //     '台灣料理',
    //     '中華料理',
    //     '日式料理',
    //     '韓式料理',
    //     '南洋料理',
    //     '歐式料理',
    //     '美式料理',
    //     '其他',
    // ];
    const [recipestype, setRecipestype] = useState('');
    const recipestypeOptions = [
        '台灣料理',
        '中華料理',
        '日式料理',
        '韓式料理',
        '南洋料理',
        '歐式料理',
        '西式料理',
        '其他',
    ];

    // select，料理難易度
    // const [updateRecipesdegree, setUpdateRecipesdegree] = useState('');
    // const updateRecipesdegreeOptions = [
    //     '新手輕鬆入門',
    //     '餐廳廚師料理',
    //     '米其林名廚作品',
    // ];
    const [recipesdegree, setRecipesdegree] = useState('');
    const recipesdegreeOptions = [
        '新手輕鬆入門',
        '餐廳廚師料理',
        '米其林名廚作品',
    ];

    // 料理食材
    // const [updateIngredient, updateSetIngredient] = useState('');
    const [ingredient, setIngredient] = useState('');
    // 食材分量
    // const [updateUnit, updateSetUnit] = useState('');
    const [unit, setUnit] = useState('');

    // 料理步驟
    // const [updateStep, setUpdateStep]
    const [step, setStep] = useState('');

    return (
        <>
            <h2 className="creatrecipe">修改食譜 ／ Update Recipes</h2>
            <hr className="hr" />
            <div className="eachdata">
                <label className="dataname">食譜名稱</label>
                <section id="updaterecipe">
                    <input
                        type="text"
                        className="dataform1"
                        value={updaterecipe.recipes_name}
                        placeholder="請輸入食譜名稱"
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    />
                </section>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下料理簡介 */}

            <div className="eachdata">
                <label className="dataname">料理簡介</label>
                <div>
                    <section id="updateDupdaterecipeescription">
                        <textarea
                            className="dataform1"
                            value={updaterecipe.recipes_description}
                            cols="30"
                            rows="5"
                            onChange={(e) => {
                                setUpdaterecipe(e.target.value);
                            }}
                        />
                    </section>
                    <label className="dataform1">
                        {/* 剩餘 {100 - updaterecipe.recipes_description.length} 字 */}
                    </label>
                </div>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下料理花費時間 */}

            <div className="eachdata">
                <label className="dataname">花費時間</label>
                <label className="breakpointtitle1">約</label>
                <section id="updaterecipe">
                    <input
                        className="dataform2"
                        type="text"
                        value={updaterecipe.recipes_time_cost}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    />
                </section>
                <label className="breakpointtitle2">分鐘</label>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下料理熱量 */}

            <div className="eachdata">
                <label className="dataname">料理熱量</label>
                <label className="breakpointtitle1">約</label>
                <section id="updaterecipe">
                    <input
                        className="dataform2"
                        type="text"
                        value={updaterecipe.recipes_calories}
                        onChange={(e) => {
                            setUpdaterecipe(e.target.value);
                        }}
                    />
                </section>
                <label className="breakpointtitle2">大卡</label>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下料理份量 */}

            <div className="eachdata">
                <label className="dataname">料理份量</label>
                <label className="breakpointtitle1">約</label>
                <section id="updaterecipe">
                    <select
                        className="dataform2"
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

            <hr className="hr" />
            {/* 分隔線，以下料理類型 */}

            <div className="eachdata">
                <label className="dataname">料理類型</label>
                <section id="updaterecipe">
                    <select
                        className="dataform1"
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

            <hr className="hr" />
            {/* 分隔線，以下料理難易 */}

            <div className="eachdata">
                <label className="dataname">料理難易</label>
                <section id="updaterecipe">
                    <select
                        className="dataform1"
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

            <hr className="hr" />
            {/* 分隔線，以下食材 */}

            <div className="eachdata">
                <label className="dataname">使用食材</label>
            </div>

            <div className="eachdata">
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

                        <section id="updaterecipe">
                            <input
                                type="text"
                                className="portionuse"
                                value={updaterecipe.recipes_ingredient}
                                placeholder="請輸入份量"
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

                        <section id="updaterecipe">
                            <input
                                type="text"
                                className="portionuse"
                                value={updaterecipe.recipes_ingredient}
                                placeholder="請輸入份量"
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

                        <section id="updaterecipe">
                            <input
                                type="text"
                                className="portionuse"
                                value={updaterecipe.recipes_ingredient}
                                placeholder="請輸入份量"
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

            <div className="additemarea">
                <button className="buttonincreateplus">
                    <img
                        src="/images/plus.svg"
                        alt=""
                        className="iconincreateplus"
                    />
                </button>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下料理步驟 */}

            <div className="eachdata">
                <label className="dataname">料理步驟</label>
            </div>

            <div className="eachdata">
                <div>
                    <div className="ingredientandstep">
                        <div className="redball">1</div>
                        <section id="updaterecipe">
                            <textarea
                                className="dataform1"
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
                        <div className="redball">2</div>
                        <section id="updaterecipe">
                            <textarea
                                className="dataform1"
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
                        <div className="redball">3</div>
                        <section id="updaterecipe">
                            <textarea
                                className="dataform1"
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

            <div className="additemarea">
                <button className="buttonincreateplus">
                    <img
                        src="/images/plus.svg"
                        alt=""
                        className="iconincreateplus"
                    />
                </button>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下照片 */}

            <div className="photoupload">
                <button className="buttonincreate">
                    <img
                        src="/images/camera.svg"
                        alt=""
                        className="iconincreate"
                    />
                </button>
            </div>
            <div className="button">
                <label>請選擇照片</label>
            </div>

            <hr className="hr" />
            {/* 分隔線，以下完成按鈕 */}

            <div className="button">
                <button className="finish">
                    修改食譜
                    <img src="/images/pen.svg" alt="" className="crud" />
                </button>
            </div>
        </>
    );
}

// onClick={()}

export default Updaterecipe;
