import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import background from "../../public/images/main_banner_05.jpg";
import "./IndexBanner.css"

const IndexBanner = () => {

    return (
        <>
            <div className="indexBanner_imgwrap">
                <img src="./images/main_banner_05.jpg" alt="" />
            </div>

            <div className="indexBanner_text_area">
                <h2 className="pb-3">食在安心。</h2>
                <p>
                    ローズウッド仕上げの⽊製キャビネット
                    <br />
                    オンラインストア限定
                </p>
            </div>
        </>
    );
};

export default IndexBanner;
