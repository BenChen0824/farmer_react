import './Activity.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Activity() {
    const [data, setData] = useState([
        {
            activity_img: '',
            activity_ad: '',
            activity_adm: '',
            activity_schedule1: '',
            activity_schedule2: '',
            activity_schedule3: '',
            activity_schedule4: '',
            activity_schedule5: '',
            activity_schedule6: '',
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
                                      key={'mm' + row.id}
                                  >
                                      <div className="col px-2">
                                          <div
                                              className="card shadow-sm style={{
                                                      Width: '100%'
                                                  }}"
                                          >
                                              <img
                                                  className=""
                                                  style={{
                                                      Width: '100%',
                                                      height: '100%',
                                                  }}
                                                  src={`/imgs/${row.activity_img}`}
                                                  alt=""
                                              />
                                              <div className="card-body  ">
                                                  <div className="text-center pb-2">
                                                      <h5 className="mb-0">{`${row.activity_ad}`}</h5>
                                                      <div className="mb-1 text-muted">{`${row.activity_adm}`}</div>
                                                  </div>
                                                  <p className="card-text pinp  ">
                                                      {`${row.activity_info}`}
                                                  </p>
                                                  <ul className="list-group list-group-flush pt-4 ">
                                                      <li>
                                                          建議行程：
                                                          <ul className="pt-1">
                                                              <li>
                                                                  {`${row.activity_schedule1}`}
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li className="pt-3 ">
                                                          體驗活動：
                                                          <ul className="pt-1 ">
                                                              <li>
                                                                  {`${row.activity_schedule2}`}
                                                              </li>
                                                          </ul>
                                                      </li>
                                                  </ul>
                                                  <div className="d-flex justify-content-end align-items-center pt-2">
                                                      <div className="btn-group ">
                                                          <button
                                                              type="button"
                                                              className="btn btn-sm btn-outline-secondary"
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
