import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipesearch from './Recipesearch/Recipesearch';
import Eachrecipe from './Eachrecipe/Eachrecipe';
import Createrecipe from './Createrecipe/Createrecipe';
import Popup from './Recipesearch/Popup';
import Updaterecipe from './Createrecipe/Updaterecipe';

function RecipeMain() {
    return (
        <>
            
                <Routes>
                    <Route path="/" element={<Recipesearch />} />
                    <Route path="/popup" element={<Popup />} />
                    <Route path="/each" element={<Eachrecipe />} />
                    <Route path="/createrecipe" element={<Createrecipe />} />
                    <Route path="/updaterecipe" element={<Updaterecipe />} />
                    {/* 宸睿 */}
                </Routes>
            
        </>
    );
}

export default RecipeMain;
