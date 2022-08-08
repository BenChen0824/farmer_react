import React, { useEffect, useState, useContext } from 'react';
import ProductItemInfo from '../../component/lil/ProductItemInfo';
import ProductTab from '../../component/lil/ProductTab';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { getProductItem, addToCart } from '../../api/product';
import CartCountContext from '../../component/ben/cart_count/CartCountContext';

function Product(props) {
    const { cartList, setCartList } = useContext(CartCountContext);
    const [data, setData] = useState({});
    let { sid } = useParams();
    const member_info = JSON.parse(localStorage.getItem('auth'));
    // key: `history-${userId}`  value: JSON.parse("['sid1', 'sid3']")
    const userId = member_info.customer_id;

    const getItem = async (sid) => {
        const item = await getProductItem(sid);
        setData(item);
    };

    useEffect(() => {
        getItem(sid);

        // save history
        const lsKey = `histroy${userId}`;
        let oldHistory = localStorage.getItem(lsKey) || '{}';
        oldHistory = JSON.parse(oldHistory);
        const newHistory = { ...oldHistory, [sid]: true };
        localStorage.setItem(lsKey, JSON.stringify(newHistory));
    }, [sid]);

    const handleSubmit = async (amount, addCart) => {
        const newBuyList = await addToCart({
            product_count: amount,
            product_id: +sid,
            member_id: member_info.customer_id,
        });
        console.log(newBuyList.cart);
        setCartList(newBuyList.cart);
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
