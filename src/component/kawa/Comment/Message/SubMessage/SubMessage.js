import React, { useRef, useState, useContext } from 'react'
import {
  AiFillLike,
  AiFillDislike,
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
// import CommentsBox from '../CommentBox/CommentsBox'
import SubCommentsBox from '../../CommentBox/SubCommentsBox/SubCommentsBox'

const showReply = React.createContext()
export function useOpenReply() {
  return useContext(showReply)
}

const SubMessage = (props) => {
  const likeIcon = useRef()
  const numLikes = useRef()

  const [openReply, setOpenReply] = useState(false)
  // const [counts,setCounts ] = useState(30)

  const changeOpenReply = () => {
    setOpenReply((preState) => (preState = !preState))
  }

  // 按讚(愛心) 53分左右
  let toggleLike = false
  let likes = props.likes
  const likeComment = () => {
    toggleLike = !toggleLike
    if (toggleLike) {
      likes++
      likeIcon.current.style.color = 'blue'
    } else {
      likes--
      likeIcon.current.style.color = 'gray'
    }
    numLikes.current.innerHTML = likes
  }
  // const likeComment = ()=>{
  //   setCounts(counts+1)
  // }

  const deleteMessage = () => {}

  return (
    <>
      <section className="messageContainer">
        <div className="messageUser">{props.user}</div>
        {/* <i className="fas fa-user-circle"></i> */}
        <FaUserCircle />
        <div className="messageText">{props.message}</div>
        <section className="messageIconContainer">
          <i
            className="fas fa-thumbs-up"
            ref={likeIcon}
            onClick={likeComment}
          ></i>
          {/* <AiFillLike ref={likeIcon} onClick={likeComment} /> */}
          <div ref={numLikes}>{props.likes}</div>
          {/* <div>{counts}</div> */}
          {/* <i className="fas fa-thumbs-down"></i> */}
          <AiFillDislike />
          {!props.editable ? (
            <div onClick={changeOpenReply} style={{ cursor: 'pointer' }}>
              REPLY
            </div>
          ) : (
            <div onClick={deleteMessage} style={{ cursor: 'pointer' }}>
              DLETE
            </div>
          )}
        </section>
        <showReply.Provider value={changeOpenReply}>
          {openReply && <SubCommentsBox autoFocus={true} />}
        </showReply.Provider>
      </section>
    </>
  )
}

export default SubMessage
