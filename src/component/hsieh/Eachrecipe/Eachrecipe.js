import './Eachrecipe.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Eachrecipe() {
    const [eachrecipe, setEachrecipe] = useState({
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

    const navigate = useNavigate();

    async function eachrecipeinfo(recipes_sid) {
        const r = await fetch(
            `http://localhost:3600/recipe/each/${recipes_sid}`
        );
        const obj = await r.json();
        setEachrecipe(obj);
        console.log(eachrecipe);
    }

    const params = useParams();
    useEffect(() => {
        eachrecipeinfo(params.recipes_sid);
        window.scrollTo({ top: 0, behavior: 'instant' }); // 調整往下滑
    }, [params.recipes_sid]);
    // 獲取食譜個別資訊

    // useEffect(() => {

    // }, []);  useEffect基本架構

    const Delectrecipe = async () => {
        const data = {
            recipes_sid: params.recipes_sid,
        };
        const r = await fetch('http://localhost:3600/recipe/delete', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // console.log('abc:');
        const obj = await r.json();
        console.log(obj);
        alreadydelete(obj);
        console.log(alreadydelete);
    };

    function alreadydelete(obj) {
        if (obj.success) {
            alert('');
        } else {
            alert('刪除成功');
            navigate('/recipe', { replace: true });
        }
    }

    return (
        <>
            <p className="eachrecipetitle">{eachrecipe.recipes_name}</p>

            <hr className="lineineach" align="center" />

            <div className="recipeinfo">
                <div className="pictureineachrecipe">
                    <img src={`/dishimages/${eachrecipe.recipes_img}`} alt="" />
                </div>
                <div className="recipedetailineach">
                    <div className="autherineach">
                        <p className="authernameineach">
                            作者：{eachrecipe.cooking_create_member_Id}
                        </p>

                        <div className="likeandcollectineach">
                            <button className="buttonineach">
                                <img
                                    src="/images/heart.svg"
                                    alt=""
                                    className="iconineach"
                                />
                            </button>

                            <button className="buttonineach">
                                <img
                                    src="/images/good.svg"
                                    alt=""
                                    className="iconineach"
                                />
                            </button>
                        </div>
                    </div>

                    {/* 分隔線 */}

                    <div className="recipeinfomationineach">
                        <div className="recipedataineach">
                            <div className="greencircleineach">
                                <img src="/images/clock.svg" alt="" />
                            </div>
                            <div>
                                <p>
                                    料理所需時間
                                    <br />約 {eachrecipe.recipes_time_cost}
                                    分鐘
                                    {/* 引入料理時間 */}
                                </p>
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="recipedataineach">
                            <div className="greencircleineach">
                                <img src="/images/heat.svg" alt="" />
                            </div>
                            <div>
                                <p>
                                    熱量
                                    <br />約 {eachrecipe.recipes_calories}
                                    大卡
                                </p>
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="recipedataineach">
                            <div className="greencircleineach">
                                <img src="/images/portion.svg" alt="" />
                            </div>
                            <div>
                                <p>
                                    份量
                                    <br />
                                    {eachrecipe.recipes_portion} 人份
                                </p>
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="recipedataineach">
                            <div className="greencircleineach">
                                <img src="/images/cooking.svg" alt="" />
                            </div>
                            <div>
                                <p>
                                    料理類型
                                    <br /> {eachrecipe.recipes_type}
                                </p>
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="recipedataineach">
                            <div className="greencircleineach">
                                <img src="/images/degree.svg" alt="" />
                            </div>
                            <div>
                                <p>
                                    料理難易度
                                    <br />
                                    {eachrecipe.recipes_cooking_degree}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 分隔線 */}

                    <div className="eachrecipedescription">
                        <p>{eachrecipe.recipes_description}</p>
                    </div>
                </div>
            </div>

            {/* 分隔線 */}

            <div className="grayineachrecipe">
                <div className="cookineachrecipe">
                    <div className="materialineach">
                        <div className="blackineachrecipe">使用食材</div>
                        <div className="showarea1ineach">
                            <p className="chapter1ineach">
                                {eachrecipe.recipes_ingredient}
                                <br />
                                {/* 食材1 */}
                                <br />
                                {/* 食材2 */}
                                <br />
                                {/* 食材3 */}
                                <br />
                                {/* 食材4 */}
                                <br />
                                {/* 食材5 */}
                                <br />
                                {/* 食材6 */}
                                <br />
                                {/* 食材7 */}
                                <br />
                                {/* 食材8 */}
                                <br />
                                {/* 食材9 */}
                                <br />
                                {/* 食材10 */}
                                <br />
                            </p>
                        </div>
                    </div>

                    {/* 分隔線 */}

                    <div className="cookingineach">
                        <div className="greenineachrecipe">料理方式</div>
                        <div className="showarea2ineach">
                            {/* 步驟呈現的區域 */}
                            <div className="numberineachrecipe">1</div>
                            <div className="chapter2ineach">
                                {eachrecipe.recipes_cooking_method}
                                {/* 步驟1 */}
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">2</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟2 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">3</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟3 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">4</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟4 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">5</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟5 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">6</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟6 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        {/* 分隔線 */}

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">7</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟7 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">8</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟8 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">9</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟9 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>

                        <div className="showarea2ineach1">
                            <div className="numberineachrecipe">10</div>
                            <div className="chapter2ineach">
                                {/* {eachrecipe.recipes_cooking_method} */}
                                {/* 步驟10 */}
                                {/* 
                                var elem = document.querySelectorAll('div.showarea2ineach1');
                                elem[0].className = 'showarea2ineach';
                                return ({eachrecipe.recipes_cooking_method}.length === 0 ? elem[0].className =showarea2ineach1 : elem[0].className =showarea2ineach);
                                 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttonlistineach">
                <Link to={`/recipe`}>
                    <button className="recipelistbutton">
                        食譜列表
                        <img
                            src="/images/files.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link>

                <Link to={`/recipe/createrecipe`}>
                    <button className="hsiehcreate">
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link>

                <Link to={`/recipe/updaterecipe/${eachrecipe.recipes_sid}`}>
                    <button className="hsiehupdate">
                        修改食譜
                        <img
                            src="/images/pen.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link>

                <Link to={`http://localhost:3600/recipe/delete`}>
                    <button
                        className="hsiehdelete"
                        onClick={(e) => Delectrecipe()}
                    >
                        刪除食譜
                        <img
                            src="/images/trashcan.svg"
                            alt=""
                            className="crudineach"
                        />
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Eachrecipe;
