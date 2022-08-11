import './memberVerify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function MemberVerify() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bover-bodyvh d-flex justify-content-center align-items-center bove-bodybg">
                <div className="col-sm-3 shadow mb-5 rounded rounded-3 bg-white mx-4">
                    <div className="d-flex justify-content-center my-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            fill="currentColor"
                            className="bi bi-check-circle-fill text-success"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                    <div className="p-3">
                        <h4 className="fw-bold text-center m-0">
                            您已經完成註冊
                        </h4>
                    </div>
                    <div className="col-9 m-auto p-3">
                        <h6 className="fw-semibold text-center m-0">
                            我們已寄送驗證信至您的信箱，請開啟信件即可完成註冊。
                        </h6>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto my-4">
                        <button
                            className="btn btn btn-success btn-block"
                            type="submit"
                        >
                            重新寄送驗證信
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberVerify;
