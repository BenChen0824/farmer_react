import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css'

const StarRating = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <>
      <div className="d-flex">
        {/* <p>您的評價是{rating}</p> */}
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1

          return (
            <label>
              <input
                className="StarRatingInput"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                size={20}
                className="star"
                color={ratingValue <= (hover || rating) ? '#ffc107' : 'e4e5e9'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        })}
        <p>{rating}顆星</p>
      </div>

      <div className="row"></div>
    </>
  )
}

export default StarRating
