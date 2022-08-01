import './App.css';
import Nav from './component/Navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Container from './Container';
import MyMap from './component/pin/MyMap';
import Cart from './component/ben/cart_main/Cart';
import CartPayment from './component/ben/cart_payment/CartPayment';
import CartCreditCard from './component/ben/cart_creditCard/CartCreditCard';
import CartSuccess from './component/ben/cart_success/CartSuccess';
import ProviderContainer from './ProviderContainer';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import ProductList from './page/ProductList';
import store from './store';
import Product from './page/Product';
import CartNonepay from './component/ben/cart_nonepay/CartNonepay';
import Member from './component/bob/App';
import FarmerFirstPage from './component/kawa/FarmerFirstPage/FarmerFirstPage';
import CustomerComment from './component/kawa/CustomerComment/CustomerComment';
import Customized_product from './component/xin/Customized_lunch/CustomizedLunch';
import Main from './component/xin/Customized_server/Main';

import RecipeMain from './component/hsieh/App';
import GameMain from './component/po/game/gameMain';

function App() {
    return (
        <>
            <Provider store={store}>
                <IconContext.Provider value={{ className: 'react_icons' }}>
                    <BrowserRouter>
                        <ProviderContainer>
                            <Nav />
                            <Container>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<FarmerFirstPage />}
                                    />
                                    <Route
                                        path="/comment"
                                        element={<CustomerComment />}
                                    />
                                    {/* 慧敏 */}

                                    <Route
                                        path="/recipe/*"
                                        element={<RecipeMain />}
                                    />

                                    {/* 宸睿 */}

                                    <Route
                                        path="/product"
                                        element={<ProductList />}
                                    />
                                    <Route
                                        path="/product/:sid"
                                        element={<Product />}
                                    />
                                    {/* 昱蓉 */}

                                    <Route
                                        path="/member/*"
                                        element={<Member />}
                                    />
                                    {/* 柏安 */}

                                    <Route path="/cart" element={<Cart />} />

                                    <Route
                                        path="/cart/payment"
                                        element={<CartPayment />}
                                    />
                                    <Route
                                        path="/cart/creditcard"
                                        element={<CartCreditCard />}
                                    />
                                    <Route
                                        path="/cart/success"
                                        element={<CartSuccess />}
                                    />
                                    <Route
                                        path="/cart/nonepay"
                                        element={<CartNonepay />}
                                    />

                                    {/* 宗佑 */}

                                    <Route
                                        path="/customized_lunch"
                                        element={<Customized_product />}
                                    />
                                    <Route
                                        path="/customer_server"
                                        element={<Main />}
                                    />
                                    {/* 阿鑫 */}

                                    <Route
                                        path="/game/*"
                                        element={<GameMain />}
                                    />
                                    {/* po */}

                                    <Route path="/activity" element={<></>} />
                                    <Route
                                        path="/supplier"
                                        element={<MyMap />}
                                    />
                                    {/* pin */}
                                </Routes>
                            </Container>
                            <Footer />
                        </ProviderContainer>
                    </BrowserRouter>
                </IconContext.Provider>
            </Provider>
        </>
    );
}

export default App;
