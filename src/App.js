import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Router>
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
                </Router>
            </BrowserRouter>
        </>
    );
}

export default App;
