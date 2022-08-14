import React, { useState, useEffect } from 'react';
import './News.css';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const News = () => {
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
            <h2 className="justify-content-center d-flex mt-5">
                最新消息 / News
            </h2>

            <div className=" news_group d-flex mt-5 justify-content-center container">
                <div className="news_card  mx-3 col-3">
                    <img src="./index_images/main_banner_04.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card_title">黃金小鎮休閒農業區</h5>
                        <h5 className="card_title">屏東市</h5>
                        <h5 className="">2022-05-14</h5>
                        <p className="card-text">
                            產、官、學共同合作典範，組織極具整合、發展共識，營運良好；善用生態、農業及觀光資源；體驗活動、遊程持續創新，帶動區域穩定成長、共好。
                        </p>
                        <a href="/#" className="btn btn-primary ">
                            活動詳情
                        </a>
                    </div>
                </div>
                <div className="news_card  mx-3 col-3">
                    <img src="./index_images/main_banner_04.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card_title">黃金小鎮休閒農業區</h5>
                        <h5 className="card_title">屏東市</h5>
                        <h5 className="">2022-05-14</h5>
                        <p className="card-text">
                            產、官、學共同合作典範，組織極具整合、發展共識，營運良好；善用生態、農業及觀光資源；體驗活動、遊程持續創新，帶動區域穩定成長、共好。
                        </p>
                        <a href="/#" className="btn btn-primary ">
                            活動詳情
                        </a>
                    </div>
                </div>
                <div className="news_card  mx-3 col-3">
                    <img src="./index_images/main_banner_04.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card_title">黃金小鎮休閒農業區</h5>
                        <h5 className="card_title">屏東市</h5>
                        <h5 className="">2022-05-14</h5>
                        <p className="card-text">
                            產、官、學共同合作典範，組織極具整合、發展共識，營運良好；善用生態、農業及觀光資源；體驗活動、遊程持續創新，帶動區域穩定成長、共好。
                        </p>
                        <a href="/#" className="btn btn-primary ">
                            活動詳情
                        </a>
                    </div>
                </div>
                <div className="news_card  mx-3 col-3">
                    <img src="./index_images/main_banner_04.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card_title">黃金小鎮休閒農業區</h5>
                        <h5 className="card_title">屏東市</h5>
                        <h5 className="">2022-05-14</h5>
                        <p className="card-text">
                            產、官、學共同合作典範，組織極具整合、發展共識，營運良好；善用生態、農業及觀光資源；體驗活動、遊程持續創新，帶動區域穩定成長、共好。
                        </p>
                        <a href="/#" className="btn btn-primary ">
                            活動詳情
                        </a>
                    </div>
                </div>
            </div>

            {/* {data
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
                                                  <li>{`${row.card_a}`}</li>
                                              </ul>
                                          </li>
                                          <li className="pt-3 ">
                                              體驗活動：
                                              <ul className="pt-1 ">
                                                  <li>{`${row.card_b}`}</li>
                                              </ul>
                                          </li>
                                      </ul>
                                      <div className="d-flex justify-content-end align-items-center pt-2">
                                          <div className="btn-group ">
                                              <button
                                                  type="button"
                                                  className="btn btn-sm btn-outline-secondary"
                                                  onClick={() =>
                                                      goToPath(`${row.sid}`)
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
                : null} */}

            <div className="news_arrow_btn">
                <FiArrowLeftCircle size={50} />
                <FiArrowRightCircle size={50} />
            </div>
        </>
    );
};

export default News;
