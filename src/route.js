import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/reservas' element={<Reservas/>} />
            </Routes>
        </BrowserRouter>
    );
}
