import React, { useEffect, useState, useRef } from 'react';
import './Createrecipe.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Createrecipe() {
    // 新增食譜名稱
    const [recipesname, setRecipesname] = useState('');

    // 料理簡介
    const [description, setDescription] = useState('');

    // 烹調時間
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
        '西式料理',
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

    const navigate = useNavigate();

    function Createrecipe(obj) {
        if (obj.success) {
            alert('新增食譜成功');
            navigate('/member/verify', { replace: true });
        } else {
            alert('請確實填寫欄位');
        }
    }

    const checkForm = async (event) => {
        event.preventDefault();
        const data = {
            recipesname: document.form1.recipesname.value,
            description: document.form1.description.value,
            timecost: document.form1.timecost.value,
            calories: document.form1.calories.value,
            portion: document.form1.portion.value,
            recipestype: document.form1.recipestype.value,
            recipesdegree: document.form1.recipesdegree.value,
            ingredient: document.form1.ingredient.value,
            step: document.form1.step.value,
        };

        const r = await fetch('http://localhost:3600/recipe/createrecipe', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const obj = await r.json();
        console.log(obj);
        Createrecipe(obj);
    };

    const hiddenFileInput = useRef('');
    const [image, setImage] = useState({ preview: '', data: '' });
    const [profileData, setProfileData] = useState([
        {
            username: '',
            intro: '',
            profile_img: '',
        },
    ]);
    const [editStatus, setEditStatus] = useState(true);
    const loginUser = JSON.parse(localStorage.getItem('auth'));

    const getRecipeData = async () => {
        const response = await axios.get(
            'http://localhost:3600/recipe/createrecipe',
            { headers: { loginUser: loginUser.customer_id } }
        );
        setProfileData(response.data);
    };

    useEffect(() => {
        getRecipeData();
    }, [editStatus]);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    function handleOnChange(event) {
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
        };
        setImage(img);
        handleSubmit(img);
    }

    function handleSubmit(upimg) {
        const fd = new FormData();
        fd.append('file', upimg.data);

        fetch('http://localhost:3600/member/profile', {
            method: 'post',
            body: fd,
            headers: {
                customer_id: loginUser.customer_id,
            },
        })
            .then((r) => r.json())
            .then((obj) => console.log(obj));
    }

    return (
        <>
            <form name="form1" method="post" onSubmit={checkForm}>
                <h2 className="creatrecipe">新增食譜 ／ Create New Recipes</h2>
                <hr className="hr" />
                <div className="eachdata">
                    <label className="dataname">食譜名稱</label>
                    <section id="recipesname">
                        <input
                            type="text"
                            className="dataform1"
                            value={recipesname}
                            placeholder="請輸入食譜名稱"
                            onChange={(e) => {
                                setRecipesname(e.target.value);
                            }}
                        />
                    </section>
                </div>

                <hr className="hr" />
                {/* 分隔線，以下料理簡介 */}

                <div className="eachdata">
                    <label className="dataname">料理簡介</label>
                    <div>
                        <section id="description">
                            <textarea
                                className="dataform1"
                                value={description}
                                placeholder="請100字內簡單描述"
                                cols="30"
                                rows="5"
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </section>
                        <label className="dataform1">
                            剩餘 {100 - description.length} 字
                        </label>
                    </div>
                </div>

                <hr className="hr" />
                {/* 分隔線，以下料理花費時間 */}

                <div className="eachdata">
                    <label className="dataname">花費時間</label>
                    <label className="breakpointtitle1">約</label>
                    <section id="timecost">
                        <input
                            className="dataform2"
                            type="text"
                            value={timecost}
                            onChange={(e) => {
                                setTimecost(e.target.value);
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
                    <section id="calories">
                        <input
                            className="dataform2"
                            type="text"
                            value={calories}
                            onChange={(e) => {
                                setCalories(e.target.value);
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
                    <section id="portion">
                        <select
                            className="dataform2"
                            value={portion}
                            onChange={(e) => {
                                setPortion(e.target.value);
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
                    <section id="recipestype">
                        <select
                            className="dataform1"
                            value={recipestype}
                            onChange={(e) => {
                                setRecipestype(e.target.value);
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
                    <section id="recipesdegree">
                        <select
                            className="dataform1"
                            value={recipesdegree}
                            onChange={(e) => {
                                setRecipesdegree(e.target.value);
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
                            <section id="ingredient">
                                <input
                                    type="text"
                                    className="ingredientuse"
                                    value={ingredient}
                                    placeholder="食材與分量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setIngredient(e.target.value);
                                    }}
                                />
                            </section>

                            {/* <section id="unit">
                            <input
                                type="text"
                                className="portionuse"
                                value={unit}
                                placeholder="請輸入份量"
                                onChange={(e) => {
                                    setUnit(e.target.value);
                                }}
                            />
                        </section> */}

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
                            <section id="ingredient">
                                <input
                                    type="text"
                                    className="ingredientuse"
                                    value={ingredient}
                                    placeholder="食材與分量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setIngredient(e.target.value);
                                    }}
                                />
                            </section>

                            {/* <section id="unit">
                            <input
                                type="text"
                                className="portionuse"
                                value={unit}
                                placeholder="請輸入份量"
                                onChange={(e) => {
                                    setUnit(e.target.value);
                                }}
                            />
                        </section> */}
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
                            <section id="ingredient">
                                <input
                                    type="text"
                                    className="ingredientuse"
                                    value={ingredient}
                                    placeholder="食材與分量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setIngredient(e.target.value);
                                    }}
                                />
                            </section>

                            {/* <section id="unit">
                            <input
                                type="text"
                                className="portionuse"
                                value={unit}
                                placeholder="請輸入份量"
                                onChange={(e) => {
                                    setUnit(e.target.value);
                                }}
                            />
                        </section> */}
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
                            <section id="step">
                                <textarea
                                    className="dataform1"
                                    value={step}
                                    placeholder="步驟1"
                                    onChange={(e) => {
                                        setStep(e.target.value);
                                    }}
                                />
                            </section>
                        </div>

                        {/* 分隔線 */}

                        <div className="ingredientandstep">
                            <div className="redball">2</div>
                            <section id="step">
                                <textarea
                                    className="dataform1"
                                    value={step}
                                    placeholder="步驟2"
                                    onChange={(e) => {
                                        setStep(e.target.value);
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
                            <section id="step">
                                <textarea
                                    className="dataform1"
                                    value={step}
                                    placeholder="步驟3"
                                    onChange={(e) => {
                                        setStep(e.target.value);
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

                <div className="photoarea">
                    <button className="buttonincreate" onClick={handleClick}>
                        <img
                            src="/images/camera.svg"
                            alt=""
                            className="iconincreate"
                        />

                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                    </button>

                    <div className="photoupload">
                        <form
                            style={{ display: 'none' }}
                            onSubmit={handleSubmit}
                        >
                            <input
                                id="inputData"
                                name="file"
                                type="file"
                                ref={hiddenFileInput}
                                accept="image/*"
                                onChange={handleOnChange}
                            />
                        </form>
                    </div>
                </div>
                <div className="button">
                    <label>請選擇照片</label>
                </div>

                <hr className="hr" />
                {/* 分隔線，以下完成按鈕 */}

                <div className="button">
                    <button className="finish" type="submit">
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="crud"
                        />
                    </button>
                </div>
            </form>
        </>
    );
}

// function CreateNewRecipe(){
//   var
// }

// onclick = "CreateNewRecipe()"";

export default Createrecipe;
