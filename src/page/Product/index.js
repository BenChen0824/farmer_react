import React, { useEffect, useState } from 'react';
import ProductItemInfo from '../../component/lil/ProductItemInfo';
import ProductTab from '../../component/lil/ProductTab';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { getProductItem } from '../../api/product';

function Product(props) {
    const [data, setData] = useState({});
    let { sid } = useParams();

    const getItem = async (sid) => {
        const item = await getProductItem(sid);
        setData(item);
    };

    useEffect(() => {
        getItem(sid);
    }, [sid]);

    return (
        <>
            <div className={styles.page}>
                <div className={styles.top}></div>
                <div className={styles.container}>
                    <ProductItemInfo data={data} sid={sid} />
                    <ProductTab />
                </div>
            </div>
        </>
    );
}

export default Product;
//TODO: tab
