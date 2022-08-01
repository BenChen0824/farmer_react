import { Route, Routes } from 'react-router-dom';

import Recipesearch from './Recipesearch/Recipesearch';
import Eachrecipe from './Eachrecipe/Eachrecipe';
import Creatrecipe from './Creatrecipe/Creatrecipe';
import Popup from './Recipesearch/Popup';
import Updaterecipe from './Creatrecipe/Updaterecipe';

function RecipeMain() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Recipesearch />} />

                <Route path="/popup" element={<Popup />} />
                <Route path="/each" element={<Eachrecipe />} />
                <Route path="/creatrecipe" element={<Creatrecipe />} />
                <Route path="/updaterecipe" element={<Updaterecipe />} />
                {/* 宸睿 */}
            </Routes>
        </>
    );
}

export default RecipeMain;
