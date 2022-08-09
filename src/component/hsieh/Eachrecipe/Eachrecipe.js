import './Eachrecipe.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

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

    // useEffect(() => {

    // }, []);  useEffect基本架構

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
                                <img src="/images/portion.png" alt="" />
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
                                <img src="/images/pot.png" alt="" />
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
                                <img src="/images/degree.png" alt="" />
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

            <div className="socialmediaineach">
                <button className="buttonineach">
                    <img src="/images/line.png" alt="" className="iconineach" />
                </button>

                <button className="buttonineach">
                    <img
                        src="/images/twitter.png"
                        alt=""
                        className="iconineach"
                    />
                </button>

                <button className="buttonineach">
                    <img src="/images/ig.png" alt="" className="iconineach" />
                </button>

                <button className="buttonineach">
                    <img src="/images/fb.png" alt="" className="iconineach" />
                </button>

                <button className="buttonineach">
                    <img
                        src="/images/email.png"
                        alt=""
                        className="iconineach"
                    />
                </button>
            </div>

            {/* 分隔線 */}

            <div className="grayineachrecipe">
                <div className="cookineachrecipe">
                    <div className="materialineach">
                        <div className="blackineachrecipe">使用食材</div>
                        <div className="showarea1ineach">
                            <div>
                                <p className="chapter1ineach">
                                    {eachrecipe.recipes_ingredient}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 分隔線 */}

                    <div className="cookingineach">
                        <div className="greenineachrecipe">料理方式</div>
                        <div className="showarea2ineach">
                            <div className="numberineachrecipe">1</div>
                            <div className="chapter2ineach">
                                料理前，將明蝦以流水沖5分鐘即可退冰，更能完整保持野生大明蝦Q彈鮮脆的肉質。
                            </div>
                        </div>
                        <div className="showarea2ineach">
                            <div className="numberineachrecipe">2</div>
                            <p className="chapter2ineach">
                                退冰後的澎湖野生大明蝦，取一把剪刀，從蝦頭和蝦身的間隙，剪開蝦背。
                            </p>
                        </div>
                        <div className="showarea2ineach">
                            <div className="numberineachrecipe">3</div>

                            <p className="chapter2ineach">
                                將腸泥取出丟掉，大明蝦就處理完成。
                            </p>
                        </div>
                        {/* 引入料理方式 */}
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
                            className="hsiehcrud"
                        />
                    </button>
                </Link>

                <Link to={`/recipe/createrecipe`}>
                    <button className="hsiehcreate">
                        新增食譜
                        <img
                            src="/images/file-plus.svg"
                            alt=""
                            className="hsiehcrud"
                        />
                    </button>
                </Link>

                <Link to={`/recipe/updaterecipe/${eachrecipe.recipes_sid}`}>
                    <button className="hsiehupdate">
                        修改食譜
                        <img
                            src="/images/pen.svg"
                            alt=""
                            className="hsiehcrud"
                        />
                    </button>
                </Link>

                {/* <a href=""> */}
                <button className="hsiehdelete">
                    刪除食譜
                    <img
                        src="/images/trashcan.svg"
                        alt=""
                        className="hsiehcrud"
                    />
                </button>
                {/* </a> */}
            </div>
        </>
    );
}

export default Eachrecipe;
