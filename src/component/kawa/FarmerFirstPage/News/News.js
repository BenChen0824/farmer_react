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
        window.scroll(0, 0);
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
        // const obj = await response.data.json();
        const newArrayToShow = response.data.map((v) => {
            return { ...v, card_img: JSON.parse(v.card_img) };
        });
        console.log(newArrayToShow);
        setData(newArrayToShow);
    };
    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <h2 className="justify-content-center d-flex mt-5">
                最新活動 / News
            </h2>

            <div className=" news_group mt-5 justify-content-center container ">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-xl-3">
                        <div className="news_card  mx-3  d-flex flex-column">
                            <img src="/images/activity/1.activity.jpg" alt="" />
                            <div className="card-body mt-3">
                                <h5 className="card_title">
                                    金小鎮休閒農業區{' '}
                                </h5>
                                <h5 className="card_title mb-3">
                                    苗栗縣 公館鄉
                                </h5>
                                <p className="card-text  flex-frow-1">
                                    芋頭、紅棗等主要農特產開發多元農遊商品，青農返鄉密度高，鏈結大學生駐地創新經營及國際志工、青年壯遊等，注入創新及國際化新思維，展現組織活力。
                                </p>
                            </div>
                            <a
                                href="/#"
                                className="btn btn-primary po_buttonColor"
                            >
                                活動詳情
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-xl-3">
                        <div className="news_card  mx-3  d-flex flex-column">
                            <img src="/images/activity/2.activity.jpg" alt="" />
                            <div className="card-body flex-frow-1 mt-3">
                                <h5 className="card_title">梨之鄉休閒農業區</h5>
                                <h5 className="card_title mb-3">
                                    臺中市 東勢區
                                </h5>

                                <p className="card-text">
                                    高接梨的發源地，運用梨、甜柿、柑橘及賞螢，發展四季採果及生態遊程；辦理客家媽媽料理廚房，開發多項水果DIY料理，結合推廣食農教育，吸引國際遊客到訪與認養梨樹，成果豐碩。
                                </p>
                            </div>
                            <a
                                href="/#"
                                className="btn btn-primary po_buttonColor"
                            >
                                活動詳情
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-xl-3">
                        <div className="news_card  mx-3  d-flex flex-column">
                            <img src="/images/activity/3.activity.jpg" alt="" />
                            <div className="card-body flex-frow-1 mt-3">
                                <h5 className="card_title ">桃米休閒農業區</h5>
                                <h5 className="card_title mb-3">
                                    南投縣 埔里鎮
                                </h5>

                                <p className="card-text">
                                    產、官、學共同合作典範，組織極具整合、發展共識，營運良好；善用生態、農業及觀光資源；體驗活動、遊程持續創新，帶動區域穩定成長、共好。
                                </p>
                            </div>
                            <a
                                href="/#"
                                className="btn btn-primary po_buttonColor"
                            >
                                活動詳情
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-xl-3">
                        <div className="news_card  mx-3  d-flex flex-column">
                            <img src="/images/activity/4.activity.jpg" alt="" />
                            <div className="card-body flex-frow-1 mt-3">
                                <h5 className="card_title">枕頭山休閒農業區</h5>
                                <h5 className="card_title mb-3">
                                    宜蘭縣 員山鄉
                                </h5>
                                <p className="card-text">
                                    全國第一個休閒農業區，生產水果及觀葉植物，紅心芭樂、金棗尤富盛名。組織專業分工，創新特色農產伴手與體驗產品，異業合作展通路。主題遊程「花果野食趣」帶領遊客親近土地，領略農村魅力。
                                </p>
                            </div>
                            <a
                                href="/#"
                                className="btn btn-primary po_buttonColor"
                            >
                                活動詳情
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
