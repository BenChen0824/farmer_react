import React, { useEffect, useState } from 'react';
import ProductItemInfo from '../../component/lil/ProductItemInfo';
import ProductTab from '../../component/lil/ProductTab';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { getProductItem, addToCart } from '../../api/product';

function Product(props) {
    const [data, setData] = useState({});
    let { sid } = useParams();
    const member_info = JSON.parse(localStorage.getItem('auth'));

    const getItem = async (sid) => {
        const item = await getProductItem(sid);
        setData(item);
    };

    useEffect(() => {
        getItem(sid);
    }, [sid]);

    const handleSubmit = async (amount, addCart) => {
        await addToCart({
            product_count: amount,
            product_id: +sid,
            member_id: member_info.customer_id,
        });
    };

    return (
        <>
            <div className={styles.page}>
                <div className={styles.top}></div>
                <div className={styles.container}>
                    <ProductItemInfo
                        data={data}
                        sid={sid}
                        onSubmit={handleSubmit}
                    />
                    <ProductTab />
                </div>
            </div>
        </>
    );
}

export default Product;
//TODO: tab
