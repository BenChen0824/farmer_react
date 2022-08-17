import React, { useEffect, useState, useContext, useMemo } from 'react';
import ProductItemInfo from '../../component/lil/ProductItemInfo';
import ProductTab from '../../component/lil/ProductTab';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import {
    getProductItem,
    addToCart,
    updateCollect,
    getCollected,
} from '../../api/product';
import CartCountContext from '../../component/ben/cart_count/CartCountContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function Product() {
    const { cartList, setCartList } = useContext(CartCountContext);
    const [data, setData] = useState({});
    let { sid } = useParams();
    const member_info = JSON.parse(localStorage.getItem('auth')) || {};
    // key: `history-${userId}`  value: JSON.parse("['sid1', 'sid3']")
    const userId = member_info.customer_id;
    const [saved, setSaved] = useState({});

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
        if (!member_info.customer_id) {
            MySwal.fire({
                title: '請先登入帳號',
                confirmButtonColor: '#82CA35',
            });
            return;
        }
        const newBuyList = await addToCart({
            product_count: amount,
            product_id: +sid,
            member_id: member_info.customer_id,
        });
        console.log(newBuyList.cart);
        setCartList(newBuyList.cart);
    };

    const handleCollect = async (save) => {
        if (!member_info.customer_id) {
            MySwal.fire({
                title: '請先登入帳號',
                confirmButtonColor: '#82CA35',
            });
            return;
        }
        const newCollect = await updateCollect({
            member_id: member_info.customer_id,
            product_id: +sid,
            saved: +save,
        });
        console.log(newCollect);
    };

    const getSaveData = async () => {
        const [data = {}] = await getCollected(userId, sid);
        setSaved(data);
    };

    useEffect(() => {
        getSaveData();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={styles.page}>
                <div className={styles.top}></div>
                <div className={styles.container}>
                    <ProductItemInfo
                        data={data}
                        sid={sid}
                        onSubmit={handleSubmit}
                        onCollect={handleCollect}
                        saved={saved.saved}
                    />
                    <ProductTab data={data} />
                </div>
            </div>
        </>
    );
}

export default Product;
//TODO: tab
