import React, { useState } from 'react';
import './dailypoint.css';
import Pages from '../components/Pages';
import axios from 'axios';

function Dailypoint() {
    const [dataCheck, setDataCheck] = useState(true);
    const [eggStates, setEggStates] = useState([0, 0, 0, 0, 0]);
    const [eggpoints, setEggPoints] = useState(0);
    //info頁籤的鉤子
    const [info, setInfo] = useState(0);

    const [showup, setShowup] = useState();

    const pointArray = [100, 150, 100, 200, 300, 500];
    const randomNum = Math.ceil(Math.random() * 6) - 1;

    const brokenegg = '/dailypoint-img/44434.png';
    const defaultegg = '/dailypoint-img/812921.png';
    //for會員
    const loginUser = JSON.parse(localStorage.getItem("auth"))

    const eggClick = (i) => {
        // console.log({i})
        if (dataCheck) {
            const newEggStates = [...eggStates];
            newEggStates[i] = 1;
            setEggStates(newEggStates);

            let getPoint = pointArray[randomNum];
            //console.log(getPoint);
            setEggPoints(getPoint);
            //每日只領一次
            setDataCheck(false);
            //送資料到後端 change_memberid:之後要改成柏安的localstorege
            axios
                .post('http://localhost:3600/game/addpoints', {
                    change_points: getPoint,
                    change_memberid: loginUser.customer_id,
                })
                .then((result) => {
                    console.log(result.data);
                });
        } else {
            // alert("今天領過囉")
            setShowup('今日已完成兌換囉...');
        }
    };

    return (
        <>
            <div className="mb-4 text-white bgg">
                <div className="container pt-5">
                    <div className="text-center pt-5">
                        <img
                            src="/dailypoint-img/1041602.png"
                            alt=""
                            data-check={dataCheck}
                            className="eggyellow mb-4 mt-4"
                        />
                    </div>
                    <div className="text-center">
                        {Array(5)
                            .fill(1)
                            .map((v, i) => {
                                return (
                                    <img
                                        key={i}
                                        src={
                                            eggStates[i]
                                                ? brokenegg
                                                : defaultegg
                                        }
                                        alt=""
                                        data-check={dataCheck.dataCheck}
                                        className="egg"
                                        onClick={(e) => {
                                            eggClick(i);
                                        }}
                                    />
                                );
                            })}
                    </div>
                    <br />
                    <div className="">
                        <h1 className="display-6 text-center">點擊領取</h1>
                    </div>
                    <div className="">
                        <h1 className="display-7 text-center ">
                            目前點數:{eggpoints}
                        </h1>
                    </div>
                    <br />
                    <div className="">
                        <p className="lead mb-0 text-center bg-danger bg-gradient rounded-pill bg-opacity-75">
                            {showup}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Pages
                    eggpoints={eggpoints}
                    info={info}
                    setInfo={setInfo}
                    setEggPoints={setEggPoints}
                />
            </div>
        </>
    );
}

export default Dailypoint;
