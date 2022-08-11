import './activity.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Activity() {
    const navigate = useNavigate();
    const goToPath = (sid) => {
        navigate(`/activity/${sid}`);
    };
    const [data, setData] = useState([
        {
            sid: '',
            company_id: '',
            card_img: '',
            card_area: '',
            card_city: '',
            card_info: '',
            card_a: '',
            card_b: '',
        },
    ]);

    const getdata = async () => {
        const response = await axios.get(
            'http://localhost:3600/activity/getdata'
        );
        console.log(response);
        setData(response.data);
    };
    useEffect(() => {
        getdata();
    }, []);


    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4 text-white mytext ">
                    慢遊臺灣農旅行 休閒農業區好好玩
                </h1>
            </div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center pb-4">
                            <hr className="w-25" />
                            <h2 className="px-5">熱門活動</h2>
                            <hr className="w-25" />
                        </div>
                    </div>
                    <div className="row">
                        {data
                            ? data.map((row) => (
                                  <div
                                      className="col-12 col-md-4 g-3 "
                                      key={'mm' + row.sid}
                                  >
                                      <div className="col px-2">
                                          <div
                                              className="card shadow-sm "
                                              style={{
                                                  width: '100%',
                                              }}
                                          >
                                              <img
                                                  className=""
                                                  style={{
                                                      Width: '100%',
                                                  }}
                                                  src={`/images/activity/${row.card_img}`}
                                                  alt=""
                                              />
                                              <div className="card-body  ">
                                                  <div className="text-center pb-2">
                                                      <h5 className="mb-0">{`${row.card_area}`}</h5>
                                                      <div className="mb-1 text-muted">{`${row.card_city}`}</div>
                                                  </div>
                                                  <p className="card-text pinp  ">
                                                      {`${row.card_info}`}
                                                  </p>
                                                  <ul className="list-group list-group-flush pt-4 ">
                                                      <li>
                                                          建議行程：
                                                          <ul className="pt-1">
                                                              <li>
                                                                  {`${row.card_a}`}
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li className="pt-3 ">
                                                          體驗活動：
                                                          <ul className="pt-1 ">
                                                              <li>
                                                                  {`${row.card_b}`}
                                                              </li>
                                                          </ul>
                                                      </li>
                                                  </ul>
                                                  <div className="d-flex justify-content-end align-items-center pt-2">
                                                      <div className="btn-group ">
                                                          <button
                                                              type="button"
                                                              className="btn btn-sm btn-outline-secondary"
                                                              onClick={() =>
                                                                  goToPath(
                                                                      `${row.sid}`
                                                                  )
                                                              }
                                                          >
                                                              詳細資訊
                                                          </button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Activity;
