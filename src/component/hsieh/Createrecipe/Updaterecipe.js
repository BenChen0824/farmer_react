import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Createrecipe.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Updaterecipe() {
    const loginUser = JSON.parse(localStorage.getItem('auth'));

    const [updaterecipe, setUpdaterecipe] = useState({
        recipes_sid: '',
        recipes_name: '',
        recipes_time_cost: '',
        recipes_portion: '',
        recipes_calories: '',
        recipes_type: '',
        recipes_cooking_degree: '',
        recipes_ingredient: '',
        recipes_ingredient1: '',
        recipes_ingredient2: '',
        recipes_ingredient3: '',
        recipes_ingredient4: '',
        recipes_ingredient5: '',
        recipes_ingredient6: '',
        recipes_ingredient7: '',
        recipes_ingredient8: '',
        recipes_ingredient9: '',
        recipes_step: '',
        recipes_step1: '',
        recipes_step2: '',
        recipes_step3: '',
        recipes_step4: '',
        recipes_step5: '',
        recipes_step6: '',
        recipes_step7: '',
        recipes_step8: '',
        recipes_step9: '',
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
    const [updateTimecost, setUpdateTimecost] = useState('');

    // 料理熱量
    const [updateCalories, setUpdateCalories] = useState('');

    // 料理份量
    const [updatePortion, setUpdatePortion] = useState('');
    const portionOptions = ['1', '2', '3', '4', '5'];

    // select，料理類型
    const [updateRecipestype, setUpdateRecipestype] = useState('');
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
    const [updateRecipesdegree, setUpdateRecipesdegree] = useState('');
    const recipesdegreeOptions = [
        '新手輕鬆入門',
        '餐廳廚師料理',
        '米其林名廚作品',
    ];

    // 料理食材
    const [updateIngredient, setUpdateIngredient] = useState('');
    const [updateIngredient1, setUpdateIngredient1] = useState('');
    const [updateIngredient2, setUpdateIngredient2] = useState('');
    const [updateIngredient3, setUpdateIngredient3] = useState('');
    const [updateIngredient4, setUpdateIngredient4] = useState('');
    const [updateIngredient5, setUpdateIngredient5] = useState('');
    const [updateIngredient6, setUpdateIngredient6] = useState('');
    const [updateIngredient7, setUpdateIngredient7] = useState('');
    const [updateIngredient8, setUpdateIngredient8] = useState('');
    const [updateIngredient9, setUpdateIngredient9] = useState('');

    // 料理步驟
    const [updateStep, setUpdateStep] = useState('');
    const [updateStep1, setUpdateStep1] = useState('');
    const [updateStep2, setUpdateStep2] = useState('');
    const [updateStep3, setUpdateStep3] = useState('');
    const [updateStep4, setUpdateStep4] = useState('');
    const [updateStep5, setUpdateStep5] = useState('');
    const [updateStep6, setUpdateStep6] = useState('');
    const [updateStep7, setUpdateStep7] = useState('');
    const [updateStep8, setUpdateStep8] = useState('');
    const [updateStep9, setUpdateStep9] = useState('');

    // 料理照片
    const [updateRecipe_img, setUpdateRecipe_img] = useState([]);

    const [previewimg, setPreviewimg] = useState('');

    const navigate = useNavigate();

    const updateAllInfo = async (event) => {
        event.preventDefault();

        const data = {
            recipe_sid: params.recipes_sid,
            updateRecipesname: document.form1.updateRecipesname.value,
            updateDescription: document.form1.updateDescription.value,
            updateTimecost: document.form1.updateTimecost.value,
            updateCalories: document.form1.updateCalories.value,
            updatePortion: document.form1.updatePortion.value,
            updateRecipestype: document.form1.updateRecipestype.value,
            updateRecipesdegree: document.form1.updateRecipesdegree.value,
            updateIngredient: document.form1.updateIngredient.value,
            updateIngredient1: document.form1.updateIngredient.value,
            updateIngredient2: document.form1.updateIngredient.value,
            updateIngredient3: document.form1.updateIngredient.value,
            updateIngredient4: document.form1.updateIngredient.value,
            updateIngredient5: document.form1.updateIngredient.value,
            updateIngredient6: document.form1.updateIngredient.value,
            updateIngredient7: document.form1.updateIngredient.value,
            updateIngredient8: document.form1.updateIngredient.value,
            updateIngredient9: document.form1.updateIngredient.value,
            updateStep: document.form1.updateStep.value,
            updateStep1: document.form1.updateStep.value,
            updateStep2: document.form1.updateStep.value,
            updateStep3: document.form1.updateStep.value,
            updateStep4: document.form1.updateStep.value,
            updateStep5: document.form1.updateStep.value,
            updateStep6: document.form1.updateStep.value,
            updateStep7: document.form1.updateStep.value,
            updateStep8: document.form1.updateStep.value,
            updateStep9: document.form1.updateStep.value,
            recipes_img: document.form1.recipes_img.value,
            customer_id: loginUser.customer_id,
        };

        console.log(data);
        const r = await fetch('http://localhost:3600/recipe/updaterecipe', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // console.log('abc:');
        const obj = await r.json();
        console.log(obj);
        alreadyupdate(obj);

        console.log(alreadyupdate);
        setUpdateRecipe_img(obj);
    };

    function alreadyupdate(obj) {
        if (obj.success) {
            alert('請填寫正確資料');
        } else {
            alert('更新成功');
            navigate('/recipe', { replace: true });
        }
    }

    function qwert() {
        const a = previewimg.substring(12);
        return a;
    }

    function plusoneingredient() {
        var elem = document.querySelectorAll('div.ingredientincreate1');
        elem[0].className = 'ingredientincreate';
    }

    function minusoneingredient() {
        var elem = document.querySelectorAll('div.ingredientincreate');
        elem[elem.length - 1].className = 'ingredientincreate1';
    }

    function plusonestep() {
        var elem = document.querySelectorAll('div.stepincreate1');
        elem[0].className = 'stepincreate';
    }

    function minusonestep() {
        var elem = document.querySelectorAll('div.stepincreate');
        elem[elem.length - 1].className = 'stepincreate1';
    }

    // function cleaninput() {
    //     var elem = document.querySelectorAll('input.ingredientuse');
    //     elem[elem.length - 1].value = '';
    // }

    return (
        <>
            <form
                name="form1"
                value=""
                id=""
                noValidate
                method="post"
                onSubmit={updateAllInfo}
            >
                <h2 className="createrecipetitle">
                    修改食譜 ／ Update Recipes
                </h2>
                <hr className="hrincreaterecipe" />
                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">食譜名稱</label>
                    <section>
                        <input
                            name="updateRecipesname"
                            id="updateRecipesname"
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
                        <section>
                            <textarea
                                name="updateDescription"
                                id="updateDescription"
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
                    <section>
                        <input
                            name="updateTimecost"
                            id="updateTimecost"
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
                    <section>
                        <input
                            name="updateCalories"
                            id="updateCalories"
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
                    <section>
                        <select
                            name="updatePortion"
                            id="updaterecipe"
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
                    <section>
                        <select
                            name="updateRecipestype"
                            id="updateRecipestype"
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
                    <section>
                        <select
                            name="updateRecipesdegree"
                            id="updateRecipesdegree"
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
                        <div className="ingredientincreate">
                            <section>
                                <input
                                    name="[updateIngredient]"
                                    id="updateIngredient"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient}
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdaterecipe(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient1.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="[updateIngredient1]"
                                    id="updateIngredient1"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient1}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient1(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient2.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient2"
                                    id="ingredient2"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient2}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient2(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient3.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient3"
                                    id="ingredient3"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient3}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient3(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient4.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient4"
                                    id="ingredient4"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient4}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient4(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient5.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient5"
                                    id="ingredient5"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient5}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient5(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient6.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient6"
                                    id="ingredient6"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient6}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient6(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient7.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient7"
                                    id="ingredient7"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient7}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient7(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient8.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient8"
                                    id="ingredient8"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient8}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient8(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_ingredient9.length === 0
                                    ? 'ingredientincreate1'
                                    : 'ingredientincreate'
                            }
                        >
                            <section>
                                <input
                                    name="ingredient9"
                                    id="ingredient9"
                                    type="text"
                                    className="ingredientuse"
                                    value={updaterecipe.recipes_ingredient9}
                                    required
                                    placeholder="食材與份量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setUpdateIngredient9(e.target.value);
                                    }}
                                />
                            </section>

                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}
                    </div>
                </div>

                <div className="additemarea">
                    <button
                        type="button"
                        className="plusbuttonincreate"
                        onClick={plusoneingredient}
                    >
                        <img
                            src="/images/plus.svg"
                            alt=""
                            className="iconincreateplus"
                        />
                    </button>

                    <button
                        type="button"
                        className="buttonincreate"
                        onClick={minusoneingredient}
                    >
                        <img
                            src="/images/minus.svg"
                            alt=""
                            className="iconincreate"
                        />
                    </button>
                </div>

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下料理步驟 */}

                {/* <div
                            className={
                                updaterecipe.recipes_step.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        ></div> */}

                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">料理步驟</label>
                </div>

                <div className="eachdataincreaterecipe">
                    <div>
                        <div
                            className={
                                updaterecipe.recipes_step.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">1</div>
                            <section>
                                <textarea
                                    name="[updateStep]"
                                    id="updateStep"
                                    className="dataform1increate"
                                    value={updaterecipe.recipes_step}
                                    placeholder="步驟1"
                                    onChange={(e) => {
                                        setUpdateStep(e.target.value);
                                    }}
                                />
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step1.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">2</div>
                            <section>
                                <textarea
                                    name="[step1]"
                                    id="step1"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step1}
                                    required
                                    placeholder="步驟2"
                                    onChange={(e) => {
                                        setUpdateStep1(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step2.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">3</div>
                            <section>
                                <textarea
                                    name="[step2]"
                                    id="step2"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step2}
                                    required
                                    placeholder="步驟3"
                                    onChange={(e) => {
                                        setUpdateStep2(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step3.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">4</div>
                            <section>
                                <textarea
                                    name="[step3]"
                                    id="step3"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step3}
                                    required
                                    placeholder="步驟4"
                                    onChange={(e) => {
                                        setUpdateStep3(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step4.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">5</div>
                            <section>
                                <textarea
                                    name="[step4]"
                                    id="step4"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step4}
                                    required
                                    placeholder="步驟5"
                                    onChange={(e) => {
                                        setUpdateStep4(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step5.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">6</div>
                            <section>
                                <textarea
                                    name="[step5]"
                                    id="step5"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step5}
                                    required
                                    placeholder="步驟6"
                                    onChange={(e) => {
                                        setUpdateStep5(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step6.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">7</div>
                            <section>
                                <textarea
                                    name="[step6]"
                                    id="step6"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step6}
                                    required
                                    placeholder="步驟7"
                                    onChange={(e) => {
                                        setUpdateStep6(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step7.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">8</div>
                            <section>
                                <textarea
                                    name="[step7]"
                                    id="step7"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step7}
                                    required
                                    placeholder="步驟8"
                                    onChange={(e) => {
                                        setUpdateStep7(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step8.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">9</div>
                            <section>
                                <textarea
                                    name="[step8]"
                                    id="step8"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step8}
                                    required
                                    placeholder="步驟9"
                                    onChange={(e) => {
                                        setUpdateStep8(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}

                        <div
                            className={
                                updaterecipe.recipes_step9.length === 0
                                    ? 'stepincreate1'
                                    : 'stepincreate'
                            }
                        >
                            <div className="redballincreate">10</div>
                            <section>
                                <textarea
                                    name="[step9]"
                                    id="step9"
                                    className="stepoftextareaincreate"
                                    value={updaterecipe.recipes_step9}
                                    required
                                    placeholder="步驟10"
                                    onChange={(e) => {
                                        setUpdateStep9(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                            <button
                                type="button"
                                className="buttonincreate"
                                // onClick={}
                            >
                                <img
                                    src="/images/trashcan.svg"
                                    alt=""
                                    className="iconincreate"
                                />
                            </button>
                        </div>

                        {/* 分隔線 */}
                    </div>
                </div>

                <div className="additemarea">
                    <button
                        type="button"
                        className="plusbuttonincreate"
                        onClick={plusonestep}
                    >
                        <img
                            src="/images/plus.svg"
                            alt=""
                            className="iconincreateplus"
                        />
                    </button>

                    <button
                        type="button"
                        className="buttonincreate"
                        onClick={minusonestep}
                    >
                        <img
                            src="/images/minus.svg"
                            alt=""
                            className="iconincreate"
                        />
                    </button>
                </div>

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下照片 */}

                <div className="photoareaincreate">
                    {/* 上傳按鈕 */}

                    <div className="photouploadincreate">
                        <input
                            type="file"
                            name="recipes_img"
                            id="inputData"
                            // value={updaterecipe.recipes_img}
                            onChange={(e) => {
                                setPreviewimg(e.target.value);
                            }}
                        />

                        <img
                            className="showphotoincreate"
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
                    <button className="finishincreate" type="submit">
                        修改食譜
                        <img
                            src="/images/pen.svg"
                            alt=""
                            className="crudincreate"
                        />
                    </button>
                </div>
            </form>
        </>
    );
}

export default Updaterecipe;

// onClick={()}
