import './App.css';
import Nav from './component/Navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Container from './Container';
import MyMap from './component/pin/Company_map/MyMap';
import ProviderContainer from './ProviderContainer';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import ProductList from './page/ProductList';
import store from './store';
import Product from './page/Product';
import Member from './component/bob/App';
import FarmerFirstPage from './component/kawa/FarmerFirstPage/FarmerFirstPage';
import CustomerComment from './component/kawa/CustomerComment/CustomerComment';
import Customized_product from './component/xin/Customized_lunch/CustomizedLunch';
import MainChat from './component/xin/Customized_server/Main';
import RecipeMain from './component/hsieh/App';
import GameMain from './component/po/game/gameMain';
import CompanyLogin from './component/pin/Company_Login';
import CartMain from './component/ben/App';
import Activity from './component/pin/Activity/Activity';

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

                                    <Route
                                        path="/cart/*"
                                        element={<CartMain />}
                                    />
                                    {/* 宗佑 */}

                                    <Route
                                        path="/customized_lunch"
                                        element={<Customized_product />}
                                    />
                                    <Route
                                        path="/customer_server"
                                        element={<MainChat />}
                                    />
                                    {/* 阿鑫 */}

                                    <Route
                                        path="/game/*"
                                        element={<GameMain />}
                                    />
                                    {/* po */}

                                    <Route
                                        path="/activity"
                                        element={<Activity />}
                                    />
                                    <Route
                                        path="/supplier"
                                        element={<MyMap />}
                                    />

                                    {/* pin */}
                                </Routes>
                            </Container>
                            <Footer />
                        </ProviderContainer>
                        {/* <Route path="/company" element={<CompanyLogin />} /> */}
                    </BrowserRouter>
                </IconContext.Provider>
            </Provider>
        </>
    );
}

export default App;
