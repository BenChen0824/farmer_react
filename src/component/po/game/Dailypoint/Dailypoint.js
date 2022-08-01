import React, { useEffect, useState } from 'react';
import './dailypoint.css';
import ChangeTab from '../components/ChangeTab';
// import { AB_GET_LIST } from "../../config/ajax-path";
// import { useLocation } from "react-router-dom";

function Dailypoint() {
    const [dataCheck, setDataCheck] = useState(true);
    const [eggStates, setEggStates] = useState([0, 0, 0, 0, 0]);
    const [eggpoints, setEggPoints] = useState(0);
    const [showup, setShowup] = useState();

    // const location = useLocation();
    // const usp = new URLSearchParams(location.search);
    // console.log(location);
    // const getPageData = async (event, gotoPage) => {
    //     if (event) {
    //         event.preventDefault();
    //     }
    //     console.log({ gotoPage });

    //     const r = await fetch(`${AB_GET_LIST}?page=${gotoPage}`);
    //     const obj = await r.json();
    //     console.log(obj);
    //     setData(obj);
    // };

    // useEffect(() => {
    //     getPageData(null, +usp.get('page') || 1);
    // }, [location]);

    const brokenegg = '/dailypoint-img/44434.png';
    const defaultegg = '/dailypoint-img/812921.png';
    console.log(brokenegg);

    const eggClick = (i) => {
        // console.log({i})
        if (dataCheck) {
            const newEggStates = [...eggStates];
            newEggStates[i] = 1;
            setEggStates(newEggStates);
            const pointArray = [5, 10, 15, 20, 25, 30];
            const randomNum = Math.ceil(Math.random() * 6) - 1;
            const getPoint = pointArray[randomNum];
            //TODO 問心得為啥沒數字,超出邊界
            console.log(getPoint);
            setEggPoints(getPoint);
            setDataCheck(false);
        } else {
            // alert("今天領過囉")
            setShowup('今日已完成兌換囉...');
        }
        /*
        console.log(e.target);
        if(eggbroken.dataCheck){
            seteggbroken({...eggbroken,src:brokenegg,dataCheck:false})
        } else {
            alert("今天領過囉")
        }
        */
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
                        <p className="lead mb-0 text-center bg-danger">
                            {showup}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <ChangeTab eggpoints={eggpoints} />
            </div>
        </>
    );
}

export default Dailypoint;
