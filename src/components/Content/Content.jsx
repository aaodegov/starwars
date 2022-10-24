// import style from './Content.module.css'
import Films from "./Films/Films";
import {People} from "./People/People";

import { Routes, Route } from "react-router-dom";
import Starships from "./Starships/Starships";
import Planets from "./Planets/Planets";
import Species from "./Species/Species";
import Welcome from "./Welcome/Welcome";

export const Content = () => {
return (
    <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/people' element={<People />} />
                <Route path='/films' element={<Films />} />
                <Route path='/starships' element={<Starships />} />
                <Route path='/planets' element={<Planets />} />
                <Route path='/species' element={<Species />} />
    </Routes>
)
}

