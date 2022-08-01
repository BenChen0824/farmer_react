import React from "react";
import "./AboutUs.css";
import MarqueeSliderL from "./MarqueeSliderL/MarqueeSliderL";
import MarqueeSliderR from "./MarqueeSliderR/MarqueeSliderR";

const AboutUs = () => {
    return (
        <>
            <MarqueeSliderL />

            <div className="aboutUs_section mt-5 mb-5">
                <div className="aboutUs_imgwarap_area">
                    <div className="aboutUs_imgwarap">
                        <img
                            src="./images/hydroponics-system-planting-vegetables-herbs-without-using-soil-health.jpg"
                            alt=""
                        />
                    </div>
                    <div className="aboutUs_imgwarap">
                        <img
                            src="./images/portrait-asian-farmer-man-woman-holding-wooden-box-full-fresh-raw-vegetables-organic-farm-concept.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="aboutUs_text_area mt-3">
                    <div className="aboutUs_title mb-5">
                        <h2 className="aboutUs_titleText">純淨無毒、</h2>
                        <h2 className="aboutUs_titleText">在地嚴選</h2>
                    </div>

                    <p>
                        在地小農新鮮現採生鮮宅配 純淨無毒食材小鱻肉在地嚴選
                        提供您多元種類的新鮮蔬果箱宅配、美式賣場專區優惠便宜價格提供您
                        安心、放心、信任的鮮食選擇
                    </p>
                </div>
            </div>

            <MarqueeSliderR className=""/>
        </>
    );
};

export default AboutUs;
