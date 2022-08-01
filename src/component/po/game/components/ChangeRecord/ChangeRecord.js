import React, { useEffect, useState } from 'react';
import { AB_GET_LIST } from '../../config/ajax-path';
import { useLocation } from 'react-router-dom';

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function ChangeRecord() {
    const [data, setData] = useState({});
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    const getPageData = async (event, gotoPage) => {
        if (event) {
            event.preventDefault();
        }
        console.log({ gotoPage });

        const r = await fetch(`${AB_GET_LIST}?page=${gotoPage}`);
        const obj = await r.json();
        console.log(obj);
        setData(obj);
    };

    useEffect(() => {
        getPageData(null, +usp.get('page') || 1);
    }, [location]);

    return (
        <div className="container bggforblue">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">折價編號#</th>
                        <th scope="col">折價券</th>
                        <th scope="col">花費點數</th>
                        <th scope="col">兌換時間</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.rows
                        ? data.rows.map((row) => (
                              <tr key={'mm' + row.change_sid}>
                                  <td>{row.change_point}</td>
                                  <td>{row.change_coupon50}</td>
                                  <td>{row.change_coupon100}</td>
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
