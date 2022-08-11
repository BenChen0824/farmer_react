import './activitydata.css';
import Slider from 'react-slick';
// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ActivityData() {
    let { sid } = useParams();
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
    };
    const [data, setData] = useState([
        {
            sid: '',
            company_id: '',
            card_img: '',
            address: '',
            phone: '',
            fax: '',
            card_area: '',
            card_city: '',
            card_info: '',
            card_info1: '',
            card_info2: '',
            card_info3: '',
            card_info4: '',
            card_info5: '',
            card_a: '',
            card_b: '',
            card_c: '',
            card_d: '',
            Map_a: '',
            Map_b: '',
        },
    ]);

    const getdata = async () => {
        fetch('http://localhost:3600/activity/activitydata', {
            method: 'GET',
            headers: { sid: sid },
        })
            .then((r) => r.json())
            .then((obj) => {
                console.log(obj);
                setData(obj);
            });
        // console.log(response);
        // setData(response.data);
    };
    console.log(data);
    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className="container pt-4">
                {data
                    ? data.map((row) => (
                          <div className="row" key={'mm' + row.sid}>
                              <div className="region">{`${row.card_city}`}</div>
                              <div className="d-flex flex-wrap">
                                  <h2 className="article-head-title ">
                                      {`${row.card_area}`}
                                  </h2>
                              </div>
                              <div className="article-info row mb-4">
                                  <div className="col-md-8 mb-3 pt-3">
                                      <div>
                                          <Slider {...settings}>
                                              <div className="">
                                                  <img
                                                      src="/images/activity/1.jpg"
                                                      className="d-block w-100"
                                                      alt=""
                                                  />
                                              </div>
                                              <div>
                                                  <img
                                                      src="/images/activity/2.jpg"
                                                      className="d-block w-100"
                                                      alt=""
                                                  />
                                              </div>
                                              <div>
                                                  <img
                                                      src="/images/activity/3.jpg"
                                                      className="d-block w-100"
                                                      alt=""
                                                  />
                                              </div>
                                          </Slider>
                                      </div>
                                      {/* <img
                            src="./imgs/1.jpg"
                            className="d-block w-100"
                            alt=""
                        /> */}
                                  </div>
                                  <div className="col-md-4 d-flex flex-column">
                                      <div className="form-row">
                                          <div className="col-12 mb-3">
                                              <button
                                                  type="button"
                                                  className="btn btn-outline-success w-100"
                                              >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      fill="currentColor"
                                                      className="bi bi-heart me-3"
                                                      viewBox="0 0 16 16"
                                                  >
                                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                  </svg>
                                                  加入收藏
                                              </button>
                                          </div>
                                      </div>
                                      <dl className="form-group px-3 py-2  mb-2 round bg-light word-break-all">
                                          <dt>地址</dt>
                                          <dd
                                              style={{ paddingTop: '8px' }}
                                          >{`${row.address}`}</dd>
                                          <dt>電話</dt>
                                          <dd style={{ paddingTop: '8px' }}>
                                              {`${row.phone}`}{' '}
                                          </dd>
                                          <dt>傳真</dt>
                                          <dd
                                              style={{ paddingTop: '8px' }}
                                          >{`${row.fax}`}</dd>
                                      </dl>
                                      <div className="card">
                                          <h5 className="card-header">
                                              開放時間
                                          </h5>
                                          <ul className="list-group list-group-flush ">
                                              <li className="list-group-item d-flex">
                                                  <dt>星期一</dt>
                                                  <dd className="mx-3 m-0">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                              <li className="list-group-item d-flex">
                                                  <dt>星期二</dt>
                                                  <dd className="mx-3 m-0">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                              <li className="list-group-item d-flex">
                                                  <dt>星期三</dt>
                                                  <dd className="mx-3 m-0">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                              <li className="list-group-item d-flex">
                                                  <dt>星期四</dt>
                                                  <dd className="mx-3 m-0 ">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                              <li className="list-group-item d-flex">
                                                  <dt>星期五</dt>
                                                  <dd className="mx-3 m-0">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                              <li className="list-group-item d-flex">
                                                  <dt>星期六</dt>
                                                  <dd className="mx-3 m-0">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                              <li className="list-group-item d-flex">
                                                  <dt>星期日</dt>
                                                  <dd className="mx-3 m-0">
                                                      08:00 ~ 17:00
                                                  </dd>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="tabs">
                                      <div className="tab-2">
                                          <label htmlFor="tab2-1">
                                              活動詳細資訊
                                          </label>
                                          <input
                                              id="tab2-1"
                                              name="tabs-two"
                                              type="radio"
                                          />
                                          <div>
                                              <p className="">
                                                  {`${row.card_info1}`}
                                              </p>
                                              <p className="">
                                                  {`${row.card_info2}`}
                                              </p>
                                              <p className="">
                                                  {`${row.card_info3}`}
                                              </p>
                                              <p className="">
                                                  {`${row.card_info4}`}
                                              </p>
                                              <p className="">
                                                  {`${row.card_info5}`}
                                              </p>
                                              <h5 className="pt-3">體驗活動</h5>
                                              <div className="normal">
                                                  <p className="">
                                                      {`${row.card_a}`}
                                                  </p>
                                              </div>
                                              <h5 className="pt-3">遊覽景點</h5>
                                              <div className="normal">
                                                  <p className="">
                                                      {`${row.card_b}`}
                                                  </p>
                                              </div>
                                              <h5 className="pt-3">建議遊程</h5>
                                              <div className="normal">
                                                  <p className="">
                                                      {`${row.card_c}`}
                                                  </p>
                                              </div>
                                              <h5 className="pt-3">在地美食</h5>
                                              <div className="normal">
                                                  <p className="">
                                                      {`${row.card_d}`}
                                                  </p>
                                              </div>
                                              <h5 className="pt-3">
                                                  伴手禮與農特產
                                              </h5>
                                              <div className="">
                                                  <p className="">
                                                      {`${row.card_e}`}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="tab-2">
                                          <label htmlFor="tab2-2">地圖</label>
                                          <input
                                              id="tab2-2"
                                              name="tabs-two"
                                              type="radio"
                                          />
                                          <div>
                                              <iframe
                                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.8556041430024!2d120.8216862149935!3d24.38632608427973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469015ff3afd2a7%3A0xc7cb5bcf91be6511!2z6JaR6bq75ZyS!5e0!3m2!1szh-TW!2stw!4v1660065745595!5m2!1szh-TW!2stw"
                                                  width="100%"
                                                  height="550"
                                                  style={{ border: 'none' }}
                                                  allowFullScreen=""
                                                  loading="lazy"
                                                  referrerPolicy="no-referrer-when-downgrade"
                                              ></iframe>
                                              <div className="pt-5">
                                                  <span className="">
                                                      苗栗公館交流道下:
                                                  </span>
                                                  {`${row.Map_b}`}
                                                  <br />
                                                  往苗栗方向接東西向72號快速道路(行至盡頭靠右往大湖方向行駛)→接台三線於137.5公里處右轉→接苗130線(遊客服務中心位在苗130線26.5公里處左側)&nbsp;
                                                  <br />
                                                  <br />
                                                  <span>三義交流道下:</span>
                                                  <br />
                                                  右轉進入台13線(往三義市區方向)，經過三義木雕街至光復路，看到第二個天橋後第一個紅綠燈
                                                  (48k處)
                                                  即右轉，進入苗130線，直行至第二個叉路右轉往大湖方向，延著苗130線直行至26.5公里處右側即見遊客服務中心。
                                                  <br />
                                                  <br />
                                                  <span>國道四號:</span>
                                                  <br />
                                                  中山高轉國道４號至石岡終點左轉往東勢的方向,經石岡市區左轉過橋後往卓蘭方向→接台三線續行→於台三線137.5公里(即見富麗農村薑麻園入口意象指示牌)左轉接苗130線至26.5公里處(遊客服務中心)。
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </>
    );
}
export default ActivityData;
