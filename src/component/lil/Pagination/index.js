import styles from './Pagination.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import qs from 'qs';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useQuery } from './../../../hooks';

function Pagination({ page, totalPage }) {
    const query = useQuery();
    return (
        <>
            <ul className={styles.pagination}>
                <li className={styles.page_item}>
                    <a className="page-link" href="#/">
                        <IoIosArrowBack />
                    </a>
                </li>

                {Array(3)
                    .fill(1)
                    .map((v, i) => {
                        const isActive = page === page + i - 2 ? 'active' : ' ';
                        const num =
                            page === 1
                                ? i + 1
                                : page === totalPage
                                ? i + totalPage - 2
                                : i + page - 1;

                        const q = {
                            ...query,
                            page: num,
                        };

                        const qStr = qs.stringify(q);

                        return (
                            <li
                                className={clsx(
                                    'page-item',
                                    `${isActive}`,
                                    styles.page_num
                                )}
                                key={`page-${num}`}
                            >
                                <Link className="page-link" to={`?${qStr}`}>
                                    {num}
                                </Link>
                            </li>
                        );
                    })}

                <li className={styles.page_item_right}>
                    <a className="page-link" href="#/">
                        <IoIosArrowForward />
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Pagination;
