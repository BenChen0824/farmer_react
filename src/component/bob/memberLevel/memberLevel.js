import './level.css'
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';
import axios from 'axios';

function MemberLevel(){
    const [myCoupons, setMyCoupons] = useState([]);
    
    const loginUser = JSON.parse(localStorage.getItem("auth"))

    const getCouponData = async ()=>{
        const response = await axios.get('http://localhost:3600/member/coupons', { headers: {loginUser: loginUser.customer_id}})
        setMyCoupons(response.data)
        console.log(response.data)
    }

    useEffect(()=>{
        getCouponData()
    },[])
    
    return (
        <>
        <div className="container">
            <div className="row">
                <MemberNavbar/>
                    <div className="col-9">
                        <div className="container row justify-content-center">
                            <h2 className="text-center fw-bold m-3">我的會員級別</h2>
                                <div className="card text-white bg-dark mb-3 shadow-sm" style={{maxWidth: "540px"}}>
                                    <div className="row">
                                        <div className="col-5 p-3">
                                            <img src="upload/gold.png" className="img-fluid rounded h-100 bol-objft" alt=""/>
                                        </div>
                                        <div className="col-7 m-auto p-0">
                                            <div className="card-body">
                                                <dl className="row border-bottom mx-0">
                                                    <dt className="col-6 p-0">
                                                        <h5 className="card-title">會員級別</h5>
                                                    </dt>
                                                    <dd className="col-6 text-end p-0">
                                                        <h5 className="card-title bol-farmColor mb-0">金卡會員</h5>
                                                    </dd>
                                                </dl>
                                                <dl className="row border-bottom mx-0">
                                                    <dt className="col-8 p-0">
                                                        <h5 className="card-title">年度累積消費</h5>
                                                    </dt>
                                                    <dd className="col-4 text-end p-0">
                                                        <h5 className="card-title bol-farmColor mb-0">$ 5,000</h5>
                                                    </dd>
                                                </dl>
                                                <dl className="row m-0">
                                                    <dt className="col-4 p-0">
                                                        <h5 className="card-text">我的點數</h5>
                                                    </dt>
                                                    <dd className="col-8 text-end p-0 m-0">
                                                        <h5 className="card-text bol-farmColor">50</h5>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <h2 className="text-center fw-bold m-3">我的優惠券</h2>
                                <div className="container col-9 mt-2">
                                    <div className="row justify-content-center">
                                    {myCoupons.map((v,i)=>{
                                        return(
                                            <div className="bol-couponCss mb-3" style={{maxWidth: "420px"}} key={v.sid}>
                                            <div className="d-flex">
                                                <div className="col-5 p-3">
                                                    <img src={v.change_img} className="img-fluid rounded-start h-100 boe-objft" alt=""/>
                                                </div>
                                                <div className="col-8 d-flex align-items-center">
                                                    <div className="card-body">
                                                        <h2 className="bol-goldText">{v.change_coupon}</h2>
                                                        <h6 className="text-light">兌換時間：{v.change_time}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MemberLevel;