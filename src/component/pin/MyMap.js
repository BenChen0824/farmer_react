import React, { useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// New Taipei City新北市座標
import './MyMap.css';
// 台灣中心點座標
const defaultCenter = [23.645, 121.064];
const defaultZoom = 8;
const disneyWorldLatLng = [25.0345217, 121.5504348];
const disneyLandLatLng = [25.03101, 121.546947];

function MyMap() {
    const mapRef = useRef();

    /**
     * 台北市
     */
    function handleOnSetView() {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        map.setView(disneyWorldLatLng, 14);
    }

    /**
     * 店家
     */
    function handleOnFlyTo() {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        map.flyTo(disneyLandLatLng, 18, {
            duration: 2,
        });
    }

    return (
        <div className="MyMap">
            <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
                <TileLayer
                    url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
            </Map>
            <div className="sidebar">
                <div className="form-floating">
                    <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                    >
                        <option>請選擇區域</option>
                        <option value="1">台北市</option>
                        <option value="2"></option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <h2>Disney World</h2>
                <h1>台北市</h1>
                <ul>
                    <li>Lat: 28.3852</li>
                    <li>Long: -81.5639</li>
                </ul>
                <p>
                    <button onClick={handleOnSetView}>
                        Set View to Disney World
                    </button>
                </p>
                <h2>資展國際股份有限公司</h2>
                <p>台北市大安區復興南路一段390號2樓</p>
                <ul>
                    <li>電話: 0266316588</li>
                    <li>
                        營業時間:
                        <ul>
                            <li>星期一：8:30–21:30</li>
                            <li>星期二：8:30–21:30</li>
                            <li>星期三：8:30–21:30</li>
                            <li>星期四：8:30–21:30</li>
                            <li>星期五：8:30–21:30</li>
                            <li>星期六：8:30–21:30</li>
                            <li>星期日：8:30–21:30</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <button onClick={handleOnFlyTo}>查詢</button>
                </p>
            </div>
        </div>
    );
}

export default MyMap;
