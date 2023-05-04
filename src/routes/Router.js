import React from "react";
import { Routes, Route } from 'react-router-dom';
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import Protected from "./Protected";

const Router = () => {
    return <>

        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home"
                element={
                    <Protected>
                        <Home />
                    </Protected>} />
            <Route path="/weather"
                element={
                    <Protected>
                        <Weather />
                    </Protected>} />
            <Route path='/api/session/oath/github' element={<Home />} />
        </Routes>
    </>
}



export default Router