import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { countries, townships } from './data/townships';
import React, { useState, useRef } from 'react';

import companyData from './data/company.json';

import './MyMap.css';
// import { data } from './Data/company_1'
// import { data } from './Data/company_1'

const skater = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [26, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
});

const disneyLandLatLng = [24.7269191, 121.704412];

function MyMap() {
    const [countryIndex, setCountryIndex] = useState(-1);
    const [townshipIndex, setTownshipIndex] = useState(-1);

    const mapRef = useRef();

    function handleOnFlyTo() {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        map.flyTo(disneyLandLatLng, 15, {
            duration: 2,
        });
    }
    return (
        <>
            <div className="row no-gutter w-100">
                <div className="col-sm-6 col-md-4 col-xl-3 bg-w l_menu">
                    <form className="ml-3 mt-4 mb-3">
                        <div className="  d-flex form-row select px-4 ">
                            <div className="form-group col-md-6  ">
                                <label htmlFor="citys">選擇縣市</label>
                                <select
                                    className="form-control jscounty"
                                    value={countryIndex}
                                    onChange={(e) => {
                                        setCountryIndex(Number(e.target.value));

                                        setTownshipIndex(-1);
                                    }}
                                >
                                    <option value="-1">請選擇縣市</option>
                                    {countries.map((v, i) => {
                                        return (
                                            <option key={i} value={i}>
                                                {v}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="zones">選擇鄉鎮區</label>
                                <select
                                    className="form-control jstown"
                                    value={townshipIndex}
                                    onChange={(e) => {
                                        setTownshipIndex(
                                            Number(e.target.value)
                                        );
                                    }}
                                >
                                    <option value="-1">請選擇區域</option>

                                    {countryIndex > -1 &&
                                        townships[countryIndex].map((v, i) => {
                                            return (
                                                <option key={i} value={i}>
                                                    {v}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                        </div>
                    </form>
                    <section
                        className="content bg-w overflow-auto w-100 px-3 pt-3 mx-2"
                        style={{ height: '100vh' }}
                    >
                        {companyData.features.map((v, i) => {
                            return (
                                // CSS 更動

                                <div
                                    class="pinmycard card mb-3 infocards"
                                    data-cards="241"
                                    key={v.QualityFarmID}
                                >
                                    <h5 class="title m-3">{v.FarmNm_CH}</h5>
                                    <img src={v.Photo} />
                                    <ul class="list-group">
                                        <li class="list-group-item list-group-item-action">
                                            {v.TEL}
                                        </li>
                                        <li class="list-group-item list-group-item-action">
                                            {v.Address_CH}
                                        </li>
                                        <li class="list-group-item list-group-item-action">
                                            {v.Time}
                                        </li>
                                    </ul>
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        onClick={handleOnFlyTo}
                                    >
                                        立即查詢
                                    </button>
                                </div>
                            );
                        })}
                    </section>
                </div>
                <div className="col-sm-6 col-md-8 col-xl-9 px-0">
                    <div>
                        <Map ref={mapRef} center={[23.645, 121.064]} zoom={8}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {companyData.features.map((company) => (
                                <Marker
                                    key={company.QualityFarmID}
                                    position={[
                                        company.Latitude,
                                        company.Longitude,
                                    ]}
                                    icon={skater}
                                >
                                    <Popup
                                        position={[
                                            company.Latitude,
                                            company.Longitude,
                                        ]}
                                    >
                                        <div>
                                            <h4>{company.FarmNm_CH}</h4>
                                            <p>{'電話： ' + company.TEL}</p>
                                            <p>
                                                {'地址： ' + company.Address_CH}
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </Map>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyMap;
