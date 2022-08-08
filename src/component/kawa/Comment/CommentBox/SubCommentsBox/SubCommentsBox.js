import React, { useRef, useState } from 'react'
import { useOpenReply } from '../../Message/Message'

const SubCommentsBox = (props) => {
  const changeOpenReply = useOpenReply()

  const message = useRef(null)
  const [showCommentLine, setShowCommentLine] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [enableBtn, setEnableBtn] = useState(true)

  const commentFocus = () => {
    setShowCommentLine(true)
    setShowButton(true)
  }

  const commentFocusOut = () => {
    setShowCommentLine(false)
  }

  const commentStroke = (event) => {
    let currMessage = event.target.value
    if (currMessage) {
      setEnableBtn(false)
    } else {
      setEnableBtn(true)
    }
  }

  //   發送訊息
  const sendComment = (e) => {
    e.preventDefalut()
  }

  return (
    <form>
      <section className="commentBox">
        <input
          type="text"
          name=""
          id=""
          autoFocus={props.autoFocus}
          placeholder="add a comment..."
          ref={message}
          onFocus={commentFocus}
          onBlur={commentFocusOut}
          onKeyUp={commentStroke}
        />

        {/* 底下開始 */}
        {showCommentLine && <div className="commentLine"></div>}
      </section>

      {showButton && (
        <>
          <button
            className="commentButton sendButton"
            disabled={enableBtn}
            onClick={sendComment}
          >
            留言
          </button>
          <button
            className="commentButton"
            style={{ color: 'gray', backgroundColor: 'transparent' }}
            onClick={() => {
              setShowButton(false)
              changeOpenReply()
            }}
          >
            取消
          </button>
        </>
      )}
    </form>
  )
}

export default SubCommentsBox
