import './level.css'
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';


function MemberLevel(){
    const [response, setResponse] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [filteredResult, setFilteredResult] = useState([])
    const [filterCate, setFilterCate] = useState('')

    const category = ['已結束','即將到來','進行中']

    const loginUser = JSON.parse(localStorage.getItem("auth"))

    const getCollections = async ()=>{
        const r = await fetch('http://localhost:7000/member_collections',{ headers: {loginUser: loginUser.customer_id}})
        const obj = await r.json()
        setResponse(obj)
    }

    useEffect(()=>{
        getCollections()
        }, [])

    function searchItems (searchValue){
        setSearchInput(searchValue)
        if (searchValue !== '') {
            const filteredData = response.filter((item)=>{
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResult(filteredData)
        } else {
            setFilteredResult(response)
        }
    }

    function searchCategory(searchValue){
        setFilterCate(searchValue)
        if (searchValue !== '') {
            const filteredData = response.filter((item)=>{
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResult(filteredData)
        } else {
            setFilteredResult(response)
        }
    }
    
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MemberLevel;