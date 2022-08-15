import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./pages/component/Header";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/reservas' element={<Reservas/>} />
            </Routes>
        </BrowserRouter>
    );
}
