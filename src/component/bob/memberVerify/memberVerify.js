import './memberVerify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import AuthContext from '../component/authContext';

function MemberVerify() {
    const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate();

    const checkForm = async (event) => {
        event.preventDefault();
        const data = {
            checkNumber: document.form1.checknumber.value,
        };

        const r = await fetch('http://localhost:3600/member/verify', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const obj = await r.json();
        console.log(obj);
        Login(obj);
    };

    function Login(obj) {
        if (obj.success) {
            localStorage.setItem('auth', JSON.stringify(obj.data));
            setAuth({ ...obj.data, authorized: true });
            alert('恭喜您完成註冊。歡迎加入有機の小鱻肉');
            navigate('/member/data', { replace: true });
        } else {
            alert('驗證碼錯誤');
        }
    }

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
                            className="bi bi-check-circle-fill bover-svgColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                    <div className="p-3">
                        <h4 className="fw-bold text-center m-0">
                            您即將完成註冊
                        </h4>
                    </div>
                    <div className="col-9 m-auto p-3">
                        <h6 className="fw-semibold text-center m-0">
                            我們已寄送驗證碼至您的信箱，請於下方輸入驗證碼即可完成註冊。
                        </h6>
                    </div>
                    <div className="d-grid gap-2 col-sm-7 mx-auto my-3">
                        <form name="form1" onSubmit={checkForm}>
                            <input type="text" name="checknumber" className="form-control shadow-none border-dark text-center" />
                            <div className="d-grid gap-2 col-sm-9 mx-auto mt-4">
                                <button className="btn bover-buttonColor text-white" type="submit">驗證</button>
                                <button className="btn btn btn-dark" type="button">重新寄送驗證信</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberVerify;
