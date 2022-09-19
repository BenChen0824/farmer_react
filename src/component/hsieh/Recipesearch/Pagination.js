import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Pagination({ page, totalPages }) {
    const location = useLocation();
    const usp = new URLSearchParams(location.search);

    // 分頁用
    const [pageNow, setPageNow] = useState(1);
    // 目前頁號，預設第一頁

    const [perPage, setPerPage] = useState(12);
    // 每頁多少數量，預設一頁12筆資料

    const [pageTotal, setPageTotal] = useState(0);
    // 目前有多少頁，等伺服器抓完資料才知道多少(didMount時決定)

    // chunk - 依size分成子陣列，ex. chunk([1, 2, 3, 4, 5], 2) -> [[1,2],[3,4],[5]]
    // https://stackoverflow.com/questions/8495687/split-array-into-chunks
    // const chunk = (arr, size) =>
    //     Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    //         arr.slice(i * size, i * size + size)
    //     );

    // setRecipe(response.data)

    //     const pageArray = chunk(response.data, perPage)

    //     if (pageArray.length > 0) {
    //       setPageTotal(pageArray.length)
    //       setUsersDisplay(pageArray)
    //     }
    //   }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#/">
                        第一頁 First Page
                    </a>
                </li>
                {Array(11)
                    // Array 長度11
                    .fill(1)
                    // fill填滿，給1
                    .map((v, i) => {
                        const isActive = page === page + i - 5 ? 'active' : '';

                        return page + i - 5 >= 1 &&
                            page + i - 5 <= totalPages ? (
                            <li
                                className={`page-item ${isActive}`}
                                key={'pagi' + (+page + i - 5)}
                            >
                                <Link
                                    className="page-link"
                                    to={`?page=${page + i - 5}`}
                                >
                                    {page + i - 5}
                                </Link>
                            </li>
                        ) : null;
                    })}

                <li className="page-item">
                    <a className="page-link" href="#/">
                        最後一頁 Last Page
                    </a>
                </li>
            </ul>
        </nav>
    );
}
