import './App.css';
import { BrowserRouter, Route, Routes } from 'react-Routes-dom';

function App() {
    return (
        <>
            <BrowserRouter>
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
                    <Route path="/cart" element={<></>} />
                    {/* 宗佑 */}
                    <Route path="/customized_lunch" element={<></>} />
                    <Route path="/customer_server" element={<></>} />
                    {/* 阿鑫 */}
                    <Route path="/game" element={<></>} />
                    {/* po */}
                    <Route path="/activity" element={<></>} />
                    <Route path="/supplier" element={<></>} />
                    {/* pin */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
