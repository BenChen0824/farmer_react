import './collections.css';
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';

function MemberCollections() {
    const [response, setResponse] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResult, setFilteredResult] = useState([]);
    const [filterCate, setFilterCate] = useState('');
    const [deleteStatus, setDeleteStatus] = useState(false);

    const category = ['請選擇分類', '蔬菜', '水果', '肉品', '海鮮', '餐點', '客製化餐點'];

    const loginUser = JSON.parse(localStorage.getItem('auth'));

    const getCollections = async () => {
        const r = await fetch('http://localhost:3600/member/collections', {
            headers: { loginUser: loginUser.customer_id },
        });
        const obj = await r.json();
        setResponse(obj);
        console.log(obj)
    };

    useEffect(() => {
        getCollections();
    }, [deleteStatus]);

    function searchItems(searchValue) {
        setSearchInput(searchValue);
        if (searchValue !== '') {
            const filteredData = response.filter((item) => {
                return Object.values(item)
                    .join('')
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            setFilteredResult(filteredData);
        } else {
            setFilteredResult(response);
        }
    }

    function searchCategory(searchValue) {
        setFilterCate(searchValue);
        if (searchValue > 0) {
            const filteredData = response.filter((item) => {
                return item.product_type == searchValue;
            });
            setFilteredResult(filteredData);
        } else {
            setFilteredResult(response);
        }
    }

    const deleteProduct = async (event) => {
        setDeleteStatus(false);
        const r = await fetch('http://localhost:3600/member/deleteproduct', {
            method: 'DELETE',
            headers: {
                member_id: loginUser.customer_id,
                product_id: event.target.id,
            },
        });
        const obj = await r.json();
        console.log(obj);
        setDeleteStatus(true);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <MemberNavbar />
                    <div className="col-9">
                        <div className="container">
                            <h2 className="text-center fw-bold m-3">
                                已收藏商品
                            </h2>
                            <div className="row justify-content-center">
                                <form className="d-flex col-8 mb-3">
                                    <select
                                        className="form-select mx-2"
                                        value={filterCate}
                                        onChange={(e) => {
                                            searchCategory(e.target.value);
                                        }}
                                    >
                                        {category.map((v, i) => {
                                            return (
                                                <option value={i} key={i}>
                                                    {v}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <input
                                        className="form-control me-2"
                                        id="text"
                                        type="search"
                                        name="search"
                                        placeholder="請搜尋商品名稱"
                                        aria-label="search"
                                        onChange={(e) => {
                                            searchItems(e.target.value);
                                        }}
                                    />
                                    <button
                                        className="btn btn-outline-success"
                                        type="submit"
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                {searchInput.length >= 1 ||
                                filterCate.length >= 1
                                    ? filteredResult.map((res) => (
                                          <div
                                              className="card p-2 bdr m-1 shadow-sm"
                                              val={res.member_id}
                                              style={{ width: '16rem' }}
                                              key={res.product_id}
                                          >
                                              <div className="position-absolute top-0 end-0">
                                                  <button
                                                      id={res.product_id}
                                                      className="btn btn-sm btn-light rounded-circle py-1 lh-1 boc-lineheight text-end"
                                                      onClick={deleteProduct}
                                                  >
                                                      ×
                                                  </button>
                                              </div>
                                              <img
                                                  src={'/images/' + JSON.parse(res.product_img)[0]}
                                                  className="card-img-top boc-objft"
                                                  width="200px"
                                                  height="175px"
                                                  alt="..."
                                              />
                                              <div className="card-body text-center">
                                                  <p
                                                      style={{
                                                          display: 'none',
                                                      }}
                                                  >
                                                      {res.product_type}
                                                  </p>
                                                  <h5 className="card-title">
                                                      {res.product_name}
                                                  </h5>
                                                  <p className="card-text boc-multiline-ellipsis">
                                                      {res.product_details}
                                                  </p>
                                                  <p className="card-text">
                                                      $ {res.product_price}
                                                  </p>
                                              </div>
                                          </div>
                                      ))
                                    : response.map((res) => (
                                          <div
                                              className="card p-2 bdr m-1 shadow-sm"
                                              style={{ width: '16rem' }}
                                              val={res.member_id}
                                              key={res.product_id}
                                          >
                                              <div className="position-absolute top-0 end-0">
                                                  <button
                                                      id={res.product_id}
                                                      className="btn btn-sm btn-light rounded-circle fs-6 px-1 boc-lineheight text-end"
                                                      onClick={deleteProduct}
                                                  >
                                                      ×
                                                  </button>
                                              </div>
                                              <img
                                                  src={'/images/' + JSON.parse(res.product_img)[0]}
                                                  className="card-img-top boc-objft"
                                                  width="200px"
                                                  height="175px"
                                                  alt="..."
                                              />
                                              <div className="card-body text-center">
                                                  <h5 className="card-title">
                                                      {res.product_name}
                                                  </h5>
                                                  <p
                                                      style={{
                                                          display: 'none',
                                                      }}
                                                  >
                                                      {res.product_type}
                                                  </p>
                                                  <p className="card-text boc-multiline-ellipsis">
                                                      {res.product_details}
                                                  </p>
                                                  <p className="card-text">
                                                      $ {res.product_price}
                                                  </p>
                                              </div>
                                          </div>
                                      ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberCollections;
