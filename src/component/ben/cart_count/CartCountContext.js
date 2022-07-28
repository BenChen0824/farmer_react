import React from 'react';

export const cartCountOBJ = {
    cartCount: 0,
};
const CartCountContext = React.createContext(cartCountOBJ.cartCount);

export default CartCountContext;
