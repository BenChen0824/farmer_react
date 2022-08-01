import './App.css'
import Nav from './component/Navbar/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Recipesearch from './component/hsieh/Recipesearch/Recipesearch'
import Eachrecipe from './component/hsieh/Eachrecipe/Eachrecipe'
import Creatrecipe from './component/hsieh/Creatrecipe/Creatrecipe'
import Popup from './component/hsieh/Recipesearch/Popup'
import Updaterecipe from './component/hsieh/Creatrecipe/Updaterecipe'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />

          <Route path="/recipe" element={<Recipesearch />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/each" element={<Eachrecipe />} />
          <Route path="/creatrecipe" element={<Creatrecipe />} />
          <Route path="/updaterecipe" element={<Updaterecipe />} />
          {/* 宸睿 */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
