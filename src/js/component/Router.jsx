import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nopage from "./pages/nopage.jsx";
import Home from "./home.jsx";
import Login from "./pages/login.jsx";
import AboutUs from "./pages/aboutus.jsx";


export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<AboutUs />} path="/aboutus" />
                    <Route element={<Nopage />} path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

