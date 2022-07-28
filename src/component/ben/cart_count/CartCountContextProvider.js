import CartCountContext, { cartCountOBJ } from './CartCountContext';
import { useState } from 'react';

export default function CartCountContextProvider({ children }) {
    const [cartTotal, setCartTotal] = useState(cartCountOBJ.cartCount);

    return (
        <CartCountContext.Provider value={[cartTotal, setCartTotal]}>
            {children}
        </CartCountContext.Provider>
    );
}
