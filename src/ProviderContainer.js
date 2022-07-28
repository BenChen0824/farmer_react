import CartCountContextProvider from './component/ben/cart_count/CartCountContextProvider';

function ProviderContainer({ children }) {
    return <CartCountContextProvider>{children}</CartCountContextProvider>;
}

export default ProviderContainer;
