import CartCountContext from './CartCountContext';
import React, { useContext, useState, useEffect } from 'react';
import { CART_LIST_TOBUY } from './../../../config/ajax-path';
export default function CartCountContextProvider({ children }) {
    // const [cartTotal, setCartTotal] = useState(cartCountOBJ.cartCount);
    const [cartList, setCartList] = useState([]);

    const getData = async () => {
        const r = await fetch(`${CART_LIST_TOBUY}`);
        const obj = await r.json();
        console.log(obj);
        setCartList(obj);
        //setCartTotal(cartTotal.length);
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
