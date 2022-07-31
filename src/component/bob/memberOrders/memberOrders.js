import './orders.css'
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';


function MemberOrders(){
    const [response, setResponse] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [filteredResult, setFilteredResult] = useState([])
    const [filterCate, setFilterCate] = useState('')

    const category = ['已付款','出貨中','已送達']

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
                        <div className="container">
                            <h2 className="text-center fw-bold m-3">訂單查詢</h2>
                            <div className="row justify-content-center">
                                <form className="d-flex col-8 mb-3">
                                    <select className="form-select mx-2" value={filterCate} onChange={(e)=>{searchCategory(e.target.value)}}>
                                        <option value="">請選擇狀態</option>
                                        {category.map((v,i)=>{
                                            return (
                                                <option value={v} key={i}>{v}</option>
                                            )
                                        })}
                                    </select>
                                    <input className="form-control me-2" id="text" type="search" name="search" placeholder="請搜尋商品名稱" aria-label="search" onChange={(e)=>{searchItems(e.target.value)}}/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="container row justify-content-center">
                            <div className="card p-4 col-10 shadow-sm">
                                <table className="table text-center caption-top mb-0">
                                    <caption><h5>訂單日期：2022-08-24</h5></caption>
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">商品圖片</th>
                                            <th scope="col">商品/供應商/編號</th>
                                            <th scope="col">數量</th>
                                            <th scope="col">商品金額</th>
                                            <th scope="col">訂單狀態</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle">
                                                <div className="bg-light ratio ratio-1x1 rounded">
                                                    <img className="card-img boo-objft" src="upload/f_apple.png" alt=""/>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <p>蘋果</p>
                                                <p>台南eason農場</p>
                                                <p>F12345678</p>
                                            </td>
                                            <td className="align-middle">
                                                <p>2</p>
                                            </td>
                                            <td className="align-middle">
                                                <p>$300/袋</p>
                                            </td>
                                            <td className="align-middle">
                                                <p>已付款</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="4" className="text-end border-0"><h5>訂單編號：</h5></td>
                                            <td className="border-0"><h5>F123456</h5></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" className="text-end border-0 py-0"><h5>訂單總金額：</h5></td>
                                            <td className="border-0 py-0"><h5>$ 300</h5></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MemberOrders;