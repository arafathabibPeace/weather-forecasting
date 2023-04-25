import React, { useContext } from "react";
import { Context } from './Context';
import { Routes, Route } from 'react-router-dom';
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import Protected from "./Protected";

const Layout = () => {
    const isSignedIn = useContext(Context)
    console.log(isSignedIn)
    return <>

        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home"
                element={
                    <Protected isSignedIn={isSignedIn}>
                        <Home />
                    </Protected>} />
            <Route path="/weather"
                element={
                    <Protected isSignedIn={isSignedIn}>
                        <Weather />
                    </Protected>} />
        </Routes>
    </>
}



export default Layout