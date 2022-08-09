import './orders.css';
import { useState, useEffect } from 'react';
import MemberNavbar from '../component/memberCenter_Navbar';

function MemberOrders() {
    const [response, setResponse] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResult, setFilteredResult] = useState([]);
    const [filterCate, setFilterCate] = useState('');

    const category = ['已完成付款', '出貨中', '已送達'];

    const loginUser = JSON.parse(localStorage.getItem('auth'));

    const getOrders = async () => {
        const r = await fetch('http://localhost:3600/member/orders', {
            headers: { loginUser: loginUser.customer_id },
        });
        const obj = await r.json();
        setResponse(obj);
        console.log(obj);
    };
    const totalOrders = async () => {
        const r = await fetch('http://localhost:3600/member/orderlist', {
            headers: { loginUser: loginUser.customer_id },
        });
        const obj = await r.json();
        setOrderList(obj);
        console.log(obj);
    };

    useEffect(() => {
        getOrders();
        totalOrders();
    }, []);

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
        if (searchValue !== '') {
            const filteredData = orderList.filter((item) => {
                return Object.values(item)
                    .join('')
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            setFilteredResult(filteredData);
        } else {
            setFilteredResult(orderList);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <MemberNavbar />
                    <div className="col-9">
                        <div className="container">
                            <h2 className="text-center fw-bold m-3">
                                訂單查詢
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
                                        <option value="">請選擇狀態</option>
                                        {category.map((v, i) => {
                                            return (
                                                <option value={v} key={i}>
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
                        <div className="container row justify-content-center">
                            {searchInput.length >= 1 || filterCate.length >= 1
                                ? filteredResult.map((res) => (
                                      <div
                                          className="card p-4 col-10 shadow-sm mb-4"
                                          key={res.order_no}
                                      >
                                          <table className="table text-center caption-top mb-0">
                                              <caption>
                                                  <h5>
                                                      訂單日期：
                                                      {res.created_time}
                                                  </h5>
                                              </caption>
                                              <thead className="table-dark">
                                                  <tr>
                                                      <th scope="col">
                                                          商品圖片
                                                      </th>
                                                      <th scope="col">
                                                          商品/編號
                                                      </th>
                                                      <th scope="col">數量</th>
                                                      <th scope="col">
                                                          商品金額
                                                      </th>
                                                      <th scope="col">
                                                          訂單狀態
                                                      </th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  {response
                                                      .filter((v) => {
                                                          return (
                                                              v.order_no ===
                                                              res.order_no
                                                          );
                                                      })
                                                      .map((v2, i2) => {
                                                          return (
                                                              <tr
                                                                  key={
                                                                      v2.product_id
                                                                  }
                                                              >
                                                                  <td className="align-middle">
                                                                      <div className="bg-light ratio ratio-1x1 rounded">
                                                                          <img
                                                                              className="card-img boo-objft"
                                                                              src={
                                                                                  '/images/' +
                                                                                  JSON.parse(
                                                                                      v2.product_img
                                                                                  )[0]
                                                                              }
                                                                              alt=""
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          {
                                                                              v2.product_name
                                                                          }
                                                                      </p>
                                                                      <p>
                                                                          商品編號-
                                                                          {
                                                                              v2.product_id
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          {
                                                                              v2.product_count
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          $
                                                                          {
                                                                              v2.product_price
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          {
                                                                              v2.order_status
                                                                          }
                                                                      </p>
                                                                  </td>
                                                              </tr>
                                                          );
                                                      })}
                                              </tbody>
                                              <tfoot>
                                                  <tr>
                                                      <td
                                                          colSpan="4"
                                                          className="text-end border-0"
                                                      >
                                                          <h5>訂單編號：</h5>
                                                      </td>
                                                      <td className="border-0">
                                                          <h5>
                                                              {res.order_no}
                                                          </h5>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td
                                                          colSpan="4"
                                                          className="text-end border-0 py-0"
                                                      >
                                                          <h5>訂單總金額：</h5>
                                                      </td>
                                                      <td className="border-0 py-0">
                                                          <h5>
                                                              ${' '}
                                                              {
                                                                  res.product_amount_total
                                                              }
                                                          </h5>
                                                      </td>
                                                  </tr>
                                              </tfoot>
                                          </table>
                                      </div>
                                  ))
                                : orderList.map((res) => (
                                      <div
                                          className="card p-4 col-10 shadow-sm mb-4"
                                          key={res.order_no}
                                      >
                                          <table className="table text-center caption-top mb-0">
                                              <caption>
                                                  <h5>
                                                      訂單日期：
                                                      {res.created_time}
                                                  </h5>
                                              </caption>
                                              <thead className="table-dark">
                                                  <tr>
                                                      <th scope="col">
                                                          商品圖片
                                                      </th>
                                                      <th scope="col">
                                                          商品/編號
                                                      </th>
                                                      <th scope="col">數量</th>
                                                      <th scope="col">
                                                          商品金額
                                                      </th>
                                                      <th scope="col">
                                                          訂單狀態
                                                      </th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  {response
                                                      .filter((v) => {
                                                          return (
                                                              v.order_no ===
                                                              res.order_no
                                                          );
                                                      })
                                                      .map((v2, i2) => {
                                                          return (
                                                              <tr
                                                                  key={
                                                                      v2.product_id
                                                                  }
                                                              >
                                                                  <td className="align-middle">
                                                                      <div className="bg-light ratio ratio-1x1 rounded">
                                                                          <img
                                                                              className="card-img boo-objft"
                                                                              src={
                                                                                  '/images/' +
                                                                                  JSON.parse(
                                                                                      v2.product_img
                                                                                  )[0]
                                                                              }
                                                                              alt=""
                                                                          />
                                                                      </div>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          {
                                                                              v2.product_name
                                                                          }
                                                                      </p>
                                                                      <p>
                                                                          商品編號-
                                                                          {
                                                                              v2.product_id
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          {
                                                                              v2.product_count
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          $
                                                                          {
                                                                              v2.product_price
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td className="align-middle">
                                                                      <p>
                                                                          {
                                                                              v2.order_status
                                                                          }
                                                                      </p>
                                                                  </td>
                                                              </tr>
                                                          );
                                                      })}
                                              </tbody>
                                              <tfoot>
                                                  <tr>
                                                      <td
                                                          colSpan="4"
                                                          className="text-end border-0"
                                                      >
                                                          <h5>訂單編號：</h5>
                                                      </td>
                                                      <td className="border-0">
                                                          <h5>
                                                              {res.order_no}
                                                          </h5>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td
                                                          colSpan="4"
                                                          className="text-end border-0 py-0"
                                                      >
                                                          <h5>訂單總金額：</h5>
                                                      </td>
                                                      <td className="border-0 py-0">
                                                          <h5>
                                                              ${' '}
                                                              {
                                                                  res.product_amount_total
                                                              }
                                                          </h5>
                                                      </td>
                                                  </tr>
                                              </tfoot>
                                          </table>
                                      </div>
                                  ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberOrders;
