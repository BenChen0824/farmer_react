import React from 'react';
import StarRating from './StarRating';
import './CommentCard.css';

const CommentCard = () => {
    return (
        <>
            <div className="CommentCard d-flex">
                {/* ----------- */}
                <div className="CommentCard_imgwrap me-3">
                    <img src="" alt="" />
                </div>
                {/* ----------- */}
                <div>
                    <StarRating />
                    <div className="d-flex">
                        <p className="CommentCardAccount pe-3">Account123</p>
                        <p className="CommentCardTime">2022-05-14</p>
                    </div>

                    <p className="CommentContext">
                        consectetur adipisicing elit. Provident, expedita!
                        Necessitatibus, iure a consequatur, molestiae facere
                        blanditiis quia repellendus?
                    </p>
                </div>
                {/* ----------- */}
            </div>
        </>
    );
};

export default CommentCard;
