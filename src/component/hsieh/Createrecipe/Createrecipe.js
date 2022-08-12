import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Createrecipe.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Createrecipe() {
    const loginUser = JSON.parse(localStorage.getItem('auth'));

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

    // 料理步驟
    const [step, setStep] = useState('');

    // 料理照片
    const [recipe_img, setRecipe_img] = useState([]);

    const [recipesnamecorrect, setRecipesnameCorrect] = useState('');
    const [descriptioncorrect, setDescriptionCorrect] = useState('');
    const [timecostcorrect, setTimecostCorrect] = useState('');
    const [caloriescorrect, setCaloriesCorrect] = useState('');
    const [portioncorrect, setPortionCorrect] = useState('');
    const [recipestypecorrect, setRecipestypeCorrect] = useState('');
    const [recipesdegreecorrect, setRecipesdegreeCorrect] = useState('');
    const [ingredientcorrect, setIngredientCorrect] = useState('');
    const [stepcorrect, setStepCorrect] = useState('');

    const navigate = useNavigate();

    const sentAllInfo = async (event) => {
        event.preventDefault();

        // const fd = new FormData(document.form1);
        // fd.append('file', event.target.recipe_img);
        // const r = await fetch('http://localhost:3600/recipe/createrecipe', {
        //     method: 'POST',
        //     body: fd,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        const data = {
            recipesname: document.form1.recipesname.value,
            description: document.form1.description.value,
            timecost: document.form1.timecost.value,
            portion: document.form1.portion.value,
            calories: document.form1.calories.value,
            recipestype: document.form1.recipestype.value,
            recipesdegree: document.form1.recipesdegree.value,
            ingredient: document.form1.ingredient.value,
            step: document.form1.step.value,
            recipes_img: document.form1.recipes_img.value,
            customer_id: loginUser.customer_id,
        };

        console.log(data);
        const r = await fetch('http://localhost:3600/recipe/createrecipe', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const obj = await r.json();
        console.log(obj);
        alreadycreate(obj);

        console.log(alreadycreate);
        setRecipe_img(obj);
    };

    function alreadycreate(obj) {
        if (obj.success) {
            alert('請填寫正確資料');
        } else {
            alert('新增成功');
            navigate('/recipe', { replace: true });
        }
    }

    const hiddenFileInput = useRef('');
    const [image, setImage] = useState({ preview: '', data: '' });
    const [profileData, setProfileData] = useState([
        {
            username: '',
            intro: '',
            recipe_img: '',
        },
    ]);

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

        fetch('http://localhost:3600/recipe/uploadimg', {
            method: 'post',
            body: fd,
            headers: {
                customer_id: loginUser.customer_id,
            },
        })
            .then((r) => r.json())
            .then((obj) => console.log(obj));
    }

    function previewFile() {
        var preview = document.querySelector('.photouploadincreate');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.addEventListener(
            'load',
            function () {
                preview.src = reader.result;
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <form
                name="form1"
                value=""
                id=""
                noValidate
                method="post"
                onSubmit={sentAllInfo}
            >
                <h2 className="createrecipetitle">
                    新增食譜 ／ Create New Recipes
                </h2>
                <hr className="hrincreaterecipe" />
                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">食譜名稱</label>
                    <section>
                        <input
                            name="recipesname"
                            id="recipesname"
                            type="text"
                            required
                            className="dataform1increate"
                            value={
                                recipesnamecorrect === ''
                                    ? recipesname
                                    : recipesnamecorrect
                            }
                            placeholder="請輸入食譜名稱"
                            onChange={(e) => {
                                setRecipesname(e.target.value);
                            }}
                            onFocus={() => setRecipesnameCorrect('')}
                        />
                        <div className="invalid-feedback"></div>
                    </section>
                </div>

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下料理簡介 */}

                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">料理簡介</label>
                    <div>
                        <section>
                            <textarea
                                name="description"
                                id="description"
                                required
                                className="dataform1increate"
                                value={
                                    descriptioncorrect === ''
                                        ? description
                                        : descriptioncorrect
                                }
                                placeholder="請100字內簡單描述"
                                cols="30"
                                rows="5"
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                onFocus={() => setDescriptionCorrect('')}
                            />
                            <div className="invalid-feedback"></div>
                        </section>
                        <label className="dataform1increate">
                            剩餘 {100 - description.length} 字
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
                            name="timecost"
                            id="timecost"
                            className="dataform2increate"
                            type="text"
                            required
                            value={
                                timecostcorrect === ''
                                    ? timecost
                                    : timecostcorrect
                            }
                            onChange={(e) => {
                                setTimecost(e.target.value);
                            }}
                            onFocus={() => setTimecostCorrect('')}
                        />
                        <div className="invalid-feedback"></div>
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
                            name="calories"
                            id="calories"
                            className="dataform2increate"
                            type="text"
                            required
                            value={
                                caloriescorrect === ''
                                    ? calories
                                    : caloriescorrect
                            }
                            onChange={(e) => {
                                setCalories(e.target.value);
                            }}
                            onFocus={() => setCaloriesCorrect('')}
                        />
                        <div className="invalid-feedback"></div>
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
                            name="portion"
                            id="portion"
                            className="dataform2increate"
                            value={
                                portioncorrect === '' ? portion : portioncorrect
                            }
                            required
                            onChange={(e) => {
                                setPortion(e.target.value);
                            }}
                            onFocus={() => setPortionCorrect('')}
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
                        <div className="invalid-feedback"></div>
                    </section>
                    <label className="breakpointtitle2">人份</label>
                </div>

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下料理類型 */}

                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">料理類型</label>
                    <section>
                        <select
                            name="recipestype"
                            id="recipestype"
                            className="dataform1increate"
                            value={
                                recipestypecorrect === ''
                                    ? recipestype
                                    : recipestypecorrect
                            }
                            required
                            onChange={(e) => {
                                setRecipestype(e.target.value);
                            }}
                            onFocus={() => setRecipestypeCorrect('')}
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
                        <div className="invalid-feedback"></div>
                    </section>
                </div>

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下料理難易 */}

                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">料理難易</label>
                    <section id="recipesdegree">
                        <select
                            name="recipesdegree"
                            id="recipesdegree"
                            className="dataform1increate"
                            value={
                                recipesdegreecorrect === ''
                                    ? recipesdegree
                                    : recipesdegreecorrect
                            }
                            required
                            onChange={(e) => {
                                setRecipesdegree(e.target.value);
                            }}
                            onFocus={() => setRecipesdegreeCorrect('')}
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
                        <div className="invalid-feedback"></div>
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
                            <section>
                                <input
                                    name="ingredient"
                                    id="ingredient"
                                    type="text"
                                    className="ingredientuse"
                                    value={
                                        ingredientcorrect === ''
                                            ? ingredient
                                            : ingredientcorrect
                                    }
                                    required
                                    placeholder="食材與分量，如：雞蛋2顆"
                                    onChange={(e) => {
                                        setIngredient(e.target.value);
                                    }}
                                    onFocus={() => setIngredientCorrect('')}
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
                        <div className="invalid-feedback"></div>

                        {/* 分隔線 */}
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

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下料理步驟 */}

                <div className="eachdataincreaterecipe">
                    <label className="datanameincreaterecipe">料理步驟</label>
                </div>

                <div className="eachdataincreaterecipe">
                    <div>
                        <div className="ingredientandstep">
                            <div className="redballincreate">1</div>
                            <section>
                                <textarea
                                    name="step"
                                    id="step"
                                    className="dataform1increate"
                                    value={
                                        stepcorrect === '' ? step : stepcorrect
                                    }
                                    required
                                    placeholder="步驟1"
                                    onChange={(e) => {
                                        setStep(e.target.value);
                                    }}
                                    onFocus={() => setStepCorrect('')}
                                />
                                <div className="invalid-feedback"></div>
                            </section>
                        </div>

                        {/* 分隔線 */}
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

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下照片 */}

                <div className="photoareaincreate">
                    {/* <button
                    className="buttonincreate"
                    type="button"
                    onClick={handleClick}
                >
                    <img
                        src="/images/camera.svg"
                        alt=""
                        className="iconincreate"
                    />
                </button> */}
                    <input
                        type="file"
                        name="recipes_img"
                        onchange="previewFile()"
                    />
                    {/* 上傳按鈕 */}
                    <img src="" height="200" alt="" />

                    <div className="photouploadincreate" src="">
                        {/* <form style={{ display: 'none' }}>
                            <input
                                id="inputData"
                                name="file"
                                type="file"
                                ref={hiddenFileInput}
                                accept="image/*"
                                onChange={handleOnChange}
                            />
                        </form> */}
                        <img className="showphotoincreate" src="" alt="" />
                    </div>
                </div>
                <div className="buttonintextalign">
                    <label>請選擇照片</label>
                </div>

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下完成按鈕 */}

                <div className="buttonintextalign">
                    <button className="finishincreate" type="submit">
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="crudincreate"
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

// onSubmit={handleSubmit}

export default Createrecipe;
