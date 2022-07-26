import { useState } from 'react'
import './list.css'

export default function Recipesearch() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <div className="searching">
        <div id="inputText">
          <p className="subtitleword">食譜名稱</p>
          <input type="text" value={inputText} className="searchinput" />
          <p className="subtitleword">熱門關鍵字：日式、炸蝦、雞腿</p>
          <button type="button" class="btn btn-dark" style={{ margin: 5 }}>
            進階搜尋
          </button>
          <button type="button" class="btn btn-dark" style={{ margin: 5 }}>
            搜尋
          </button>
        </div>
      </div>

      <div>
        <p className="titleword">今日食譜推薦 ／ Recipes Recommend</p>
      </div>
      <div className="recommend">
        <div className="recommendlist">
          <img />
          <div className="recipeinfo">
            <p>日式黃金炸蝦</p>
            <i></i>30
            <i></i>30
            <hr />
            <i></i>20分鐘
            <br />
            <i></i>約400卡
          </div>
        </div>
        <div className="recommendlist">
          <img />
          <div className="recipeinfo">
            <p>日式黃金炸蝦</p>
            <i></i>30
            <i></i>30
            <hr />
            <i></i>20分鐘
            <br />
            <i></i>約400卡
          </div>
        </div>
      </div>

      {/* 分隔線 */}

      <div>
        <p className="titleword">食譜列表 ／ Recipes List</p>
        <hr />
      </div>
      <div className="recommend">
        <div className="recommendlist">
          <img />
          <div className="recipeinfo">
            <p>日式黃金炸蝦</p>
            <i></i>30
            <i></i>30
            <hr />
            <i></i>20分鐘
            <br />
            <i></i>約400卡
          </div>
        </div>
        <div className="recommendlist">
          <img />
          <div className="recipeinfo">
            <p>日式黃金炸蝦</p>
            <i></i>30
            <i></i>30
            <hr />
            <i></i>20分鐘
            <br />
            <i></i>約400卡
          </div>
        </div>
      </div>
    </>
  )
}

// {data && data.rows
//   ? data.rows.map((row) => (
//       <tr key={'mm' + row.sid}>
//         <th scope="row">{row.sid}</th>
//         <td>{row.name}</td>
//         <td>{row.email}</td>
//         <td>{row.mobile}</td>
//       </tr>
//     ))
//   : null}

// const runClock = () => {
//   const now = new Date();
//   sec_hand.style.transform = `rotate(${now.getSeconds() * 6 + now.getMilliseconds() * 0.006}deg)`;

//   min_hand.style.transform = `rotate(${now.getMinutes() * 6 + now.getSeconds() * 0.1}deg)`;

//   hour_hand.style.transform = `rotate(${now.getHours() * 30 + now.getMinutes() * 0.5}deg)`;

//   setTimeout(runClock, 50);
// };
// runClock();
