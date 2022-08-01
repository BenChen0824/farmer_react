import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import './Comment.css'

const Comment = () => {
  const [backendData, setBackendData] = useState()

  return (
    <>
      <div className="container">
        <h1 className="text-center">Title</h1>

        <input type="text" />


        <div className="d-flex justify-content-center m-5 ">
          <p>熱門搜尋:</p>
          <p>蘋果</p>
          <p>西瓜</p>
          <p>葡萄</p>
          <p>日本和牛</p>
        </div>
        <div className="d-flex">
          <p>時間:</p>
          <select name="" id="">
            <option value="">所有時間</option>
            <option value="">一週內</option>
            <option value="">一個月內</option>
            <option value="">半年內</option>
          </select>
        </div>

        <div>
          <input type="text" />
          <button>搜尋</button>
        </div>

        <h2>評價</h2>
        {/* 括號內塞資料庫資料 */}
        <div className="d-flex justify-content-center m-5 ">
          <div className="starRating_btn">五顆星(10)</div>
          <div className="starRating_btn">四顆星(10)</div>
          <div className="starRating_btn">三顆星(10)</div>
          <div className="starRating_btn">二顆星(10)</div>
          <div className="starRating_btn">一顆星(10)</div>
        </div>

        <div className="Card_Area">
          <CommentCard />
        </div>
      </div>
    </>
  )
}

export default Comment
