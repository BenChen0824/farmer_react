import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
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

    const checkForm = async (event) => {
        event.preventDefault();

        let isPass = true;

        if (recipesname === '') {
            setRecipesnameCorrect('請輸入食譜名稱');
        }

        if (description === '') {
            setDescriptionCorrect('請輸入食譜簡介');
        }

        if (timecost === '') {
            setTimecostCorrect('請輸入花費時間');
        }

        if (calories === '') {
            setCaloriesCorrect('請輸入熱量');
        }

        if (portion === '') {
            setPortionCorrect('請輸入份量');
        }

        if (recipestype === '') {
            setRecipestypeCorrect('請輸入料理類型');
        }

        if (recipesdegree === '') {
            setRecipesdegreeCorrect('請選擇料理難易度');
        }

        if (ingredient === '') {
            setIngredientCorrect('請填寫食材');
        }

        if (step === '') {
            setStepCorrect('請填寫料理步驟');
        }

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

        const recipesname_f = document.form1.recipesname;
        const description_f = document.form1.description;

        const timecost_f = document.form1.timecost;
        const timecost_re = new RegExp('/[0-9]{3}/');

        const calories_f = document.form1.calories;
        const calories_re = new RegExp('/[0-9]{3}/');

        const portion_f = document.form1.portion;
        const recipestype_f = document.form1.recipestype;
        const recipesdegree_f = document.form1.recipesdegree;
        const ingredient_f = document.form1.ingredient;
        const step_f = document.form1.step;

        const fields = [
            recipesname_f,
            description_f,
            timecost_f,
            calories_f,
            portion_f,
            recipestype_f,
            recipesdegree_f,
            ingredient_f,
            step_f,
        ];
        const fieldTexts = [];
        for (let f of fields) {
            fieldTexts.push(f.nextElementSibling);
        }
        // for (let i in fields) {
        // fields[i].classList.remove('is-invalid');
        // fieldTexts[i].innerText = null;
        // }

        console.log(recipesname_f.value);

        if (recipesname_f.value.length < 1) {
            fields[0].classList.add('is-invalid');
            fieldTexts[0].innerText = '請輸入食譜名稱';
            isPass = false;
        }

        if (description_f.value.length < 1) {
            fields[1].classList.add('is-invalid');
            fieldTexts[1].innerText = '請輸入食譜簡介';
            isPass = false;
        }

        if (!timecost_re.test(data.timecost)) {
            fields[2].classList.add('is-invalid');
            fieldTexts[2].innerText = '請輸入花費時間';
            isPass = false;
        }

        if (!calories_re.test(data.calories)) {
            fields[3].classList.add('is-invalid');
            fieldTexts[3].innerText = '請輸入熱量';
            isPass = false;
        }

        if (portion_f.value.length < 1) {
            fields[4].classList.add('is-invalid');
            fieldTexts[4].innerText = '請輸入份量';
            isPass = false;
        }

        if (recipestype_f.value.length < 1) {
            fields[5].classList.add('is-invalid');
            fieldTexts[5].innerText = '請輸入料理類型';
            isPass = false;
        }

        if (recipesdegree_f.value.length < 1) {
            fields[6].classList.add('is-invalid');
            fieldTexts[6].innerText = '請選擇料理難易度';
            isPass = false;
        }

        if (ingredient_f.value.length < 1) {
            fields[7].classList.add('is-invalid');
            fieldTexts[7].innerText = '請填寫食材';
            isPass = false;
        }

        if (step_f.value.length < 1) {
            fields[8].classList.add('is-invalid');
            fieldTexts[8].innerText = '請填寫料理步驟';
            isPass = false;
        }

        if (!isPass) {
            return;
        }
        // 結束函式

        // const email_re = new RegExp(
        //     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        // );
        // const password_re = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

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

    function Createrecipe(obj) {
        if (obj.success) {
            alert('新增食譜成功');
            navigate('/recipe', { replace: true });
        } else {
            alert('請填寫正確資料');
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
            <form
                name="form1"
                value=""
                id=""
                noValidate
                method="post"
                onSubmit={checkForm}
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
                                <div className="invalid-feedback"></div>
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
                                <div className="invalid-feedback"></div>
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

                        <div className="ingredientandstep">
                            <div className="redballincreate">2</div>
                            <section>
                                <textarea
                                    name="step"
                                    id="step"
                                    className="dataform1increate"
                                    value={
                                        stepcorrect === '' ? step : stepcorrect
                                    }
                                    required
                                    placeholder="步驟2"
                                    onChange={(e) => {
                                        setStep(e.target.value);
                                    }}
                                    onFocus={() => setStepCorrect('')}
                                />
                                <div className="invalid-feedback"></div>
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
                            <section>
                                <textarea
                                    name="step"
                                    id="step"
                                    className="dataform1increate"
                                    value={
                                        stepcorrect === '' ? step : stepcorrect
                                    }
                                    required
                                    placeholder="步驟3"
                                    onChange={(e) => {
                                        setStep(e.target.value);
                                    }}
                                    onFocus={() => setStepCorrect('')}
                                />
                                <div className="invalid-feedback"></div>
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

                <hr className="hrincreaterecipe" />
                {/* 分隔線，以下照片 */}

                <div className="photoareaincreate">
                    <button className="buttonincreate" onClick={handleClick}>
                        <img
                            src="/images/camera.svg"
                            alt=""
                            className="iconincreate"
                        />
                    </button>

                    <div className="photouploadincreate">
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
                        <img
                            className="showphotoincreate"
                            src={
                                image.preview
                                    ? image.preview
                                    : '/images/' + profileData[0].recipe_img
                            }
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
                    <button
                        className="finishincreate"
                        type="submit"
                        // onClick={(event) => {
                        // event.preventDefault();
                        // navigate('/recipe', {
                        //     replace: true,
                        // });
                        // }}
                    >
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

export default Createrecipe;
