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
                                    <Route path="/" />
                                    <Route path="/comment" element={<></>} />
                                    {/* 慧敏 */}

                                    <Route path="/recipe" element={<></>} />
                                    {/* 宸睿 */}

                                    <Route
                                        path="/product"
                                        element={<ProductList />}
                                    />
                                    {/* 昱蓉 */}

                                    <Route path="/member" element={<></>} />
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
                                    {/* 宗佑 */}

                                    <Route
                                        path="/customized_lunch"
                                        element={<></>}
                                    />
                                    <Route
                                        path="/customer_server"
                                        element={<></>}
                                    />
                                    {/* 阿鑫 */}

                                    <Route path="/game" element={<></>} />
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
