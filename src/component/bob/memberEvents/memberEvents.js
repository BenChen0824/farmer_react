import './events.css'
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';


function MemberEvents(){
    const [response, setResponse] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [filteredResult, setFilteredResult] = useState([])
    const [filterCate, setFilterCate] = useState('')

    const category = ['已結束','即將到來','進行中']

    const loginUser = JSON.parse(localStorage.getItem("auth"))

    // const getCollections = async ()=>{
    //     const r = await fetch('http://localhost:3600/events',{ headers: {loginUser: loginUser.customer_id}})
    //     const obj = await r.json()
    //     setResponse(obj)
    // }

    // useEffect(()=>{
    //     getCollections()
    //     }, [])

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
                        <div className="container">
                            <h2 className="text-center fw-bold m-3">我的活動</h2>
                            <div className="row justify-content-center">
                                <form className="d-flex col-sm-7 mb-3">
                                    <select className="form-select mx-2 shadow-none" value={filterCate} onChange={(e)=>{searchCategory(e.target.value)}}>
                                        <option value="">請選擇活動狀態</option>
                                        {category.map((v,i)=>{
                                            return (
                                                <option value={v} key={i}>{v}</option>
                                            )
                                        })}
                                    </select>
                                    <div className="border rounded col-sm-7 d-flex align-items-center">
                                        <input className="form-control me-2 shadow-none border-0" id="text" type="search" name="search" placeholder="請搜尋活動名稱" aria-label="search" onChange={(e)=>{searchItems(e.target.value)}}/>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search col-sm-2" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container row justify-content-center">
                            <div className="card mb-3 shadow-sm" style={{maxWidth: "640px"}}>
                                <div className="row">
                                    <div className="col-4 p-0">
                                        <img src="upload/activities_1.jpg" className="img-fluid rounded-start h-100 boe-objft" alt=""/>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <dl className="row border-bottom mx-0">
                                                <dt className="col-6 p-0">
                                                    <h5 className="card-title">小小果農一日體驗</h5>
                                                </dt>
                                                <dd className="col-6 text-end p-0">
                                                    <h5 className="card-title mb-0">$ 1,200</h5>
                                                </dd>
                                            </dl>
                                            <p className="card-text lh-sm boe-multiline-ellipsis">說曙光玫瑰農場是為玫瑰而生一點也不誇張，老闆因為愛玫瑰成癡，在阿里山下建立5公頃的有機玫瑰園。曙光有機玫瑰以樹玫瑰為主，園區內玫瑰品種超過百種，並發展出獨特的玫瑰導覽，透過感官體驗，聽玫瑰故事、用舌尖、鼻子和手指感受玫瑰全方位的優雅，紓解身心的壓力與煩惱。此外，還有玫瑰足湯舒壓體驗，將腳伸入灑滿玫瑰花瓣的水桶，讓疲倦在水中和淡淡的花香中解放，也可以將玫瑰足浴包帶回家使用。
                                            </p>
                                            <dl className="row m-0">
                                                <dt className="col-4 p-0">
                                                    <p className="card-text boe-farmColor">屏東xxx農場</p>
                                                </dt>
                                                <dd className="col-8 text-end p-0 m-0">
                                                    <p className="card-text">2022-08-24｜9:00 - 17:00</p>
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

export default MemberEvents;