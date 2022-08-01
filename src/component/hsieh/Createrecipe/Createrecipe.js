import { useState } from 'react'
import React from 'react'
import './Createrecipe.css'

function Createrecipe() {
  // 新增食譜名稱
  const [recipesname, setRecipesname] = useState('')

  // 料理簡介
  const [description, setDescription] = useState('')

  // 烹調時間
  const [timecost, setTimecost] = useState('')

  // 料理熱量
  const [calories, setCalories] = useState('')

  // 料理份量
  const [portion, setPortion] = useState('')
  const portionOptions = ['1人分', '2人分', '3人分', '4人分', '5人分以上']

  // select，料理類型
  const [recipestype, setRecipestype] = useState('')
  const recipestypeOptions = [
    '台灣料理',
    '中華料理',
    '日式料理',
    '韓式料理',
    '南洋料理',
    '歐式料理',
    '美式料理',
    '其他',
  ]

  // select，料理難易度
  const [recipesdegree, setRecipesdegree] = useState('')
  const recipesdegreeOptions = [
    '新手輕鬆入門',
    '餐廳廚師料理',
    '米其林名廚作品',
  ]

  // 料理食材
  const [ingredient, setIngredient] = useState('')

  // 料理步驟
  const [step, setStep] = useState('')

  return (
    <>
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
              setRecipesname(e.target.value)
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
              placeholder="請以100字內簡單描述"
              cols="30"
              rows="3"
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </section>
          <label className="dataform1">剩餘 100 個字</label>
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
              setTimecost(e.target.value)
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
              setCalories(e.target.value)
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
              setPortion(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            {portionOptions.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              )
            })}
          </select>
        </section>
      </div>

      <hr className="hr" />
      {/* 分隔線，以下料理類型 */}

      <div className="eachdata">
        <label className="dataname">料理類型</label>
        <section id="select">
          <select
            className="dataform1"
            value={recipestype}
            onChange={(e) => {
              setRecipestype(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            {recipestypeOptions.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              )
            })}
          </select>
        </section>
      </div>

      <hr className="hr" />
      {/* 分隔線，以下料理難易 */}

      <div className="eachdata">
        <label className="dataname">料理難易</label>
        <section id="select">
          <select
            className="dataform1"
            value={recipesdegree}
            onChange={(e) => {
              setRecipesdegree(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            {recipesdegreeOptions.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              )
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
                placeholder="請輸入食材"
                onChange={(e) => {
                  setIngredient(e.target.value)
                }}
              />
            </section>

            <section id="ingredient">
              <input
                type="text"
                className="portionuse"
                value={recipesname}
                placeholder="請輸入份量"
                onChange={(e) => {
                  setIngredient(e.target.value)
                }}
              />
            </section>

            <button className="buttonincreate">
              <img
                src="http://localhost:3000/images/trashcan.svg"
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
                placeholder="請輸入食材"
                onChange={(e) => {
                  setIngredient(e.target.value)
                }}
              />
            </section>

            <section id="recipesname">
              <input
                type="text"
                className="portionuse"
                value={recipesname}
                placeholder="請輸入份量"
                onChange={(e) => {
                  setRecipesname(e.target.value)
                }}
              />
            </section>
            <button className="buttonincreate">
              <img
                src="http://localhost:3000/images/trashcan.svg"
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
                placeholder="請輸入食材"
                onChange={(e) => {
                  setIngredient(e.target.value)
                }}
              />
            </section>

            <section id="ingredient">
              <input
                type="text"
                className="portionuse"
                value={recipesname}
                placeholder="請輸入份量"
                onChange={(e) => {
                  setIngredient(e.target.value)
                }}
              />
            </section>
            <button className="buttonincreate">
              <img
                src="http://localhost:3000/images/trashcan.svg"
                alt=""
                className="iconincreate"
              />
            </button>
          </div>
        </div>
      </div>

      <button className="buttonincreateplus">
        <img
          src="http://localhost:3000/images/plus.svg"
          alt=""
          className="iconincreate"
        />
      </button>

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
                  setStep(e.target.value)
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
                  setStep(e.target.value)
                }}
              />
            </section>

            <button className="buttonincreate">
              <img
                src="http://localhost:3000/images/move.svg"
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
                  setStep(e.target.value)
                }}
              />
            </section>
          </div>
        </div>
      </div>

      <button className="buttonincreateplus">
        <img
          src="http://localhost:3000/images/plus.svg"
          alt=""
          className="iconincreate"
        />
      </button>

      <hr className="hr" />
      {/* 分隔線，以下照片 */}

      <div className="photoupload">
        <button className="buttonincreate">
          <img
            src="http://localhost:3000/images/camera.svg"
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
        <button className="finish">新增食譜</button>
      </div>

      {/* <section id="step">
          <textarea
            className="dataform1"
            value={step}
            placeholder="請輸入步驟"
            onChange={(e) => {
              setStep(e.target.value)
            }}
          />
        </section> */}

      {/* <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
  </div>
</div> */}
    </>
  )
}

export default Createrecipe
