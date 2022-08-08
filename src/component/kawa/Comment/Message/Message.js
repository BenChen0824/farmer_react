import React, { useRef, useState, useContext } from 'react'
import './Message.css'
import {
  AiFillLike,
  AiFillDislike,
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import CommentsBox from '../CommentBox/CommentsBox'
import SubMessage from './SubMessage/SubMessage'

const showReply = React.createContext()
export function useOpenReply() {
  return useContext(showReply)
}

const Message = (props) => {
  const likeIcon = useRef()
  const numLikes = useRef()

  const [arrowUp, setArrowUp] = useState(false)
  const [openReply, setOpenReply] = useState(false)
  // const [counts,setCounts ] = useState(30)

  const changeOpenReply = () => {
    setOpenReply((preState) => (preState = !preState))
  }

  let arrow = <i className="fas fa-caret-down"></i>

  const changeArrow = () => {
    setArrowUp((preState) => (preState = !preState))
  }

  if (arrowUp) {
    // arrow = <i className="fas fa-caret-up"></i>
    arrow = <AiFillCaretUp />
  } else {
    arrow = <AiFillCaretDown />
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
        {/* 使用者頭像 */}
        {/* <div className="CommentCard_imgwrap">
          <img src="./images/avatar_cat.jpg" alt="" />
        </div> */}
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
          {openReply && <CommentsBox autoFocus={true} />}
        </showReply.Provider>
        <section className="arrowReplies" onClick={changeArrow}>
          {arrow}
          <div>View 4 replies</div>
        </section>
        {arrowUp && (
          <section className="subMessages">
            <SubMessage user="HAPPY" message=" this is a pen." likes={21} />
          </section>
        )}
      </section>
    </>
  )
}

export default Message
