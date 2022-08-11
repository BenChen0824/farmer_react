import './CreateComment.css';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { COMMENT_ADD_ITEM } from './../../config/ajax-path'
import axios from 'axios';

export default function CreateComment() {
    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);
    // 1
    // const [data, setData] = useState([
    //   {
    //     sid: '',
    //     change_memberid: '',
    //     change_coupon: '',
    //     change_memberid: '',
    //     change_spendpoints: '',
    //     change_time: '',
    //   },
    // ])

    // //拿資料..

    // useEffect(() => {
    //   fetch(COMMENT_ADD_ITEM, {
    //     method: 'GET',
    //     headers: { change_memberid: '530' },
    //   })
    //     .then((r) => r.json())
    //     .then((obj) => {
    //       console.log(obj)
    //       setData(obj)
    //     })
    // }, [])

    const loginUser = JSON.parse(localStorage.getItem('auth'));

    const sendComment = (event) => {
        //先拿到陣列裡的point
        // const newPointToExchange = discountArray[i].point
        // const newtype = discountArray[i].type
        event.preventDefault();
        axios
            .post('http://localhost:3600/comment/commentcreate', {
                member_id: loginUser.customer_id,
                nickname: '小白',
                avatar: '',
                rating: '5',
                likes: 0,
                comment: document.form1.comment.value,
                product_sid: 30,
            })
            .then((result) => {
                console.log(result.data);
            });
    };

    const handleText = () => {
        switch (number || hoverStar) {
            case 0:
                return 'Evaluate';
            case 1:
                return 'Dissatifation';
            case 2:
                return 'Unsatisfied';
            case 3:
                return 'Normal';
            case 4:
                return 'Satisfied';
            case 5:
                return 'Very Satisfied';
            default:
                return 'Evaluate';
        }
    };

    const handlePlaceHolder = () => {
        switch (number || hoverStar) {
            case 0:
                return 'Comment here...';
            case 1:
            case 2:
            case 3:
            case 4:
                // return 'What is your problem?'
                return '您需要怎麼樣的幫助?';
            case 5:
                return 'Why do you like the product?';
            default:
                return '請輸入您的評論...';
        }
    };

    // const handleTextarea = () => {
    //   switch (number || hoverStar) {
    //     case 0:
    //       return 'Comment here...'
    //     case 1:
    //       return '1111111111'
    //     case 2:
    //       return '2222222222'
    //     case 3:
    //       return '3333333'
    //     case 4:
    //       return '4444'
    //     case 5:
    //       return '555'
    //     default:
    //       return ''
    //   }
    // }
    return (
        <form name="form1" onSubmit={sendComment}>
            <div className="CreateComment_App">
                <div className="CreateComment_popup">
                    <div className="CreateComment_content">
                        <div className="CreateComment_product">
                            {/* <img
              style={{ width: 60, height: 60, objectFit: 'cover' }}
              src="https://tanhungphatit.vn/images/detailed/93/iphone-13-blue-1-600x600.jpg"
              alt="name"
            /> */}
                            <h1>HI acount 請輸入您的評論</h1>
                            <h1>HI nickname</h1>
                        </div>
                        <div>
                            <h1>{handleText()}</h1>
                            {Array(5)
                                .fill()
                                .map((_, index) =>
                                    number >= index + 1 ||
                                    hoverStar >= index + 1 ? (
                                        <AiFillStar
                                            onMouseOver={() =>
                                                !number &&
                                                setHoverStar(index + 1)
                                            }
                                            onMouseLeave={() =>
                                                setHoverStar(undefined)
                                            }
                                            style={{ color: 'orange' }}
                                            onClick={() => setNumber(index + 1)}
                                            key={index}
                                            value={index + 1}
                                        />
                                    ) : (
                                        <AiOutlineStar
                                            onMouseOver={() =>
                                                !number &&
                                                setHoverStar(index + 1)
                                            }
                                            onMouseLeave={() =>
                                                setHoverStar(undefined)
                                            }
                                            style={{ color: 'orange' }}
                                            onClick={() => setNumber(index + 1)}
                                            key={index}
                                        />
                                    )
                                )}
                        </div>
                        <textarea
                            name="comment"
                            placeholder={handlePlaceHolder()}
                            className="CreateComment_textarea"
                        ></textarea>
                        {/* <button className={` ${!number && 'disabled'} `}>Submit</button> */}
                        <button className="RatingsubmitBtn mt-5" type="submit">
                            送出
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}