import './signUp.css'
import { useNavigate } from 'react-router-dom'

function SignUp(){

    const navigate = useNavigate()

    function Login(obj){
        if(obj.success){
            alert('恭喜註冊成功')
            navigate('/member/verify', {replace:true})
        } else {
            alert('請填寫正確資料')
        }
    }
    
    const checkForm = async (event)=>{
        event.preventDefault();
        const data = {
            username: document.form1.username.value,
            email: document.form1.email.value,
            password: document.form1.password.value
        };

        const r = await fetch('http://localhost:3600/member/signup',{
            method:'post',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const obj = await r.json()
        console.log(obj)
        Login(obj)
    }

    return (
    <>
        <div className='vh-100 d-flex justify-content-center align-items-center bosu-bodybg'>
            <div className='shadow mb-5 bg-body rounded rounded-3 bg-white'>
                <div id="info-bar" className="alert alert-info" role="alert" style={{display:'none'}}>
                123
                </div>
                <div className="bg-light p-3 rounded-top">
                        <h4 className="fw-semibold text-center m-0">加入會員</h4>
                </div>
                <form className="form-signin px-5 pb-4 pt-3 mx-2" name="form1" method="post" onSubmit={checkForm}>
                    <label htmlFor="username" className="sr-only m-2">姓名</label>
                    <input type="text" id="username" name="username" className="form-control p-2 bg-light" placeholder="請輸入您的姓名"/>
                    <label htmlFor="email" className="sr-only m-2">E-mail</label>
                    <input type="email" id="email" name="email" className="form-control p-2 bg-light" placeholder="請輸入您的E-mail"/>
                    <label htmlFor="password" className="sr-only m-2">密碼</label>
                    <input type="password" id="password" name="password" className="form-control p-2 bg-light" placeholder="請輸入您的密碼"/>
                    <label htmlFor="checkPassword" className="sr-only m-2">確認密碼</label>
                    <input type="password" id="checkPassword" name="checkPassword" className="form-control p-2 bg-light" placeholder="再次確認密碼"/>
                    <div className="d-grid gap-2 my-4">
                        <button 
                        className="btn btn btn-success btn-block" type="submit">加入會員</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
};

export default SignUp;