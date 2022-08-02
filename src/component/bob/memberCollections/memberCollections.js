import './collections.css';
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';


function MemberCollections(){
    const [response, setResponse] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [filteredResult, setFilteredResult] = useState([])
    const [filterCate, setFilterCate] = useState('')

    const category = ['蔬菜','海鮮','水果']

    const loginUser = JSON.parse(localStorage.getItem("auth"))

    const getCollections = async ()=>{
        const r = await fetch('http://localhost:3600/member/collections',{ headers: {loginUser: loginUser.customer_id}})
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
                            <h2 className="text-center fw-bold m-3">已收藏商品</h2>
                            <div className="row justify-content-center">
                                <form className="d-flex col-8 mb-3">
                                    <select className="form-select mx-2" value={filterCate} onChange={(e)=>{searchCategory(e.target.value)}}>
                                        <option value="">請選擇分類</option>
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
                        <div className="container">
                            <div className="row justify-content-center">
                            {searchInput.length >= 1 || filterCate.length >=1 ? 
                            (filteredResult.map((res)=>
                                <div className="card p-2 bdr m-1 shadow-sm" val={res.customer_id} style={{width: '16rem'}} key={res.product_id}>
                                    <img src={`upload/${res.product_img}`} className="card-img-top boc-objft" width="200px" height="175px" alt="..."/>
                                    <div className="card-body text-center">
                                        <p style={{display:'none'}}>{res.product_type}</p>
                                        <h5 className="card-title">{res.product_name}</h5>
                                        <p className="card-text">{res.product_source}</p>
                                        <p className="card-text">{res.product_price}</p>
                                    </div>
                                </div>
                            ))
                            : 
                            (response.map((res)=>
                                <div className="card p-2 bdr m-1 shadow-sm" style={{width: '16rem'}} val={res.customer_id} key={res.product_id}>
                                    <img src={`upload/${res.product_img}`} className="card-img-top objft" width="200px" height="175px" alt="..."/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{res.product_name}</h5>
                                        <p className="card-text">{res.product_source}</p>
                                        <p className="card-text">{res.product_price}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MemberCollections;