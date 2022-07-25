import './App.css';
import Nav from './component/Navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Cart from './component/ben/Cart';
import Container from './Container';
import MyMap from './component/pin/MyMap';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Container>
                    <Routes>
                        <Route path="/" />
                        <Route path="/comment" element={<></>} />
                        {/* 慧敏 */}
                        <Route path="/recipe" element={<></>} />
                        {/* 宸睿 */}
                        <Route path="/product" element={<></>} />
                        {/* 昱蓉 */}
                        <Route path="/member" element={<></>} />
                        {/* 柏安 */}
                        <Route path="/cart" element={<Cart />} />
                        {/* 宗佑 */}
                        <Route path="/customized_lunch" element={<></>} />
                        <Route path="/customer_server" element={<></>} />
                        {/* 阿鑫 */}
                        <Route path="/game" element={<></>} />
                        {/* po */}
                        <Route path="/activity" element={<></>} />
                        <Route path="/supplier" element={<MyMap />} />
                        {/* pin */}
                    </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
