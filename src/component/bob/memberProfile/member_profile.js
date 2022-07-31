import './profile.css'
import { useState, useRef } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';


function MemberProfile(){
    
    const hiddenFileInput = useRef('')
    const [image, setImage] = useState({preview:'', data:''})

    const handleClick = (event) => {
        hiddenFileInput.current.click()
    }

    function handleSubmit(upimg){
        const fd = new FormData()
        fd.append('file', upimg.data)

        fetch('http://localhost:7000/member_profile', {
            method: 'post',
            body: fd,
        }).then(r=>r.json())
        .then(obj=>console.log(obj))
    }

    function handleOnChange (event) {
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
          }

        setImage(img)
        handleSubmit(img)
    }

    return(
        <>  
            <div className="container">
                <div className="row">
                <MemberNavbar />
                <div className="col-9">
                    <div className="container justify-content-around align-items-center">
                        <h2 className="text-center fw-bold m-3">個人檔案</h2>
                        <div className='row justify-content-center'>
                            <div className='card mb-3 text-white bg-dark shadow-sm' style={{maxWidth: '540px'}}>
                                <div className='row g-0 p-2'>
                                    <div className='position-absolute'>
                                        <form style={{display:'none'}} onSubmit={handleSubmit}>
                                            <input id="inputData" name="file" type="file"
                                            ref={hiddenFileInput} 
                                            accept="image/*" 
                                            onChange={handleOnChange} 
                                            />
                                        </form>
                                        <button className="btn btn-sm btn-outline-light rounded-circle lh-1 p-0" onClick={handleClick}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-camera-fill m-1" viewBox="0 0 16 16">
                                                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                                                </svg>
                                        </button>
                                    </div>
                                    <div className="col-md-4 bop-w150 bop-h150 p-2">
                                        <img className="img-fluid border border-white border-2 rounded-circle w-100 h-100 bop-objft" src={image.preview ? image.preview : '/member_imgs/user.png'} alt="123"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <button type="button" className="btn btn-success btn-sm m-1">粉絲追蹤</button>
                                            <button type="button" className="btn btn-success btn-sm m-1">食譜發表</button>
                                            <p className="card-text">會員暱稱</p>
                                            <p className="card-text">自我介紹</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
    
};

export default MemberProfile;