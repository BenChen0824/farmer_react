import React from "react";
import "./News.css";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const News = () => {
    return (
        <>
            <h2 className="justify-content-center d-flex mt-5">
                最新消息 / News
            </h2>

            {/* <p>1 / 6</p> */}

            <div className="news_train overflow-hidden  mt-5 mb-5">
                <div className=" news_group d-flex ">
                    <div className="news_card  mx-3">
                        <img src="./images/main_banner_04.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card_title">
                                最高のバーミキュラ体験
                            </h5>
                            <h5 className="">2022-05-14</h5>
                            <p className="card-text">
                                何度も帰ってきたくなる、
                                「最高のバーミキュラ体験」ができる場所。何度も帰ってきたくなる、
                            </p>
                            {/* <a href="/#" className="btn btn-primary ">
                                活動詳情
                            </a> */}
                        </div>
                    </div>

                    <div className="news_card  mx-3">
                        <img src="./images/main_banner_04.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card_title">
                                最高のバーミキュラ体験
                            </h5>
                            <h5 className="">2022-05-14</h5>
                            <p className="card-text">
                                何度も帰ってきたくなる、
                                「最高のバーミキュラ体験」ができる場所。何度も帰ってきたくなる、
                            </p>
                            {/* <a href="/#" className="btn btn-primary ">
                                活動詳情
                            </a> */}
                        </div>
                    </div>

                    <div className="news_card  mx-3">
                        <img src="./images/main_banner_04.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card_title">
                                最高のバーミキュラ体験
                            </h5>
                            <h5 className="">2022-05-14</h5>
                            <p className="card-text">
                                何度も帰ってきたくなる、
                                「最高のバーミキュラ体験」ができる場所。何度も帰ってきたくなる、
                            </p>
                            {/* <a href="/#" className="btn btn-primary ">
                                活動詳情
                            </a> */}
                        </div>
                    </div>

                    <div className="news_card  mx-3">
                        <img src="./images/main_banner_04.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card_title">
                                最高のバーミキュラ体験
                            </h5>
                            <h5 className="">2022-05-14</h5>
                            <p className="card-text">
                                何度も帰ってきたくなる、
                                「最高のバーミキュラ体験」ができる場所。何度も帰ってきたくなる、
                            </p>
                            {/* <a href="/#" className="btn btn-primary ">
                                活動詳情
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="news_arrow_btn">
                <FiArrowLeftCircle size={50} />
                <FiArrowRightCircle size={50} />
            </div>
        </>
    );
};

export default News;
