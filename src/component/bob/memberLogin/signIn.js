import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from '../component/authContext';
import CartCountContext from '../../ben/cart_count/CartCountContext';

function SignIn() {
    const { setAuth } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartCountContext);
    const navigate = useNavigate();

    function Login(obj) {
        if (obj.success) {
            localStorage.setItem('auth', JSON.stringify(obj.data));
            setAuth({ ...obj.data, authorized: true });
            alert('歡迎登入');
            navigate('/member/data', { replace: true });
        } else {
            alert('帳號/密碼錯誤');
        }
    }

    const checkForm = async (event) => {
        event.preventDefault();
        const data = {
            email: document.form1.email.value,
            password: document.form1.password.value,
        };

        const r = await fetch('http://localhost:3600/member/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const obj = await r.json();
        console.log(obj);
        setCartList(obj.cart);
        Login(obj);
    };

    const LineAuth = () => {
        var URL = 'https://access.line.me/oauth2/v2.1/authorize?';
        URL += 'response_type=code';
        URL += '&client_id=1657236186';
        URL += '&redirect_uri=http://127.0.0.1:3000/member/data';
        URL += '&state=abcde';
        URL += '&scope=openid%20profile';
        window.location.href = URL;
    };

    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center bosi-bodybg">
                <div className="shadow mb-5 bg-body rounded rounded-3 bg-white">
                    <div
                        id="info-bar"
                        className="alert alert-info"
                        role="alert"
                        style={{ display: 'none' }}
                    >
                        123
                    </div>
                    <div className="bg-light p-3 rounded-top">
                        <h4 className="fw-semibold text-center m-0">
                            會員登入
                        </h4>
                    </div>
                    <form
                        className="form-signin px-5 pb-4 pt-3 mx-2"
                        name="form1"
                        method="post"
                        onSubmit={checkForm}
                    >
                        <label htmlFor="email" className="m-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control p-2 bg-light"
                            placeholder="會員帳號"
                        />
                        <label htmlFor="password" className="m-2">
                            密碼
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control p-2 bg-light"
                            placeholder="會員密碼"
                        />
                        <div className="checkbox m-3 text-end">
                            <label>
                                <a
                                    className="link-secondary text-decoration-none"
                                    href="#/"
                                >
                                    忘記密碼?
                                </a>
                            </label>
                        </div>
                        <div className="d-grid gap-2">
                            <button
                                className="btn btn btn-info btn-block"
                                type="submit"
                            >
                                登入
                            </button>
                            <button
                                className="btn btn btn-dark btn-block"
                                type="button"
                                onClick={() => {
                                    navigate('/member/signup', {
                                        replace: true,
                                    });
                                }}
                            >
                                立即加入會員
                            </button>
                        </div>
                        <p className="m-3 text-center">——— 其他方式登入 ———</p>
                        <div className="d-grid gap-2 col-10 mx-auto mb-2">
                            <button
                                className="btn btn btn-success btn-block"
                                onClick={LineAuth}
                            >
                                使用 LINE 帳號登入
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
