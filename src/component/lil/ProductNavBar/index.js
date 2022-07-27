import { useState } from 'react';
import clsx from 'clsx';
import styles from './ProductNavBar.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks';
import qs from 'qs';

function ProductNavBar({ type }) {
    // const menu = ['新鮮蔬果', '優質肉品', '生鮮水產', '美味餐點']

    const [selected, setSelected] = useState();

    const handleMenuClicked = (id) => {
        setSelected(selected !== id ? id : undefined);
    };
    const query = useQuery();

    const getQuery = (id) => {
        const q = {
            ...query,
            type: id,
        };
        return qs.stringify(q);
    };

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.type}>
                    <h5>新鮮蔬果</h5>
                    <p
                        onClick={() => {
                            handleMenuClicked(0);
                        }}
                    >
                        {selected !== 0 ? (
                            <AiOutlinePlus />
                        ) : (
                            <AiOutlineMinus />
                        )}
                    </p>
                </div>
                <div className={clsx({ [styles.hidden]: selected !== 0 })}>
                    <ul className={styles.productNavUl}>
                        <li>
                            <Link className="page-link" to={`?${getQuery(1)}`}>
                                蔬菜
                            </Link>
                        </li>
                        <li>
                            <Link className="page-link" to={`?${getQuery(2)}`}>
                                水果
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.type}>
                    <h5>優質肉品</h5>
                    <p
                        onClick={() => {
                            handleMenuClicked(1);
                        }}
                    >
                        {selected !== 1 ? (
                            <AiOutlinePlus />
                        ) : (
                            <AiOutlineMinus />
                        )}
                    </p>
                </div>
                <div className={clsx({ [styles.hidden]: selected !== 1 })}>
                    <ul className={styles.productNavUl}>
                        <li>
                            <Link className="page-link" to={`?${getQuery(3)}`}>
                                豬肉
                            </Link>
                        </li>
                        <li>
                            <Link className="page-link" to={`?${getQuery(4)}`}>
                                雞肉
                            </Link>
                        </li>
                        <li>
                            <Link className="page-link" to={`?${getQuery(5)}`}>
                                牛肉
                            </Link>
                        </li>
                        <li>
                            <Link className="page-link" to={`?${getQuery(6)}`}>
                                羊肉
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.type}>
                    <h5>生鮮水產</h5>
                    <p
                        onClick={() => {
                            handleMenuClicked(2);
                        }}
                    >
                        {selected !== 2 ? (
                            <AiOutlinePlus />
                        ) : (
                            <AiOutlineMinus />
                        )}
                    </p>
                </div>
                <div className={clsx({ [styles.hidden]: selected !== 2 })}>
                    <ul className={styles.productNavUl}>
                        <li>
                            <Link className="page-link" to={`?${getQuery(7)}`}>
                                魚類
                            </Link>
                        </li>
                        <li>
                            <Link className="page-link" to={`?${getQuery(8)}`}>
                                甲殼類
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.type}>
                    <h5>美味餐點</h5>
                    <p
                        onClick={() => {
                            handleMenuClicked(3);
                        }}
                    >
                        {selected !== 3 ? (
                            <AiOutlinePlus />
                        ) : (
                            <AiOutlineMinus />
                        )}
                    </p>
                </div>
                <div className={clsx({ [styles.hidden]: selected !== 3 })}>
                    <ul className={styles.productNavUl}>
                        <li>
                            <a href="#/">中式餐點</a>
                        </li>
                        <li>
                            <a href="#/">日式餐點</a>
                        </li>
                        <li>
                            <a href="#/">西式餐點</a>
                        </li>
                        <li>
                            <a href="#/">韓式餐點</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductNavBar;
