import './App.css'
import Nav from './component/Navbar/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Recipesearch from './component/hsieh/Recipesearch'
import Eachrecipe from './component/hsieh/Eachrecipe'
import Creatrecipe from './component/hsieh/Creatrecipe'
import Popup from './component/hsieh/Popup'
import Updaterecipe from './component/hsieh/Updaterecipe'

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

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
