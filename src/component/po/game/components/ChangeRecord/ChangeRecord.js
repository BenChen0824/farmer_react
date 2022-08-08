import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { AB_GET_COUPON } from './../../../../../config/ajax-path';
import axios from 'axios';

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function ChangeRecord() {
    const [data, setData] = useState([
        {
            sid: '',
            change_memberid: '',
            change_coupon: '',
            change_memberid: '',
            change_spendpoints: '',
            change_time: '',
        },
    ]);

    //拿資料..

    useEffect(() => {
        fetch(AB_GET_COUPON, {
            method: 'GET',
            headers: { change_memberid: '530' },
        })
            .then((r) => r.json())
            .then((obj) => {
                console.log(obj);
                setData(obj);
            });
    }, []);

    // axios
    //     .get(AB_GET_COUPON, { headers: { change_memberid: '530' } })
    //     .then((result) => {
    //         console.log(result.data);
    //     });

    return (
        <div className="container bggforblue">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <card scope="col">折價券圖片</card>
                        <th scope="col">會員ID</th>
                        <th scope="col">折價券類型</th>
                        <th scope="col">花費點數</th>
                        <th scope="col">兌換時間</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        ? data.map((row) => (
                              <tr key={'mm' + row.sid}>
                                  <td>
                                      <img src={`${row.change_img}`} />
                                  </td>
                                  <td>{row.change_memberid}</td>
                                  <td>{row.change_coupon}</td>
                                  <td>{row.change_spendpoints}</td>
                                  <td>{row.change_time}</td>
                              </tr>
                          ))
                        : null}
                </tbody>
            </table>
            {/* {data && data.totalPages ? (
              <Pagination page={data.page} totalPages={data.totalPages} />
            ) : null} */}

            {console.log({ data })}
        </div>
    );
}
