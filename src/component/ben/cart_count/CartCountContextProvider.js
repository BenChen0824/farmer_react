import CartCountContext from './CartCountContext';
import React, { useContext, useState, useEffect } from 'react';
import { CART_LIST_TOBUY } from './../../../config/ajax-path';

export default function CartCountContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);
    const [render, setrender] = useState(0);

    let data = cartList;
    const getData = () => {
        fetch(`${CART_LIST_TOBUY}`, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((obj) => {
                if (data !== obj) {
                    setCartList(obj);
                    setrender(render + 1);
                }
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <CartCountContext.Provider value={{ cartList, setCartList }}>
            {children}
        </CartCountContext.Provider>
    );
}
